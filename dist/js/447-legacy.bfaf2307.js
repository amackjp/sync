(self["webpackChunk_10thTogenFes"]=self["webpackChunk_10thTogenFes"]||[]).push([[447],{1179:function(t,e,r){"use strict";r.r(e);var i=r(7294),s=r.n(i),n={};for(var a in i)"default"!==a&&(n[a]=function(t){return i[t]}.bind(0,a));r.d(e,n),e["default"]=s()},2761:function(t,e,r){"use strict";r.d(e,{s:function(){return i},x:function(){return s}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"privacy"},[r("v-container",{staticClass:"my-5"},[r("div",{staticClass:"text-h3"},[t._v("プライバシーポリシー")]),r("br"),r("br"),r("v-card",{attrs:{elevation:"2"}},[r("v-card-title",[t._v("本サイトのご利用について")]),r("v-card-text",[r("div",{staticClass:"text--primary"},[t._v(" このホームページは神戸大学附属中等教育学校 第10回兎原祭実行委員会 ICT局によって開設・運営されています。 当サイトにおいて、実行委員会は一切閲覧者のデータを収集していません。 このホームページへのアクセスのために必要な通信費等の費用については、アクセスされた方の負担となります。 ")])])],1),r("br"),r("v-card",{attrs:{elevation:"2"}},[r("v-card-title",[t._v("入場予約システムについて")]),r("v-card-text",[r("div",{staticClass:"text--primary"},[t._v(" 今回の兎原祭では新型コロナウイルス感染拡大防止のため、miraicompass(未来コンパス)を用いた入場の事前予約を実施します。ご予約の際、miraicompass及び本校への氏名、メールアドレス等個人情報の提供に承諾したものとします。 ご提供いただいた個人情報はクラスター等有事の際の連絡など、兎原祭業務のみに使用されます。データは学校にて厳重に保管されます。 ")]),r("div",[t._v(" ※miraicompassは受験・学校イベントの申し込みを行えるサービスで、全国820を超える学校で利用されています。 ")])])],1)],1)],1)},s=[]},7294:function(){},2628:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var i=r(4367),s=(r(9653),r(4944),r(3792),r(5648)),n=r(144),a=r(8159),o=n.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(a.Z,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),l=r(6505),c=r(3325),u=(0,c.Z)(o,l.Z,s.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return(0,i.Z)((0,i.Z)({"v-card":!0},l.Z.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s.Z.options.computed.classes.call(this))},styles:function(){var t=(0,i.Z)({},s.Z.options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,r){"use strict";r.d(e,{EB:function(){return l},ZB:function(){return o},h7:function(){return n}});var i=r(2628),s=r(4589),n=(0,s.Ji)("v-card__actions"),a=(0,s.Ji)("v-card__subtitle"),o=(0,s.Ji)("v-card__text"),l=(0,s.Ji)("v-card__title");i.Z},247:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});r(7327),r(1539),r(7941),r(6755),r(2222),r(7273),r(3210),r(9600);var i=r(144);function s(t){return i.Z.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var i=r.props,s=r.data,n=r.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var a=s.attrs;if(a){s.attrs={};var o=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,n)}})}var n=r(6290),a=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,i=e.props,s=e.data,a=e.children,o=s.attrs;return o&&(s.attrs={},r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),t(i.tag,(0,n.ZP)(s,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(r||[])}),a)}})},8159:function(t,e,r){"use strict";r.d(e,{Z:function(){return g}});var i=r(4367),s=r(3796),n=(r(9653),r(9253),r(5827)),a=r(8083),o=r(6952),l=r(3536),c=r(1431),u=r(8085),d=r(4589),h=r(3325),v=(0,h.Z)(o.Z,(0,l.d)(["absolute","fixed","top","bottom"]),c.Z,u.Z),f=v.extend({name:"v-progress-linear",directives:{intersect:a.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,d.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,d.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},(0,s.Z)(t,this.isReversed?"right":"left",(0,d.kb)(this.normalizedValue,"%")),(0,s.Z)(t,"width",(0,d.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return(0,i.Z)({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?n.Z5:n.Qn},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,d.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=(0,d.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:(0,s.Z)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),r=e.width;this.internalValue=t.offsetX/r*100}},onObserve:function(t,e,r){this.isVisible=r},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,d.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=f},447:function(t,e,r){"use strict";r.r(e);var i=r(2761),s=r(1179),n={};for(var a in s)"default"!==a&&(n[a]=function(t){return s[t]}.bind(0,a));r.d(e,n);var o=r(1001),l=r(3453),c=r.n(l),u=r(2628),d=r(7118),h=r(247),v=(0,o.Z)(s["default"],i.s,i.x,!1,null,null,null);e["default"]=v.exports,c()(v,{VCard:u.Z,VCardText:d.ZB,VCardTitle:d.EB,VContainer:h.Z})}}]);
//# sourceMappingURL=447-legacy.bfaf2307.js.map