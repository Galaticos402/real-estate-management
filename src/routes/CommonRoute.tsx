import { useRoutes } from "react-router-dom";
import LoginPage from "../pages/login/login";
import CustomerLayout from "../layout/customer-layout";
import CustomerHomePage from "../pages/customer/home/home";
import ProjectDetailPage from "../pages/customer/project-details/project-detail";
import DivisionPage from "../pages/customer/division/division";
import ManageBookingPage from "../pages/customer/manage-booking/manage-booking";
import ContractPage from "../pages/customer/contract/contract";
import PaymentRecordPage from "../pages/customer/paymentRecord/paymentRecord";
import InvestorLayout from "../layout/investor-layout";
import InvestorProjectPage from "../pages/investor/project/investor-project";
import InvestorProjectDetailPage from "../pages/investor/project/detail/investor-project-detail";
import InvestorPropertyPage from "../pages/investor/property/investor-property";
import CreateProjectPage from "../pages/investor/project/create/create-project";
import AgencyLayout from "../layout/agency-layout";
import AgencyDivisionPage from "../pages/agency/division/agency-division";
import AgencyPropertyPage from "../pages/agency/property/agency-property";


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
        {
          path: "/customer/contract",
          element: <ContractPage/>
        },
        {
          path: "/customer/contract/payment-record/:contractId",
          element: <PaymentRecordPage/>
        }
      ],
    },
    {
      path: "",
      element: <InvestorLayout />,
      children: [
        {
          path: '/investor/project',
          element: <InvestorProjectPage/>
        },
        {
          path: '/investor/project-detail/:projectId',
          element: <InvestorProjectDetailPage/>
        },
        {
          path: '/investor/project-detail/division/:divisionId/properties',
          element: <InvestorPropertyPage/>
        },
        {
          path: '/investor/project/create',
          element: <CreateProjectPage/>
        }
      ]
    },
    {
      path: "",
      element: <AgencyLayout />,
      children: [
        {
          path: '/agency/division',
          element: <AgencyDivisionPage/>
        },
        {
          path: '/agency/division/:divisionId',
          element: <AgencyPropertyPage/>
        },
      ]
    }
  ]);

  return element;
};

export default CommonRoute;
