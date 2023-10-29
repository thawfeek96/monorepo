import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "server/controller/todoRouter"

export const trcp = createTRPCReact<AppRouter>()
