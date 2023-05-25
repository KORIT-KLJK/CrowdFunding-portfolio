import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { refreshState } from '../../pages/Login/AuthAtom';
import { useNavigate } from 'react-router-dom';


const AuthRoute = ({ path, element }) => {
    const [ refresh, setRefresh ] = useRecoilState(refreshState);
    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    const { data, isLoading } = useQuery(["authenticated"], async () => {
     const option = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
     }
        const response = await axios.get("http://localhost:8080/auth/authenticated", option);
        return response;
    }, {
        enabled: refresh
    });

    const principal = useQuery(["principal"], async () => {
        const option = {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }
         }
        const response = await axios.get("http://localhost:8080/principal", option)
        return response;
        },{
        enabled: !!accessToken
    });

    useEffect(() => {
        if(!refresh) {
            setRefresh(true);
        }
    }, [refresh]);
    
    if (principal.data) {
        const roles = principal.data.data.authorities.split(",");
        if (path.startsWith("/admin") && !roles.includes("ROLE_ADMIN")) {
            alert("접근 권한이 없습니다.");
            return navigate("/");
        }
    }

    if(isLoading) {
        return (<div>로딩중...</div>);
    }

    
    
    if(!isLoading) {
        const permitAll = ["/login", "/signup"];

        if(!data.data) {
            if(permitAll.includes(path)){
                return element;
            }
            return navigate("/login");
        }

        if(permitAll.includes(path)){
            return navigate("/");
        }

    return element;
    }
};

export default AuthRoute;