/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../../../core";

export const ManifestResponse: core.serialization.ObjectSchema<
    serializers.inventory.ManifestResponse.Raw,
    PackageX.inventory.ManifestResponse
> = core.serialization
    .object({
        data: core.serialization.lazyObject(async () => (await import("../../../../..")).inventory.Manifest),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).Response));

export declare namespace ManifestResponse {
    interface Raw extends serializers.Response.Raw {
        data: serializers.inventory.Manifest.Raw;
    }
}
