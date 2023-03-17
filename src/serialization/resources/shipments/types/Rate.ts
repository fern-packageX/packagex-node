/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackagexApi } from "@fern-api/packagex";
import * as core from "../../../../core";

export const Rate: core.serialization.ObjectSchema<serializers.Rate.Raw, PackagexApi.Rate> = core.serialization.object({
    id: core.serialization.string(),
    amount: core.serialization.number(),
    billedAmount: core.serialization.property("billed_amount", core.serialization.number()),
    carrierAccount: core.serialization.property("carrier_account", core.serialization.string()),
    pickupAt: core.serialization.property("pickup_at", core.serialization.number()),
    provider: core.serialization.lazyObject(async () => (await import("../../..")).Provider),
    serviceLevel: core.serialization.property(
        "service_level",
        core.serialization.lazyObject(async () => (await import("../../..")).ServiceLevel)
    ),
});

export declare namespace Rate {
    interface Raw {
        id: string;
        amount: number;
        billed_amount: number;
        carrier_account: string;
        pickup_at: number;
        provider: serializers.Provider.Raw;
        service_level: serializers.ServiceLevel.Raw;
    }
}
