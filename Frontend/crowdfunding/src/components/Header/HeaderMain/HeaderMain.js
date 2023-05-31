/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../../pages/Login/AuthAtom';
import logo from "../../../assets/images/logo.png";
import { useQuery } from 'react-query';
import axios from 'axios';
const mainHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 99;
    margin: 0 auto;
    border-bottom: 2px solid #e1e1e1;
    background-color: #fff;
    width: 100%;
    height: 70px;
`;

const subHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1140px;
    height: 70px;
`;

const headerLeft = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const headerImgLogo = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    width: 65px;
    height: 65px;
`;

const headerMenuList = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0px 20px;
`;

const menuLink = css`
    margin: 0px 10px;
    padding: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #000;
`;

const headerRight = css`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 300px;
`;

const fundingAndGivingRegisterButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 5px 10px;
    height: 30px;
    color: #333;
    font-size: 12px;
    background-color: white;
    cursor: pointer;
`;

const authButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 5px 10px;
    height: 30px;
    color: #333;
    font-size: 12px;
    background-color: white;
    cursor: pointer;
`;

const searchButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 5px 10px;
    height: 30px;
    color: #333;
    font-size: 12px;
    background-color: white;
    cursor: pointer;
`;

const link = css`
    color: #333;
`;

const HeaderMain = () => {
    const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    const [ role, setRole ] = useState();

    const principalUser = useQuery(["principalUser"], async () => {
        const option = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
        const response = await axios.get("http://localhost:8080/principal", option)
        setRole(response.data.authorities.split(",").includes("ROLE_ADMIN"));
        return response;
    },{
        enabled: !!accessToken
    })

    useEffect(() => {
        if (accessToken) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      }, []);

    const loginNavigateHandle = () => {
        if (authenticated) {
            setAuthenticated(false);
            setRole(null);
            localStorage.removeItem('accessToken');
            navigate('/login');
        }else {
            navigate('/login');
        }
    }

    const registerHandle = () => {
        navigate("/admin/register/page");
    }

    const headerLogoHandle = () => {
        navigate("/");
    }

    return (
        <div css={mainHeader}>
            <div css={subHeader}>
                <div css={headerLeft}>
                    <div><img css={headerImgLogo} onClick={headerLogoHandle} src="https://avatars.githubusercontent.com/u/132314800?s=200&v=4"></img></div>
                    <div css={headerMenuList}>
                        <Link css={menuLink} to="/giving">기부</Link>
                        <Link css={menuLink} to="/funding">펀딩</Link>
                    </div>
                </div>
                <div css={headerRight}>
                    {role ? 
                    <button css={fundingAndGivingRegisterButton} onClick={registerHandle}>기부 및 펀딩 등록</button>
                    : ""}
                    <button css={authButton} onClick={loginNavigateHandle}>{authenticated ? "로그아웃" : "로그인"}</button>
                    <button css={searchButton}><Link css={link} to="/search">검색</Link></button>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;