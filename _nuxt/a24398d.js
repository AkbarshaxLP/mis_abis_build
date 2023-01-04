(window.webpackJsonp=window.webpackJsonp||[]).push([[98,41],{1096:function(t,n,e){var content=e(1267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(53).default)("0befb33a",content,!0,{sourceMap:!1})},1266:function(t,n,e){"use strict";e(1096)},1267:function(t,n,e){var o=e(52)(!1);o.push([t.i,'.announcement-information{display:flex}.announcement-information .announcement-info-image{width:480px}.announcement-information .announcement-info-image img{width:100%}.announcement-information .announcement-info-info{flex:1;padding-right:20px}.announcement-information .announcement-html p{font-family:"Roboto";font-style:normal;font-weight:400;font-size:14px;line-height:140%}.announcement-information .announcement-html a{color:#017ab7!important}',""]),t.exports=o},1451:function(t,n,e){"use strict";e.r(n);e(22),e(2),e(8);var o={data:function(){return{loading:!1,loader:!1,title:"Announcement Information",subject:{},items:[{text:"Announcement Information",active:!0}],announcement:{sender:{}}}},computed:{role:function(){var t;return null===(t=this.$store.state.auth.user)||void 0===t?void 0:t.role.name}},methods:{_Get:function(){var t=this;this.loading=!0,this.$axios.get("/announcement/".concat(this.$route.params.id,"/")).then((function(n){t.announcement=n.data,t.$store.dispatch("dictionary/dic_announcement"),t.$store.dispatch("dictionary/dic_email")})).finally((function(){t.loading=!1}))},deleteItem:function(t){var n=this;this.$confirm("Do you want delete this announcement?",{confirmButtonText:"Yes",cancelButtonText:"Cancel",type:"warning"}).then((function(){n.loading=!0,n.$axios.delete("/announcement/".concat(t,"/")).then((function(){n.$message({type:"success",message:"Deleted"}),n.$router.push("/announcement/")})).catch((function(t){var e=t.response.data,o=Object.keys(e),c="string"==typeof e[o[0]]?e[o[0]]:e[o[0]][0];n.$Swal.fire({title:"Error",text:c||"error has occurred",type:"error"})})).finally((function(){n.loading=!1}))}))}},mounted:function(){this._Get()},middleware:"auth"},c=(e(1266),e(16)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),e("div",{staticClass:"row pb-4"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex justify-content-between w-full mb-3"},[e("h1",{staticClass:"mTitle mb-2"},[t._v(" "+t._s(t.announcement.title)+" ")]),t._v(" "),e("b-button",{attrs:{size:"md",variant:"dark"},on:{click:function(n){return t.$router.go(-1)}}},[e("i",{staticClass:"mdi mdi-chevron-left mr-2"}),t._v("Back")])],1),t._v(" "),e("div",{staticClass:"announcement-information"},[e("div",{staticClass:"announcement-info-info"},[e("p",{staticClass:"announcement-info text-muted font-14 m-0 mb-2"},[t._v(t._s(t.announcement.created_at)+" | "+t._s(t.announcement.sender.first_name)+" "+t._s(t.announcement.sender.last_name))]),t._v(" "),e("div",{staticClass:"announcement-html",domProps:{innerHTML:t._s(t.announcement.description)}}),t._v(" "),t.announcement.announcement_attachments?e("div",{staticClass:"mt-3"},t._l(t.announcement.announcement_attachments,(function(n,i){return e("a",{key:i,staticClass:"mr-1 mb-1",attrs:{href:n.file}},[e("b-button",{attrs:{size:"md",variant:"light"}},[e("i",{staticClass:"mdi mdi-file mr-2"}),t._v(t._s(n.name)+" ")])],1)})),0):t._e()]),t._v(" "),e("div",{staticClass:"announcement-info-image"},[e("img",{attrs:{src:t.announcement.photo,alt:""}})])]),t._v(" "),["branch_admin"].includes(t.role)?e("div",{staticClass:"d-flex justify-content-end pt-3"},[e("b-button",{staticClass:"mr-1",attrs:{slot:"reference",size:"md",variant:"danger"},on:{click:function(n){return t.deleteItem(t.announcement.id)}},slot:"reference"},[e("i",{staticClass:"mdi mdi-delete mr-2"}),t._v("Delete")]),t._v(" "),e("nuxt-link",{attrs:{to:"/announcement/edit/"+t.$route.params.id}},[e("b-button",{attrs:{size:"md",variant:"light"}},[e("i",{staticClass:"mdi mdi-pencil mr-2"}),t._v("Edit")])],1)],1):t._e()])])])])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{PageHeader:e(837).default})},837:function(t,n,e){"use strict";e.r(n);var o=e(35),c={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(o.c)(["layout"])},r=e(16),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[e("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"page-title-right"},[e("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);n.default=component.exports}}]);