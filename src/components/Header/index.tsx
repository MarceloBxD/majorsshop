"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const navlinks = [
  {
    id: 1,
    label: "Categorias",
    link: "",
  },
  {
    id: 2,
    label: "Brands",
    link: "",
  },
  {
    id: 3,
    label: "Blog",
    link: "/blog",
  },
];

export const Header: React.FC = () => {
  const { data: session, status: authStatus } = useSession();

  return (
    <header className="flex h-fit w-[100%] justify-between">
      <div>
        <Input
          placeholder="Filtre produtos..."
          className="w-[420px] "
          type="text"
        />
      </div>
      <div className="flex gap-5">
        <nav className="items-center gap-3 flex">
          <ul className="flex gap-3">
            {navlinks.map((link) => (
              <Link
                href={
                  link.link == "/blog" && authStatus === "unauthenticated"
                    ? "/auth/Login"
                    : link.link
                }
                key={link.id}
              >
                <li className="cursor-pointer">{link.label}</li>
              </Link>
            ))}
          </ul>
          {authStatus === "authenticated" ? (
            <Button onClick={() => signOut()} variant="destructive">
              Sair
            </Button>
          ) : (
            <Button
              className="rounded-xl bg-[#212121]"
              onClick={() => signIn()}
              variant="default"
            >
              Login
            </Button>
          )}
        </nav>
        {authStatus === "authenticated" && (
          <div className="flex items-center gap-3 shadow-md p-2">
            <h3>Olá, {session?.user?.name}</h3>
            <Avatar className="cursor-pointer">
              <AvatarImage src={session?.user?.avatar} />
              <AvatarFallback>MB</AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    </header>
  );
};
