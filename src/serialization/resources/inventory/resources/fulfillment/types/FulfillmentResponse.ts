/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { PackagexApi } from "@fern-api/packagex";
import * as core from "../../../../../../core";

export const FulfillmentResponse: core.serialization.ObjectSchema<
    serializers.inventory.FulfillmentResponse.Raw,
    PackagexApi.inventory.FulfillmentResponse
> = core.serialization
    .object({
        data: core.serialization.lazyObject(async () => (await import("../../../../..")).inventory.Fulfillment),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).Response));

export declare namespace FulfillmentResponse {
    interface Raw extends serializers.Response.Raw {
        data: serializers.inventory.Fulfillment.Raw;
    }
}
