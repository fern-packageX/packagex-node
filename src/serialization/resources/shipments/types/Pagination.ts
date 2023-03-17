/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackagexApi } from "@fern-api/packagex";
import * as core from "../../../../core";

export const Pagination: core.serialization.ObjectSchema<serializers.Pagination.Raw, PackagexApi.Pagination> =
    core.serialization.object({
        limit: core.serialization.number(),
        page: core.serialization.number(),
        hasMore: core.serialization.property("has_more", core.serialization.boolean()),
    });

export declare namespace Pagination {
    interface Raw {
        limit: number;
        page: number;
        has_more: boolean;
    }
}