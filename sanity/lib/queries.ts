import { groq } from "next-sanity";

// get all posts
export const postsQuery = groq`
    *[_type == "post" && defined(slug.current)]{
        _id, title, slug
    }`;

// get a single post by its slug
export const postQuery = groq`
    *[_type == "post" && slug.current == $slug][0] {
        title, mainImage, body
    }`;

// get all post slugs
export const postPathsQuery = groq`
    *[_type == "post" && defined(slug.current)][] {
        "params": {"slug": slug.current}
    }`;
