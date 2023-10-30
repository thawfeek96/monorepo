import { Elysia } from 'elysia';
import { trpc } from '@elysiajs/trpc';
import { cors } from '@elysiajs/cors';
import { appRoute } from './controller/userControl'
import { cookie } from '@elysiajs/cookie'
import { jwtVerify, createRemoteJWKSet } from "jose";

const app = new Elysia();

app.use(cors({
    origin: "*"
}));

app.use(cookie())
app.use(trpc(appRoute));




app.get('/', async (res) => {
    const token: any = res.cookie.hanko


    const hankoApiUrl = "https://2237b1bf-a6c6-44eb-a367-b2890a0e9860.hanko.io"
    if (!token) throw new Error("Token missing");

    const JWKS = createRemoteJWKSet(
        new URL(`${hankoApiUrl}/.well-known/jwks.json`)
    );
    try {
        const verifiedJWT = await jwtVerify(token ?? "", JWKS);
        res.set.status = 201
        return {
            success: true,
            message: "successfullt logged"
        }

    } catch (error) {
        res.set.status = 400
        return {
            success: false,
            message: "Unauthorized"
        }

    }


});



app.listen({
    port: process.env.PORT || 5000,
});


console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);