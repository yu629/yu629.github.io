(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-useredit"],{"69b6":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return e}));var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("编辑资料")])],2),i("v-uni-form",[i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("姓名")]),i("v-uni-input",{attrs:{placeholder:"请输入姓名",name:"input"},model:{value:t.myFormData.realname,callback:function(a){t.$set(t.myFormData,"realname",a)},expression:"myFormData.realname"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("用户名")]),i("v-uni-input",{attrs:{placeholder:"用户名",name:"input",disabled:!0},model:{value:t.myFormData.username,callback:function(a){t.$set(t.myFormData,"username",a)},expression:"myFormData.username"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("头像")]),i("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.imgList,(function(a,e){return i("v-uni-view",{key:e,staticClass:"bg-img",attrs:{"data-url":t.imgList[e]},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ViewImage.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:t.imgList[e],mode:"aspectFill"}}),i("v-uni-view",{staticClass:"cu-tag bg-red radius",attrs:{"data-index":e},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.DelImg.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),t.imgList.length<1?i("v-uni-view",{staticClass:"solids",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.ChooseImage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],2)],1),i("v-uni-view",{staticClass:"cu-form-group margin-top"},[i("v-uni-view",{staticClass:"title"},[t._v("性别")]),i("v-uni-switch",{staticClass:"switch-sex",class:t.switchC?"checked":"",attrs:{checked:!!t.switchC},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.SwitchC.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("生日")]),i("v-uni-picker",{attrs:{mode:"date",value:t.myFormData.birthday},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.DateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.myFormData.birthday))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group margin-top"},[i("v-uni-view",{staticClass:"title"},[t._v("所在部门")]),i("v-uni-input",{attrs:{placeholder:"所在部门",name:"input",disabled:!0},model:{value:t.myFormData.orgCode,callback:function(a){t.$set(t.myFormData,"orgCode",a)},expression:"myFormData.orgCode"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("工号")]),i("v-uni-input",{attrs:{placeholder:"工号",name:"input",disabled:!0},model:{value:t.myFormData.workNo,callback:function(a){t.$set(t.myFormData,"workNo",a)},expression:"myFormData.workNo"}})],1),i("v-uni-view",{staticClass:"cu-form-group margin-top"},[i("v-uni-view",{staticClass:"title"},[t._v("手机号码")]),i("v-uni-input",{attrs:{placeholder:"输入手机号码",name:"input"},model:{value:t.myFormData.phone,callback:function(a){t.$set(t.myFormData,"phone",a)},expression:"myFormData.phone"}}),i("v-uni-view",{staticClass:"cu-capsule radius"},[i("v-uni-view",{staticClass:"cu-tag bg-blue "},[t._v("+86")]),i("v-uni-view",{staticClass:"cu-tag line-blue"},[t._v("中国大陆")])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("邮箱")]),i("v-uni-input",{attrs:{placeholder:"输入邮箱",name:"input"},model:{value:t.myFormData.email,callback:function(a){t.$set(t.myFormData,"email",a)},expression:"myFormData.email"}})],1),i("v-uni-view",{staticClass:"padding flex flex-direction"},[i("v-uni-button",{staticClass:"cu-btn bg-blue lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},n=[]},7285:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".cu-form-group .title[data-v-04b8503e]{min-width:calc(4em + 15px)}",""]),t.exports=a},7529:function(t,a,i){"use strict";i.r(a);var e=i("69b6"),s=i("999b");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(a,t,(function(){return s[t]}))}(n);i("cacb");var o,r=i("f0c5"),u=Object(r["a"])(s["default"],e["b"],e["c"],!1,null,"04b8503e",null,!1,e["a"],o);a["default"]=u.exports},"845d":function(t,a,i){"use strict";i("d81d"),i("a434"),i("b64b"),i("4d63"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{index:-1,switchC:!0,imgList:[],uploadUrl:"/sys/common/upload",myFormData:{avatar:"",realname:"",username:"",sex:1,birthday:"",orgCode:"",workNo:"",phone:"",email:"",id:""}}},onLoad:function(t){var a=this;console.log("this.$Route.query",this.$Route.query);var i=this.$Route.query;i&&(this.myFormData=i,"女"==this.myFormData.sex?this.switchC=!1:"男"==this.myFormData.sex&&(this.switchC=!0),this.myFormData.avatar&&(this.imgList=[this.myFormData.avatar]),this.myFormData.birthday||(this.myFormData.birthday="无"),"普通成员"==this.myFormData.identity?this.myFormData.identity=1:"上级"==this.myFormData.identity&&(this.myFormData.identity=2),"正常"==this.myFormData.status?this.myFormData.status=1:"冻结"==this.myFormData.status&&(this.myFormData.status=2),this.Avatar=this.myFormData.avatar,Object.keys(this.myFormData).map((function(t){"无"==a.myFormData[t]&&(a.myFormData[t]="")})),console.log("this.myFormData",this.myFormData))},methods:{onSubmit:function(){var t=this,a=this.myFormData,i=new RegExp(/^[1]([3-9])[0-9]{9}$/),e=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;return console.log("myForm",a),a.phone&&0!=a.phone.length?i.test(a.phone)?e.test(a.email)?(this.myFormData.id=this.$store.getters.userid,this.switchC?this.myFormData.sex=1:this.myFormData.sex=2,console.log("myform",this.myFormData),this.$tip.loading(),void this.$http.put("/sys/user/appEdit",this.myFormData).then((function(a){console.log(a),t.$tip.loaded(),a.data.success&&(t.$tip.toast("提交成功"),t.$Router.replace({name:"userdetail"}))})).catch((function(){t.$tip.loaded(),t.$tip.error("提交失败")}))):(this.$tip.alert("请输入正确的邮箱地址"),!1):(this.$tip.alert("请输入正确的手机号"),!1):(this.$tip.alert("请输入手机号"),!1)},DateChange:function(t){this.myFormData.birthday=t.detail.value},SwitchC:function(t){this.switchC=t.detail.value},ChooseImage:function(){var t=this,a=this;uni.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(i){a.$http.upload(a.$config.apiUrl+a.uploadUrl,{filePath:i.tempFilePaths[0],name:"file"}).then((function(t){a.myFormData.avatar=t.data.message})).catch((function(t){a.$tip.error(t.data.message)})),t.imgList=i.tempFilePaths}})},ViewImage:function(t){uni.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var a=this;uni.showModal({title:"召唤师",content:"确定要删除这段回忆吗？",cancelText:"再看看",confirmText:"再见",success:function(i){i.confirm&&a.imgList.splice(t.currentTarget.dataset.index,1)}})}}};a.default=e},"999b":function(t,a,i){"use strict";i.r(a);var e=i("845d"),s=i.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(n);a["default"]=s.a},ade5:function(t,a,i){var e=i("7285");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("4f06").default;s("44189025",e,!0,{sourceMap:!1,shadowMode:!1})},cacb:function(t,a,i){"use strict";var e=i("ade5"),s=i.n(e);s.a}}]);