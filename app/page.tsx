import { sanityFetch } from "@/sanity/lib/sanityFetch";
import Resumes from "./_components/Resumes";

import { ResumeType } from "@/type";
import { resumesQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const resumes = await sanityFetch<ResumeType[]>({ query: resumesQuery });

  return (
    <div>
      <Resumes resumes={resumes} />
    </div>
  );
}
