import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "whatsapp", title: "WhatsApp Number", type: "string", description: "Format: 6285777557575 (tanpa + atau spasi)" }),
    defineField({ name: "instagram", title: "Instagram Handle", type: "string", description: "Contoh: martensite.workwear" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "moq", title: "Minimum Order Quantity (pcs)", type: "number" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
