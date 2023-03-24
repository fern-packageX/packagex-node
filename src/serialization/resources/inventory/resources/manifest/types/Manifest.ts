/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { PackagexApi } from "@fern-api/packagex";
import * as core from "../../../../../../core";

export const Manifest: core.serialization.ObjectSchema<
    serializers.inventory.Manifest.Raw,
    PackagexApi.inventory.Manifest
> = core.serialization.object({
    createdAt: core.serialization.property("created_at", core.serialization.number()),
    createdInventory: core.serialization.property(
        "created_inventory",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../../..")).inventory.Inventory))
            .optional()
    ),
    estimatedDelivery: core.serialization.property("estimated_delivery", core.serialization.number().optional()),
    id: core.serialization.lazy(async () => (await import("../../../../..")).inventory.ManifestId),
    inventory: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).inventory.Inventory)
    ),
    locationId: core.serialization.property("location_id", core.serialization.string()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    orderNumber: core.serialization.property("order_number", core.serialization.string().optional()),
    organizationId: core.serialization.property("organization_id", core.serialization.string().optional()),
    trackingNumbers: core.serialization.property(
        "tracking_numbers",
        core.serialization.list(core.serialization.string()).optional()
    ),
    status: core.serialization.lazy(async () => (await import("../../../../..")).inventory.ManifestStatus).optional(),
    updatedAt: core.serialization.property("updated_at", core.serialization.number().optional()),
});

export declare namespace Manifest {
    interface Raw {
        created_at: number;
        created_inventory?: serializers.inventory.Inventory.Raw[] | null;
        estimated_delivery?: number | null;
        id: serializers.inventory.ManifestId.Raw;
        inventory: serializers.inventory.Inventory.Raw[];
        location_id: string;
        metadata?: Record<string, unknown> | null;
        order_number?: string | null;
        organization_id?: string | null;
        tracking_numbers?: string[] | null;
        status?: serializers.inventory.ManifestStatus.Raw | null;
        updated_at?: number | null;
    }
}