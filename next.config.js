module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/404": { page: "/404" },
      "/kurse": { page: "/kurse" },
      "/workshops": { page: "/workshops" },
      // workshop Unterseiten für die Weiterleitung zum WS Video Call
      "/supercodeworkshop": { page: "/supercodeworkshop" },
      "/uxuidesignworkshop": { page: "/uxuidesignworkshop" },
      "/beratung-coding": { page: "/beratungsformular-coding" },
      "/beratungsformular": { page: "/beratungsformular-coding" },
      "/beratung-design": { page: "/beratungsformular-design" },
      "/team": { page: "/team" },
      "/leitbild": { page: "/leitbild" },
      "/dsgvo": { page: "/dsgvo" },
      "/impressum": { page: "/impressum" },
      // '/blogs/0': { page: '/blogs/0', query: { title: '0' } },
      "/kurse/fullstack": { page: "/fullstack_kurs" },
      "/kurse/frontend": { page: "/frontend-kurs" },
      "/kurse/ux-ui-kurs": {page:"/ux-ui-kurs"},
      "/danke": { page: "/danke" },
      "/blog": { page: "/blog" },
      "/blog/YouCode-YouTube-YouRock!": { page: "/blog/[blogItem]" },
      "/blog/Als-Web-Entwicklerin-werde-ich-mein-ganzes-Leben-lang-lernen---und-ich-habe-gelernt-wie-das-geht!": { page: "/blog/[blogItem]" },
      "/blog/Crazy-cool-people!": { page: "/blog/[blogItem]" },
      "/blog/SuperNatalie-goes-SuperCode": { page: "/blog/[blogItem]" },
      "/blog/Hack-your-Life---1-SuperHackathon-bei-SuperCode-in-Düsseldorf": { page: "/blog/[blogItem]", },
      "/blog/Lockdown-light-Bildung-goes-digital---again!": { page: "/blog/[blogItem]", },
      "/blog/Cocktails-Curry-und-Kryptowährung---Halbzeit-beim-Fullstack-Bootcamp-Webentwicklung": { page: "/blog/[blogItem]" },
      "/blog/Coden-ist-nicht-nur-technisch-sondern-auch-unglaublich-kreativ-kommunikativ-und-logisch!": { page: "/blog/[blogItem]" },
      "/blog/Ist-das-Kunst-oder-kann-das-web": { page: "/blog/[blogItem]" },
      "/blog/wie-sich-die-it-branche-durch-women-in-tech-erneuern-lässt": { page: "/blog/[blogItem]", },
      "/blog/Vom-Pfleger-zum-Webentwickler-in-sieben-Monaten": { page: "/blog/[blogItem]", },
      "/blog/Mein-Herz-schlug-schon-immer-für-Design": { page: "/blog/[blogItem]", },
      "/blog/How-to-design-with-love-–-Der-neue-UX-UI-Design-Kurs-bei-SuperCode-zeigt-es-dir": { page: "/blog/[blogItem]" },
      "/blog/IT-Frauen-WANTED!-Starte-2022-als-Webentwicklerin-mit-dem-SuperStipendium-Frauen-in-Tech!": { page: "/blog/[blogItem]" },
      "/blog/Es-ist-einfach-total-schön-ein-Teil-der-persönlichen-Weiterentwicklung-von-Menschen-zu-sein": { page: "/blog/[blogItem]" },
      "/blog/Ich-bin-dankbar-dass-es-Supercode-gibt-und-sich-Menschen-die-Zeit-dafür-nehmen-anderen-etwas-beizubringen": { page: "/blog/[blogItem]" },
      "/blog/SuperCode-hat-laufen-gelernt-sich-hier-und-da-mal-gestoßen-und-steht-jetzt-selbstbewusst-im-Bildungsmarkt": { page: "/blog/[blogItem]" },
      "/blog/Zuerst-denkt-man-das-wäre-niemals-zu-schaffen-und-dann-ist-der-Themenblock-vorüber-und-man-kann-es-plötzlich-doch": { page: "/blog/[blogItem]" },
    };
  },
};
