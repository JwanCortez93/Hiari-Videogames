import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function validateLoginEmail(email: string, username?: string) {
  try {
    const findEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    console.log(findEmail);

    return findEmail;
  } catch (error) {
    console.error("Error occurred while fetching user:", error);
    throw error;
  }
}

export function validatePasswordSignup(password: string) {
  const lowercaseRegex = /^(?=.*[a-z])/;
  const uppercaseRegex = /^(?=.*[A-Z])/;
  const digitRegex = /^(?=.*\d)/;
  const lengthRegex = /.{6,}$/;
  switch (true) {
    case !lengthRegex.test(password):
      return "Password must be at least 6 characters long";
    case !digitRegex.test(password):
      return "Password must have at least one digit";
    case !lowercaseRegex.test(password):
      return "Password must have at least one lowercase letter";
    case !uppercaseRegex.test(password):
      return "Password must have at least one uppercase letter";
    default:
      return false;
  }
}
