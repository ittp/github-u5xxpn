export type User = {
  id: number;
  name?: string;
};
let p = {
  ip: '/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/',
};
export type Router = {
  id: number;
  ip?: string;
  hostname?: string;
  ports?: any;
  address?: any;
};
