/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { PackageX } from "@fern-api/packagex";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Manifest {
    interface Options {
        environment?: environments.PackageXEnvironment | string;
        apiKey: core.Supplier<string>;
    }
}

export class Manifest {
    constructor(private readonly options: Manifest.Options) {}

    /**
     * To create a manifest, you only need to include the location_id and specify the inventory items that you want to add.
     */
    public async create(
        request: PackageX.inventory.CreateManifestRequest
    ): Promise<PackageX.inventory.ManifestResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.PackageXEnvironment.Production, "/v1/manifest"),
            method: "POST",
            contentType: "application/json",
            body: await serializers.inventory.CreateManifestRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
        });
        if (_response.ok) {
            return await serializers.inventory.ManifestResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.PackageXError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PackageXError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PackageXTimeoutError();
            case "unknown":
                throw new errors.PackageXError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Before you can update a manifest, you'll need to update its status to accepted. When all items have been verified, you are able to update the status of the manifest to 'completed'.
     */
    public async update(
        manifestId: PackageX.inventory.ManifestId,
        request: PackageX.inventory.UpdateManifestStatusRequest
    ): Promise<PackageX.inventory.ManifestResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.PackageXEnvironment.Production,
                `/v1/manifest/${await serializers.inventory.ManifestId.jsonOrThrow(manifestId)}`
            ),
            method: "POST",
            contentType: "application/json",
            body: await serializers.inventory.UpdateManifestStatusRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
        });
        if (_response.ok) {
            return await serializers.inventory.ManifestResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.PackageXError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PackageXError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PackageXTimeoutError();
            case "unknown":
                throw new errors.PackageXError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets a single manifest
     */
    public async retrieve(manifestId: PackageX.inventory.ManifestId): Promise<PackageX.inventory.ManifestResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.PackageXEnvironment.Production,
                `/v1/manifest/${await serializers.inventory.ManifestId.jsonOrThrow(manifestId)}`
            ),
            method: "GET",
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.inventory.ManifestResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.PackageXError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PackageXError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PackageXTimeoutError();
            case "unknown":
                throw new errors.PackageXError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets all manifests
     */
    public async list(): Promise<PackageX.inventory.ListManifestResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.PackageXEnvironment.Production, "/v1/manifest"),
            method: "GET",
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.inventory.ListManifestResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.PackageXError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PackageXError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PackageXTimeoutError();
            case "unknown":
                throw new errors.PackageXError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
