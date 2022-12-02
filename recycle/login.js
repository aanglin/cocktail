import clientPromise from "../../lib/mongodb"
import bcrypt from "bcrypt";


export default  async function Signup(req, res) {
   const client = await clientPromise;
   const db = client.db("CocktailsDB");
 await db.collection('users').findOne({ email: req.body.email })

  // if email exists
  .then((user) => {
    // compare the password entered and the hashed password found
    bcrypt
      .compare(req.body.password, user.password)

      // if the passwords match
      .then((passwordCheck) => {

        // check if password matches
        if(!passwordCheck) {
          return res.status(400).send({
            message: "Passwords does not match",
            error,
          });
        }

        //   create JWT token
        const token = jwt.sign(
          {
            userId: user._id,
            userEmail: user.email,
          },
          "RANDOM-TOKEN",
          { expiresIn: "24h" }
        );

        //   return success response
        res.redirect(302, '/cocktails')
        console.log(token)
      })
      // catch error if password does not match
      .catch((error) => {
        res.status(400).send({
          message: "Passwords does not match",
          error,
        });
      });
  })
  // catch error if email does not exist
  .catch((e) => {
    res.status(404).send({
      message: "Email not found",
      e,
    });
  });
}