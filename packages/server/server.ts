import { Elysia } from 'elysia';
import { trpc } from '@elysiajs/trpc';
import { cors } from '@elysiajs/cors';
import {appRoute} from './controller/userControl'


const app = new Elysia();

app.use(cors());
app.use(trpc(appRoute));

app.get('/', () => {
    return {
        success: true,
        message: 'Welcome to Feedback Sync V2 Server!',
    };
});



app.listen({
    port: process.env.PORT || 5000,
});


console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);