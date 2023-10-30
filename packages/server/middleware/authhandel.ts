import { jwtVerify, createRemoteJWKSet } from "jose";


const authentication = async (req: any, res: any, next: any) => {
    const hankoApiUrl = "https://2237b1bf-a6c6-44eb-a367-b2890a0e9860.hanko.io"
        const token = req.headers["authorization"];
        if (!token) throw new Error("Token missing");
        const JWKS = createRemoteJWKSet(
            new URL(`${hankoApiUrl}/.well-known/jwks.json`)
        );

        try {
            const verifiedJWT = await jwtVerify(token ?? "", JWKS);
            req.success = true
            req.message = 'logedIn successfully'
            next();
            return;


        } catch (error: any) {
            // res.status(404).send(error.message);


        }

   
};

export default authentication;
