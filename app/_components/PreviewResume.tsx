"use client";

import { useParams } from "next/navigation";
import { useLiveQuery } from "@sanity/preview-kit";
import { resumeQuery } from "@/sanity/lib/queries";

import ResumeView from "./pdf/ResumeView";
import { ResumeType } from "@/type";

export default function PreviewResume({ resume }: { resume: ResumeType }) {
  const params = useParams();
  const [data] = useLiveQuery(resume, resumeQuery, params);

  return <ResumeView data={data} />;
}
