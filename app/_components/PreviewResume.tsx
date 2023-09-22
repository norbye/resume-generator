"use client";

import { useParams } from "next/navigation";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { resumeQuery } from "@/sanity/lib/queries";

import ResumeView from "./pdf/ResumeView";
import { ResumeType } from "@/type";

export default function PreviewResume({ post }: { post: ResumeType }) {
  const params = useParams();
  const [data] = useLiveQuery(post, resumeQuery, params);

  return <ResumeView data={data} />;
}
