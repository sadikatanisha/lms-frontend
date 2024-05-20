"use client";

import React from "react";
import Heading from "../../utils/Heading";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import { AdminProtected } from "../../../app/hooks/adminProtected";
import AllUsers from "../../../app/components/Dashboard/Users/AllUsers";

type Props = {};

const Page = (props: Props) => {
  return (
    <AdminProtected>
      <div>
        <Heading
          title={"Creati - Dashboard"}
          description="dashboard"
          keywords="dashboard"
        />
        <div className="flex h-screen">
          <div className="w-1/4 h-full">
            <DashboardSidebar />
          </div>
          <div className="w-3/4 h-full p-6">
            <AllUsers />
          </div>
        </div>
      </div>
    </AdminProtected>
  );
};

export default Page;
