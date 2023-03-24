/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackagexApi } from "@fern-api/packagex";
import * as core from "../../../../core";

export const AutocompleteAddressResponse: core.serialization.ObjectSchema<
    serializers.AutocompleteAddressResponse.Raw,
    PackagexApi.AutocompleteAddressResponse
> = core.serialization
    .object({
        data: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).AddressSuggestion)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Response));

export declare namespace AutocompleteAddressResponse {
    interface Raw extends serializers.Response.Raw {
        data: serializers.AddressSuggestion.Raw[];
    }
}