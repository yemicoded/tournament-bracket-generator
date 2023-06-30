This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tournament Bracket Generator
Tournament Bracket Generator that allow users to create a single-elimination tournament bracket by entering the number of participants and their names.

## Implementation
-Frontend
  Implement a form where users can enter the number of participants (a power of 2) and their names.
  Generate a single-elimination tournament bracket based on the number of participants entered.
  Display the bracket visually, including participant names and match results (initially empty).
  Allow users to enter match results by updating the bracket.
  
- Backend
  Implement a firebase integration that stores the tournament bracket state as match progresses, structure, and match results.
You should store all details on firebase on the creation of a new bracket, updation of match results, and retrieval of the current bracket state.
Use appropriate data structures and functions to manage the bracket and match results.

## Packages Installation
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Vist [http://localhost:3000](http://localhost:3000) with your browser to view live project.
