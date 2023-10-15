import { NextApiHandler } from "next";

import prisma from "../../../libs/prisma";

const getUsers: NextApiHandler = async (req, res) => {
  const users = await prisma.user.findMany();

  if (users) {
    res.status(200).json(users);
  }

  res.status(404).json({
    message: "No users found",
  });
};

const createUser: NextApiHandler = (req, res) => {};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      return getUsers(req, res);
    case "POST":
      return createUser(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
