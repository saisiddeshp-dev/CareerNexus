# 🚀 Cloudflare Pages + D1 Deployment Guide

This guide will walk you through deploying **Career Compass Alpha** to Cloudflare Pages with a D1 SQL database.

## Prerequisites
- A Cloudflare account.
- The project code pushed to a **GitHub repository**.

---

## Step 1: Create the D1 Database
You need a database to store user information.

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Go to **Workers & Pages** -> **D1**.
3. Click **Create Database** -> **Dashboard**.
4. Name it `career_compass_db`.
5. Click **Create**.
6. **Copy the "Database ID"** (a long string like `550e8400-e29b-41d4-a716-446655440000`).

---

## Step 2: Update Configuration
In the project root, open the `wrangler.toml` file and replace the placeholder with your new Database ID:

```toml
# wrangler.toml
[[d1_databases]]
binding = "DB"
database_name = "career_compass_db"
database_id = "YOUR_DATABASE_ID_HERE"  # Paste your ID here
```

---

## Step 3: Deploy to Cloudflare Pages
Now, connect your GitHub repo to Cloudflare Pages.

1. Go to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
2. Select your GitHub repository.
3. **Build Settings**:
   - **Framework preset**: `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. **Environment Variables**:
   - (Optional) If you have any secrets, add them here.
5. Click **Save and Deploy**.

---

## Step 4: Bind the Database to Pages
Once the project is created in Pages, you must "link" the D1 database to it.

1. In the Pages project dashboard, go to **Settings** -> **Functions**.
2. Scroll down to **D1 database bindings**.
3. Click **Add binding**.
4. **Variable name**: `DB`
5. **D1 database**: Select `career_compass_db`.
6. Click **Save**.
7. **Important**: You must do this for both **Production** and **Preview** environments.

---

## Step 5: Run Database Migrations
Finally, set up the tables in your live database. Run these commands in your local terminal:

1. **Generate migrations**:
   ```bash
   npm run db:generate
   ```
2. **Apply migrations to production**:
   ```bash
   npx wrangler d1 migrations apply career_compass_db --remote
   ```

---

## ✅ You're Done!
Your app should now be live at `https://your-project.pages.dev`. Every time you push to GitHub, Cloudflare will automatically build and deploy your changes.

---

### Local Development
To test locally using the Cloudflare emulator:
1. Run `npm install`
2. Run `npm run dev`
