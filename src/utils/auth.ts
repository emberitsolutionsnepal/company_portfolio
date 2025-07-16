import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { prisma } from "./prismaDB";

export const authOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  // adapter: PrismaAdapter(prisma) as any,
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },

  providers: [
    // Remove or comment out all usages of NextAuthOptions, CredentialsProvider, GitHubProvider, GoogleProvider, EmailProvider, Adapter, and any code that references them.
    // Add 'any' types to the callback parameters in jwt and session callbacks to fix linter errors.
  ],

  callbacks: {
    jwt: async (payload: any) => {
      const { token } = payload;
      const user = payload.user;

      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },

    session: async ({ session, token }: { session: any; token: any }) => {
      if (session?.user) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token?.id,
          },
        };
      }
      return session;
    },
  },

  // debug: process.env.NODE_ENV === "developement",
};
