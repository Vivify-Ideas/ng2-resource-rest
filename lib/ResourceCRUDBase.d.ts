import { Resource } from './Resource';
import { ResourceMethod } from './Interfaces';
export declare class ResourceCRUDBase extends Resource {
    query: ResourceMethod;
    get: ResourceMethod;
    save: ResourceMethod;
    update: ResourceMethod;
    remove: ResourceMethod;
    create(data, callback?: (res) => any);
}
