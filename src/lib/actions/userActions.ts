'use server';

import dbConnect from "@/database/config/dbConfig";

//import bcrypt from 'bcryptjs';

export default async function register(prevState: void | undefined | {}, formData: FormData) {
    const { username, email, password,confirmPassword } = Object.fromEntries(formData);
    if (password !== confirmPassword) {
        return { error: "Passwords do not match!" };
    }
    try {
        console.log('registered user!');
        console.log(username, email, password);

        dbConnect()
    } catch (error) {
        console.log(error);
        return { error: 'Something went wrong!' };
    }
}


// export const register = async (previousState, formData) => {
//     const { username, email, password, img, passwordRepeat } =
//       Object.fromEntries(formData);
  
//     if (password !== passwordRepeat) {
//       return { error: "Passwords do not match" };
//     }
  
//     try {
//       connectToDb();
  
//       const user = await User.findOne({ username });
  
//       if (user) {
//         return { error: "Username already exists" };
//       }
  
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
  
//       const newUser = new User({
//         username,
//         email,
//         password: hashedPassword,
//         img,
//       });
  
//       await newUser.save();
//       console.log("saved to db");
  
//       return { success: true };
//     } catch (err) {
//       console.log(err);
//       return { error: "Something went wrong!" };
//     }
//   };