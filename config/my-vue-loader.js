module.exports = function myVueLoader() {

    return () => ({

        module: {
            loaders: [ {
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
