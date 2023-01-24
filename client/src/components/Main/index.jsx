import React, { useState }  from "react";
import Navbar from "../Navbar";
import Table from "../Table";

const Main = () => {
  const [selectedFields] = useState(["Avatar", "Name", "Email", "Gender", "Country"]);


    return (
        <div className="flex h-screen">
        <Navbar></Navbar>
        <Table selectedFields={selectedFields}></Table>
    </div>
);
};

export default Main;
