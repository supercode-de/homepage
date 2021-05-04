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
      "/blogs/YouCode,-YouTube,-YouRock!”": { page: "/blogs/[blogItem]" },
      "/blogs/1": { page: "/blogs/[blogItem]" },
      "/blogs/2": { page: "/blogs/[blogItem]" },
      "/blogs/3": { page: "/blogs/[blogItem]" },
      "/blogs/4": { page: "/blogs/[blogItem]" },
      "/blogs/5": { page: "/blogs/[blogItem]" },
      "/blogs/6": { page: "/blogs/[blogItem]" },
      "/blogs/7": { page: "/blogs/[blogItem]" },
      "/blogs/8": { page: "/blogs/[blogItem]" },
      "/blogs/9": { page: "/blogs/[blogItem]" },
    };
  },
};
