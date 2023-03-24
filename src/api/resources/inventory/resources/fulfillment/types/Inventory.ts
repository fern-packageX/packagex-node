/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PackagexApi } from "@fern-api/packagex";

/**
 * An inventory model is an item or asset that is inside of a manifest, fulfillment, or parcel.
 */
export interface Inventory {
    attributes?: PackagexApi.inventory.InventoryAttributes;
    /** A free text field to add any comments about this item */
    comment?: string;
    /** Time in epoch seconds when this resource was created */
    createdAt?: number;
    /** The amount of on hand inventory. */
    verifiedQty?: number;
    /** The amount of on hand inventory that is deemed damaged */
    damagedQty?: number;
    /** The amount of inventory that is on a manifest that has not been added to inventory yet */
    manifestedQty?: number;
    /** The harmonized system code for the item. This is required if you will be shipping this item internationally. */
    harmonizedCode?: string;
    /** The unique ID given to this product. This will stay the same even if the SKU or GTIN values are updated. */
    id?: string;
    /** The global identifier for the item, which is consistent across vendors for this item */
    gtin?: string;
    /** The unique identifier that is added by you for this item */
    sku?: string;
    /** A unique number given to an asset */
    serialNumber?: string;
    /** A thumbnail image for the inventory */
    imageUrl?: string;
    /** The name of the item */
    name?: string;
    /** The country that manufactured this item. This is required if shipping the item internationally */
    originCountry?: string;
    /** The company that created the inventory */
    vendor?: string;
    /** The value of this each individual item in cents */
    value?: number;
    /** The length of the item in inches when placed in shipping packaging */
    packagedLength?: number;
    /** The width of the item in inches when placed in shipping packaging */
    packagedWidth?: number;
    /** The height of the item in inches when placed in shipping packaging */
    packagedHeight?: number;
    /** The weight of the item in pounds (lbs) when placed in shipping packaging */
    packagedWeight?: number;
}