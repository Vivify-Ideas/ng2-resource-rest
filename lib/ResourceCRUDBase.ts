import {RequestMethod} from '@angular/http';
import {Resource} from './Resource';
import {ResourceMethod} from './Interfaces';
import {ResourceAction} from './ResourceAction';

export class ResourceCRUDBase extends Resource {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod;

  @ResourceAction()
  get: ResourceMethod;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod;

  @ResourceAction({
    method: RequestMethod.Put
  })
  update: ResourceMethod;

  @ResourceAction({
    method: RequestMethod.Delete
  })
  remove: ResourceMethod;

  // Alias to save
  create(data, callback?: res => any) {
    return this.save(data, callback);
  }

}
