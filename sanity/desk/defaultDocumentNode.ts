import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";
import { SanityDocument } from "next-sanity";

function getPreviewUrl(doc: SanityDocument) {
  const baseUrl =
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000/api/preview"
      : "https://resume-generator-iota.vercel.app/api/preview";

  return doc?.slug?.current ? `${baseUrl}?slug=${doc.slug.current}` : baseUrl;
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case "resume":
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc),
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
    // return S.document().views([
    //   S.view.form(),
    //   S.view
    //     .component(Iframe)
    //     .options({
    //       url: "http://localhost:3000/api/preview",
    //     })
    //     .title("Preview"),
    // ]);
  }
};
