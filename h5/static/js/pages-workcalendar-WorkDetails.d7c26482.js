(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-workcalendar-WorkDetails"],{"0b6a":function(t,e,i){"use strict";i.r(e);var a=i("0c13"),n=i("2692");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("67ea");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"1afcd4a6",null,!1,a["a"],r);e["default"]=l.exports},"0c13":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{height:"110upx"}},[i("goBackTitele",{attrs:{title:t.title}})],1),i("v-uni-view",{staticStyle:{clear:"both"}},[i("v-uni-view",[i("v-uni-view",{staticClass:"title-box"},[i("v-uni-view",{staticClass:"title-box-left"},[t._v("工 单 号:")]),i("v-uni-view",{staticClass:"title-box-right"},[t._v(t._s(t.item.programme_no))])],1),i("v-uni-view",{staticClass:"title-box top-box"},[i("v-uni-view",{staticClass:"title-box-left"},[t._v("项目名称:")]),i("v-uni-view",{staticClass:"title-box-right"},[t._v(t._s(t.item.project_name))])],1),i("v-uni-view",{staticClass:"title-box top-box"},[i("v-uni-view",{staticClass:"title-box-left"},[t._v("服务时间:")]),1===t.type?i("v-uni-view",{staticClass:"title-box-right"},[t._v(t._s(t.item.service_time))]):i("v-uni-view",{staticClass:"title-box-right"},[t._v(t._s(t.item.workorder_start_time))])],1),i("v-uni-view",{staticClass:"title-box top-box"},[i("v-uni-view",{staticClass:"title-box-left"},[t._v("地 址:")]),i("v-uni-view",{staticClass:"title-box-right"},[t._v(t._s(t.item.service_address))])],1),i("v-uni-view",{staticClass:"title-box top-box"},[i("v-uni-view",{staticClass:"title-box-left"},[t._v("虫害种类:")]),i("v-uni-view",{staticClass:"title-box-right-b"},t._l(t.insectType,(function(e,a){return i("v-uni-view",{key:a,staticClass:"title-box-right-c"},[t._v(t._s(e))])})),1)],1)],1)],1)],1)},o=[]},"1c8f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".title-box[data-v-1afcd4a6]{clear:both;width:100%;margin-top:%?40?%;margin-bottom:%?40?%}.title-box-left[data-v-1afcd4a6]{text-align:right;height:%?60?%;line-height:%?60?%;font-size:%?38?%;float:left;width:30%}.title-box-right[data-v-1afcd4a6]{border:%?1?% #ccc solid;float:left;height:%?60?%;line-height:%?60?%;font-size:%?30?%;color:#888;padding-left:%?20?%;margin-left:%?20?%;width:64%\n\t/* margin-right: 20upx; */}.title-box-right-b[data-v-1afcd4a6]{float:left;height:%?60?%;line-height:%?60?%;font-size:%?30?%;color:#888;\n\t/* border: 1px red solid; */\n\t/* padding-left: 20upx; */\n\t/* margin-left: 20upx; */width:64%\n\t/* margin-right: 20upx; */}.title-box-right-c[data-v-1afcd4a6]{border:%?2?% #ccc solid;width:%?80?%;float:left;text-align:center;height:%?50?%;line-height:%?50?%;margin-left:%?20?%;border-radius:%?24?%}.top-box[data-v-1afcd4a6]{padding-top:%?40?%}",""]),t.exports=e},2692:function(t,e,i){"use strict";i.r(e);var a=i("6027"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},6027:function(t,e,i){"use strict";var a=i("4ea4");i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("cc47")),o=a(i("2934")),r={components:{GoBackTitele:n.default},data:function(){return{title:"工单详情",type:1,item:{},insectType:[]}},onLoad:function(t){console.log(t),this.type=t.type,1==t.type?this.title="项目详情":2==t.type&&(this.title="计划详情"),this.getItem(t.id)},methods:{qianming:function(){this.$router.push({path:"/pages/workcalendar/autographPage"})},getItem:function(t){var e=this;if(1==this.type){var i="&self_programme_id="+t;console.log(1),o.default.commonList("ql_wx_programme_detail","desc",1,10,i).then((function(t){console.log(t),t&&t.data&&t.data.result&&t.data.result.data&&t.data.result.data.records&&(e.item=t.data.result.data.records[0],e.item.insect_type&&(e.insectType=e.item.insect_type.split(",")))}))}else if(2==this.type){console.log(2);var a="&self_workorder_id="+t;o.default.commonList("ql_wx_workorder_detail","desc",1,10,a).then((function(t){console.log(t),t&&t.data&&t.data.result&&t.data.result.data&&t.data.result.data.records&&(e.item=t.data.result.data.records[0],e.item.insect_type&&(e.insectType=e.item.insect_type.split(",")))}))}}}};e.default=r},"66e1":function(t,e,i){t.exports=i.p+"static/img/ic_back_white.de56dd23.png"},"67ea":function(t,e,i){"use strict";var a=i("7242"),n=i.n(a);n.a},7242:function(t,e,i){var a=i("1c8f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("765c4d90",a,!0,{sourceMap:!1,shadowMode:!1})},aa2b:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".title-top[data-v-01ab5aff]{font-size:%?40?%;line-height:%?110?%;height:%?110?%;width:100%;color:#f1f1f1;background-color:#007549;z-index:1;position:fixed;top:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}",""]),t.exports=e},b957:function(t,e,i){var a=i("aa2b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("545bc1d8",a,!0,{sourceMap:!1,shadowMode:!1})},bf4b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{title:{type:String,default:"工单日历"}},data:function(){return{}},methods:{goBack:function(){uni.navigateBack({})}}};e.default=a},cc47:function(t,e,i){"use strict";i.r(e);var a=i("dca4"),n=i("cdf4");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("e38b");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"01ab5aff",null,!1,a["a"],r);e["default"]=l.exports},cdf4:function(t,e,i){"use strict";i.r(e);var a=i("bf4b"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},dca4:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"title-top"},[a("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[a("v-uni-view",{staticStyle:{"margin-left":"20upx",display:"flex","align-items":"center"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack()}}},[a("v-uni-image",{staticStyle:{height:"40upx",width:"38upx"},attrs:{src:i("66e1").replace(/^\./,""),mode:"scaleToFill"}})],1),a("v-uni-text",{staticStyle:{"margin-left":"20upx","font-size":"36upx"}},[t._v(t._s(t.title))])],1)],1)],1)},o=[]},e38b:function(t,e,i){"use strict";var a=i("b957"),n=i.n(a);n.a}}]);