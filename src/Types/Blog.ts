import type { User } from "./User";
export type Blog ={
  id: number;
  title: string;
  content: string;
  createdAt: string;
  userId: number;
  user: User | null;
  comments: Comment[] | null;

}