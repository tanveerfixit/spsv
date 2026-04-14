# Database Configuration Guide

This guide explains how to configure and use your databases for both local development and production on Hostinger.

## 1. Production Database (Hostinger)

To use your Hostinger MySQL database, update your `.env` file or environment variables on the Hostinger panel with the following:

**Connection URL:**
```env
DATABASE_URL="mysql://u583652021_userspsv:Tani8877@localhost:3306/u583652021_spsv"
```

> [!IMPORTANT]
> - Ensure you use `localhost` if the application is running on the same Hostinger server as the database, or `77.37.35.183` if connecting remotely.
> - The password is now: `Tani8877`.
> - Make sure the user `u583652021_userspsv` has full privileges on the `u583652021_spsv` database.

---

## 2. Local Development (SQLite)

For local development, we use SQLite for simplicity and speed.

**Connection URL:**
```env
DATABASE_URL="file:./dev.db"
```

### Switching Providers
To switch between MySQL and SQLite, update the `provider` in `prisma/schema.prisma`:

**For SQLite (Local):**
```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

**For MySQL (Production):**
```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

> [!WARNING]
> After changing the provider in `schema.prisma`, you MUST run:
> `npx prisma generate`

---

## 3. Useful Commands

### Synchronize Schema
If you change the database or provider, run this to sync your models:
```bash
npx prisma db push
```

### Reset / Seed Database
To reset the local database and add the admin user:
```bash
npm run prisma:seed
```

### Open Database Viewer
To view your data in a browser:
```bash
npx prisma studio
```
