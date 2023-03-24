/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PackagexApi } from "@fern-api/packagex";

/**
 * The record of each tracking update from a shipment
 *
 * @example
 *     {
 *         address: {
 *             id: "defnewfed_93392",
 *             hash: "dac0efe_w9dw",
 *             line1: "500 7th Ave",
 *             line2: "Fl 10",
 *             city: "New York",
 *             state: "New York",
 *             stateCode: "NY",
 *             country: "United States",
 *             countryCode: "US",
 *             postalCode: "10018",
 *             formattedAddress: "500 7th Ave, Fl 10, New York, NY, 10018",
 *             textarea: "500 7th Ave",
 *             timezone: "EST",
 *             verified: true
 *         },
 *         status: PackagexApi.ShipmentStatus.InTransit,
 *         message: "In Transit",
 *         images: [],
 *         createdAt: 1679591515,
 *         updatedAt: 1679591623,
 *         event: PackagexApi.ShipmentEvent.TrackingUpdated
 *     }
 *
 * @example
 *     {
 *         address: {
 *             id: "defnewfed_93392",
 *             hash: "dac0efe_w9dw",
 *             line1: "500 7th Ave",
 *             line2: "Fl 10",
 *             city: "New York",
 *             state: "New York",
 *             stateCode: "NY",
 *             country: "United States",
 *             countryCode: "US",
 *             postalCode: "10018",
 *             formattedAddress: "500 7th Ave, Fl 10, New York, NY, 10018",
 *             textarea: "500 7th Ave",
 *             timezone: "EST",
 *             verified: true
 *         },
 *         status: PackagexApi.ShipmentStatus.OutForDelivery,
 *         message: "Out for Delivery",
 *         images: [],
 *         createdAt: 1679591515,
 *         updatedAt: 1679591623,
 *         event: PackagexApi.ShipmentEvent.TrackingUpdated
 *     }
 */
export interface TrackingUpdate {
    address: PackagexApi.ParsedAddress;
    status: PackagexApi.ShipmentStatus;
    /** A shipping provider comment */
    comment?: string;
    /** Urls of images */
    images: string[];
    /** Human readable text explaining the status */
    message: string;
    /** The event that occurred when this event was created. For all events see https://docs.packagex.io/shipments/events */
    event: PackagexApi.ShipmentEvent;
    /** Time from unix eopch seconds when this tracking update was created */
    createdAt: number;
    /** The time in epoch seconds when this status was last updated */
    updatedAt: number;
    /** The ID of the location of this update, if it is one of your locations. */
    locationId?: string;
    /** The ID of the layout that this item is on, if it matches one of your locations. */
    layoutId?: string;
}
