import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { client } from "./client";
import { service } from "./service";

export const schemaTypes: SchemaTypeDefinition[] = [siteSettings, client, service];
