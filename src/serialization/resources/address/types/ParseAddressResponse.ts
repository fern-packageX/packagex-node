/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../core";

export const ParseAddressResponse: core.serialization.ObjectSchema<
    serializers.ParseAddressResponse.Raw,
    PackageX.ParseAddressResponse
> = core.serialization
    .object({
        data: core.serialization.lazyObject(async () => (await import("../../..")).ParsedAddress),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Response));

export declare namespace ParseAddressResponse {
    interface Raw extends serializers.Response.Raw {
        data: serializers.ParsedAddress.Raw;
    }
}
