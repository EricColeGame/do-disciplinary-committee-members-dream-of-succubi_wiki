export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  publisherUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    steamCommunity?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Do Disciplinary Committee Members Dream of Succubi Wiki",
  shortName: "Do Disciplinary Committee Members Dream of Succubi",
  logoText: "D",
  tagline: "Characters, Story, Gameplay & Guides",
  description: "A fan-made guide to Milky Way's demon-pact RPG, localised by Kagura Games, covering Iroha, Lily, the Dream Corridor, combat and progression.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://do-disciplinary-committee-members-dream-of-succubi.wiki",
  supportEmail: "support@do-disciplinary-committee-members-dream-of-succubi.wiki",
  gameUrl: "https://store.steampowered.com/app/4233960/Do_Disciplinary_Committee_Members_Dream_of_Succubi/",
  publisherUrl: "https://www.kaguragames.com/",
  heroVideoId: "TCO-SOJs13E", // Official Kagura Games trailer
  social: {
    steamCommunity: "https://steamcommunity.com/app/4233960/discussions/",
    youtube: "https://www.youtube.com/@KaguraGames",
    twitter: "https://x.com/KaguraGames",
  },
  locales: ["en", "ja", "ko", "es"],
  defaultLocale: "en",
};
