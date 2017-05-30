import {Observable} from 'rxjs';
import {Request, RequestMethod} from '@angular/http';

export interface ResourceRequestInterceptor {
  (req: Request): Request;
}

export interface ResourceResponseInterceptor {
  (observable: Observable<any>, request?: Request): Observable<any>;
}

export interface ResourceResponseMap {
  (item: any): any;
}

export interface ResourceResponseFilter {
  (item: any): boolean;
}

export interface ResourceParamsCommon {
  url?: string;
  path?: string;
  headers?: any;
  params?: any;
  data?: any;
  removeTrailingSlash?: boolean;
}

export interface ResourceParamsBase extends ResourceParamsCommon {
  add2Provides?: boolean;
  providersSubSet?: string;
}

export interface ResourceActionBase extends ResourceParamsCommon {
  method?: RequestMethod; // get default
  isArray?: boolean;
  isLazy?: boolean;
  requestInterceptor?: ResourceRequestInterceptor;
  responseInterceptor?: ResourceResponseInterceptor;
  map?: ResourceResponseMap;
  filter?: ResourceResponseFilter;
}

export interface ResourceMethod {
  (data?, callback?): ResourceResult;
}

export type ResourceResult = {} & {
  $resolved?: boolean;
  $observable?: Observable;
  $abortRequest?: () => void;
}
