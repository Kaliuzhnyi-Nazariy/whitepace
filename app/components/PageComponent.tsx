import React from "react";
import Header from "./Header";
import MainComponent from "./Main";
import ProjectManagment from "./ProjectManagment";
import WorkTogether from "./WorkTogether";
import UseAsExtension from "./UseAsExtension";
import Customise from "./Customise";
import Plan from "./PlanChosing/Plan";

const PageComponent = () => {
  return (
    <div className="relative">
      <Header />
      <MainComponent />
      <ProjectManagment />
      <WorkTogether />
      <UseAsExtension />
      <Customise />
      <Plan />
    </div>
  );
};

export default PageComponent;
