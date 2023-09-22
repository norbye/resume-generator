import { defineField, defineType } from "sanity";

export default defineType({
  name: "resume",
  title: "CV",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "employee",
      title: "Konsulent",
      type: "reference",
      to: { type: "employee" },
    }),
    defineField({
      name: "background",
      title: "Bakgrunn",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Tittel",
              type: "text",
            },
            {
              name: "from",
              title: "Fra",
              type: "text",
            },
            {
              name: "to",
              title: "Til",
              type: "text",
            },
            {
              name: "institution",
              title: "Institusjon",
              type: "text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "engagement",
      title: "Engasjement",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Tittel",
              type: "text",
            },
            {
              name: "from",
              title: "Fra",
              type: "text",
            },
            {
              name: "to",
              title: "Til",
              type: "text",
            },
            {
              name: "organisation",
              title: "Organisasjon",
              type: "text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "expertise",
      title: "Ekspertise",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Type",
              type: "string",
            },
            {
              name: "from",
              title: "prosjekter",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "experience",
      title: "Erfaring",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "employer",
              title: "Arbeidsgiver",
              type: "string",
            },
            {
              name: "title",
              title: "Stillingstittel",
              type: "text",
            },
            {
              name: "from",
              title: "Fra",
              type: "text",
            },
            {
              name: "to",
              title: "Til",
              type: "text",
            },
            {
              name: "description",
              title: "Beskrivelse (hva gjorde du?)",
              type: "text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],

  preview: {
    select: {
      title: "employee.name",
      employee: "employee.name",
      media: "employee.image",
    },
    prepare(selection) {
      const { employee } = selection;
      return { ...selection, subtitle: employee && ` ${employee}` };
    },
  },
});
