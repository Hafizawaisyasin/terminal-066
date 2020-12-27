function admin(req, res, next) {
  console.log(req.user)
    if (req.session.user.email != "awaisyasin154@gmail.com")
      return res.status(403).send("You are not authorized");
    next();
  }
  module.exports = admin;
  