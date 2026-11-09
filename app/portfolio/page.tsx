import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PortfolioClient, { type PortfolioItem } from "./PortfolioClient";

export const revalidate = 60;

const query = `{
  "settings": *[_type == "siteSettings"][0]{ whatsapp },
  "clients": *[_type == "client"] | order(order asc){
    _id, name, category, year, description, logo,
    gallery[]{ image, description }
  }
}`;

export default async function Portfolio() {
  const { settings, clients } = await client.fetch(query);

  const items: PortfolioItem[] = clients.map((c: any) => ({
    id: c._id,
    title: c.name,
    image: urlFor(c.logo).width(800).url(),
    description: c.description ?? "",
    category: c.category ?? "",
    year: c.year ?? "",
    whatsapp: settings?.whatsapp ?? "6285777557575",
    galleryImages: (c.gallery ?? []).map((g: any) => ({
      image: urlFor(g.image).width(1600).url(),
      description: g.description ?? "",
    })),
  }));

  return <PortfolioClient portfolioItems={items} />;
}
