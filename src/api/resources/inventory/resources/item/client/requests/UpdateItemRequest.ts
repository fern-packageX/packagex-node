/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PackagexApi } from "@fern-api/packagex";

export interface UpdateItemRequest {
    /** Updated name */
    name?: string;
    levels?: PackagexApi.inventory.InventoryLevel[];
}