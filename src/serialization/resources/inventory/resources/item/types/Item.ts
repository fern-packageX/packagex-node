/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { PackagexApi } from "@fern-api/packagex";
import * as core from "../../../../../../core";

export const Item: core.serialization.ObjectSchema<serializers.inventory.Item.Raw, PackagexApi.inventory.Item> =
    core.serialization.object({
        attributes: core.serialization
            .lazy(async () => (await import("../../../../..")).inventory.InventoryAttributes)
            .optional(),
        color: core.serialization.string().optional(),
        createdAt: core.serialization.property("created_at", core.serialization.number()),
        description: core.serialization.string().optional(),
        gtin: core.serialization.string().optional(),
        harmonizedCode: core.serialization.property("harmonized_code", core.serialization.string().optional()),
        id: core.serialization.lazy(async () => (await import("../../../../..")).inventory.ItemId),
        images: core.serialization.list(core.serialization.string()).optional(),
        levels: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../../..")).inventory.InventoryLevel))
            .optional(),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        name: core.serialization.string(),
        length: core.serialization.number().optional(),
        width: core.serialization.number().optional(),
        height: core.serialization.number().optional(),
        weight: core.serialization.number().optional(),
        packagedLength: core.serialization.property("packaged_length", core.serialization.number().optional()),
        packagedWidth: core.serialization.property("packaged_width", core.serialization.number().optional()),
        packagedHeight: core.serialization.property("packaged_height", core.serialization.number().optional()),
        packagedWeight: core.serialization.property("packaged_weight", core.serialization.number().optional()),
        originCountry: core.serialization.property("origin_country", core.serialization.string().optional()),
        organizationId: core.serialization.property("organization_id", core.serialization.string().optional()),
        status: core.serialization.string().optional(),
        size: core.serialization.string().optional(),
        sku: core.serialization.string().optional(),
        totalVerified: core.serialization.property("total_verified", core.serialization.number().optional()),
        totalDamaged: core.serialization.property("total_damaged", core.serialization.number().optional()),
        totalManifested: core.serialization.property("total_manifested", core.serialization.number().optional()),
        totalReserved: core.serialization.property("total_reserved", core.serialization.number().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.number().optional()),
        value: core.serialization.number().optional(),
    });

export declare namespace Item {
    interface Raw {
        attributes?: serializers.inventory.InventoryAttributes.Raw | null;
        color?: string | null;
        created_at: number;
        description?: string | null;
        gtin?: string | null;
        harmonized_code?: string | null;
        id: serializers.inventory.ItemId.Raw;
        images?: string[] | null;
        levels?: serializers.inventory.InventoryLevel.Raw[] | null;
        metadata?: Record<string, unknown> | null;
        name: string;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        weight?: number | null;
        packaged_length?: number | null;
        packaged_width?: number | null;
        packaged_height?: number | null;
        packaged_weight?: number | null;
        origin_country?: string | null;
        organization_id?: string | null;
        status?: string | null;
        size?: string | null;
        sku?: string | null;
        total_verified?: number | null;
        total_damaged?: number | null;
        total_manifested?: number | null;
        total_reserved?: number | null;
        updated_at?: number | null;
        value?: number | null;
    }
}
