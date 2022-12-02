import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "../../../lib/mongodb"
import EmailProvider from "next-auth/providers/email";


export default NextAuth({
  // Configure one or more authentication providers
  adapter:MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
    // ...add more providers here
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    })
  ],

  pages:{
    signIn: "/signin"
  },
  secret: process.env.JWT_SECRET 
})
// export default NextAuth(authOptions)