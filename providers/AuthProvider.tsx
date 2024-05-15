"use client"; // Indique que ce fichier doit être exécuté côté client

import { SessionProvider } from "next-auth/react";
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // SessionProvider est un composant fourni par next-auth qui permet de gérer les sessions d'utilisateur. Il enveloppe l'application ou une partie de l'application, fournissant ainsi le contexte d'authentification à tous les composants enfants.
  return <SessionProvider>{children}</SessionProvider>;
}
