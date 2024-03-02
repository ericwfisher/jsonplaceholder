import { catchError } from 'rxjs';
import { HttpClient} from '../http-client';
import { Post } from '../model';

export class JsonPLaceholderApi {
  constructor(
    private http = new HttpClient(),
  ) {
    console.log('JSONPLaceholderApi constructed');
  }

  async deletePost(id: number): Promise<Response> {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.delete(url)
      .catch(error => { throw error; });
  }

  deletePost$(id: number) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.delete$(url).pipe(
      catchError(error => { throw error; })
    );
  }

  async getPosts(): Promise<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .catch(error => { throw error; });
  }

  getPosts$() {
    return this.http.get$<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      catchError(error => { throw error; })
    );
  }

  async getPost(id: number): Promise<Post> {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.get<Post>(url)
      .catch(error => { throw error; });
  }

  getPost$(id: number) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.get$<Post>(url).pipe(
      catchError(error => { throw error; })
    );
  }

  async patchPost(post: Partial<Post>): Promise<Post> {
    const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    return this.http.patch<Post>(url, post)
      .catch(error => { throw error; });
  }

  patchPost$(post: Partial<Post>) {
    const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    return this.http.patch$<Post>(url, post).pipe(
      catchError(error => { throw error; })
    );
  }

  async putPost(post: Post): Promise<Post> {
    const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    return this.http.put<Post>(url, post)
      .catch(error => { throw error; });
  }

  putPost$(post: Partial<Post>) {
    const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    return this.http.put$<Post>(url, post).pipe(
      catchError(error => { throw error; })
    );
  }
}
