import { useRoutes } from "react-router-dom";
import LoginPage from "../pages/login/login";
import CustomerLayout from "../layout/customer-layout";
import CustomerHomePage from "../pages/customer/home/home";

const CommonRoute = () => {
    const element = useRoutes([
      {
        path: "",
        element: <LoginPage />,
        index: true,
      },
      {
        path: "",
        element: <CustomerLayout/>,
        children: [
            {
                path: '/customer',
                element: <CustomerHomePage/>
            }
        ]
      }
    ]);
  
    return element;
  };
  
export default CommonRoute;