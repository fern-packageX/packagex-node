/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackagexApi } from "@fern-api/packagex";
import * as core from "../../../../core";

export const ListShipmentResponse: core.serialization.ObjectSchema<
    serializers.ListShipmentResponse.Raw,
    PackagexApi.ListShipmentResponse
> = core.serialization
    .object({
        data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Shipment)),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Response));

export declare namespace ListShipmentResponse {
    interface Raw extends serializers.Response.Raw {
        data: serializers.Shipment.Raw[];
    }
}