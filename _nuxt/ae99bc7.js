(window.webpackJsonp=window.webpackJsonp||[]).push([[160,41,159],{1065:function(t,e,l){"use strict";l.r(e),l.d(e,"customesData",(function(){return n}));var n=[{profile:l(258),name:"John Delaney",id:"#MN2048",phone:"078 5054 8877",balance:"$8,562.25",orders:41,date:"02 Apr, 2020",status:"Active"},{profile:l(524),name:"George Beasley",id:"#MN2047",phone:"215-302-3376",balance:"$4,254.65",orders:23,date:"04 Mar, 2020",status:"Active"},{name:"Mary Gonzalez",id:"#MN2048",phone:"050 414 8778",balance:"$874.82",orders:34,date:"11 Jul, 2020",status:"Blocked"},{profile:l(528),name:"Frank King",id:"#MN2043",phone:"050 414 8778",balance:"$3,568.54",orders:28,date:"12 Jun, 2020",status:"Active"},{name:"Clara Ramsey",id:"#MN2040",phone:"216) 75 612 706",balance:"$724.12",orders:16,date:"13 Sep, 2020",status:"Active"},{profile:l(258),name:"Bruce Williams",id:"#MN2038",phone:"215-302-3376",balance:"$2,214.61",orders:27,date:"14 Apr, 2020",status:"Blocked"},{profile:l(258),name:"John Delaney",id:"#MN2048",phone:"078 5054 8877",balance:"$8,562.25",orders:41,date:"02 Apr, 2020",status:"Active"},{name:"Anne Martinez",id:"#MN2042",phone:"078 5054 8877",balance:"$6,458.21",orders:33,date:"14 Jul, 2020",status:"Active"},{profile:l(529),name:"Roberto Norton",id:"#MN2045",phone:"(216) 75 612 706",balance:"$5,562.45",orders:20,date:"15 Nov, 2020",status:"Blocked"},{profile:l(530),name:"Olive Hedin",id:"#MN2041",phone:"215-302-3376",balance:"$3,524.27",orders:27,date:"16 Aug, 2020",status:"Active"},{profile:l(525),name:"Jeff Luck",id:"#MN2039",phone:"(02) 75 150 655",balance:"$1,825.14",orders:18,date:"18 Nov, 2020",status:"Active"},{profile:l(524),name:"Tyler Davis",id:"#MN2037",phone:"050 414 8778",balance:"$2,354.45",orders:21,date:"21 Dec, 2020",status:"Active"},{profile:l(531),name:"Jose Payson",id:"#MN2044",phone:"078 6013 3854",balance:"$1,625.84",orders:22,date:"21 Feb, 2020",status:"Blocked"}]},1358:function(t,e,l){"use strict";l.r(e);var n=l(1065),r={head:function(){return{title:"".concat(this.title," | MIS tbteam.uz")}},data:function(){return{customesData:n.customesData,title:"Customers",items:[{text:"abis.uz"},{text:"eCommerce"},{text:"Customers",active:!0}],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:[{key:"check",label:""},{key:"Customer",sortable:!0},{key:"phone",sortable:!0},{key:"balance",sortable:!0},{key:"orders",sortable:!0},{key:"date",label:"Last Order",sortable:!0},{key:"status",label:"Status",sortable:!0},"action"]}},computed:{rows:function(){return this.customesData.length}},mounted:function(){this.totalRows=this.items.length},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},middleware:"auth"},c=l(16),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-sm-6"},[l("nuxt-link",{staticClass:"btn btn-danger mb-2",attrs:{to:"/ecommerce/product-create"}},[l("i",{staticClass:"mdi mdi-plus-circle mr-1"}),t._v(" Add\n                Products")])],1),t._v(" "),t._m(0)]),t._v(" "),l("div",{staticClass:"row mb-2"},[l("div",{staticClass:"col-sm-12 col-md-6"},[l("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[l("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                  Display \n                  "),l("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" Customers\n                ")],1)])]),t._v(" "),l("div",{staticClass:"col-sm-12 col-md-6"},[l("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[l("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                  Search:\n                  "),l("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),t._v(" "),l("div",{staticClass:"table-responsive mb-0"},[l("b-table",{attrs:{"table-class":"table table-centered w-100","thead-tr-class":"bg-light",items:t.customesData,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(check)",fn:function(data){return[l("div",{staticClass:"custom-control custom-checkbox text-center"},[l("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"contacusercheck"+data.item.id}}),t._v(" "),l("label",{staticClass:"custom-control-label",attrs:{for:"contacusercheck"+data.item.id}})])]}},{key:"cell(phone)",fn:function(data){return[t._v("\n                "+t._s(data.item.phone)+"\n              ")]}},{key:"cell(balance)",fn:function(data){return[t._v("\n                "+t._s(data.item.balance)+"\n              ")]}},{key:"cell(orders)",fn:function(data){return[t._v("\n                "+t._s(data.item.orders)+"\n              ")]}},{key:"cell(date)",fn:function(data){return[t._v("\n                "+t._s(data.item.date)+"\n              ")]}},{key:"cell(status)",fn:function(data){return[l("span",{staticClass:"badge",class:{"badge-soft-success":"Active"===data.item.status,"badge-soft-danger":"Blocked"===data.item.status}},[t._v("\n                  "+t._s(data.item.status))])]}},{key:"cell()",fn:function(data){return[l("div",{staticClass:"media"},[data.item.profile?l("img",{staticClass:"mr-3 rounded-circle avatar-sm",attrs:{src:data.item.profile,alt:"table-user"}}):t._e(),t._v(" "),data.item.profile?t._e():l("div",{staticClass:"avatar-sm mr-3"},[l("div",{staticClass:"\n                        avatar-title\n                        rounded-circle\n                        bg-soft-primary\n                        font-weight-medium\n                        text-primary\n                      "},[t._v("\n                      "+t._s(data.item.name.charAt(0))+"\n                    ")])]),t._v(" "),l("div",{staticClass:"media-body"},[l("h5",{staticClass:"mt-0 mb-1"},[l("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0);"}},[t._v(t._s(data.item.name))])]),t._v(" "),l("p",{staticClass:"mb-0 font-13"},[t._v("ID : "+t._s(data.item.id))])])])]}},{key:"cell(action)",fn:function(){return[l("ul",{staticClass:"list-inline table-action m-0"},[l("li",{staticClass:"list-inline-item"},[l("a",{staticClass:"action-icon",attrs:{href:"javascript:void(0);"}},[l("i",{staticClass:"mdi mdi-eye"})])]),t._v(" "),l("li",{staticClass:"list-inline-item"},[l("a",{staticClass:"action-icon",attrs:{href:"javascript:void(0);"}},[l("i",{staticClass:"mdi mdi-square-edit-outline"})])]),t._v(" "),l("li",{staticClass:"list-inline-item"},[l("a",{staticClass:"action-icon",attrs:{href:"javascript:void(0);"}},[l("i",{staticClass:"mdi mdi-delete"})])])])]},proxy:!0}])})],1),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[l("ul",{staticClass:"pagination pagination-rounded"},[l("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"float-sm-right"},[e("button",{staticClass:"btn btn-success mb-2 mb-sm-0",attrs:{type:"button"}},[e("i",{staticClass:"mdi mdi-cog"})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:l(837).default})},837:function(t,e,l){"use strict";l.r(e);var n=l(35),r={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(n.c)(["layout"])},c=l(16),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[l("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),l("div",{staticClass:"page-title-right"},[l("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);