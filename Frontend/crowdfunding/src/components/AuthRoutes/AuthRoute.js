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

    const authenticated = useQuery(["authenticated"], async () => {
     const option = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
     }
        try {
            const response = await axios.get("http://localhost:8080/auth/authenticated", option);
            return response;
        } catch(error) {
            localStorage.removeItem("accessToken");
            navigate("/login");
        }
    }, {
        refetchInterval: 1000 * 60
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
            onSuccess: (response) => {
                const roles = response.data.authorities.split(",");
                if (path !== "/" && path.startsWith("/admin") && !roles.includes("ROLE_ADMIN")) {
                    alert("접근 권한이 없습니다.");
                    navigate("/");
                }
            },
            enabled: !!accessToken && !!authenticated.data
    });

    useEffect(() => {
        if(!refresh) {
            setRefresh(true);
        }
    }, [refresh]);
    
    

    if(authenticated.isLoading) {
        return <div>로딩중...</div>;
    }

    const permitAll = ["/login", "/signup", "/auth/oauth2/login", "/auth/oauth2/signup", "/auth/oauth2/merge"];

    if(!authenticated.data.data) {
        if(permitAll.includes(path)){
            return element;
        }
    }

    if(permitAll.includes(path)){
        navigate("/");
    }

    return element;
};

export default AuthRoute;