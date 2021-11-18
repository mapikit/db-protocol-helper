// We should provide:
// - Function to check schema diffs (should be based on their IDs)
//     > Receives 2 lists of Schemas, and outputs the schema diffs between them;
// - Function to force the user to check a schema update:
//     > Receives in a SchemaDiff and synchronously prompts in the user to confirm updates;
// - Abstract class providing the types and required interfaces
// - Function to get the class and its descriptor file (db-protocol.json) from a given path;
// - Function to validate the descriptor file;
// - Function to validate if the exported class correctly implements the class and its described extensions;
//
// The descriptor file should have:
// - Name
// - Version
// - Description
// - Protocol entrypoint (file where the class is exported)
// - MainClass (name of the Exported class constructor)
