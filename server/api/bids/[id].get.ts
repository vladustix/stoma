import prisma from "~~/server/utils/prisma";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    return {
      statusCode: 400,
      body: {
        success: false,
        message: 'Неверный id заявки',
      }
    };
  }
  const bids = await prisma.bid.findFirst({
    where: {
      id: parseInt(id),
    }
  });
  return bids;
});