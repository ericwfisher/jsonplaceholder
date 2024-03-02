import { forkJoin, tap } from 'rxjs';
import { JsonPlaceholderApi } from './app/api/';
import { postToPatch, postToPut } from './app/model';

const api = new JsonPlaceholderApi();

// As Promises
Promise.all([
  api.getPost(1),
  api.putPost(postToPut),
  api.patchPost(postToPatch),
  api.deletePost(1),
]).then(values => {
  console.log(values);
});

// As Observables
forkJoin([
  api.getPost$(1),
  api.patchPost$(postToPatch),
  api.putPost$(postToPut),
  api.deletePost$(1),
]).pipe(
  tap(([get, patch, put, del]) => {
    console.log(get);
    console.log(patch);
    console.log(put);
    console.log(del);
  })
).subscribe();
