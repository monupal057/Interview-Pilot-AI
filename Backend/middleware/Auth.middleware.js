export const AuthMiddleware = async (req, res, next) => {
    try {
        const token = req.cookie.token
        if(!token){
            return res.status(401).json({
                message:"User not found",
                success: false
            })
        }

        const decode = await jwt.verify(token, process.env.SECRET_KEY)
        if(!decode){
            return res.status(401).json({
                message: "Invalid token",
                success:false
            })
        }
        req.id = decode.userId
        next()

    } catch (error) {
    console.log(`This erroe is coming from AuthMiddleware , error-->$(error)`)
}
}
