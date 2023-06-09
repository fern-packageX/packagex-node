/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../../../../core";

export const CreateParcelRequest: core.serialization.Schema<
    serializers.inventory.CreateParcelRequest.Raw,
    PackageX.inventory.CreateParcelRequest
> = core.serialization.object({
    parcel: core.serialization.lazyObject(async () => (await import("../../../../../..")).inventory.Parcel),
});

export declare namespace CreateParcelRequest {
    interface Raw {
        parcel: serializers.inventory.Parcel.Raw;
    }
}
