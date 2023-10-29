import { initTRPC } from "@trpc/server";

export const trpc = initTRPC.create();

export const createRouter = trpc.router({})