import { groq } from "next-sanity";

// get all resumes
export const resumesQuery = groq`
    *[_type == "resume" && defined(slug.current)]{
        _id, title, slug
    }`;

// get a single resume by its slug
export const resumeQuery = groq`
    *[_type == "resume" && slug.current == $slug][0] {
        title, mainImage, body
    }`;

// get all resume slugs
export const resumePathsQuery = groq`
    *[_type == "resume" && defined(slug.current)][] {
        "params": {"slug": slug.current}
    }`;
