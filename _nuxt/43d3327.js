(window.webpackJsonp=window.webpackJsonp||[]).push([[143,41],{1452:function(t,n,e){"use strict";e.r(n);e(2),e(6),e(22);var l={data:function(){return{loading:!1,title:"Complaints",items:[{text:"Complaints",active:!0}],Complaint:{},loadingStatus:!1,dic_status:[{id:"confirmed",label:"CONFIRMED",variant:"success"},{id:"checking",label:"CHECKING",variant:"warning"},{id:"need_resolve",label:"NEED RESOLVE",variant:"danger"}]}},computed:{cur_status:function(){var t=this,data={};return"new"==this.Complaint.status?data={id:"new",label:"NEW",variant:"info"}:this.dic_status.forEach((function(element){t.Complaint.status==element.id&&(data=element)})),data},role:function(){var t;return null===(t=this.$store.state.auth.user)||void 0===t?void 0:t.role.name}},methods:{_Get:function(){var t=this;this.$axios.get("/complaint/".concat(this.$route.params.id,"/")).then((function(n){t.Complaint=n.data}))},SaveStatus:function(t){var n=this;this.loadingStatus=!0,this.$axios.patch("/complaint/".concat(this.$route.params.id,"/"),{status:t}).then((function(e){n.Complaint.status=t})).finally((function(){n.loadingStatus=!1}))}},mounted:function(){this._Get()}},o=e(16),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex justify-content-between mb-2"},[e("h4",{staticClass:"header-title"},[t._v("Complaints Details")]),t._v(" "),e("div",{staticClass:"d-flex"},[["branch_admin","main_branch"].includes(t.role)?e("b-dropdown",{staticClass:"mr-2",attrs:{variant:t.cur_status.variant,disabled:t.loadingStatus},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v("\n                        Status:\n                        "),t.loadingStatus?e("i",{staticClass:"el-icon-loading"}):e("span",[t._v(t._s(t.cur_status.label)+" ")]),t._v(" "),e("i",{staticClass:"mdi mdi-chevron-down"})]},proxy:!0}],null,!1,195135485)},[t._v(" "),t._l(t.dic_status,(function(n,i){return e("b-dropdown-item-button",{key:i,attrs:{varianr:"warning"},on:{click:function(e){return t.SaveStatus(n.id)}}},[t._v(" "+t._s(n.label)+" ")])}))],2):t._e(),t._v(" "),e("b-button",{staticClass:"d-flex align-items-center",attrs:{variant:"dark",outline:"",size:"sm"},on:{click:function(n){return t.$router.go(-1)}}},[e("i",{staticClass:"font-16  mr-1 mdi mdi-chevron-left"}),t._v(" Back")])],1)]),t._v(" "),e("h1",{staticClass:"font-16 mt-3"},[t._v("Theme:")]),t._v(" "),e("p",[t._v(" "+t._s(t.Complaint.category)+" ")]),t._v(" "),e("h1",{staticClass:"font-16 mt-3"},[t._v("Description:")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.Complaint.description)}}),t._v(" "),t.Complaint.complaint_attachments&&t.Complaint.complaint_attachments.length?e("h1",{staticClass:"font-16 mt-3"},[t._v("File:")]):t._e(),t._v(" "),t.Complaint.complaint_attachments&&t.Complaint.complaint_attachments.length?e("div",{staticClass:"d-flex",staticStyle:{width:"fit-content","flex-wrap":"wrap"}},t._l(t.Complaint.complaint_attachments,(function(n,i){return e("a",{key:i,staticClass:"mr-1 mb-1",attrs:{href:n.file,download:""}},[e("b-button",{staticClass:"d-flex align-items-center",attrs:{variant:"primary",outline:"",size:"sm"}},[e("i",{staticClass:"fas mr-2 fa-cloud-download-alt"}),t._v("\n                        "+t._s(n.name)+"\n                    ")])],1)})),0):t._e(),t._v(" "),e("h1",{staticClass:"font-16 mt-3"},[t._v("User:")]),t._v(" "),e("p",[t._v(" "+t._s(t._f("fio")(t.Complaint.user))+" ")]),t._v(" "),e("h1",{staticClass:"font-16 mt-3"},[t._v("Created at:")]),t._v(" "),e("p",[t._v(" "+t._s(t.Complaint.created_at)+" ")])])])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{PageHeader:e(837).default})},837:function(t,n,e){"use strict";e.r(n);var l=e(35),o={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(l.c)(["layout"])},c=e(16),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[e("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);n.default=component.exports}}]);