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
        }
    }
}