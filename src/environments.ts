/**
 * This file was auto-generated by Fern from our API Definition.
 */

export const PackageXEnvironment = {
    Production: "https://api.packagex.io",
    Sandbox: "https://sandbox.packagex.io",
} as const;

export type PackageXEnvironment = typeof PackageXEnvironment.Production | typeof PackageXEnvironment.Sandbox;
