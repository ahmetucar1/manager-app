import React, { useState }  from "react";
import Navbar from "../Navbar";
import Table from "../Table";
import BarChart from "../BarChart";

const Main = () => {
  const [selectedFields] = useState(["Avatar", "Name", "Email", "Gender", "Country"]);

    return (
        <div className="flex h-screen">
        <Navbar></Navbar>
        <BarChart></BarChart>
        <Table selectedFields={selectedFields}></Table>
    </div>
);
};

export default Main;
