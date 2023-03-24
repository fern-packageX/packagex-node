/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { PackagexApi } from "@fern-api/packagex";
import * as core from "../../../../../../core";

export const ManifestId: core.serialization.Schema<
    serializers.inventory.ManifestId.Raw,
    PackagexApi.inventory.ManifestId
> = core.serialization.string();

export declare namespace ManifestId {
    type Raw = string;
}
