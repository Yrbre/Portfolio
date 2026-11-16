import type { Icon } from "@phosphor-icons/react";
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TiktokLogoIcon,
} from "@phosphor-icons/react";

export type Social = {
  name: string;
  handle: string;
  url: string; // kosongkan ("") untuk menyembunyikan
  icon: Icon;
};

// Isi url & handle akun kamu. Item dengan url kosong tidak ditampilkan.
export const socials: Social[] = [
  {
    name: "GitHub",
    handle: "@Yrbre",
    url: "https://github.com/Yrbre",
    icon: GithubLogoIcon,
  },
  {
    name: "LinkedIn",
    handle: "Bariq Fajar",
    url: "https://www.linkedin.com/in/bariq-fajar-85b410201/",
    icon: LinkedinLogoIcon,
  },
  { name: "Instagram", handle: "", url: "", icon: InstagramLogoIcon },
  { name: "TikTok", handle: "", url: "", icon: TiktokLogoIcon },
  {
    name: "Email",
    handle: "bariqfajar60@gmail.com",
    url: "mailto:bariqfajar60@gmail.com",
    icon: EnvelopeSimpleIcon,
  },
].filter((s) => s.url);
