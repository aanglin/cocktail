import clientPromise from "../../lib/mongodb";
import bcrypt from "bcrypt";



export default async function Signup(req, res) {
  const client = await clientPromise;
   const db = client.db("CocktailsDB");
  const {email, password} = req.body;
  const hash = await bcrypt.hash(password, 10)
  await db.collection('users').insertOne({
    email,
    password: hash
  });
  res.redirect(302 , '/')
   

  
}