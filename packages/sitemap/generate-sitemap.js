const fs = require("fs");
const axios = require("axios");
const path = require("path");

const BASE_URL = "https://roxanneweidele.com"; // Change to your site's base URL
const API_URL = "https://api.roxanneweidele.com/published";

const OUTPUT_DIR = path.resolve(__dirname, "public");
const OUTPUT_PATH = path.join(OUTPUT_DIR, "sitemap.xml");

const staticRoutes = ["/", "/artwork", "/artwork/medium/oils", "/artwork/medium/pastels", "/about", "/currently-on-view", "/contact"];

async function fetchArtworkSlugs() {
  try {
    const { data } = await axios.get(API_URL);
    return data.artwork.map((item) => `/artwork/${item.slug}`);
  } catch (err) {
    console.error("Error fetching artwork data:", err.message);
    return [];
  }
}

function generateUrlEntry(loc, lastmod = new Date()) {
  return `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${lastmod.toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
}

async function generateSitemap() {
  const artworkRoutes = await fetchArtworkSlugs();
  const allRoutes = [...staticRoutes, ...artworkRoutes];

  const urlEntries = allRoutes.map((route) => generateUrlEntry(route)).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlEntries}
  </urlset>`;
  console.log(sitemap);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, sitemap.trim());
  console.log(`✅ Sitemap generated at ${OUTPUT_PATH}`);
}

generateSitemap();
