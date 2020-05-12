module.exports = {
    devIndicators: {
        autoPrerender: false,
    },
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            // '/about': { page: '/about' }

        }
    }
}