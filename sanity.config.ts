import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

const singletons = ["siteSettings"];

export default defineConfig({
  name: "default",
  title: "Martensite Workwear",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletons.includes(schemaType)),
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            S.documentTypeListItem("client").title("Portfolio Clients"),
            S.documentTypeListItem("service").title("Services"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
