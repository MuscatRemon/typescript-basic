type Post = {
  id: number; // id
  title: string; // タイトル
  body: string; // 本文
  published: boolean; // 公開済みかどうか
};

type EditPost = Partial<Post>;

type ShowPost = Pick<Post, "id" | "title">;

type PublishedPost = Readonly<Post>;
