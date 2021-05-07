module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/kurse": { page: "/kurse" },
      "/workshops": { page: "/workshops" },
      "/supercodeworkshop": { page: "/supercodeworkshop" },
      "/beratungsformular": { page: "/beratungsformular" },
      "/dsgvo": { page: "/dsgvo" },
      "/impressum": { page: "/impressum" },
      "/team": { page: "/team" },
      "/leitbild": { page: "/leitbild" },
      // '/blogs/0': { page: '/blogs/0', query: { title: '0' } },
      "/blogs/YouCode,-YouTube,-YouRock!": { page: "/blogs/[blogItem]" },
      '/blogs/"Als-Web-Entwicklerin-werde-ich-mein-ganzes-Leben-lang-lernen---und-ich-habe-gelernt-wie-das-geht!"': { page: "/blogs/[blogItem]" },
      '/blogs/Crazy,-cool-people!': { page: "/blogs/[blogItem]" },
      '/blogs/SuperNatalie-goes-SuperCode': { page: "/blogs/[blogItem]" },
      '/blogs/Hack-your-Life---1.-SuperHackathon-bei-SuperCode-in-Düsseldorf': { page: "/blogs/[blogItem]" },
      '/blogs/Lockdown-light:-Bildung-goes-digital---again!': { page: "/blogs/[blogItem]" },
      '/blogs/Cocktails,-Curry-und-Kryptowährung---Halbzeit-beim-Fullstack-Bootcamp-Webentwicklung': { page: "/blogs/[blogItem]" },
      '/blogs/"Coden-ist-nicht-nur-technisch,-sondern-auch-unglaublich-kreativ,-kommunikativ-und-logisch."': { page: "/blogs/[blogItem]" },
      "/blogs/Ist-das-Kunst-oder-kann-das-web": { page: "/blogs/[blogItem]" },
      '/blogs/Wie-sich-die-IT-Branche-durch-Women-in-Tech-erneuern-lässt': { page: "/blogs/[blogItem]" },
    };
  },
};
