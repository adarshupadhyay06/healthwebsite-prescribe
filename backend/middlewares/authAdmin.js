import jwt from 'jsonwebtoken'

const authAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    console.log("AUTH HEADER:", authHeader)

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ success: false, message: "Not authorized" })
    }

    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    console.log("DECODED:", decoded)
    console.log("ENV EMAIL:", process.env.ADMIN_EMAIL)

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: "Not authorized" })
    }

    next()
  } catch (error) {
    console.log("AUTH ERROR:", error)
    res.json({ success: false, message: "Invalid or expired token" })
  }
}

export default authAdmin
