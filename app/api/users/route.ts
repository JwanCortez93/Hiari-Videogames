import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const getUsers = await prisma.user.findMany();
  

  return NextResponse.json(getUsers);
}
