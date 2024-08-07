const User = require("../models/User");
const bcrypt = require("bcrypt");

const createAdminUser = async () => {
  try {
    const existingUser = await User.findOne({ email: "admin@example.com" });
    if (existingUser) {
      console.log("Admin account already exist");
    } else {
      const newUser = new User({
        name: "Admin",
        email: "admin@example.com",
        phone: "01000000000",
        address: "Earth",
        role: "admin",
        password: await bcrypt.hash("password-admin", 10),
      });

      await newUser.save();
      console.log("Admin account created successfully")
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { createAdminUser };
