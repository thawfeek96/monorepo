import { trpc, createRouter } from "../lib/TRCP";
import { z } from "zod";
import { prisma } from "../lib/prismaClient";

export const todoRouter = trpc.router({
 
  create: trpc.procedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
        company_name: z.string(),
        phone_no: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, name, email, company_name, phone_no } = input;      

      const createdUser = await prisma.tbl_user.create({
        data: {
          user_id: id,
          name,
          email,
          company_name,
          phone_no,
        },
      });

      return createdUser;
    }),
});


export const listUser = trpc.router({
  list: trpc.procedure.query(async() => {
    const users = await prisma.tbl_user.findMany(); // Assuming your Prisma model is named 'todo'

    console.log('uses', users);
    
    return  users
  }),
})