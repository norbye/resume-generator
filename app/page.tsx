import { SanityDocument } from "next-sanity";
import Posts from "@/app/_components/Posts";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { draftMode } from "next/headers";
import PreviewProvider from "./_components/PreviewProvider";
import PreviewPosts from "./_components/PreviewPosts";

import Resume from "./_components/pdf/Resume";
import ResumeView from "./_components/pdf/ResumeView";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <ResumeView />
      </PreviewProvider>
    );
  }
  return <ResumeView />;
}
