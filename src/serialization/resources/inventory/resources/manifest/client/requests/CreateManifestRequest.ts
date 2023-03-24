/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import { PackagexApi } from "@fern-api/packagex";
import * as core from "../../../../../../../core";

export const CreateManifestRequest: core.serialization.Schema<
    serializers.inventory.CreateManifestRequest.Raw,
    PackagexApi.inventory.CreateManifestRequest
> = core.serialization.object({
    locationId: core.serialization.property("location_id", core.serialization.string()),
    inventory: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../../..")).inventory.Inventory)
    ),
});

export declare namespace CreateManifestRequest {
    interface Raw {
        location_id: string;
        inventory: serializers.inventory.Inventory.Raw[];
    }
}
