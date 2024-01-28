import { useRoutes } from "react-router-dom";
import LoginPage from "../pages/login/login";
import CustomerLayout from "../layout/customer-layout";
import CustomerHomePage from "../pages/customer/home/home";
import ProjectDetailPage from "../pages/customer/project-details/project-detail";

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
                path: '/customer/project',
                element: <CustomerHomePage/>
            },
            {
                path: '/customer/project/:projectId',
                element: <ProjectDetailPage/>
            }
        ]
      }
    ]);
  
    return element;
  };
  
export default CommonRoute;