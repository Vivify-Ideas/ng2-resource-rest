import { ResourceActionBase } from './Interfaces';
import { Resource } from './Resource';
export declare function ResourceAction(action?: ResourceActionBase): (target: Resource, propertyKey: string) => void;
