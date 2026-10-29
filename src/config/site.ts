export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
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
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://do-disciplinary-committee-members-dream-of-succubi.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/4233960/Do_Disciplinary_Committee_Members_Dream_of_Succubi/",
  heroVideoId: "TCO-SOJs13E", // Official Kagura Games trailer
  social: {
    youtube: "https://www.youtube.com/kaguragames",
    twitter: "https://x.com/KaguraGames",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
