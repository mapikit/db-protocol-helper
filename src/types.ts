import { BuiltMetaPackage, MetaPackage } from "meta-function-helper";

export interface DbProtocolDefinition {
  protocolName : string;
  description : string;
  version : string;
  entrypoint : string;
  className : string;
  packageDetails ?: MetaPackage;
};

export interface BuiltDbProtocolDefinition {
  protocolName : string;
  description : string;
  version : string;
  entrypoint : string;
  className : string;
  packageDetails ?: BuiltMetaPackage;
}
