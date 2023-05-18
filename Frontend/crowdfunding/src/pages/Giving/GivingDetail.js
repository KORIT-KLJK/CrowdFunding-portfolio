import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const GivingDetail = () => {
    const { givingId } = useParams();
    const givingDetail = useQuery(["givingDetail"], async () => {
        return await axios.get(`http://localhost:8080/givingDetail/${givingId}`)
    });

    if(givingDetail.isLoading){
        return <></>
    }

    console.log(givingDetail.data.data);

    return (
        <div>
            <header>
                <img src={givingDetail.data.data.imgUrl} alt={givingDetail.data.data.givingTitle} />
            </header>
        </div>
    );
};

export default GivingDetail;