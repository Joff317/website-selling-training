import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// Les crochets ...nextAuth sont utilisé pour le callback pour que la librairie récupère bien la chose
