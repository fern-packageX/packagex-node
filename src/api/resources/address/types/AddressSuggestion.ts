/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Suggested addresses based on input
 *
 * @example
 *     {
 *         address: "500 7th Avenue, San Diego, CA, USA",
 *         matchedText: "500 7th Avenue",
 *         autocompleteText: "San Diego, CA, USA"
 *     }
 *
 * @example
 *     {
 *         address: "500 7th Avenue, New York, NY, USA",
 *         matchedText: "500 7th Avenue",
 *         autocompleteText: "New York, NY, USA"
 *     }
 */
export interface AddressSuggestion {
    /** The full predicted address */
    address: string;
    /** The input given by user */
    matchedText: string;
    /** The text added by the API to provide prediction */
    autocompleteText: string;
}