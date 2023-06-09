/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../../core";

export const ParseAddressRequest: core.serialization.Schema<
    serializers.ParseAddressRequest.Raw,
    PackageX.ParseAddressRequest
> = core.serialization.object({
    address: core.serialization.string(),
});

export declare namespace ParseAddressRequest {
    interface Raw {
        address: string;
    }
}
