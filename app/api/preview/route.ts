import { NextApiRequest } from "next";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { parse } from "url";

export async function GET(req: NextApiRequest) {
  const { query } = parse(req.url || "", true);
  const { slug } = query;

  draftMode().enable();
  redirect(`/${slug}`);
}
