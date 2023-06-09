/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PackageX } from "@fern-api/packagex";

export interface CreateManifestRequest {
    /** The ID of the location to which this manifest is being delivered */
    locationId: string;
    /** The inventory that is included in the manifest */
    inventory: PackageX.inventory.Inventory[];
}
