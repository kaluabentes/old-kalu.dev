# How to build a static website with Next.js

Today we'll gona build a fresh application using NextJS v9 that in the current time its the latest version, lets build static website following simple steps, so first we:

## Check prequisites

We gonna need:

- NodeJS
- Git

## Setup boilerplate

The boilerplate code are the starting point from where we want to come from, and estabilishs a base where our application will stay stable, run the following commands to initialize a Node.js project:

`> mkdir my-awesome-website`
`> cd my-awesome-website`
`> npm init -y` To initialize a new Node.js project
`> git init & git add . & git commit -m 'Initialize repository'` To initialize a new Git repo.

## Installing base dependepencies

`> yarn add next@9.0.5 react@16.9.0 react-dom@16.9.0`

Copy and paste the following commands in `package.json`:

```json
{
  "dev": "next src",
  "build": "next build src",
  "start": "next start src"
}
```
