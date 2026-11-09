// One-off import: uploads local product images and creates Sanity documents.
// Run: node --env-file=.env.local scripts/import-to-sanity.mjs
import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imgDir = path.join(root, "public/assets/img/product");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const cache = new Map();
async function upload(file) {
  if (cache.has(file)) return cache.get(file);
  const asset = await client.assets.upload("image", createReadStream(path.join(imgDir, file)), { filename: file });
  const ref = { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  cache.set(file, ref);
  console.log("uploaded", file);
  return ref;
}

const clients = [
  {
    key: "chmb", name: "CHMB", category: "Contemporary Casual", year: "2024",
    description: "Koleksi workwear dengan sentuhan streetwear contemporary. CHMB menghadirkan gaya kasual yang tetap profesional, cocok untuk berbagai occasion dan environment.",
    logo: "chmblogo.jpg",
    gallery: [
      ["chmbpants1.jpeg", "CHMB Baggy Pants dengan logo khas di bagian depan, material denim berkualitas tinggi dengan cutting relaxed fit."],
      ["chmbpants2.jpeg", "Detail belakang CHMB Pants dengan aksen star patch di kedua saku, finishing premium dan jahitan rapi."],
      ["chmbpants3.webp", "CHMB Pants tampilan keseluruhan, memperlihatkan siluet baggy yang khas dengan proporsi modern dan nyaman dipakai."],
      ["chmbpants4.webp", "Detail konstruksi CHMB Pants, jahitan presisi dan material premium yang memastikan daya tahan jangka panjang."],
      ["chmbpants5.webp", "CHMB Pants dari sudut berbeda, menampilkan detail pocket dan finishing yang rapi dengan karakter streetwear kuat."],
      ["chmbpants6.webp", "Koleksi terbaru CHMB dengan sentuhan kontemporer, cocok untuk berbagai occasion dari casual hingga semi-formal."],
      ["chmbpants7.jpeg", "CHMB Pants edisi spesial dengan detail unik yang mencerminkan identitas brand streetwear contemporary."],
      ["chmbpants8.jpeg", "Tampilan close-up material CHMB Pants, tekstur denim premium dengan finishing berkualitas tinggi."],
      ["chmbpants9.jpeg", "CHMB Pants dengan cutting relaxed fit yang memberikan kenyamanan maksimal untuk aktivitas sehari-hari."],
      ["chmbpants10.jpeg", "Detail aksen dan patch CHMB yang menjadi signature look dari koleksi ini, bold namun tetap elegan."],
      ["chmbpants11.jpeg", "CHMB Pants dipadukan dengan berbagai gaya, versatile dan cocok untuk berbagai kesempatan."],
      ["chmbpants12.jpeg", "Sudut pandang full-length CHMB Pants memperlihatkan proporsi dan siluet yang sempurna."],
      ["chmbpants13.jpeg", "Detail waistband dan konstruksi CHMB Pants dengan jahitan presisi dan material tahan lama."],
      ["chmbpants14.jpeg", "CHMB Pants dari koleksi terbaru, memadukan estetika streetwear dengan kualitas produksi premium."],
      ["chmbpants15.jpeg", "Tampilan keseluruhan CHMB Pants dengan lighting natural, memperlihatkan warna dan tekstur asli material."],
      ["chmbpants16.jpeg", "CHMB Pants detail bagian kaki, cut dan hem yang rapi dengan finishing berkelas."],
      ["chmbpants17.jpeg", "Koleksi lengkap CHMB Pants, setiap piece dibuat dengan standar kualitas tinggi untuk local brand yang ingin tampil beda."],
    ],
  },
  {
    key: "souleve", name: "SOULEVE", category: "Outdoor & Heavy Duty", year: "2024",
    description: "Brand workwear yang mengedepankan kenyamanan dan durabilitas. SOULEVE dirancang khusus untuk aktivitas outdoor dan heavy duty dengan standar kualitas internasional.",
    logo: "soulevelogo.jpg",
    gallery: [
      ["soulevebsh.jpg", "Board Short SOULEVE dengan quick-dry material, ideal untuk aktivitas water sports dan beach activities."],
      ["soulevebs.jpg", "Detail board short dengan drawstring elastic waist dan side pocket waterproof untuk penyimpanan aman."],
    ],
  },
  {
    key: "lamerence", name: "LAMERENCE", category: "Premium Workwear", year: "2024",
    description: "Koleksi premium workwear dengan desain modern dan material berkualitas tinggi. LAMERENCE menghadirkan kombinasi sempurna antara style dan functionality untuk kebutuhan profesional Anda.",
    logo: "lamerencelogo.jpg",
    gallery: [
      ["lamerenceb.jpeg", "Baggy Pants LAMERENCE dengan material premium, nyaman dipakai seharian dengan detail stitching yang rapi."],
      ["lamerenceb2.jpeg", "Detail baggy pants dengan pocket fungsional dan aksen logo yang subtle namun tetap terlihat elegan."],
      ["lamerencej.jpeg", "Jorts Pants LAMERENCE perfect untuk casual outing, kombinasi denim berkualitas dengan cutting modern."],
      ["lamerencej2.jpeg", "Detail finishing jorts dengan washing effect yang natural, menambah karakter vintage pada produk."],
    ],
  },
  {
    key: "maison-montaire", name: "MAISON MONTAIRE", category: "Premium Fashion", year: "2024",
    description: "Koleksi premium dengan estetika Parisian yang elegan. Maison Montaire menghadirkan potongan yang sophisticated dan material pilihan untuk tampilan yang timeless.",
    logo: "maisonlogo.jpeg",
    gallery: [
      ["maisonpants1.jpeg", "Maison Montaire Pants dengan potongan premium, material pilihan berkualitas tinggi dengan finishing yang sempurna dan elegan."],
      ["maisonpants2.jpeg", "Detail konstruksi Maison Montaire Pants, jahitan presisi dan silhouette yang timeless cocok untuk berbagai kesempatan."],
    ],
  },
];

const services = [
  ["board-short", "Board Short", "soulevebsh.jpg"],
  ["baggy-pants", "Baggy Pants", "lamerenceb.jpeg"],
  ["jorts-pants", "Jorts Pants", "lamerencej.jpeg"],
];

await client.createOrReplace({
  _id: "siteSettings", _type: "siteSettings",
  whatsapp: "6285777557575", instagram: "martensite.workwear",
  email: "martensiteworkwear@gmail.com", moq: 24,
});
console.log("siteSettings ok");

for (const [i, c] of clients.entries()) {
  await client.createOrReplace({
    _id: `client-${c.key}`, _type: "client",
    name: c.name, category: c.category, year: c.year, description: c.description, order: i + 1,
    logo: await upload(c.logo),
    gallery: await Promise.all(
      c.gallery.map(async ([file, description], n) => ({
        _key: `${c.key}-${n}`, _type: "galleryItem", image: await upload(file), description,
      }))
    ),
  });
  console.log("client ok:", c.name);
}

for (const [i, [key, name, file]] of services.entries()) {
  await client.createOrReplace({
    _id: `service-${key}`, _type: "service", name, order: i + 1, image: await upload(file),
  });
  console.log("service ok:", name);
}
console.log("DONE");
