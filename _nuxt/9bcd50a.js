(window.webpackJsonp=window.webpackJsonp||[]).push([[155,41,42],{1355:function(t,e,l){"use strict";l.r(e);var r={head:function(){return{title:"Students Dashboard | MIS tbteam.uz"}},middleware:"auth",data:function(){return{title:"Welcome",items:[{text:"abis.uz"},{text:"Dashboards"},{text:"Students",active:!0}],tableTitle:"Top Students",productData:[{name:"ASOS Ridley High Waist",price:"$79.49",quantity:82,amount:"$6,518.18",date:"Sep 1, 2018",Students:54,productid:200125},{name:"Marco Lightweight Shirt",price:"$128.50",quantity:37,amount:"$4,754.50",date:"Sep 15, 2018",Students:28,productid:200130},{name:"Half Sleeve Shirt",price:"$39.99",quantity:64,amount:"$2,559.36",date:"Nov 1, 2018",Students:55,productid:200140},{name:"Lightweight Jacket",price:"$20.00",quantity:184,amount:"$3,680.00",date:"Nov 15, 2018",Students:85,productid:200250},{name:"Marco Shoes",price:"$28.49",quantity:69,amount:"$1,965.81",date:"Jan 1, 2019",Students:49,productid:200256},{name:"ASOS Ridley High Waist",price:"$79.49",quantity:82,amount:"$6,518.18",date:"Sep 1, 2018",Students:54,productid:200125},{name:"Half Sleeve Shirt",price:"$39.99",quantity:64,amount:"$2,559.36",date:"Nov 1, 2018",Students:55,productid:200140},{name:"Lightweight Jacket",price:"$20.00",quantity:184,amount:"$3,680.00",date:"Nov 15, 2018",Students:85,productid:200250}],widgetData:[{number:"268",text:"New Customers",chartColor:"#1abc9c"},{number:"8574",text:"Online Orders",chartColor:"#66307F"},{number:"$958.25",text:"Revenue",chartColor:"#f672a7"},{number:"$89.25",text:"Daily Average",chartColor:"#6c757d"}]}}},o=l(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),l("div",{staticClass:"row"},t._l(t.widgetData,(function(t){return l("div",{key:t.text,staticClass:"col-xl-3 col-md-6"})})),0),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-12"},[l("Portlet",{attrs:{headertitle:t.tableTitle}},[l("div",{staticClass:"card-body pt-0"},[l("div",{staticClass:"table-responsive mb-0"},[l("table",{staticClass:"table table-hover table-centered mb-0"},[l("thead",[l("tr",[l("th",[t._v("Id")]),t._v(" "),l("th",[t._v("Full Name")])])]),t._v(" "),l("tbody",t._l(t.productData,(function(e){return l("tr",{key:e.id},[l("td",[t._v(t._s(e.productid))]),t._v(" "),l("td",[t._v(t._s(e.name))])])})),0)])])])])],1)]),t._v(" "),t._m(1)],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-4 col-lg-6"}),t._v(" "),l("div",{staticClass:"col-xl-4 col-lg-6"}),t._v(" "),l("div",{staticClass:"col-xl-4 col-lg-6"})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-8"}),t._v(" "),l("div",{staticClass:"col-xl-4"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:l(837).default,Portlet:l(967).default})},837:function(t,e,l){"use strict";l.r(e);var r=l(35),o={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(r.c)(["layout"])},c=l(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[l("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),l("div",{staticClass:"page-title-right"},[l("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},967:function(t,e,l){"use strict";l.r(e);l(38);var r={props:{headertitle:{type:String,default:""},portletclass:{type:String,default:""}},data:function(){return{isVisible:!0,showCollapse:!0,isLoading:!1}},methods:{refreshContent:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1}),2e3)},remove:function(){this.isVisible=!1},collapse:function(){this.showCollapse=!this.showCollapse}}},o=l(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.isVisible?l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"card-widgets"},[l("a",{attrs:{href:"javascript: void(0);"},on:{click:t.refreshContent}},[l("i",{staticClass:"mdi mdi-refresh"})]),t._v(" "),l("a",{class:[t.showCollapse?"collapsed":null,t.showCollapse?"mdi mdi-minus":"mdi mdi-plus"],attrs:{"aria-expanded":t.showCollapse?"true":"false","aria-controls":"collapse-1"},on:{click:t.collapse}}),t._v(" "),l("a",{attrs:{href:"javascript: void(0);"},on:{click:t.remove}},[l("i",{staticClass:"mdi mdi-close"})])]),t._v(" "),l("h4",{staticClass:"header-title mb-0",class:t.portletclass},[t._v(t._s(t.headertitle))])]),t._v(" "),l("b-collapse",{attrs:{id:"collapse-1"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t._t("default")],2),t._v(" "),t.isLoading?l("div",{staticClass:"card-disabled"},[t._m(0)]):t._e()],1):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-portlets-loader"},[e("div",{staticClass:"spinner-border text-primary m-2",attrs:{role:"status"}})])}],!1,null,null,null);e.default=component.exports}}]);