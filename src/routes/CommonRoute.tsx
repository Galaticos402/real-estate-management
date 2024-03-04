import { useRoutes } from "react-router-dom";
import LoginPage from "../pages/login/login";
import CustomerLayout from "../layout/customer-layout";
import CustomerHomePage from "../pages/customer/home/home";
import ProjectDetailPage from "../pages/customer/project-details/project-detail";
import DivisionPage from "../pages/customer/division/division";
import ManageBookingPage from "../pages/customer/manage-booking/manage-booking";


const CommonRoute = () => {
  const element = useRoutes([
    {
      path: "",
      element: <LoginPage />,
      index: true,
    },
    {
      path: "",
      element: <CustomerLayout />,
      children: [
        {
          path: "/customer/project",
          element: <CustomerHomePage />,
        },
        {
          path: "/customer/project/:projectId",
          element: <ProjectDetailPage />,
        },
        {
          path: "/customer/division/:divisionId",
          element: <DivisionPage />,
        },
        {
          path: "/customer/booking/",
          element: <ManageBookingPage />,
        },
      ],
    },
  ]);

  return element;
};

export default CommonRoute;
