/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The service level for this rate
 *
 * @example
 *     {
 *         id: "3bicjss933jckjcsww",
 *         name: "Same Day",
 *         days: 1,
 *         estimatedDelivery: 1679591515,
 *         terms: "Today by 9pm",
 *         pickupAt: 1679591623
 *     }
 */
export interface ServiceLevel {
    /** The human readable name for this service label */
    name: string;
    /** The unique ID of this provider's service level */
    id: string;
    /** The human readable delivery estimate for this rate */
    terms: string;
    /** The integer of days that this delivery is estimated to take if the provider receives the shipment before their daily cutoff time. */
    days: number;
    /** The time in epoch seconds when we estimate the shipment at this rate will be delivered */
    estimatedDelivery: number;
    /** The time in epoch seconds when this shipment will be picked up for this rate */
    pickupAt: number;
}
