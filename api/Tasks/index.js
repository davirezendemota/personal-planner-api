import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ['query']
})

export async function read(req, res) {

  await prisma.task.findMany()
    .then(tasks => {
      res.status(200).json({ data: tasks })
    })

}
