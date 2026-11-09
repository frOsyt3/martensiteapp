import { defineArrayMember, defineField, defineType } from "sanity";

export const client = defineType({
  name: "client",
  title: "Portfolio Client",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Brand Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string", description: "Contoh: Contemporary Casual" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "logo", title: "Logo", type: "image", validation: (r) => r.required() }),
    defineField({
      name: "gallery",
      title: "Product Photos",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "galleryItem",
          fields: [
            defineField({ name: "image", title: "Image", type: "image", validation: (r) => r.required() }),
            defineField({ name: "description", title: "Description", type: "string" }),
          ],
          preview: { select: { title: "description", media: "image" } },
        }),
      ],
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "category", media: "logo" } },
});
