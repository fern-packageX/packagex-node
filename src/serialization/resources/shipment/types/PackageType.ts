/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../core";

export const PackageType: core.serialization.Schema<serializers.PackageType.Raw, PackageX.PackageType> =
    core.serialization.enum_([
        "usps_flat_rate_envelope",
        "usps_flat_rate_window_envelope",
        "usps_small_flat_rate_envelope",
        "usps_flat_rate_padded_envelope",
        "usps_flat_rate_legal_envelope",
        "usps_small_flat_rate_box",
        "usps_medium_flat_rate_box_1",
        "usps_medium_flat_rate_box_2",
        "usps_large_flat_rate_box_1",
        "usps_large_flat_rate_box_2",
        "usps_large_flat_rate_box_apo_fpo",
    ]);

export declare namespace PackageType {
    type Raw =
        | "usps_flat_rate_envelope"
        | "usps_flat_rate_window_envelope"
        | "usps_small_flat_rate_envelope"
        | "usps_flat_rate_padded_envelope"
        | "usps_flat_rate_legal_envelope"
        | "usps_small_flat_rate_box"
        | "usps_medium_flat_rate_box_1"
        | "usps_medium_flat_rate_box_2"
        | "usps_large_flat_rate_box_1"
        | "usps_large_flat_rate_box_2"
        | "usps_large_flat_rate_box_apo_fpo";
}
