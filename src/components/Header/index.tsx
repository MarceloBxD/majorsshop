import React from "react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Header: React.FC = () => {
  return (
    <header className="flex w-[100%] justify-between">
      <div>
        <Input placeholder="Filtre produtos..." className="" type="text" />
      </div>
      <div className="flex gap-5">
        <nav>
          <ul className="flex gap-3">
            <li>Categorias</li>
            <li>Brands</li>
            <li>Blog</li>
            <li>Login</li>
          </ul>
        </nav>
        <Avatar>
          <AvatarImage src="https://github.com/marcelobxd.png" />
          <AvatarFallback>MB</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
