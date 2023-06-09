/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../../../../core";

export const UpdateManifestStatusRequest: core.serialization.Schema<
    serializers.inventory.UpdateManifestStatusRequest.Raw,
    PackageX.inventory.UpdateManifestStatusRequest
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../../..")).inventory.ManifestStatus),
});

export declare namespace UpdateManifestStatusRequest {
    interface Raw {
        status: serializers.inventory.ManifestStatus.Raw;
    }
}
