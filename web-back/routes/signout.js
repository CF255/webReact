import getTokenFromHeader from "../auth/getTokenFromHeader.js"
import jsonResponse from "../lib/jsonResponse.js"
import Token from "../schema/token.js"

import { Router } from 'express'

const router = Router();

router.delete("/", async (req, res)=>{
    try {
        const refreshToken = getTokenFromHeader(req.headers)

        if(refreshToken){
            await Token.findOneAndDelete({token: refreshToken})
            res.status(200). json (jsonResponse(200, {message: "token delete"}))
        }

    } catch (error) {
        console.log(error)
        res.status(500).json(jsonResponse(500,{error: 'Server error'}))
    }
})

export default router