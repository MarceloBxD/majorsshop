import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials, req) => {
        if (credentials) {
          if (credentials.username !== "marcelo.bracet1@gmail.com") {
            return Promise.resolve(null);
          }
        }

        return Promise.resolve({
          id: "1",
          name: "Marcelo Bracet",
          email: "marcelo.bracet1@gmail.com",
          avatar: "https://github.com/marcelobxd.png",
        });
      },
    }),
  ],
  pages: {
    signIn: "/auth/Login",
  },
};

export default NextAuth(authOptions);
