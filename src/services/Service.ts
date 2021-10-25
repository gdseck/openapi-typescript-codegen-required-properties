/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseUser } from '../models/BaseUser';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class Service {

    /**
     * GET User
     * The currently logged in user
     * @returns User A user
     * @throws ApiError
     */
    public static getUser(): CancelablePromise<User> {
        return __request({
            method: 'GET',
            path: `/v1/users/me`,
        });
    }

    /**
     * PATCH User
     * Partially update the current user
     * @returns User The updated user
     * @throws ApiError
     */
    public static updateUser({
requestBody,
}: {
requestBody: BaseUser,
}): CancelablePromise<User> {
        return __request({
            method: 'PATCH',
            path: `/v1/users/me`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}