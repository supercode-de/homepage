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
            '/blogs/0': { page: '/blogs/0' },
            '/blogs/1': { page: '/blogs/1' },
            '/blogs/2': { page: '/blogs/2' },
            '/blogs/3': { page: '/blogs/3' },
        }
    }
}