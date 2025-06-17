// Import the SessionStrategy type
import { AuthOptions, SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
    async authorize(
      credentials: { username?: string; password?: string } | undefined
    ): Promise<{ id: string; name: string } | null> {
      if (
        credentials?.username === "admin" &&
        credentials?.password === "1234"
      ) {
        return { id: "1", name: "Admin" };
      }
      return null;
    },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy, // 👈 explicitly tell TypeScript it's valid
  },
};
