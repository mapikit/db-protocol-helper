import { diff } from "deep-diff";
import { ObjectDefinition } from "@meta-system/object-definition";

type SchemasType = { id : string, name : string, format : ObjectDefinition };

export class CheckDiffs {
  public checkForChanges (previous : Array<SchemasType>, current : Array<SchemasType>) : Record<string, object> {
    const diffs : Record<string, object> = {};
    previous.forEach(schema => {
      const schemaId = schema.id;
      const currentVersion = current.find(currentSchema => currentSchema.id === schemaId);
      diffs[schema.id] = diff(schema, currentVersion);
    });
    return diffs;
  }
}
