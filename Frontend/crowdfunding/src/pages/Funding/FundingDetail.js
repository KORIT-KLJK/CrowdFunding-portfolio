import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const FundingDetail = () => {
    const { pageId } = useParams();
    const fundingDetail = useQuery(["fundingDetail"], async () => {
        return await axios.get(`http://localhost:8080/fundingdetail/${pageId}`)
    });

    if(fundingDetail.isLoading) {
        return <></>
    }

    console.log(fundingDetail.data.data);

    return (
        <div>
            <header>
                <img src={fundingDetail.data.data.imgUrl} alt={fundingDetail.data.data.fundingTitle} />
                펀딩 번호이자, 페이지 번호: {fundingDetail.data.data.fundingId},
                펀딩 제목: {fundingDetail.data.data.fundingTitle},
                펀딩 책임자: {fundingDetail.data.data.username},
                펀딩 종료일자까지 남은 기간: {fundingDetail.data.data.nearDeadline},
                목표 금액: {fundingDetail.data.data.goalTotal},
                현재 펀딩 총 금액: {fundingDetail.data.data.totalRewardPrice},
                목표 금액에 대한 현재 금액 퍼센트: {fundingDetail.data.data.joinPercent}%,
                리워드 들고오기
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </div>
    );
};

export default FundingDetail;