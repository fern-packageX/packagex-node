/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../../../core";

export const ItemId: core.serialization.Schema<serializers.inventory.ItemId.Raw, PackageX.inventory.ItemId> =
    core.serialization.string();

export declare namespace ItemId {
    type Raw = string;
}
