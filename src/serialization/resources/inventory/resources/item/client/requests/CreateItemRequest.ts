/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../../../../core";

export const CreateItemRequest: core.serialization.Schema<
    serializers.inventory.CreateItemRequest.Raw,
    PackageX.inventory.CreateItemRequest
> = core.serialization.object({
    name: core.serialization.string(),
    sku: core.serialization.string().optional(),
    gtin: core.serialization.string().optional(),
    packagedLength: core.serialization.property("packaged_length", core.serialization.number().optional()),
    packagedWidth: core.serialization.property("packaged_width", core.serialization.number().optional()),
    packagedHeight: core.serialization.property("packaged_height", core.serialization.number().optional()),
    packagedWeight: core.serialization.property("packaged_weight", core.serialization.number().optional()),
});

export declare namespace CreateItemRequest {
    interface Raw {
        name: string;
        sku?: string | null;
        gtin?: string | null;
        packaged_length?: number | null;
        packaged_width?: number | null;
        packaged_height?: number | null;
        packaged_weight?: number | null;
    }
}
