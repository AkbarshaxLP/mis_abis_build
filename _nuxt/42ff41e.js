(window.webpackJsonp=window.webpackJsonp||[]).push([[187,41],{1368:function(t,e,l){"use strict";l.r(e);l(38);var d={head:function(){return{title:"".concat(this.title," | MIS tbteam.uz")}},data:function(){return{title:"Range Slider",items:[{text:"abis.uz"},{text:"Extended UI"},{text:"Range Slider",active:!0}],simpleValue:10,sliderCustomzie:300,sliderWithLabel:{value:45,data:[15,30,45,60,75,90,120],range:[{label:"15 mins"},{label:"30 mins",isHide:!0},{label:"45 mins"},{label:"1 hr",isHide:!0},{label:"1 hr 15 mins"},{label:"1 hr 30 mins",isHide:!0},{label:"2 hrs"}],rangeValue:{}},customData:{value:3,data:[1,2,3,4,5,6,7],range:[{label:"Sunday"},{label:"Monday"},{label:"Tuesday"},{label:"Wednesday"},{label:"Thursday"},{label:"Friday"},{label:"Saturday"}]},loader:null,loadingValue:0,customStyle:800,lineHeight:10}},methods:{callbackRange:function(t){this.sliderWithLabel.rangeValue=t},startLoad:function(){var t=this;this.loader=setInterval((function(){t.loadingValue++,100===t.loadingValue&&clearInterval(t.loader)}),100)}},middleware:"auth"},n=l(16),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("h4",{staticClass:"header-title"},[t._v("Range slider")]),t._v(" "),l("p",{staticClass:"sub-header"},[t._v("\n            Cool, comfortable, responsive and easily customizable range slider\n          ")]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"p-3"},[l("h5",{staticClass:"font-size-14 mb-3 mt-0"},[t._v("Default")]),t._v(" "),l("div",{staticClass:"px-3"},[l("vue-slide-bar",{model:{value:t.simpleValue,callback:function(e){t.simpleValue=e},expression:"simpleValue"}})],1)])]),t._v(" "),l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"p-3"},[l("h5",{staticClass:"font-size-14 mb-3 mt-0"},[t._v("Min-Max")]),t._v(" "),l("div",{staticClass:"px-3"},[l("vue-slide-bar",{attrs:{min:100,max:500},model:{value:t.sliderCustomzie,callback:function(e){t.sliderCustomzie=e},expression:"sliderCustomzie"}})],1)])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"p-3"},[l("h5",{staticClass:"font-size-14 mb-3 mt-0"},[t._v("Range and Label")]),t._v(" "),l("div",{staticClass:"px-3"},[l("vue-slide-bar",{attrs:{data:t.sliderWithLabel.data,range:t.sliderWithLabel.range},on:{callbackRange:t.callbackRange},model:{value:t.sliderWithLabel.value,callback:function(e){t.$set(t.sliderWithLabel,"value",e)},expression:"sliderWithLabel.value"}})],1)])]),t._v(" "),l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"p-3"},[l("h5",{staticClass:"font-size-14 mb-3 mt-0"},[t._v("Loading")]),t._v(" "),l("div",{staticClass:"px-3"},[l("vue-slide-bar",{attrs:{"show-tooltip":!0,"is-disabled":!0},model:{value:t.loadingValue,callback:function(e){t.loadingValue=e},expression:"loadingValue"}}),t._v(" "),l("br"),t._v(" "),l("b-button",{attrs:{size:"sm",variant:"light"},on:{click:t.startLoad}},[t._v("Start")])],1)])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"p-3"},[l("h5",{staticClass:"font-size-14 mb-3 mt-0"},[t._v("Custom Style")]),t._v(" "),l("div",{staticClass:"px-3"},[l("vue-slide-bar",{attrs:{min:100,max:1e3,"line-height":t.lineHeight},model:{value:t.customStyle,callback:function(e){t.customStyle=e},expression:"customStyle"}})],1)])]),t._v(" "),l("div",{staticClass:"col-md-6"},[l("div",{staticClass:"p-3"},[l("h5",{staticClass:"font-size-14 mb-3 mt-0"},[t._v("Custom Data")]),t._v(" "),l("div",{staticClass:"px-3"},[l("vue-slide-bar",{attrs:{data:t.customData.data,range:t.customData.range}})],1)])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:l(837).default})},837:function(t,e,l){"use strict";l.r(e);var d=l(35),n={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(d.c)(["layout"])},c=l(16),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[l("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),l("div",{staticClass:"page-title-right"},[l("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);