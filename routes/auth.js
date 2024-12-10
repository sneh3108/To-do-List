// const router = require("express").Router();
// const User = require("../models/user");
// const bcrypt = require("bcryptjs");
// //SIGN UP
// router.post("/register", async (req, res) => {
//   try {
//     const { email, username, password } = req.body;
//     const hashpassword = bcrypt.hashSync(password);
//     const user = new User({ email, username, password: hashpassword });
//     await user
//       .save()
//       .then(() => res.status(200).json({ message: "Sign Up Successfull" }));
//   } catch (error) {
//     res.status(200).json({ message: "User Already Exists" });
//   }
// });

// //SIGN IN

// router.post("/signin", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       return res
//         .status(400)
//         .json({ message: "User not found. Please Sign Up First" });
//     }

//     const isPasswordCorrect = bcrypt.compareSync(
//       req.body.password,
//       user.password
//     );
//     if (!isPasswordCorrect) {
//       return res.status(400).json({ message: "Password is not correct" });
//     }

//     const { password, ...others } = user._doc;
//     res.status(200).json({ user: others });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;

const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//SIGN UP
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    // Hash the password and save the user
    const hashpassword = bcrypt.hashSync(password, 10);
    const user = new User({ email, username, password: hashpassword });
    await user.save();

    // Respond with success message and user id
    res.status(200).json({ message: "Sign Up Successful", id: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//SIGN IN
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    // If user does not exist
    if (!user) {
      return res.status(400).json({ message: "User not found. Please Sign Up First" });
    }

    // Check if the password matches
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password is not correct" });
    }

    // Send user id and other details
    const { password, ...others } = user._doc;
    res.status(200).json({ message: "Sign In Successful", id: user._id, user: others });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
