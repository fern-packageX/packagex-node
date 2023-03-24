/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../core";

export const Sender: core.serialization.ObjectSchema<serializers.Sender.Raw, PackageX.Sender> =
    core.serialization.object({
        address: core.serialization.lazyObject(async () => (await import("../../..")).ParsedAddress),
        addressLine2: core.serialization.property("address_line2", core.serialization.string().optional()),
        name: core.serialization.string(),
        email: core.serialization.string(),
        phone: core.serialization.string(),
        contactId: core.serialization.property("contact_id", core.serialization.string()),
    });

export declare namespace Sender {
    interface Raw {
        address: serializers.ParsedAddress.Raw;
        address_line2?: string | null;
        name: string;
        email: string;
        phone: string;
        contact_id: string;
    }
}
