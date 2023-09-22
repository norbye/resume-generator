"use client";

import dynamic from "next/dynamic";

const ResumePDF = dynamic(() => import("./Resume"), {
  ssr: false,
});

const ResumeView = () => {
  return <ResumePDF />;
};

export default ResumeView;
