(window.webpackJsonp=window.webpackJsonp||[]).push([[91,41,71],{1299:function(t,e,r){"use strict";r.r(e);r(7),r(4),r(9),r(6),r(10),r(19),r(58),r(42),r(12),r(57),r(62),r(43);var n=r(11),l=r(0),o=(r(61),r(22),r(2),r(171),r(8),r(14),r(35));function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,l=t},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw l}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={head:function(){return{title:"".concat(this.title," | MIS tbteam.uz")}},data:function(){return{show:!1,loading:!1,form:{semesters:[{start_semester:null,end_semester:null}]},tableData:[],current_course:null,courses:[],title:"Academic year",items:[{text:"Academic year",active:!0}],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:[{label:"#",key:"#",sortable:!1,thStyle:{width:"60px"}},{label:"Name",key:"name",sortable:!1},"Actions"]}},computed:m(m({},Object(o.b)("dictionary",["dic_branch"])),{},{rows:function(){return this.tableData.length},role:function(){var t;return null===(t=this.$store.state.auth.user)||void 0===t?void 0:t.role.name}}),created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.__GET();case 2:case"end":return e.stop()}}),e)})))()},methods:{deleteItem:function(t){var e=this;this.$confirm("Вы точно хотите удалить?",{confirmButtonText:"Да",cancelButtonText:"Отмена",type:"warning"}).then((function(){e.loading=!0,e.$axios.delete("/group/".concat(t,"/")).then((function(){e.fetchItems(),e.$message({type:"success",message:"Удалено"})})).finally((function(){e.loading=!1}))}))},rmSemester:function(t){var data=this.form.semesters[t];data.id?this.rmWithAxios(data.id,t):this.form.semesters.splice(t,1)},rmWithAxios:function(t,e){var r=this;this.$Swal.fire({title:"Do you sure you want to remove?",type:"warning",showCancelButton:!0,confirmButtonText:"Delete!",cancelButtonText:"Cancel!",confirmButtonClass:"btn btn-danger mt-2",cancelButtonClass:"btn btn-primary ml-2 mt-2",buttonsStyling:!1}).then((function(n){n.value&&(r.loading=!0,r.$axios.delete("/semester/".concat(t,"/")).then((function(t){r.__GET(),r.$Swal.fire({title:"Deleted!",type:"info"}),r.form.semesters.splice(e,1),r.$store.dispatch("dictionary/academic_year")})).catch((function(t){var e=t.response.data,n=Object.keys(e),l="string"==typeof e[n[0]]?e[n[0]]:e[n[0]][0];r.$Swal.fire({title:"Error",text:l||"error has occurred",type:"error"})})).finally((function(){r.loading=!1})))}))},rmItem:function(t){var e=this;this.$Swal.fire({title:"Do you sure you want to remove this Academic Year?",type:"warning",showCancelButton:!0,confirmButtonText:"Delete!",cancelButtonText:"Cancel!",confirmButtonClass:"btn btn-danger mt-2",cancelButtonClass:"btn btn-primary ml-2 mt-2",buttonsStyling:!1}).then((function(r){r.value&&(e.loading=!0,e.$axios.delete("/academic_year/".concat(t,"/")).then((function(t){e.__GET(),e.$Swal.fire({title:"Deleted!",type:"info"}),e.$store.dispatch("dictionary/dic_academic_year")})).catch((function(t){var r=t.response.data,n=Object.keys(r),l="string"==typeof r[n[0]]?r[n[0]]:r[n[0]][0];e.$Swal.fire({title:"Error",text:l||"error has occurred",type:"error"})})).finally((function(){e.loading=!1})))}))},save:function(){var t=this;this.$refs.form.validate().then((function(e){e&&t.submit()}))},__GET:function(){var t=this;return this.loading=!0,this.$axios.get("/academic_year/").then((function(e){t.tableData=e.data.results})).finally((function(){t.loading=!1}))},clearForm:function(){this.form={semesters:[{start_semester:null,end_semester:null}]}},submit:function(){for(var t=this,e=new FormData,r=this.form,n=0,l=Object.keys(r);n<l.length;n++){var o=l[n];if("semesters"!==o)e.append(o,r[o]);else{var d,i=0,f=c(r[o]);try{for(f.s();!(d=f.n()).done;){for(var m=d.value,v=0,h=Object.keys(m);v<h.length;v++){var y=h[v];e.append("".concat(o,"[").concat(i,"]").concat(y),m[y])}i++}}catch(t){f.e(t)}finally{f.f()}}}this.loading=!0;var _=this.form.id;this.$axios({method:_?"PATCH":"POST",url:_?"/academic_year/".concat(_,"/"):"/academic_year/",data:e}).then((function(e){t.$Swal.fire({title:"Academic year has been saved!",type:"success"}),t.show=!1,t.$store.dispatch("dictionary/dic_academic_year"),t.clearForm(),t.__GET()})).catch((function(e){t.$Swal.fire({title:"Error",text:"error has occurred",type:"error"})})).finally((function(){t.loading=!1}))},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},middleware:"auth"},h=r(16),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),r("div",{staticClass:"pb-2 w-full d-flex"},[["branch_admin"].includes(t.role)?r("button",{staticClass:"btn ml-auto text-white btn-success",on:{click:function(e){t.clearForm(),t.show=!0}}},[r("i",{staticClass:"mdi mdi-plus-circle mr-1"}),t._v("\n            Create Academic Year\n        ")]):t._e()]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"header-title"},[t._v("\n                        Academic Year ("+t._s(t.tableData.length)+")\n                    ")]),t._v(" "),r("p",{staticClass:"text-muted font-13 mb-4"}),t._v(" "),r("div",{staticClass:"row mb-md-2"},[r("div",{staticClass:"col-sm-12 col-md-6"},[r("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[r("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                                    Show \n                                    "),r("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" \n                                ")],1)])]),t._v(" "),r("div",{staticClass:"col-sm-12 col-md-6"},[r("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[r("label",{staticClass:"d-inline-flex align-items-center"},[t._v("\n                                    Search:\n                                    "),r("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),t._v(" "),r("div",{staticClass:"table-responsive mb-0"},[t.loading?r("div",{staticClass:"card-disabled"},[t._m(0)]):t._e(),t._v(" "),r("b-table",{attrs:{items:t.tableData,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"table-colgroup",fn:function(e){return t._l(e.fields,(function(t){return r("col",{key:t.key,style:{width:"#"===t.key?"40px":""}})}))}},{key:"cell(#)",fn:function(data){return[t._v("\n                                "+t._s(data.index+1)+"\n                            ")]}},{key:"cell(name)",fn:function(data){return[r("nuxt-link",{attrs:{to:"/academic-year/view/"+data.item.id}},[t._v("\n                                    "+t._s(data.item.name)+"\n                                ")])]}},{key:"cell(Actions)",fn:function(data){return[r("ul",{staticClass:"list-inline table-action m-0"},[r("li",{staticClass:"list-inline-item",on:{click:function(e){t.form=JSON.parse(JSON.stringify(data.item)),t.form.branch=t.form.branch.id,t.show=!0}}},[r("a",{staticClass:"action-icon px-1",attrs:{href:"javascript:void(0);"}},[r("i",{staticClass:"mdi mdi-pencil"})])]),t._v(" "),r("li",{staticClass:"list-inline-item",on:{click:function(e){return t.rmItem(data.item.id)}}},[r("a",{staticClass:"action-icon px-1",attrs:{href:"javascript:void(0);"}},[r("i",{staticClass:"mdi mdi-delete"})])])])]}}])})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[r("ul",{staticClass:"pagination pagination-rounded mb-0"},[r("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])])]),t._v(" "),r("b-modal",{attrs:{size:"lg",id:"semester-view-modal",title:"Academic Year","no-close-on-backdrop":!0},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[r("b-button",{attrs:{size:"md",variant:"success"},on:{click:function(e){return t.save()}}},[t._v(" Save ")]),t._v(" "),r("b-button",{attrs:{size:"md"},on:{click:function(t){return n()}}},[t._v(" Close ")])]}}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("ValidationObserver",{ref:"form"},[r("div",{staticClass:"school-create-form"},[r("div",{staticClass:"item"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("p",{staticClass:"mb-1"},[t._v("Academic Year name *")]),t._v(" "),r("b-input",{class:{invalid:n[0]},attrs:{type:"text"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})]}}])})],1),t._v(" "),r("div",{staticClass:"item"},[r("p",{staticClass:"mb-1"},[t._v("Description")]),t._v(" "),r("b-textarea",{attrs:{type:"text"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),r("div",{staticClass:"item"},[r("p",{staticClass:"mb-1"},[t._v("Study plan")]),t._v(" "),r("UploadFile",{model:{value:t.form.curriculum,callback:function(e){t.$set(t.form,"curriculum",e)},expression:"form.curriculum"}})],1),t._v(" "),t._l(t.form.semesters,(function(e,n){return r("div",{key:n,staticClass:"item mt-3"},[r("p",{staticClass:"mb-0"},[r("b",[t._v(t._s(n+1)+"-semester")])]),t._v(" "),r("div",{staticClass:"d-flex"},[r("ValidationProvider",{staticClass:"mr-2",attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var l=n.errors;return[r("p",{staticClass:"mb-1"},[t._v("Start semester *")]),t._v(" "),r("b-input",{directives:[{name:"mask",rawName:"v-mask",value:"##.##.####",expression:"'##.##.####'"}],class:{invalid:l[0]},attrs:{placeholder:"dd.mm.yyyy"},model:{value:e.start_semester,callback:function(r){t.$set(e,"start_semester",r)},expression:"item.start_semester"}})]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var l=n.errors;return[r("p",{staticClass:"mb-1"},[t._v("End semester *")]),t._v(" "),r("b-input",{directives:[{name:"mask",rawName:"v-mask",value:"##.##.####",expression:"'##.##.####'"}],class:{invalid:l[0]},attrs:{placeholder:"dd.mm.yyyy"},model:{value:e.end_semester,callback:function(r){t.$set(e,"end_semester",r)},expression:"item.end_semester"}})]}}],null,!0)}),t._v(" "),r("i",{staticClass:"fe-trash-2 mt-4 ml-2 text-danger cursor-pointer",on:{click:function(e){return t.rmSemester(n)}}})],1)])})),t._v(" "),r("button",{staticClass:"btn text-success shadow-none",on:{click:function(e){return t.form.semesters.push({start_semester:null,end_semester:null})}}},[r("i",{staticClass:"fe-plus"}),t._v(" Add new Semester\n                ")])],2)])],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-portlets-loader"},[e("div",{staticClass:"spinner-border text-primary m-2",attrs:{role:"status"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(837).default,UploadFile:r(847).default})},837:function(t,e,r){"use strict";r.r(e);var n=r(35),l={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(n.c)(["layout"])},o=r(16),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[r("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"page-title-right"},[r("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},844:function(t,e,r){var content=r(850);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("33aef1bf",content,!0,{sourceMap:!1})},847:function(t,e,r){"use strict";r.r(e);r(22),r(12),r(25),r(47),r(68),r(2),r(42),r(43),r(848),r(526);var n={props:{full:Boolean,ext:{type:Array,default:function(){return[]}},url:{type:Array,default:function(){return""}}},data:function(){return{form:{file:null,url:""}}},computed:{role:function(){return this.$store.state.auth.user.role.name}},watch:{value:{handler:function(t){this.form.url=t},immediate:!0}},methods:{onFileChanged:function(t){var e=t.target.files[0].name.split(".").pop();if(!this.ext.length||this.ext.includes(e)){var r=t.target.files[0];this.$emit("input",r),this.$emit("changed"),this.form={file:r,url:URL.createObjectURL(r),name:r.name}}else this.$Swal.fire({title:"Error",text:"Allowed file formates: ".concat(this.ext),type:"error"})}}},l=(r(849),r(16)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.form.url||t.url?r("div",{staticClass:"w-full flex items-center justify-content-center uploadFile downloading-file "},[t.url?r("a",{staticClass:"flex-1",attrs:{href:t.form.url?t.form.url:t.url,target:"_blank"}},[t.form.file?r("div",[t._v("\n            "+t._s(t.form.name||"Download file")+"\n            "),r("i",{staticClass:"cursor-pointer ml-2 el-icon-download"})]):r("div",[t._v("\n            Download file "),r("i",{staticClass:"cursor-pointer ml-2 el-icon-download"})])]):r("a",{staticClass:"flex-1"},[t._v("\n        "+t._s(t.form.name)+"\n    ")]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("div",{staticClass:"flex-1"},[r("label",{staticClass:"cursor-pointer m-0"},[r("span",[t._v(" Edit")]),t._v(" "),r("input",{ref:"file",attrs:{type:"file"},on:{change:t.onFileChanged}})])])]):r("div",{staticClass:"flex items-center",class:{"opacity-70":!!t.form.url}},[r("label",{staticClass:"uploadFile",class:{"w-full":t.full,"border-green":t.url}},[r("span",[t._v(t._s(t.form&&t.form.name?t.form.name:"Upload"))]),t._v(" "),r("svg",{attrs:{width:"22",height:"16",viewBox:"0 0 22 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.9995 0C13.9795 0 16.4455 2.174 16.9125 5.021C19.7565 5.233 21.9995 7.602 21.9995 10.5C21.9995 13.537 19.5365 16 16.4995 16H4.99951C2.23851 16 -0.000488281 13.761 -0.000488281 11C-0.000488281 8.239 2.23851 6 4.99951 6C4.99951 2.686 7.68651 0 10.9995 0ZM14.6815 8.598L14.8885 8.391C15.0835 8.196 15.0835 7.879 14.8885 7.684L11.3535 4.148C11.1555 3.95 10.8445 3.951 10.6465 4.148L7.11151 7.684C6.91551 7.879 6.91551 8.196 7.11151 8.391L7.31851 8.598C7.41151 8.692 7.53851 8.745 7.67151 8.745H8.99951V12.5C8.99951 12.776 9.22351 13 9.49951 13H12.4995C12.7765 13 12.9995 12.776 12.9995 12.5V8.745H14.3275C14.4605 8.745 14.5875 8.692 14.6815 8.598Z",fill:t.form.file?"#0FBE7B":"#333333"}})]),t._v(" "),r("input",{attrs:{type:"file"},on:{change:t.onFileChanged}})]),t._v(" "),t.url?r("a",{attrs:{href:t.url,target:"_blank",download:""}},[r("i",{staticClass:"cursor-pointer ml-2 el-icon-download"})]):t._e()])}),[],!1,null,"2f6e30fa",null);e.default=component.exports},849:function(t,e,r){"use strict";r(844)},850:function(t,e,r){var n=r(52)(!1);n.push([t.i,"input[type=file][data-v-2f6e30fa]{width:0;height:0;display:none}.downloading-file[data-v-2f6e30fa]{border-color:#0fbe7b!important;font-size:14px;cursor:auto!important}.downloading-file .hr[data-v-2f6e30fa]{margin:0 7px;height:100%;width:1px;background-color:silver}.downloading-file div[data-v-2f6e30fa]{cursor:pointer;line-height:normal!important;color:#0fbe7b}.downloading-file a[data-v-2f6e30fa],.downloading-file div[data-v-2f6e30fa]{text-align:center}.border-green[data-v-2f6e30fa]{border-color:#0fbe7b!important}.uploadFile[data-v-2f6e30fa]{cursor:pointer;overflow:hidden;display:flex;align-items:center;justify-content:space-between;background:#fff;border:.5px solid #d9d9d9;box-sizing:border-box;border-radius:.2rem;height:38px;padding:.75rem;width:156px}.uploadFile.w-full[data-v-2f6e30fa]{width:100%}.uploadFile span[data-v-2f6e30fa]{max-width:105px;overflow:hidden;font-style:normal;font-weight:400;font-size:.9375rem;line-height:38px;color:#8c8c8c}.uploadFile svg[data-v-2f6e30fa]{z-index:23}",""]),t.exports=n}}]);