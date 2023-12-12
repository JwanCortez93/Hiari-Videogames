import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: any) {
  const { username, email, password } = await req.json();
  

  const findEmail = await prisma.user.create({
    data: { username, email, password },
  });

  return NextResponse.json(findEmail);
}
