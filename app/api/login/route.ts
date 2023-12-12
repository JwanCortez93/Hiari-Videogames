import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: any) {
  const { email } = await req.json();

  const findEmail = await prisma.user.findUnique({ where: { email } });

  return NextResponse.json(!!findEmail);
}
