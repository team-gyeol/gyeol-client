import { routePath } from "@router/path";
import { useNavigate } from "react-router-dom";

import Layout from "@shared/components/layout/layout";

import Accuracy from "./components/accuracy/accuracy";
import Labeling from "./components/labeling/labeling";
import Responsibility from "./components/responsibility/responsibility";
import Start from "./components/start/start";
import Team from "./components/team/team";
import { useScrollDarkHeader } from "./hooks/use-scroll-dark-header";

const Home = () => {
  const navigate = useNavigate();
  const {
    darkHeader,
    responsibilityRef,
    labelingRef,
    accuracyRef,
    teamRef,
    footerRef,
  } = useScrollDarkHeader();

  return (
    <>
      <Layout darkHeader={darkHeader} footerRef={footerRef}>
        <Start onClick={() => navigate(routePath.UPLOAD)} />
        <Responsibility ref={responsibilityRef} />
        <Labeling ref={labelingRef} />
        <Accuracy ref={accuracyRef} />
        <Team ref={teamRef} />
      </Layout>
    </>
  );
};

export default Home;
