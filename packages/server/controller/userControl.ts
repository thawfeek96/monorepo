import { trpc } from "../lib/TRCP";
import { todoRouter, listUser } from "../handler/userHandler";


export const appRoute = trpc.router({
  todo: todoRouter,
  userList: listUser
});

export type AppRouter = typeof appRoute;
