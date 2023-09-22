import { draftMode } from "next/headers";
import PreviewProvider from "@/app/_components/PreviewProvider";
import PreviewResume from "@/app/_components/PreviewResume";
import { resumePathsQuery, resumeQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";
import { ResumeType } from "@/type";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const resumes = await client.fetch(resumePathsQuery);

  return resumes;
}

export default async function Page({ params }: { params: any }) {
  const isDraftMode = draftMode().isEnabled;
  const resume = await sanityFetch<ResumeType>({
    query: resumeQuery,
    params,
  });

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewResume resume={resume} />
      </PreviewProvider>
    );
  }

  return <PreviewResume resume={resume} />;
}
