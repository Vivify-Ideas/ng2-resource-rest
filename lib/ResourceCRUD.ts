import {RequestMethod} from '@angular/http';
import {Resource} from './Resource';
import {ResourceMethod} from './Interfaces';
import {ResourceAction} from './ResourceAction';

export class ResourceCRUD extends Resource {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod;

  @ResourceAction({
    path: '/{!id}'
  })
  get: ResourceMethod;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/{!id}'
  })
  update: ResourceMethod;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/{!id}'
  })
  remove: ResourceMethod;

  // Alias to save
  create(data, callback?: res => any) {
    return this.save(data, callback);
  }

}
