/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PackageX } from "@fern-api/packagex";
import * as core from "../../../../core";

export const Response: core.serialization.ObjectSchema<serializers.Response.Raw, PackageX.Response> =
    core.serialization.object({
        status: core.serialization.number(),
        message: core.serialization.string(),
        code: core.serialization.string().optional(),
        errors: core.serialization.list(core.serialization.string()),
        pagination: core.serialization.lazyObject(async () => (await import("../../..")).Pagination).optional(),
        events: core.serialization.list(core.serialization.string()).optional(),
        endpoint: core.serialization.string(),
    });

export declare namespace Response {
    interface Raw {
        status: number;
        message: string;
        code?: string | null;
        errors: string[];
        pagination?: serializers.Pagination.Raw | null;
        events?: string[] | null;
        endpoint: string;
    }
}
