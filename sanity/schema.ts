import { type SchemaTypeDefinition } from "sanity";
import { post } from "./schemas/post";
import { author } from "./schemas/author";
import { category } from "./schemas/category";
import { blockContent } from "./schemas/blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent],
};
