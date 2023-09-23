import { sanityFetch } from "@/sanity/lib/sanityFetch";
import Resumes from "./_components/Resumes";

import { ResumeType } from "@/type";
import { resumesQuery } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function Home() {
  const resumes = await sanityFetch<ResumeType[]>({ query: resumesQuery });

  return (
    <div>
      <header className="h-24 flex items-center flex-row-reverse">
        <Image
          src="https://cdn.sanity.io/images/c34lfbiv/production/03c7f2f63a5ffd72468e7184d244e09464143cd7-2108x452.png"
          alt="logo"
          className="float-right m-0 mr-8 rounded-lg "
          width={300}
          height={300}
        />
      </header>
      <Resumes resumes={resumes} />
    </div>
  );
}
