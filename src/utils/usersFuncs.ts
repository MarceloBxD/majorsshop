import prisma from "../../libs/prisma";

export const getUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
      password,
    },
  });

  if(user)
  return user;

    return null;
};
