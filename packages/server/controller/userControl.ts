import { trpc } from "../lib/TRCP";
import { todoRouter, listUser } from "../handler/todoRouter";


export const appRoute = trpc.router({
  todo: todoRouter,
  userList: listUser
});

export type AppRouter = typeof appRoute;
