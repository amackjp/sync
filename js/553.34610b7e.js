(self["webpackChunk_10thTogenFes"]=self["webpackChunk_10thTogenFes"]||[]).push([[553],{3086:function(t,e,r){"use strict";r.r(e);var s=r(7504),i=r.n(s),a={};for(var n in s)"default"!==n&&(a[n]=function(t){return s[t]}.bind(0,n));r.d(e,a),e["default"]=i()},7918:function(t,e,r){"use strict";r.d(e,{s:function(){return s},x:function(){return i}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"message"},[r("v-container",{staticClass:"my-5"},[r("div",{staticClass:"text-h3"},[t._v("校長・委員長挨拶")]),r("br"),r("br"),t._v(" 本校校長・井上真理と第10回兎原祭実行委員長からのご挨拶です。 "),r("br"),r("v-row",{staticClass:"d-flex column",attrs:{align:"center"}},[r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"5","align-self":"start"}},[r("v-avatar",{attrs:{size:t.$vuetify.breakpoint.xs?100:200}},[r("img",{attrs:{src:"https://www.edu.kobe-u.ac.jp/kuss-top/overview/outline/img/message.jpg",alt:"校長・井上真理"}})])],1),r("v-col",{staticClass:"d-flex justify-center"},[r("v-card",{attrs:{elevation:"2",outlined:"",shaped:""}},[r("v-card-title",[t._v("第10回兎原祭開催に寄せて")]),r("v-card-text",[r("div",{staticClass:"text-body-1",staticStyle:{color:"black"}},[t._v(" ああああああああああああああああああああああああああああああああ。ああああああああああああああああああああああああああああ。あああああああああああああああ。"),r("br"),t._v("ああああああああああああああああああ。ああああああああああああああああ。"),r("br"),t._v("あああ。 ")])])],1)],1)],1),r("v-row",{staticClass:"d-flex column",attrs:{align:"center"}},[r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"7"}},[r("v-card",{attrs:{elevation:"2",outlined:"",shaped:""}},[r("v-card-title",[t._v("実行委員長挨拶")]),r("v-card-text",[r("div",{staticClass:"text-body-1",staticStyle:{color:"black"}},[t._v(" ああああああああああああああああああああああああああああああああ。ああああああああああああああああああああああああああああ。あああああああああああああああ。"),r("br"),t._v("ああああああああああああああああああ。ああああああああああああああああ。"),r("br"),t._v("あああ。 ")])])],1)],1),r("v-col",{staticClass:"d-flex justify-center",attrs:{"align-self":"start"}},[r("v-avatar",{attrs:{size:t.$vuetify.breakpoint.xs?100:200}},[r("img",{attrs:{src:"/images/leader.png",alt:"実行委員長"}})])],1)],1)],1)],1)},i=[]},7504:function(){},2628:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var s=r(5648),i=r(144),a=r(8159),n=i.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(a.Z,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),o=r(6505),l=r(3325),c=(0,l.Z)(n,o.Z,s.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...o.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.Z.options.computed.classes.call(this)}},styles(){const t={...s.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,r){"use strict";r.d(e,{EB:function(){return l},ZB:function(){return o},h7:function(){return a}});var s=r(2628),i=r(4589);const a=(0,i.Ji)("v-card__actions"),n=(0,i.Ji)("v-card__subtitle"),o=(0,i.Ji)("v-card__text"),l=(0,i.Ji)("v-card__title");s.Z},247:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});r(7273);var s=r(144);function i(t){return s.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:r,data:s,children:i}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:a}=s;if(a){s.attrs={};const t=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return r.id&&(s.domProps=s.domProps||{},s.domProps.id=r.id),e(r.tag,s,i)}})}var a=r(6290),n=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:r,children:s}){let i;const{attrs:n}=r;return n&&(r.attrs={},i=Object.keys(n).filter((t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(r.domProps=r.domProps||{},r.domProps.id=e.id),t(e.tag,(0,a.ZP)(r,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),s)}})},8159:function(t,e,r){"use strict";r.d(e,{Z:function(){return v}});var s=r(5827),i=r(8083),a=r(6952),n=r(3536),o=r(1431),l=r(8085),c=r(4589),d=r(3325);const u=(0,d.Z)(a.Z,(0,n.d)(["absolute","fixed","top","bottom"]),o.Z,l.Z);var h=u.extend({name:"v-progress-linear",directives:{intersect:i.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,c.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,c.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,c.kb)(this.normalizedValue,"%"),width:(0,c.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?s.Z5:s.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,c.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,c.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,r){this.isVisible=r},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,c.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),v=h},8553:function(t,e,r){"use strict";r.r(e);var s=r(7918),i=r(3086),a={};for(var n in i)"default"!==n&&(a[n]=function(t){return i[t]}.bind(0,n));r.d(e,a);var o=r(1001),l=r(3453),c=r.n(l),d=r(6370),u=r(2628),h=r(7118),v=r(2102),g=r(247),f=r(2877),p=(0,o.Z)(i["default"],s.s,s.x,!1,null,null,null);e["default"]=p.exports,c()(p,{VAvatar:d.Z,VCard:u.Z,VCardText:h.ZB,VCardTitle:h.EB,VCol:v.Z,VContainer:g.Z,VRow:f.Z})}}]);
//# sourceMappingURL=553.34610b7e.js.map