/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PackagexApi } from "@fern-api/packagex";

/**
 * A shipment object
 */
export interface Shipment {
    /** The amount that will be collected from a customer. This includes any upcharges or discounts you have added to the price on the PackageX Dashboard. */
    amount: number;
    /** The amount that your organization will be billed for this rate. */
    billedAmount: number;
    provider: PackagexApi.Provider;
    /** Time in epoch seconds when this shipment was created. */
    createdAt: number;
    /** Time in epoch seconds when this shipment was last updated. */
    updatedAt: number;
    currency: PackagexApi.Currency;
    /** Time in epoch seconds when we estimate the delivery will occur. */
    estimatedDelivery: number;
    /** If this shipment has any existing issue, normally do to the most recent tracking update indicating that there is an issue. */
    hasIssue: boolean;
    /** The unique ID for the shipment */
    id: string;
    /** The current status for the shipment. It's the same status as the latest tracking_update just surfaced for convenience. See https://docs.packagex.io/shipments/statuses for more info on statuses. */
    status: string;
    /** The amount of lead time in hours that is required. This is only applicable for same-day shipments and indicated how much advance notice is required between the shipping provider and sender before a courier will be dispatched. */
    leadTimeHours: number;
    /** Custom key value pairs that the organization is able to add to this shipment */
    metadata: Record<string, unknown>;
    /** If the shipment has been paid for */
    paid: boolean;
    /** The individual packages that are part of this shipment. */
    parcels: PackagexApi.Parcel[];
    /** A user generated reference for this payment. Will be included in invoices. */
    paymentReference: string;
    purchasedRate: PackagexApi.Rate;
    /** All of the rates that were returned when creating this shipment */
    rates: PackagexApi.Rate[];
    recipient: PackagexApi.Recipient;
    sender: PackagexApi.Sender;
    /** Seconds from epoch when this shipment will be picked up, if pickup is part of the rate's service level */
    pickupAt: number;
    /** The ID of the organization that owns this shipment */
    organizationId: string;
    /** The url for the shipping label */
    labelUrl: string;
    /** The ID of the invoice for this shipment */
    invoiceId: string;
    /** The tracking integer for this shipment. */
    trackingInteger: string;
    /** The url for the end user to track their shipment */
    trackingUrl: string;
    feedback: PackagexApi.ShipmentFeedback;
    /** A list of all tracking updates that occurred for this shipment from oldest to newest */
    trackingUpdates: PackagexApi.TrackingUpdate[];
    latestLocation: PackagexApi.LatestLocation;
}
