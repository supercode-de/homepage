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
        }
    }
}