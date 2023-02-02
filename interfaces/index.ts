export type User = {
  id: number;
  name?: string;
};
type Patterns = {
  ip: '/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/';
};
export type Router = {
  id: number;
  ip?: string;
  name?: string;
};
W