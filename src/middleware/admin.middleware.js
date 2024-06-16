const adminMiddleware = async (req, res, next) => {
  try {
    const adminRole = req.user.isAdmin
    if (!adminRole) {
      return res.status(403).json({ message: 'Access denied you are not admin' })
    }
    next()
  } catch (error) {
    next(error)
  }
}
export { adminMiddleware }