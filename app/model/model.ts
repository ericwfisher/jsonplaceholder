export const postToPut: Post = { id: 1, userId: 1, title: 'new title', body: 'new body' };
export const postToPatch: Partial<Post> = { id: 1, title: 'patched title', };

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
