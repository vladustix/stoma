import prisma from "~~/server/utils/prisma";

export default defineEventHandler(async (event) => {
  const bids = await prisma.bid.findMany({
    orderBy: {
      updatedAt: "desc",
    }
  });
  return bids;
});