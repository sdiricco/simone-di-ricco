import { defineUserConfig } from "vuepress";
import { localTheme } from "./theme";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchPlugin } from "@vuepress/plugin-search";

export const themeOptions: DefaultThemeOptions = {
  lastUpdated: true,
  contributors: true,
  logo: "/images/hero.png",
  repo: "sdiricco/simone-di-ricco",
  editLinkText: "Edit this page on GitHub",
  docsDir: "docs",
  contributorsText: "Author",
  navbar: [
    // NavbarGroup
    {
      text: "Coding",
      children: [
        {
          text: "Arduino",
          link: "/coding/arduino/README.md",
        },
        {
          text: "C++",
          link: "/coding/cpp/README.md",
        },
        {
          text: "Rust",
          link: "/coding/rust/README.md",
        },
        {
          text: "RegEx",
          link: "/coding/regex/README.md",
        },
        {
          text: "Frontend",
          link: "/coding/frontend/README.md",
        },
        {
          text: "Node.js",
          link: "/coding/nodejs/README.md",
        },
        {
          text: "Typescript",
          link: "/coding/typescript/README.md",
        },
        {
          text: "Raspberry pi pico",
          link: "/coding/raspberry-pi-pico/README.md",
        },
        {
          text: "Python",
          link: "/coding/python/README.md",
        },
        {
          text: "Git",
          link: "/coding/git/README.md",
        },
        {
          text: "Ux crash course",
          link: "/coding/ux-crash-course/README.md",
        },
        {
          text: "Ux",
          link: "/coding/ux/README.md",
        },
      ],
    },
  ],
  sidebar: {
    "/coding/arduino/": [
      {
        text: "Arduino",
        collapsible: true,
        children: [
          "/coding/arduino/01.md",
          "/coding/arduino/02.md",
          "/coding/arduino/03.md",
          "/coding/arduino/04.md",
          "/coding/arduino/05.md",
          "/coding/arduino/06.md",
          "/coding/arduino/07.md",
          "/coding/arduino/08.md",
        ],
      },
      {
        text: "Reference",
        collapsible: true,
        children: ["/coding/arduino/README.md"],
      },
    ],
    "/coding/rust/": ["/coding/rust/README.md"],
    "/coding/cpp/": ["/coding/cpp/README.md"],
    "/coding/regex/": ["/coding/regex/README.md"],
    "/coding/frontend/": [
      {
        text: "Frontend",
        collapsible: true,
        children: ["/coding/frontend/README.md", "/coding/frontend/01.md", "/coding/frontend/02.md", "/coding/frontend/03.md"],
      },
    ],
    "/coding/nodejs/": ["/coding/nodejs/README.md"],
    "/coding/typescript/": ["/coding/typescript/README.md"],
    "/coding/raspberry-pi-pico/": ["/coding/raspberry-pi-pico/README.md"],
    "/coding/python/": ["/coding/python/README.md"],
    "/coding/git/": ["/coding/git/README.md"],
    "/coding/ux/": ["/coding/ux/README.md"],
    "/coding/ux-crash-course/": [
      {
        text: "Ux crash course",
        children: [
          "README.md",
          "00-index.md",
          "01-introduzione.md",
          "02-scenario.md",
          "03-approcciarsi-al-design-della-user-experience.md",
          "04-strumenti-per-la-ux.md",
          "05-ux-il-processo-di-design.md",
          "06-ux-preparare-il-lavoro.md",
          "07-ux-content-first.md",
          "08-information-architecture.md",
          "09-sitemap-flowchart-layout.md",
          "10-creare-i-wireframes.md",
          "11-ux-style-tiles-dalla-ux-alla-ui.md",
          "12-introduzione-allo-ui-design.md",
          "13-ui-gli-strumenti.md",
        ],
      },
    ],
  },
};

export default defineUserConfig({
  lang: "en-US",
  title: "Ciao!",
  description: "Qui trovi i miei appunti di informatica",
  plugins: [
    searchPlugin({
      // options
    }),
  ],
  theme: localTheme(themeOptions),
});
