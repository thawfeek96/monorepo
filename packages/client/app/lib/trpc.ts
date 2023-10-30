import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "server/controller/userControl"

export const trcp = createTRPCReact<AppRouter>()
