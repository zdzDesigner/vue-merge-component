# vue-merge-component  for vue

```js

Vue.use(require('vue-merge-component'))
Vue.merge_component(['nvHeader','nvFooter','nvMenu'],(resolve)=>{
	require(['./views/common/header.vue','./views/common/footer.vue','./views/common/menu.vue'], (nvHeader,nvFooter,nvMenu)=>{
		resolve([nvHeader,nvFooter,nvMenu])
	})
})

```

#### If you use "vue-resource" you can put it in the back of the Vue.use("vue-resource"), because reuse Vue.Promise

```js

example

Vue.use(require('vue-resource'))
Vue.use(require('vue-merge-component'))
Vue.merge_component(['nvHeader','nvFooter','nvMenu'],(resolve)=>{
	require(['./views/common/header.vue','./views/common/footer.vue','./views/common/menu.vue'], (nvHeader,nvFooter,nvMenu)=>{
		resolve([nvHeader,nvFooter,nvMenu])
	})
})

```
