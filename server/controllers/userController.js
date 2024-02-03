const bcrypt = require("bcrypt");

const User = require("../models/users");

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password, role, youtubeApiKey } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedPassword,
      role,
      youtubeApiKey: youtubeApiKey ? await bcrypt.hash(youtubeApiKey, 10) : "",
    });
    delete user.password;
    delete user.youtubeApiKey;
    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};
