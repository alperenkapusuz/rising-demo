import React from "react";
import DashboardCard from "./_components/DashboardCard";
import DashboardChart from "./_components/DashboardChart";
import DashboardTable from "./_components/DashboardTable";

const page = () => {
  return (
    <React.Fragment>
      <DashboardCard />
      <DashboardChart />
      <DashboardTable />
    </React.Fragment>
  );
}

export default page;
