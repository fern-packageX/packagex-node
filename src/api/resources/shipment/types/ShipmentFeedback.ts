/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PackagexApi } from "@fern-api/packagex";

/**
 * User provided feedback for this shipment
 */
export interface ShipmentFeedback {
    rating?: PackagexApi.FeedbackRating;
    /** A comment that the user provided about their experience */
    comment?: string;
    /** When the feedback was updated in epoch seconds */
    updatedAt?: number;
}