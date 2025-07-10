import React from "react";
import Header from "./Header";
import MainComponent from "./Main";
import ProjectManagment from "./ProjectManagment";
import WorkTogether from "./WorkTogether";
import UseAsExtension from "./UseAsExtension";
import Customise from "./Customise";
import Plan from "./PlanChosing/Plan";
import WorkEverywhere from "./WorkEverywhere";
import Data from "./Data";
import Sponsors from "./Sponsors";
import CllientsSays from "./Reviews/CllientsSays";
import WorkWith from "./WorkWith";
import Footer from "./Footer";
import TryComponent from "./Try";

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
      <WorkEverywhere />
      <Data />
      <Sponsors />
      <WorkWith />
      <CllientsSays />
      <TryComponent />
      <Footer />
    </div>
  );
};

export default PageComponent;
