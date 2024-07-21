import { defineCollection, z } from "astro:content";

const catalog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    category: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    artFront: z.string(),
    artBack: z.string(),
    aboutMusic: z.string().optional(),
    aboutStudio: z.string().optional(),
    aboutArtwork: z.string().optional(),
    linkMp3: z.string().optional(),
    linkFlac: z.string().optional(),
    linkYoutube: z.string().optional(),
    linkBandcamp: z.string().optional(),
    linkSoundcloud: z.string().optional(),
  }),
});

export const collections = { catalog };
