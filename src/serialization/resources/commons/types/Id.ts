/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackagexApi } from "@fern-api/packagex";
import * as core from "../../../../core";

export const Id: core.serialization.Schema<serializers.Id.Raw, PackagexApi.Id> = core.serialization.string();

export declare namespace Id {
    type Raw = string;
}