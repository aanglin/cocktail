import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "../../../lib/mongodb"


export default NextAuth({
  // Configure one or more authentication providers
  adapter:MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET 
})
// export default NextAuth(authOptions)