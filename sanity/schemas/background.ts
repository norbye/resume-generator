import { defineField, defineType } from "sanity";

export default defineType({
  name: "background",
  title: "Bakgrunn",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tittel",
      type: "text",
    }),
    defineField({
      name: "from",
      title: "Fra",
      type: "text",
    }),
    defineField({
      name: "to",
      title: "Til",
      type: "text",
    }),
    defineField({
      name: "institution",
      title: "Institusjon",
      type: "text",
    }),
  ],
});
