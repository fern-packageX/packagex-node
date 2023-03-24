/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PackagexApi } from "@fern-api/packagex";

export interface CreateFulfillmentRequest {
    recipient: PackagexApi.Recipient;
    /** The ID of the location to which this manifest is being delivered */
    locationId: string;
    /** The inventory that needs to be shipped in this fulfillment */
    inventory: PackagexApi.inventory.Inventory[];
}