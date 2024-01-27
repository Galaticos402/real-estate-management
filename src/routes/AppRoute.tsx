import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import CommonRoute from "./CommonRoute";

const AppRoute = () => {
    // const navigate = useNavigate();
  
    useEffect(() => {
    //   if (!isTokenValid()) {
    //     sessionStorage.clear();
    //     localStorage.clear();
    //     navigate("/");
    //   }
    }, []);
    return <CommonRoute />;
};

export default AppRoute