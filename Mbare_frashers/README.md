# Day One Kit

A small, independent affiliate site with exactly 3 product slots — **Laptops**, **Cellphones**, **Boots** — for freshers. Clicking any product picture (or the "Buy on Amazon" link) opens that product on Amazon through your affiliate link, in a new tab.

This is a plain static site: HTML + CSS + JS, no build step, no database. You manage products by editing one file.

## 1. Before you launch: get your Amazon affiliate ID

1. Sign up at [Amazon Associates](https://affiliate-program.amazon.com/) (or your country's version, e.g. amazon.in for India).
2. Once approved, you'll get a **tracking ID** that looks like `yourname-20`.
3. For any product you want to link to, open it on Amazon, use Amazon's "Get Link" / SiteStripe tool (or manually append `?tag=yourname-20` to the product URL) to generate your affiliate link.

**Important:** Amazon requires every page with affiliate links to disclose this. The footer already includes the required disclosure text — don't remove it.

## 2. Edit your products

Open `public/products.json`. It has 3 arrays: `laptops`, `cellphones`, `boots`. Each product looks like:

```json
{
  "name": "Acer Aspire 3 (Intel i3, 8GB RAM)",
  "note": "Solid all-rounder for classes, notes, and browsing.",
  "price": "₹32,990",
  "image": "https://m.media-amazon.com/images/I/xxxxx.jpg",
  "affiliateLink": "https://www.amazon.in/dp/PRODUCTID?tag=yourname-20"
}
```

- `image`: right-click the product image on Amazon → "Copy image address", or use SiteStripe's image link.
- `affiliateLink`: your affiliate link for that exact product (must include your `tag=`).
- Add or remove products freely — each array can hold as many as you want, the grid adjusts automatically.
- The placeholder entries all say `YOUR-AFFILIATE-TAG` — replace every one before going live, or you won't earn commission.

No code changes needed for routine updates — just edit this JSON file.

## 3. Run it locally (optional, to preview)

Any static file server works, e.g. with Python:

```bash
cd public
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## 4. Deploy to Render

1. Push this folder to a GitHub repo.
2. In Render, click **New +** → **Static Site**.
3. Connect your repo.
4. Set:
   - **Build Command:** (leave blank or `echo "no build needed"`)
   - **Publish Directory:** `public`
5. Click **Create Static Site**. Render will give you a live URL.

(The included `render.yaml` does this automatically if you use Render's "Blueprint" deploy option instead.)

## 5. After launch

- To update products, edit `public/products.json`, commit, and push — Render redeploys automatically.
- Keep the affiliate disclosure in the footer — it's an Amazon Associates and (in most countries) legal requirement.
- Amazon affiliate links typically expire after ~24 hours for tracking purposes, but the `tag=` parameter itself keeps working as long as the product ID is correct — just make sure each `affiliateLink` points to the right product page with your tag.
