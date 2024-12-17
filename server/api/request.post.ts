import prisma from "~~/server/utils/prisma";

export default defineEventHandler(async (event) => {
  const body: any = await readBody<{ name: string; phone: string }>(event);
  body.phone = body.phone.replace(/\D/g, '');
  if (body.phone.length !== 11) {
    throw createError({
      statusCode: 400,
      message: 'Неверный формат номера телефона'
    });
  }
  const bid = await prisma.bid.create({ data: body });
  return bid;
});