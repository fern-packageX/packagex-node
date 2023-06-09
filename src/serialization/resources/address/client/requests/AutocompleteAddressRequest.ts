/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../../core";

export const AutocompleteAddressRequest: core.serialization.Schema<
    serializers.AutocompleteAddressRequest.Raw,
    PackageX.AutocompleteAddressRequest
> = core.serialization.object({
    address: core.serialization.string(),
});

export declare namespace AutocompleteAddressRequest {
    interface Raw {
        address: string;
    }
}
