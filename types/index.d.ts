export interface IPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
}

export interface ICPostHeader {
  text: string;
  id: number;
  className?: string;
}
