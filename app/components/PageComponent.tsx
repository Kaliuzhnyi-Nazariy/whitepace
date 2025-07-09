import React from "react";
import Header from "./Header";
import MainComponent from "./Main";
import ProjectManagment from "./ProjectManagment";

const PageComponent = () => {
  return (
    <div className="relative">
      <Header />
      <MainComponent />
      <ProjectManagment />
    </div>
  );
};

export default PageComponent;
