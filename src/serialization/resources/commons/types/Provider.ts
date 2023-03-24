/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../core";

export const Provider: core.serialization.ObjectSchema<serializers.Provider.Raw, PackageX.Provider> =
    core.serialization.object({
        name: core.serialization.string(),
        id: core.serialization.string(),
        logoUrl: core.serialization.property("logo_url", core.serialization.string()),
        supportEmail: core.serialization.property("support_email", core.serialization.string().optional()),
        supportPhone: core.serialization.property("support_phone", core.serialization.string().optional()),
        supportUrl: core.serialization.property("support_url", core.serialization.string()),
        supportReference: core.serialization.property("support_reference", core.serialization.string().optional()),
        marketplace: core.serialization.boolean(),
    });

export declare namespace Provider {
    interface Raw {
        name: string;
        id: string;
        logo_url: string;
        support_email?: string | null;
        support_phone?: string | null;
        support_url: string;
        support_reference?: string | null;
        marketplace: boolean;
    }
}
