import React from "react";
import { Wrapper } from "../assets/wrappers/MainPage";
import Hero from "../components/Hero";
import Suggestions from "../components/Suggestions";
import CustomerArea from "../components/CustomerArea";
import OurWork from "../components/OurWork";
import WorkList from "../components/WorkList";
import PartnersRelations from "../components/PartnersRelations";
import Callback from "../components/Callback";
import Assesstments from "../components/Assesstments";
import Resources from "../components/Resources";
import Faq from "../components/Faq";
import Opportinities from "../components/Opportinities";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <Wrapper>
      <Hero />
      <Suggestions />
      <CustomerArea />
      <OurWork />
      <WorkList />
      <PartnersRelations />
      <Callback />
      <Assesstments />
      <Resources />
      <Faq />
      <Opportinities />
      <Footer />
    </Wrapper>
  );
};
export default MainPage;
