"use client";

import { ResumeType } from "@/type";
import dynamic from "next/dynamic";

const ResumePDF = dynamic(() => import("./ResumePDF"), {
  ssr: false,
});

const ResumeView = ({ data }: { data: ResumeType }) => {
  return <ResumePDF data={data} />;
};

export default ResumeView;
