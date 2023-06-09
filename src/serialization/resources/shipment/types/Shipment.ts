/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../core";

export const Shipment: core.serialization.ObjectSchema<serializers.Shipment.Raw, PackageX.Shipment> =
    core.serialization.object({
        amount: core.serialization.number().optional(),
        billedAmount: core.serialization.property("billed_amount", core.serialization.number().optional()),
        provider: core.serialization.lazyObject(async () => (await import("../../..")).Provider).optional(),
        createdAt: core.serialization.property("created_at", core.serialization.number()),
        updatedAt: core.serialization.property("updated_at", core.serialization.number()),
        currency: core.serialization.lazy(async () => (await import("../../..")).Currency),
        estimatedDelivery: core.serialization.property("estimated_delivery", core.serialization.number().optional()),
        filters: core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).Filters)),
        fulfillmentId: core.serialization.property("fulfillment_id", core.serialization.string()),
        id: core.serialization.lazy(async () => (await import("../../..")).ShipmentId),
        refundStatus: core.serialization.property(
            "refund_status",
            core.serialization.lazy(async () => (await import("../../..")).RefundStatus).optional()
        ),
        status: core.serialization.lazy(async () => (await import("../../..")).ShipmentStatus),
        leadTimeMins: core.serialization.property("lead_time_mins", core.serialization.number()),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        options: core.serialization.lazyObject(async () => (await import("../../..")).ShipmentOptions).optional(),
        paid: core.serialization.boolean(),
        parcels: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).inventory.Parcel)
        ),
        paymentReference: core.serialization.property("payment_reference", core.serialization.string().optional()),
        purchasedRate: core.serialization.property(
            "purchased_rate",
            core.serialization.lazyObject(async () => (await import("../../..")).Rate).optional()
        ),
        rates: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Rate)),
        recipient: core.serialization.lazyObject(async () => (await import("../../..")).Recipient),
        sender: core.serialization.lazyObject(async () => (await import("../../..")).Sender),
        pickupAt: core.serialization.property("pickup_at", core.serialization.number().optional()),
        organizationId: core.serialization.property("organization_id", core.serialization.string()),
        labelUrl: core.serialization.property("label_url", core.serialization.string().optional()),
        invoiceId: core.serialization.property("invoice_id", core.serialization.string()),
        kioskId: core.serialization.property("kiosk_id", core.serialization.string()),
        trackingNumber: core.serialization.property("tracking_number", core.serialization.string()),
        trackingUrl: core.serialization.property("tracking_url", core.serialization.string()),
        feedback: core.serialization.lazyObject(async () => (await import("../../..")).ShipmentFeedback).optional(),
        trackingUpdates: core.serialization.property(
            "tracking_updates",
            core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../..")).TrackingUpdate)
            )
        ),
        coordinates: core.serialization.list(core.serialization.number()),
        search: core.serialization.property(
            "_search",
            core.serialization.lazyObject(async () => (await import("../../..")).Search).optional()
        ),
    });

export declare namespace Shipment {
    interface Raw {
        amount?: number | null;
        billed_amount?: number | null;
        provider?: serializers.Provider.Raw | null;
        created_at: number;
        updated_at: number;
        currency: serializers.Currency.Raw;
        estimated_delivery?: number | null;
        filters: serializers.Filters.Raw[];
        fulfillment_id: string;
        id: serializers.ShipmentId.Raw;
        refund_status?: serializers.RefundStatus.Raw | null;
        status: serializers.ShipmentStatus.Raw;
        lead_time_mins: number;
        metadata?: Record<string, unknown> | null;
        options?: serializers.ShipmentOptions.Raw | null;
        paid: boolean;
        parcels: serializers.inventory.Parcel.Raw[];
        payment_reference?: string | null;
        purchased_rate?: serializers.Rate.Raw | null;
        rates: serializers.Rate.Raw[];
        recipient: serializers.Recipient.Raw;
        sender: serializers.Sender.Raw;
        pickup_at?: number | null;
        organization_id: string;
        label_url?: string | null;
        invoice_id: string;
        kiosk_id: string;
        tracking_number: string;
        tracking_url: string;
        feedback?: serializers.ShipmentFeedback.Raw | null;
        tracking_updates: serializers.TrackingUpdate.Raw[];
        coordinates: number[];
        _search?: serializers.Search.Raw | null;
    }
}
