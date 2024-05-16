"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function ProfileButton() {
  const { data: session, status } = useSession();
  console.log("session", session, status);

  // user is NOT connected => button login
  // user is connected => avatar + menu
  // status === "unauthenticated"
  if (!session) {
    return (
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    );
  }

  const onLogout = () => {
    signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={"/img/shadcn_avatar.jpg"} alt="avatar"
            // session.user?.image || 
          />
          <AvatarFallback>{session.user?.name}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={onLogout} className="cursor-pointer">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
