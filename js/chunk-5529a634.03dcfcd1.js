(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5529a634"],{"253d":function(t,e,a){},"26e5":function(t,e,a){},"4bd4":function(t,e,a){"use strict";a("26e5");var i=a("94ab");e["a"]={name:"v-form",mixins:[Object(i["b"])("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",function(a){e.$set(e.errorBag,t._uid,a)},{immediate:!0})},i={_uid:t._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))}):i.valid=a(t),i},validate:function(){var t=this.inputs.filter(function(t){return!t.validate(!0)}).length;return!t},reset:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(t){var e=this.watchInput(t);this.inputs.push(t),this.watchers.push(e)},unregister:function(t){var e=this.inputs.find(function(e){return e._uid===t._uid});if(e){var a=this.watchers.find(function(t){return t._uid===e._uid});a.valid&&a.valid(),a.shouldValidate&&a.shouldValidate(),this.watchers=this.watchers.filter(function(t){return t._uid!==e._uid}),this.inputs=this.inputs.filter(function(t){return t._uid!==e._uid}),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},"4c34":function(t,e,a){},"99d9":function(t,e,a){"use strict";var i=a("80d2"),s=a("b0af"),r=(a("253d"),a("4c34"),a("23bf")),n=a("58df"),c=Object(n["a"])(r["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=c,l=a("d9bd"),u=o.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var a=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[a]):a}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(l["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(l["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=function i(){var s=t.naturalHeight,r=t.naturalWidth;s||r?e.calculatedAspectRatio=r/s:null!=a&&setTimeout(i,a)};i()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}),d=u.extend({name:"v-card-media",mounted:function(){Object(l["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),h=a("2b0e"),p=h["a"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var a=e.data,i=e.props,s=e.children;return a.staticClass=("v-card__title "+(a.staticClass||"")).trim(),i.primaryTitle&&(a.staticClass+=" v-card__title--primary"),t("div",a,s)}});a.d(e,"a",function(){return f});var m=Object(i["c"])("v-card__actions"),f=Object(i["c"])("v-card__text");s["a"]},c66d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md8:""}},[a("v-card",[a("v-form",[a("v-container",{attrs:{"py-0":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Company",disabled:""},model:{value:t.userData.company,callback:function(e){t.$set(t.userData,"company",e)},expression:"userData.company"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"User Name",disabled:""},model:{value:t.userData.login,callback:function(e){t.$set(t.userData,"login",e)},expression:"userData.login"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Email Address",disabled:""},model:{value:t.userData.email,callback:function(e){t.$set(t.userData,"email",e)},expression:"userData.email"}})],1),a("v-flex",{attrs:{xs12:"",md12:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Full Name",disabled:""},model:{value:t.userData.name,callback:function(e){t.$set(t.userData,"name",e)},expression:"userData.name"}})],1),a("v-flex",{attrs:{xs12:"",md12:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Location",disabled:""},model:{value:t.userData.location,callback:function(e){t.$set(t.userData,"location",e)},expression:"userData.location"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Created",disabled:""},model:{value:t.userData.created_at,callback:function(e){t.$set(t.userData,"created_at",e)},expression:"userData.created_at"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Last Updated",disabled:""},model:{value:t.userData.updated_at,callback:function(e){t.$set(t.userData,"updated_at",e)},expression:"userData.updated_at"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Number of Repositories",type:"number",disabled:""},model:{value:t.userData.public_repos,callback:function(e){t.$set(t.userData,"public_repos",e)},expression:"userData.public_repos"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{staticClass:"purple-input",attrs:{label:"Available for Hiring",value:t.userData.hireable?"Yes, hire me!":"Nop",disabled:""}})],1)],1)],1)],1)],1)],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",[a("v-avatar",{staticClass:"mx-auto py-3 d-block",attrs:{size:"130"}},[a("img",{attrs:{src:t.user.photoURL}})]),a("v-card-text",{staticClass:"text-xs-center"},[a("h6",{staticClass:"category text-gray font-weight-thin mt-3"},[t._v("Github User")]),a("h4",{staticClass:"card-title font-weight-light"},[t._v(t._s(t.userData.name))]),a("p",{staticClass:"card-description font-weight-light"},[t._v(t._s(t.userData.bio?t.userData.bio:"No bio information available"))]),a("v-btn",{staticClass:"font-weight-light",attrs:{color:"deep-purple darken-1",dark:"",round:"",href:t.userData.html_url,target:"_blank"}},[t._v("View Profile on Github")])],1)],1)],1)],1)],1)},s=[],r=a("bc3a"),n=a.n(r),c={name:"Profile",data:function(){return{userData:{}}},beforeCreate:function(){var t=this;n.a.get("https://api.github.com/users/".concat(t.$store.getters.currentUser.displayName,"?client_id=ad3ff196bbad5e9437a2&client_secret=7b940627c3fc95845760a2bbea5f329cfefdf837")).then(function(e){t.userData=e.data}).catch(function(e){t.$store.commit("showSnackbar",{text:e,color:"error"})})},computed:{user:function(){var t=this;return t.$store.getters.currentUser}}},o=c,l=a("2877"),u=a("6544"),d=a.n(u),h=a("8212"),p=a("8336"),m=a("b0af"),f=a("99d9"),v=a("a523"),g=a("0e8f"),b=a("4bd4"),_=a("a722"),x=a("2677"),S=Object(l["a"])(o,i,s,!1,null,null,null);e["default"]=S.exports;d()(S,{VAvatar:h["a"],VBtn:p["a"],VCard:m["a"],VCardText:f["a"],VContainer:v["a"],VFlex:g["a"],VForm:b["a"],VLayout:_["a"],VTextField:x["a"]})}}]);
//# sourceMappingURL=chunk-5529a634.03dcfcd1.js.map