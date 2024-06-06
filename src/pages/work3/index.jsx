/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import WorkFourColumn from "../../components/Work-Four-Column";

const Work3 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        center
        title={{
          first: "Архитектур бол дүрслэх урлаг юм,",
          second: "мөн барилга нь өөрсдөө ярьдаг",
        }}
        // title = "text",
        content="Архитектур гэдэг нь барилга байгууламжийг төлөвлөх, зохион бүтээх, барих урлаг, шинжлэх ухаан юм.."
      />
      <WorkFourColumn />
    </MainLayout>
  );
};

export default Work3;
