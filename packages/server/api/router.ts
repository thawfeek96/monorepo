import { Elysia } from "elysia";
import {appRoute} from '../controller/todoRouter'

const router = new Elysia()


router.use('/trpc', appRoute)




