import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Make API request and retrieve JSON data

const options = {
  method: 'GET',
  url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
  params: {name: "EZ-bar spider curl"},
  headers: {
    'X-RapidAPI-Key': '87b5ef7ecemsh3744aa57e06b7f7p1b5fffjsn04eef49b9efc',
    'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
  }
};

const response = await axios.request(options);
const APIData = await response.data;

console.log(APIData);

// Connect to Postgresql database using Prisma and insert data
async function main() {
  await prisma.$connect();
  try {
    await prisma.Exercise.createMany({ data: APIData });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
