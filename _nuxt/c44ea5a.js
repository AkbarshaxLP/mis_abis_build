(window.webpackJsonp=window.webpackJsonp||[]).push([[199,41],{1379:function(t,e,r){"use strict";r.r(e);var n={head:function(){return{title:"".concat(this.title," | MIS tbteam.uz")}},data:function(){return{title:"Pricing",items:[{text:"abis.uz",href:"/"},{text:"Extras",href:"/"},{text:"Pricing",active:!0}],pricingData:[{title:"Starter Pack",icon:"fe-at-sign",price:"$9 ",storage:5,bandwidth:"250 GB Bandwidth",domain:"No Domain",user:"1 User"},{title:"Professional Pack",icon:"fe-users",price:"$19 ",storage:50,bandwidth:"500 GB Bandwidth",domain:"No Domain",user:"1 User"},{title:"Business Pack",icon:"fe-award",price:"$29 ",storage:50,bandwidth:"900 GB Bandwidth",domain:"2 Domain",user:"10 User",ribbon:"Popular"},{title:"Enterprise Pack",icon:"fe-aperture",price:"$39 ",storage:100,bandwidth:"Unlimited Bandwidth",domain:"10 Domain",user:"Unlimited User"}]}},middleware:"auth"},l=r(16),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-xl-12"},[t._m(0),t._v(" "),r("div",{staticClass:"row my-3"},t._l(t.pricingData,(function(e){return r("div",{key:e.title,staticClass:"col-xl-3 col-md-6"},[r("div",{staticClass:"card card-pricing",class:{"ribbon-box":""+e.ribbon=="Popular"}},["Popular"===e.ribbon?r("div",{staticClass:"ribbon-two ribbon-two-danger"},[r("span",[t._v("Popular")])]):t._e(),t._v(" "),r("div",{staticClass:"card-body text-center"},[r("p",{staticClass:"card-pricing-plan-name font-weight-bold text-uppercase"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),r("span",{staticClass:"card-pricing-icon",class:{"bg-danger":""+e.ribbon=="Popular","text-primary":""+e.ribbon!="Popular","text-white":""+e.ribbon=="Popular"}},[r("i",{class:""+e.icon})]),t._v(" "),r("h2",{staticClass:"card-pricing-price"},[t._v("\n                "+t._s(e.price)+"\n                "),r("span",[t._v("/ Month")])]),t._v(" "),r("ul",{staticClass:"card-pricing-features"},[r("li",[t._v(t._s(e.storage)+" GB Storage")]),t._v(" "),r("li",[t._v(t._s(e.bandwidth))]),t._v(" "),r("li",[t._v(t._s(e.domain))]),t._v(" "),r("li",[t._v(t._s(e.user))]),t._v(" "),r("li",[t._v("Email Support")]),t._v(" "),r("li",[t._v("24x7 Support")])]),t._v(" "),r("button",{staticClass:"btn mt-4 btn-block btn-primary",class:{"btn-danger":""+e.ribbon=="Popular"}},[t._v("\n                Sign Up\n              ")])])])])})),0)])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center pb-2"},[r("h3",{staticClass:"mb-2"},[t._v("\n          Our\n          "),r("span",{staticClass:"text-primary"},[t._v("Plans")])]),t._v(" "),r("p",{staticClass:"text-muted w-50 m-auto"},[t._v("\n          We have plans and prices that fit your business perfectly. Make your\n          client site a success with our products.\n        ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(837).default})},837:function(t,e,r){"use strict";r.r(e);var n=r(35),l={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(n.c)(["layout"])},c=r(16),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[r("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"page-title-right"},[r("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);