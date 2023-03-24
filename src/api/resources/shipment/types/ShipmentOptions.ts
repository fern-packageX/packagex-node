/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PackagexApi } from "@fern-api/packagex";

/**
 * Options that were passed in when generated shipping rates.
 */
export interface ShipmentOptions {
    /** The amount of time in milliseconds to wait for a shipping provider before discarding it's results. */
    providerTimeout?: number;
    /** If all addresses for the shipment should be verified */
    verifyAddress?: boolean;
    /** The total price in USD cents for the cart total during an e-commerce purchase. */
    checkoutTotal?: number;
    /** If the shipping provider should pick up this package. */
    requestProviderPickup?: boolean;
    /** The list of shipping provider IDs that you want returned. */
    providers?: string[];
    /** The list of service level IDs that you want returned. */
    serviceLevels?: string[];
    /** The maximum number of delivery days for this shipment. */
    maxDeliveryDays?: number;
    rateTypes?: PackagexApi.RateTypes[];
}