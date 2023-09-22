import { draftMode } from "next/headers";
import PreviewProvider from "@/app/_components/PreviewProvider";
import PreviewResume from "@/app/_components/PreviewResume";
import { resumePathsQuery, resumeQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";
import { ResumeType } from "@/type";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const posts = await client.fetch(resumePathsQuery);

  return posts;
}

export default async function Page({ params }: { params: any }) {
  const isDraftMode = draftMode().isEnabled;
  const post = await sanityFetch<ResumeType>({
    query: resumeQuery,
    params,
  });

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewResume post={post} />
      </PreviewProvider>
    );
  }

  return <PreviewResume post={post} />;
}
