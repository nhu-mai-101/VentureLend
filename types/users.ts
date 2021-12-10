export interface UserId {
  id: number,
};

export interface User extends UserId {
  firstName: string,
  lastName: string,
  email: string
};