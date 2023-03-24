/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { PackagexApi } from "@fern-api/packagex";
import * as core from "../../../../../../core";

export const FulfillmentStatus: core.serialization.Schema<
    serializers.inventory.FulfillmentStatus.Raw,
    PackagexApi.inventory.FulfillmentStatus
> = core.serialization.enum_(["created", "processing", "packed", "completed", "canceled"]);

export declare namespace FulfillmentStatus {
    type Raw = "created" | "processing" | "packed" | "completed" | "canceled";
}
