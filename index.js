;(function() {


    var api = {
        install(Vue, options) {

            Vue.merge_component = (ids, requires) => {

                var _Promise = Vue.Promise || Promise ,
                    _res = [] , load
                if (!_Promise) console.error('Browser does not support Promise , If you use "vue-resource" you can put it in the back of the Vue.use("vue-resource") ')

                load = new _Promise((resolve, reject) => {
                    // setTimeout(() => {
                        requires(resolve, reject)
                    // }, 1000)
                })
                
                ids.forEach((t, i) => {
                    Vue.component(t, (resolve) => {
                        load.then((res) => {
                            _res = res || _res
                            resolve(_res[i])
                        })
                    })
                })
            }
            // console.log(Vue.merge_component)
        }
    }

    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = api
    } else if (typeof define === 'function' && define.amd) {
        define(function() {
            return api
        })
    } else if (typeof window !== 'undefined') {
        window.VueMergeComponent = api
    }
})()