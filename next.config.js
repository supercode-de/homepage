module.exports = {
    devIndicators: {
        autoPrerender: false,
    },
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/kurse': { page: '/kurse' },
            '/workshops': { page: '/workshops' },
            '/supercodeworkshop': { page: '/supercodeworkshop' },
            '/beratungsformular': { page: '/beratungsformular' },
            '/dsgvo': { page: '/dsgvo' },
            '/impressum': { page: '/impressum' },
            '/bootcamp': { page: '/bootcamp' },
            '/kontakt': { page: '/kontakt' },
            '/team': { page: '/team' },
            '/leitbild': { page: '/leitbild' },
            // '/blogs/0': { page: '/blogs/0', query: { title: '0' } },
            '/blogs/0': { page: '/blogs/[blogItem]' },
            '/blogs/1': { page: '/blogs/[blogItem]' },
            '/blogs/2': { page: '/blogs/[blogItem]' },
            '/blogs/3': { page: '/blogs/[blogItem]' },
            '/blogs/4': { page: '/blogs/[blogItem]' },
            '/blogs/5': { page: '/blogs/[blogItem]' },
        }
    }
}