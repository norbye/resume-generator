import Link from "next/link";

import { ResumeType } from "@/type";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export default function Resumes({ resumes = [] }: { resumes: ResumeType[] }) {
  const title =
    resumes.length === 0
      ? `Ingen av våre konsulenter har postet CV-ene sine`
      : `Her kan du se CV-en til ${resumes.length} av våre flinke konsulenter`;

  return (
    <main className="max-w-5xl px-12 mt-24 bg-white container mx-auto grid grid-cols-1 ">
      <h1 className="mx-auto text-2xl p-4 font-bold mb-4">{title}</h1>
      <span className="mx-auto mb-4 flex flex-row">
        <p>Vil du heller opprette en ny CV? </p>
        <Link href={"/studio"} className="ml-1 italic text-[#df0016]">
          Klikk her.
        </Link>
      </span>

      {resumes.map(
        (resume) =>
          resume.employee?.image && (
            <Link
              key={resume.title}
              href={resume.slug.current}
              className="p-4 hover:bg-gray-50 border-t-[1px] border-[#333333] mb-4"
            >
              {/* <Image
                className="float-left m-0 w-1/3 mr-4 rounded-lg"
                src={builder.image(post.mainImage).width(300).height(300).url()}
                width={300}
                height={300}
                alt={post?.mainImage?.alt}
              /> */}
              <Image
                src={builder
                  .image(resume.employee.image)
                  .height(400)
                  .width(400)
                  .url()}
                alt=""
                width={400}
                height={400}
                className="h-24 w-24 float-left m-0 mr-4 rounded-[50%]"
              />
              <h2 className="italic">{resume.employee.position}</h2>
              <h1 className="text-2xl font-medium">{resume.employee.name}</h1>
              <p className="text-sm line-clamp-2">{resume.employee.bio}</p>
            </Link>
          )
      )}
    </main>
  );
}
