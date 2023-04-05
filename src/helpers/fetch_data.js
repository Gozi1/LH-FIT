const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function getExercises() {
  const exercises = await prisma.exercise.findMany();
  return exercises;
}
