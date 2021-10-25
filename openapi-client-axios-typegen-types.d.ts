import {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
  namespace Schemas {
    export interface BaseUser {
      firstName?: string;
      lastName?: string;
    }
    export interface User {
      id: string; // uuid
      firstName: string;
      lastName: string;
    }
  }
}
declare namespace Paths {
  namespace GetUser {
    namespace Responses {
      export type $200 = Components.Schemas.User;
    }
  }
  namespace UpdateUser {
    export type RequestBody = Components.Schemas.BaseUser;
    namespace Responses {
      export type $200 = Components.Schemas.User;
    }
  }
}

export interface OperationMethods {
  /**
   * getUser - GET User
   * 
   * The currently logged in user
   */
  'getUser'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUser.Responses.$200>
  /**
   * updateUser - PATCH User
   * 
   * Partially update the current user
   */
  'updateUser'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateUser.Responses.$200>
}

export interface PathsDictionary {
  ['/v1/users/me']: {
    /**
     * getUser - GET User
     * 
     * The currently logged in user
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUser.Responses.$200>
    /**
     * updateUser - PATCH User
     * 
     * Partially update the current user
     */
    'patch'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateUser.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
