(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basics-shadow"],{"0c94":function(t,i,s){"use strict";s.r(i);var a=s("a105"),e=s.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return a[t]}))}(n);i["default"]=e.a},"6cc6":function(t,i,s){"use strict";var a;s.d(i,"b",(function(){return e})),s.d(i,"c",(function(){return n})),s.d(i,"a",(function(){return a}));var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[s("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),s("template",{attrs:{slot:"content"},slot:"content"},[t._v("边框阴影")])],2),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("边框")],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-switch",{staticClass:"sm",class:t.size?"checked":"",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.SetSize.apply(void 0,arguments)}}})],1)],1),s("v-uni-view",{staticClass:"padding bg-white text-center"},[s("v-uni-view",{staticClass:"padding",class:t.size?"solids":"solid"},[t._v("四周")]),s("v-uni-view",{staticClass:"padding margin-top",class:t.size?"solids-top":"solid-top"},[t._v("上")]),s("v-uni-view",{staticClass:"padding margin-top",class:t.size?"solids-right":"solid-right"},[t._v("右")]),s("v-uni-view",{staticClass:"padding margin-top",class:t.size?"solids-bottom":"solid-bottom"},[t._v("下")]),s("v-uni-view",{staticClass:"padding margin-top",class:t.size?"solids-left":"solid-left"},[t._v("左")])],1),s("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("阴影")],1)],1),s("v-uni-view",{staticClass:"padding text-center"},[s("v-uni-view",{staticClass:"padding-xl radius shadow bg-white"},[t._v("默认阴影")]),s("v-uni-view",{staticClass:"padding-xl radius shadow bg-blue margin-top"},[t._v("根据背景颜色而改变的阴影")]),s("v-uni-view",{staticClass:"padding-xl radius shadow shadow-lg bg-white margin-top"},[t._v("长阴影")]),s("v-uni-view",{staticClass:"padding-xl radius shadow shadow-lg bg-blue margin-top"},[t._v("长阴影")]),s("v-uni-view",{staticClass:"padding-xl radius shadow-warp bg-white margin-top"},[t._v("翘边阴影")]),s("v-uni-view",{staticClass:"padding-xl radius shadow-blur bg-red margin-top bg-img",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg)"}},[s("v-uni-view",[t._v("根据背景图而改变的阴影")])],1)],1)],1)},n=[]},7550:function(t,i,s){"use strict";s.r(i);var a=s("6cc6"),e=s("0c94");for(var n in e)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return e[t]}))}(n);var c,l=s("f0c5"),o=Object(l["a"])(e["default"],a["b"],a["c"],!1,null,"7012a1e4",null,!1,a["a"],c);i["default"]=o.exports},a105:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{size:!1}},methods:{SetSize:function(t){this.size=t.detail.value}}};i.default=a}}]);