export interface IPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
}

export interface IUserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  province: string;
  city: string;
  district: string;
  street: string;
  zipcode: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICPostHeader {
  text: string;
  id: number;
  className?: string;
}
