(window.webpackJsonp=window.webpackJsonp||[]).push([[7,23,26],{320:function(t,e,n){},332:function(t,e,n){"use strict";n(320)},345:function(t,e,n){},349:function(t,e,n){"use strict";n.r(e);var s={props:{actions:{type:Array,default:()=>[]}},methods:{onClick(t){this.$emit("action",t)}}},a=(n(332),n(7)),i=Object(a.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"chart-actions"},t._l(t.actions,(function(n,s){return e("a",{key:s,staticClass:"chart-action",on:{click:function(e){return t.onClick(n)}}},[t._v("\n    "+t._s(n.name)+"\n  ")])})),0)}),[],!1,null,"2afd21f1",null);e.default=i.exports},350:function(t,e,n){"use strict";n.r(e);var s=n(14),a={props:{config:{type:Object,default:null}},watch:{config:"update"},mounted(){this.update()},methods:{chart(){return this._chart},update(){const t=this.config,e=this.$refs.canvas;e&&this.config&&(this._chart?(this._chart.stop(),this._chart.data=t.data||{},this._chart.options=t.options||{},this._chart.update()):(this._chart=new s.a(e,{...t}),this.$emit("initialized")))}}},i=n(7),c=Object(i.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"chart-view"},[t("canvas",{ref:"canvas"})])}),[],!1,null,null,null);e.default=c.exports},373:function(t,e,n){"use strict";n(345)},384:function(t,e,n){"use strict";n.r(e);n(18);var s=n(14),a=n(349),i=n(350),c=n(375),o={components:{ChartActions:a.default,ChartView:i.default,CodeEditor:c.default},props:{code:{type:String,required:!0}},data:()=>({actions:null,config:null,error:null,messages:[],output:!1}),watch:{code(t){this.evaluate(t)}},mounted(){this.evaluate(this.code)},methods:{evaluate(t){if(this.error=null,!t)return void this.update(null);const e=this,n={log(...t){e.messages=[...e.messages,t.join(" ")].slice(-50)}},a={...(this.$chart||{}).imports,console:{...console,...n},Chart:s.a},i=`\n        'use strict';\n        const module = {exports: {}};\n        ${Object.keys(a).map(t=>`const ${t} = arguments[0].${t}`).join(";\n")};\n        (function(){ ${t} })();\n        return module.exports;\n      `;try{const t=new Function(i)(a),e=t.config||null;this.output=t.output||!1,this.actions||(this.actions=t.actions||null),this.config=Object.freeze(e)}catch(t){this.error=t}},execute(t){t.handler(this.$refs["chart-view"].chart())}}},r=(n(373),n(7)),u=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"chart-editor"},[e("chart-view",{ref:"chart-view",attrs:{config:t.config}}),t._v(" "),e("chart-actions",{attrs:{actions:t.actions},on:{action:t.execute}}),t._v(" "),e("code-editor",{attrs:{error:t.error,messages:t.messages,output:t.output,value:t.code},on:{"update:error":function(e){t.error=e},input:t.evaluate}})],1)}),[],!1,null,"365c20ab",null);e.default=u.exports}}]);