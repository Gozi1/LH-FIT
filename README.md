This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First , install packages
```bash
npm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Set up Prisma and connect PostgreSQL database

- Please make sure you have installed Prisma via "npm i".

- Bootstrap a basic Prisma setup: ```npx prisma init```.

- Go to your psql terminal, create a new database and modify infomations in the ".env" file. The format would be: "mysql://USER:PASSWORD@HOST:PORT/DATABASE"

- Use ```npx prisma db push``` to create tables in your database. You should see the following outpot:
```
Environment variables loaded from /Users/nikolasburk/Desktop/nextjs-guide/blogr-starter/.env 
Prisma schema loaded from prisma/schema.prisma

🚀  Your database is now in sync with your schema. Done in 2.10s
```

- Inserting the seed data via this code:
```
node prisma/seed.js
```

- Update Prisma Client everytime Prisma schema file is changing:
```
npx prisma generate
```

- View and check the database via this method:
```
npx prisma studio
```