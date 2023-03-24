/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../core";

export const Search: core.serialization.ObjectSchema<serializers.Search.Raw, PackageX.Search> =
    core.serialization.object({
        id: core.serialization.string(),
        trackingNumber: core.serialization.property("tracking_number", core.serialization.string()),
        senderName: core.serialization.property("sender_name", core.serialization.string()),
        senderEmail: core.serialization.property("sender_email", core.serialization.string()),
        senderPhone: core.serialization.property("sender_phone", core.serialization.string()),
        senderFormattedAddress: core.serialization.property("sender_formatted_address", core.serialization.string()),
        recipientName: core.serialization.property("recipient_name", core.serialization.string()),
        recipientEmail: core.serialization.property("recipient_email", core.serialization.string()),
        recipientPhone: core.serialization.property("recipient_phone", core.serialization.string()),
        recipientFormattedAddress: core.serialization.property(
            "recipient_formatted_address",
            core.serialization.string()
        ),
        providerName: core.serialization.property("provider_name", core.serialization.string()),
        providerId: core.serialization.property("provider_id", core.serialization.string()),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        relevanceScore: core.serialization.property("relevance_score", core.serialization.number()),
    });

export declare namespace Search {
    interface Raw {
        id: string;
        tracking_number: string;
        sender_name: string;
        sender_email: string;
        sender_phone: string;
        sender_formatted_address: string;
        recipient_name: string;
        recipient_email: string;
        recipient_phone: string;
        recipient_formatted_address: string;
        provider_name: string;
        provider_id: string;
        metadata?: Record<string, unknown> | null;
        relevance_score: number;
    }
}
