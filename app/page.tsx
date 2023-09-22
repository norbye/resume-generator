import { SanityDocument } from "next-sanity";
import Posts from "@/app/_components/Posts";
import { resumesQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { draftMode } from "next/headers";
import PreviewProvider from "./_components/PreviewProvider";

import ResumeView from "./_components/pdf/ResumeView";

export default async function Home() {
  // const posts = await sanityFetch<SanityDocument[]>({ query: resumesQuery });
  // const isDraftMode = draftMode().isEnabled;

  // if (isDraftMode && token) {
  //   return (
  //     <PreviewProvider token={token}>
  //       <ResumeView data={} />
  //     </PreviewProvider>
  //   );
  // }
  return <div>Main</div>;
}
