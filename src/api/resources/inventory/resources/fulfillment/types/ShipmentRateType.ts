/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of rate that was purchased for the shipment linked to the fulfillment without needing to query the shipment.
 */
export type ShipmentRateType =
    | "in_person_pickup"
    | "curbside_pickup"
    | "locker_pickup"
    | "provider_delivery"
    | "offline_delivery";

export const ShipmentRateType = {
    InPersonPickup: "in_person_pickup",
    CurbsidePickup: "curbside_pickup",
    LockerPickup: "locker_pickup",
    ProviderDelivery: "provider_delivery",
    OfflineDelivery: "offline_delivery",
} as const;
