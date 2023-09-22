import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import resume from "./schemas/resume";
import employee from "./schemas/employee";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [resume, employee, blockContent],
};
