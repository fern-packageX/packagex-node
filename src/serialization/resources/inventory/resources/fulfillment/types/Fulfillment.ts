/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { PackagexApi } from "@fern-api/packagex";
import * as core from "../../../../../../core";

export const Fulfillment: core.serialization.ObjectSchema<
    serializers.inventory.Fulfillment.Raw,
    PackagexApi.inventory.Fulfillment
> = core.serialization.object({
    cancelReason: core.serialization.property("cancel_reason", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.number()),
    completeBy: core.serialization.property("complete_by", core.serialization.number().optional()),
    id: core.serialization.lazy(async () => (await import("../../../../..")).inventory.FulfillmentId),
    inventory: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).inventory.Inventory)
    ),
    labelUrl: core.serialization.property("label_url", core.serialization.string().optional()),
    locationId: core.serialization.property("location_id", core.serialization.string()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    orderNumber: core.serialization.property("order_number", core.serialization.string().optional()),
    organizationId: core.serialization.property("organization_id", core.serialization.string().optional()),
    packagingRecommendations: core.serialization.property(
        "packaging_recommendations",
        core.serialization.list(core.serialization.string()).optional()
    ),
    packingSlipUrl: core.serialization.property(
        "packing_slip_url",
        core.serialization.list(core.serialization.string()).optional()
    ),
    parcels: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../../../..")).inventory.Parcel))
        .optional(),
    ratesGeneratedAt: core.serialization.property("rates_generated_at", core.serialization.number().optional()),
    recipient: core.serialization.lazyObject(async () => (await import("../../../../..")).Recipient).optional(),
    sender: core.serialization.lazyObject(async () => (await import("../../../../..")).Sender).optional(),
    shipmentId: core.serialization.property("shipment_id", core.serialization.string().optional()),
    shipmentRateType: core.serialization.property(
        "shipment_rate_type",
        core.serialization.lazy(async () => (await import("../../../../..")).inventory.ShipmentRateType).optional()
    ),
    status: core.serialization
        .lazy(async () => (await import("../../../../..")).inventory.FulfillmentStatus)
        .optional(),
    updatedAt: core.serialization.property("updated_at", core.serialization.number().optional()),
});

export declare namespace Fulfillment {
    interface Raw {
        cancel_reason?: string | null;
        created_at: number;
        complete_by?: number | null;
        id: serializers.inventory.FulfillmentId.Raw;
        inventory: serializers.inventory.Inventory.Raw[];
        label_url?: string | null;
        location_id: string;
        metadata?: Record<string, unknown> | null;
        order_number?: string | null;
        organization_id?: string | null;
        packaging_recommendations?: string[] | null;
        packing_slip_url?: string[] | null;
        parcels?: serializers.inventory.Parcel.Raw[] | null;
        rates_generated_at?: number | null;
        recipient?: serializers.Recipient.Raw | null;
        sender?: serializers.Sender.Raw | null;
        shipment_id?: string | null;
        shipment_rate_type?: serializers.inventory.ShipmentRateType.Raw | null;
        status?: serializers.inventory.FulfillmentStatus.Raw | null;
        updated_at?: number | null;
    }
}