import React from "react";
import Header from "../components/header.component";
import { Outlet } from "react-router-dom";
import classes from './customer-layout.module.css'

const CustomerLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerLayout;
