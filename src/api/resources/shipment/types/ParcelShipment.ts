/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PackagexApi } from "@fern-api/packagex";

/**
 * A parcel or package that will be included in a shipment
 *
 * @example
 *     {
 *         length: 2,
 *         width: 5,
 *         height: 4,
 *         weight: 1,
 *         type: PackagexApi.PackageType.UspsFlatRateEnvelope
 *     }
 */
export interface ParcelShipment {
    /** The length of the package in inches */
    length?: number;
    /** The width of the package in inches */
    width?: number;
    /** The height of the package in inches */
    height?: number;
    /** The weight of the package in pounds */
    weight?: number;
    type?: PackagexApi.PackageType;
    /** Any special handing instructions provided. Not all shipping providers support these */
    specialHandling?: PackagexApi.SpecialHandling;
    /** The inventory packed inside of the parcel */
    inventory?: PackagexApi.inventory.Inventory;
}
