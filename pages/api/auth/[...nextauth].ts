import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";

import { getUserByEmailAndPassword } from "@/utils/usersFuncs";

type AuthUser = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
};

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
          try {
            const user = await getUserByEmailAndPassword(
              credentials.username,
              credentials.password
            );

            if (user) {
              return Promise.resolve(user);
            }

            return Promise.resolve(null);
          } catch (err) {
            console.log(err);
          }
        }
      },
    }),
  ],
  //   Os dados retornados de authorize são armazenados em "user" utilizado abaixo.
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user as AuthUser;
      }

      return session;
    },
  },
  pages: {
    signIn: "/auth/Login",
  },
};

export default NextAuth(authOptions);
