(window.webpackJsonp=window.webpackJsonp||[]).push([[182,41,183],{1071:function(t,e,n){var content=n(1213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("77c2a420",content,!0,{sourceMap:!1})},1212:function(t,e,n){"use strict";n(1071)},1213:function(t,e,n){var l=n(52)(!1);l.push([t.i,".t-ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:auto;max-height:50px}",""]),t.exports=l},1367:function(t,e,n){"use strict";n.r(e);n(2);var l={head:function(){return{title:"".concat(this.title," | MIS tbteam.uz")}},components:{Sidepanel:n(964).default},data:function(){return{loading:!1,emailData:{count:0,results:[]},title:"Email",items:[{text:"abis.uz"},{text:"Email",active:!0}],currentPage:1,perPage:15,emailIds:[],startIndex:1,endIndex:15}},computed:{rows:function(){return this.emailData.length}},created:function(){this.startIndex=0,this.endIndex=this.perPage,this.__GET()},methods:{__GET:function(){var t=this;this.loading=!0,this.$axios({url:"/mailbox/",method:"GET",params:{page:this.currentPage}}).then((function(e){t.emailData=e.data})).catch((function(e){t.emailData={count:0,results:[]}})).finally((function(){t.loading=!1}))},onPageChange:function(){this.__GET()}},middleware:"auth"},r=(n(1212),n(16)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("Sidepanel"),t._v(" "),n("div",{staticClass:"inbox-rightbar"},[n("div",{staticClass:"mt-3"},[n("ul",{staticClass:"message-list"},t._l(t.emailData.results,(function(e,l){return n("NuxtLink",{key:l,class:{unread:!0===e.unread},attrs:{tag:"li",to:"/email/reademail/"+e.id+"?my_msg=true"}},[n("div",{staticClass:"col-mail col-mail-1"},[n("div",{staticClass:"checkbox-wrapper-mail"},[n("input",{attrs:{id:"chk-"+l,type:"checkbox"}}),t._v(" "),n("label",{attrs:{for:"chk-"+l}})]),t._v(" "),n("span",{class:"star-toggle far fa-star text-"+e.isread}),t._v(" "),n("a",{staticClass:"title"},[t._v(t._s(e.subject))])]),t._v(" "),n("div",{staticClass:"col-mail col-mail-2"},[n("NuxtLink",{staticClass:"t-ellipsis subject",attrs:{tag:"a",to:"/email/reademail/"+e.id},domProps:{innerHTML:t._s(e.description)}}),t._v(" "),n("div",{staticClass:"date"},[t._v(t._s(e.created_at))])],1)])})),1)]),t._v(" "),t.emailData.count>10?n("div",{staticClass:"row justify-content-md-between align-items-md-center"},[n("div",{staticClass:"col-xl-5"},[n("div",{staticClass:"mt-2 pagination-rounded"},[n("b-pagination",{attrs:{"total-rows":t.emailData.count,"per-page":10},on:{input:t.onPageChange},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])]):t._e()])],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:n(837).default})},837:function(t,e,n){"use strict";n.r(e);var l=n(35),r={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(l.c)(["layout"])},o=n(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[n("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"page-title-right"},[n("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},964:function(t,e,n){"use strict";n.r(e);n(8),n(7),n(4),n(2),n(9),n(6),n(10);var l=n(0),r=n(899),o=n.n(r),c=n(900),d=n.n(c),m=n(35);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={components:{ckeditor:o.a.component},data:function(){return{showModal:!1,editor:d.a,editorData:"<p>Content of the editor.</p>"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.b)("dictionary",["not_read_email"]))},_=f,h=n(16),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inbox-leftbar"},[n("b-button",{attrs:{block:"",variant:"danger"},on:{click:function(e){return t.$router.push("/email/send")}}},[t._v("Compose")]),t._v(" "),n("div",{staticClass:"mail-list mt-4"},[n("router-link",{attrs:{tag:"a",to:"/email","exact-active-class":"text-danger"}},[n("i",{staticClass:"ri-inbox-fill align-bottom mr-2"}),t._v("Inbox\n      "),n("span",{staticClass:"badge badge-soft-danger float-right ml-2"},[t._v(t._s(t.not_read_email))])]),t._v(" "),n("nuxt-link",{attrs:{to:"/email/sent-mails","exact-active-class":"text-danger"}},[n("i",{staticClass:"ri-send-plane-2-line align-bottom mr-2"}),t._v("Sent Mail\n    ")])],1),t._v(" "),n("b-modal",{attrs:{title:"New Message",centered:""},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[n("b-button",{attrs:{variant:"secondary"},on:{click:function(e){t.showModal=!1}}},[t._v("Close")]),t._v(" "),n("b-button",{attrs:{variant:"primary"}},[t._v("\n        Send\n        "),n("i",{staticClass:"fab fa-telegram-plane ml-1"})])]},proxy:!0}]),model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[n("form",[n("div",{staticClass:"form-group"},[n("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"To"}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Subject"}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("ckeditor",{attrs:{editor:t.editor},model:{value:t.editorData,callback:function(e){t.editorData=e},expression:"editorData"}})],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);