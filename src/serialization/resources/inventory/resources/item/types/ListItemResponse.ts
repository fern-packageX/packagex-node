/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../../../core";

export const ListItemResponse: core.serialization.ObjectSchema<
    serializers.inventory.ListItemResponse.Raw,
    PackageX.inventory.ListItemResponse
> = core.serialization
    .object({
        data: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../../..")).inventory.Item)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).Response));

export declare namespace ListItemResponse {
    interface Raw extends serializers.Response.Raw {
        data: serializers.inventory.Item.Raw[];
    }
}
