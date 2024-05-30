import React from "react";
import DashboardCard from "./_components/DashboardCard";
import DashboardChart from "./_components/DashboardChart";

const page = () => {
  return (
    <React.Fragment>
      <DashboardCard />
      <DashboardChart />
    </React.Fragment>
  );
}

export default page;
