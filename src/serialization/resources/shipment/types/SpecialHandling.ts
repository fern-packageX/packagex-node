/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../core";

export const SpecialHandling: core.serialization.Schema<serializers.SpecialHandling.Raw, PackageX.SpecialHandling> =
    core.serialization.enum_([
        "confidential",
        "fragile",
        "urgent",
        "perishable",
        "legal_document",
        "oversized",
        "dry_ice",
        "batteries",
        "time_sensitive",
        "signature",
    ]);

export declare namespace SpecialHandling {
    type Raw =
        | "confidential"
        | "fragile"
        | "urgent"
        | "perishable"
        | "legal_document"
        | "oversized"
        | "dry_ice"
        | "batteries"
        | "time_sensitive"
        | "signature";
}
