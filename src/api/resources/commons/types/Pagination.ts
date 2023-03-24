/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The pagination object returned in responses where multiple values are returned
 */
export interface Pagination {
    /** The limit for the responses */
    limit: number;
    /** The current page offset that is being retrieved */
    page: number;
    /** indicates if there are more values in the database not retrieved in this query */
    hasMore: boolean;
}