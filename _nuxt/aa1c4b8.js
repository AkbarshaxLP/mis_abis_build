(window.webpackJsonp=window.webpackJsonp||[]).push([[164,41,163],{1066:function(t,e,r){"use strict";r.r(e),r.d(e,"ordersData",(function(){return l}));var l=[{id:"#MN2048",name:"James Modlin",date:"Apr 16 2020",time:"10:29 PM",status:"Paid",total:"$152.23",payment:"Mastercard",orderstatus:"Shipped"},{id:"#MN2047",name:"Lessie Craig",date:"Apr 15 2020",time:"09:34 AM",status:"Awaiting Authorization",total:"$112.24",payment:"Mastercard",orderstatus:"Processing"},{id:"#MN2046",name:"Tia McCord",date:"Apr 14 2020",time:"11:09 AM",status:"Paid",total:"$106.01",payment:"Visa",orderstatus:"Processing"},{id:"#MN2045",name:"Charles Wilson",date:"Mar 13 2020",time:"02:22 PM",status:"Paid",total:"$123.36",payment:"Credit Card",orderstatus:"Delivered"},{id:"#MN2044",name:"Kathryn McCann",date:"Mar 12 2020 ",time:"03:04 PM",status:"Payment Failed",total:"$176.41",payment:"Mastercard",orderstatus:"Cancelled"},{id:"#MN2043",name:"William Eckert",date:"Mar 11 2020",time:"10:29 PM",status:"Paid",total:"$145.56",payment:"Mastercard",orderstatus:"Shipped"},{id:"#MN2042",name:"Julius West",date:"Mar 10 2020",time:"09:14 AM",status:"Awaiting Authorization",total:"$113.25",payment:"Visa",orderstatus:"Delivered"},{id:"#MN2041",name:"Janice Louie",date:"Feb 09 2020",time:"01:25 PM",status:"Paid",total:"$132.14",payment:"Paypal",orderstatus:"Shipped"},{id:"#MN2040",name:"Marie Harris",date:"Feb 08 2020",time:"04:24 PM",status:"Paid",total:"$175.25",payment:"Credit Card",orderstatus:"Processing"},{id:"#MN2039",name:"Robin Hill",date:"Jan 07 2020",time:"02:24 PM",status:"Payment Failed",total:"$158.48",payment:"Mastercard",orderstatus:"Shipped"}]},1360:function(t,e,r){"use strict";r.r(e);var l=r(1066),n={head:function(){return{title:"".concat(this.title," | MIS tbteam.uz")}},data:function(){return{ordersData:l.ordersData,title:"Orders",items:[{text:"abis.uz"},{text:"eCommerce"},{text:"Orders",active:!0}],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:[{key:"check",label:""},{key:"id",label:"Order ID"},{key:"name",label:"Billing Name"},{key:"date",label:"Last Order"},{key:"status",label:"Payment Status"},{key:"total"},{key:"payment",label:"Payment Method"},{key:"orderstatus",label:"Order Status"},"action"]}},computed:{rows:function(){return this.ordersData.length}},mounted:function(){this.totalRows=this.items.length},methods:{onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},middleware:"auth"},c=r(16),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row mb-2"},[r("div",{staticClass:"col-sm-6"},[r("nuxt-link",{staticClass:"btn btn-danger mb-2",attrs:{to:"/ecommerce/product-create"}},[r("i",{staticClass:"mdi mdi-plus-circle mr-1"}),t._v(" Add\n                Products")])],1),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"row mb-2"},[r("div",{staticClass:"col-sm-12 col-md-6"},[r("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[r("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                  Display \n                  "),r("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" Orders\n                ")],1)])]),t._v(" "),r("div",{staticClass:"col-sm-12 col-md-6"},[r("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[r("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                  Search:\n                  "),r("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),t._v(" "),r("div",{staticClass:"table-responsive mb-0"},[r("b-table",{attrs:{"table-class":"table table-centered w-100","thead-tr-class":"bg-light",items:t.ordersData,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(check)",fn:function(data){return[r("div",{staticClass:"custom-control custom-checkbox text-center"},[r("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"contacusercheck"+data.item.id}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"contacusercheck"+data.item.id}})])]}},{key:"cell(id)",fn:function(data){return[r("nuxt-link",{staticClass:"text-body font-weight-medium",attrs:{to:"/ecommerce/order-detail"}},[t._v(t._s(data.item.id))])]}},{key:"cell(status)",fn:function(data){return[r("span",{staticClass:"badge badge-soft-success",class:{"badge-soft-warning":"Awaiting Authorization"===data.item.status,"badge-soft-danger":"Payment Failed"===data.item.status}},[t._v("\n                  "+t._s(data.item.status))])]}},{key:"cell(name)",fn:function(data){return[t._v("\n                "+t._s(data.item.name)+"\n              ")]}},{key:"cell()",fn:function(data){return[t._v("\n                "+t._s(data.item.date)+"\n                "),r("small",{staticClass:"text-muted"},[t._v(t._s(data.item.time))])]}},{key:"cell(payment)",fn:function(data){return[t._v("\n                "+t._s(data.item.payment)+"\n              ")]}},{key:"cell(orderstatus)",fn:function(data){return[r("span",{staticClass:"badge",class:{"badge-warning":"Processing"===data.item.orderstatus,"badge-success":"Delivered"===data.item.orderstatus,"badge-info":"Shipped"===data.item.orderstatus,"badge-danger":"Cancelled"===data.item.orderstatus}},[t._v("\n                  "+t._s(data.item.orderstatus))])]}},{key:"cell(action)",fn:function(){return[r("ul",{staticClass:"list-inline table-action m-0"},[r("li",{staticClass:"list-inline-item"},[r("a",{staticClass:"action-icon",attrs:{href:"javascript:void(0);"}},[r("i",{staticClass:"mdi mdi-eye"})])]),t._v(" "),r("li",{staticClass:"list-inline-item"},[r("a",{staticClass:"action-icon",attrs:{href:"javascript:void(0);"}},[r("i",{staticClass:"mdi mdi-square-edit-outline"})])]),t._v(" "),r("li",{staticClass:"list-inline-item"},[r("a",{staticClass:"action-icon",attrs:{href:"javascript:void(0);"}},[r("i",{staticClass:"mdi mdi-delete"})])])])]},proxy:!0}])})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[r("ul",{staticClass:"pagination pagination-rounded"},[r("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"float-sm-right"},[e("button",{staticClass:"btn btn-success mb-2 mb-sm-0",attrs:{type:"button"}},[e("i",{staticClass:"mdi mdi-cog"})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(837).default})},837:function(t,e,r){"use strict";r.r(e);var l=r(35),n={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(l.c)(["layout"])},c=r(16),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[r("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"page-title-right"},[r("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);