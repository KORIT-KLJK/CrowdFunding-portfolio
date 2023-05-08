/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import DaumPostcode from "react-daum-postcode";

export const ModalContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 1000px;
  background-color: #00000077;
`;

export const buttonHeader = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: auto;
  width: 600px;
  height: 100px;
`;

export const backButton = css`
  border: none;
  background-color: #ffffff00;
  font-size: 40px;
  cursor: pointer;
`;

export const mainAddress = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;


const PopupPostCode = (props) => {

    const handlePostCode = (data) => {
      const { zonecode, address, buildingName, bname, addressType } = data;
      props.setAddress({
        zonecode,
        address,
        buildingName,
        bname,
        addressType,
      });
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        props.onClose()
    }
 
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "10%",
        width: "600px",
        height: "600px",
        padding: "7px",
      };
 
    return(
        <div css={ModalContainer}>
          <header css={buttonHeader}>
            <button css={backButton} onClick={() => {props.onClose()}}>×</button>
          </header>
          <main css={mainAddress}>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
          </main>
        </div>
    )
}
 
export default PopupPostCode;