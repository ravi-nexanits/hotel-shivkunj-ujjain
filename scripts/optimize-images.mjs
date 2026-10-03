// Converts originals in assets/source into responsive WebP variants in public/images.
// Run `npm run images` after adding or replacing a photo. The custom image loader
// (lib/image-loader.ts) requests `/images/<name>-<width>.webp` for these widths.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC = "assets/source";
const OUT = "public/images";
const WIDTHS = [320, 640, 960, 1280, 1920];
const SKIP = new Set(["logo.png", "logo-mark.png"]);
// Sources that arrive with a white frame baked in
const TRIM = new Set(["mahakal-night.jpg"]);

fs.mkdirSync(OUT, { recursive: true });

for (const file of fs.readdirSync(SRC)) {
  if (SKIP.has(file) || !/\.(png|jpe?g|webp)$/i.test(file)) continue;
  const name = path.parse(file).name;
  for (const w of WIDTHS) {
    let img = sharp(path.join(SRC, file)).rotate();
    if (TRIM.has(file)) {
      const { data, info } = await img.trim({ background: "#ffffff", threshold: 40 }).toBuffer({ resolveWithObject: true });
      img = sharp(data).extract({ left: 4, top: 4, width: info.width - 8, height: info.height - 8 });
    }
    await img
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 74 })
      .toFile(path.join(OUT, `${name}-${w}.webp`));
  }
  console.log("✓", name);
}

// Brand assets: the supplied logo is cream on transparent; derive a maroon version
// for light backgrounds.
const logo = path.join(SRC, "logo.png");
await sharp(logo).toFile(path.join("public", "logo-ivory.png"));
const { width, height } = await sharp(logo).metadata();
const alpha = await sharp(logo).extractChannel("alpha").toBuffer();
await sharp({ create: { width, height, channels: 3, background: "#6E1F2B" } })
  .joinChannel(alpha)
  .png()
  .toFile(path.join("public", "logo-maroon.png"));

const mark = path.join(SRC, "logo-mark.png");
await sharp(mark).resize(512).png().toFile("app/icon.png");
await sharp(mark).resize(180).flatten({ background: "#FBF6EE" }).png().toFile("app/apple-icon.png");

// Default Open Graph image
await sharp(path.join(SRC, "room-wide-warm.png"))
  .resize(1200, 630, { fit: "cover" })
  .jpeg({ quality: 80 })
  .toFile(path.join("public", "og-default.jpg"));

console.log("Brand assets written.");
