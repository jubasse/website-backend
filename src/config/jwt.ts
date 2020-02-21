export default {
    algorithm: 'HS512',
    expiresIn: '30m',
    secret: process.env.JWT_SECRET
}
