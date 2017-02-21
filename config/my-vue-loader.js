module.exports = function myVueLoader() {

    return () => ({

        module: {
            rules: [ {
                test: /\.vue$/,
                loader: 'vue-loader'
            } ]
        },

        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.common.js'
            }
        }

    })

}
