(window.webpackJsonp=window.webpackJsonp||[]).push([[99,35,36,41],{1054:function(e,t,n){var content=n(1178);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("e7a79c82",content,!0,{sourceMap:!1})},1055:function(e,t,n){var content=n(1180);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("5dd22f3b",content,!0,{sourceMap:!1})},1177:function(e,t,n){"use strict";n(1054)},1178:function(e,t,n){var o=n(52)(!1);o.push([e.i,".ql-container.ql-snow{display:flex;flex-direction:column}.ql-container.ql-snow .ql-editor{flex:auto;max-width:100%}",""]),e.exports=o},1179:function(e,t,n){"use strict";n(1055)},1180:function(e,t,n){var o=n(52)(!1);o.push([e.i,".subject-type[data-v-5b7f711e]{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff}.subject-type.bg-blue[data-v-5b7f711e]{background:#08c}.subject-type.bg-primary[data-v-5b7f711e]{background:#66307f}.subject-type.bg-orange[data-v-5b7f711e]{background:#ffa10a}.subject-type.bg-green[data-v-5b7f711e]{background:#7ce883}.card[data-v-5b7f711e]{min-height:100%}.page-footer[data-v-5b7f711e]{width:100%;background:#fff;position:relative;display:flex;align-items:center;justify-content:flex-end;padding:15px 20px;border:1px solid #e7eaed;border-radius:.25rem}",""]),e.exports=o},1322:function(e,t,n){"use strict";n.r(t);n(8),n(4),n(9),n(10);var o=n(0),l=(n(22),n(2),n(6),n(7),n(57),n(171),n(846)),r=n(911),c=n(35);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={components:{FoniyUploadFile:l.default,FoniyUploadImage:r.default},data:function(){return{loading:!1,loader:!1,title:"Announcement Add",subject:{},items:[{text:"Announcement Add",active:!0}],message:{title:"",description:"",announcement_attachments:[],all_users:[],photo:null},editorOption:{theme:"snow",modules:{toolbar:[[{font:[]},{size:[]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{script:"super"},{script:"sub"}],[{header:[!1,1,2,3,4,5,6]},"blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["direction",{align:[]}],["link"],["clean"]]}},error_userlist:!1,users_list:[]}},computed:f(f({},Object(c.b)("dictionary",["dic_academic_year"])),{},{role:function(){var e;return null===(e=this.$store.state.auth.user)||void 0===e?void 0:e.role.name},cur_academic_year:function(){var data="";return this.dic_academic_year.forEach((function(element){element.current_academicyear&&(data=element.id)})),data}}),methods:{save:function(){var e=this;this.$refs.message.validate().then((function(t){if(t&&e.message.all_users.length){var data=new FormData,n=[];e.message.all_users.forEach((function(element){n.push(element.id)})),data.append("all_users",n),e.message.photo&&e.message.photo.file&&data.append("photo",e.message.photo.file);var a=0;e.message.announcement_attachments.forEach((function(element){element.id||(data.append("announcement_attachments[".concat(a,"]file"),element.file),a+=1)})),data.append("title",e.message.title),data.append("description ",e.message.description),data.append("academic_year ",e.$route.query.academic_year?e.$route.query.academic_year:e.cur_academic_year),e.loading=!0,e.$axios.post("/announcement/",data).then((function(){e.$swal.fire({icon:"success",title:"Assignment is added success.",confirmButtonText:"Ok",timer:1500}),e.$router.push("/academic-year/view/".concat(e.$route.query.academic_year))})).catch((function(){e.$swal.fire({icon:"error",title:"Assignment is not added!",text:"Server is not working! Please try again leter.",confirmButtonText:"Ok",timer:1500})})).finally((function(){e.loading=!1}))}else 0==e.message.all_users.length&&(e.error_userlist=!0)}))},SetData:function(e,t,n){if("all_groups"==e){var data=[];this.message.all_users.forEach((function(element){"all_teachers"==element.id&&data.push(element),"all_parents"==element.id&&data.push(element)})),this.message.all_users=data}this.error_userlist=!1,this.message.all_users.push({id:e,role:t,name:n})},SelectUser:function(e){this.CheckDisabled(e.id)||this.message.all_users.push(e)},CheckDisabled:function(e){var a=!1;return this.message.all_users.forEach((function(element){element.id==e&&(a=!0)})),a},DeletArray:function(i){this.message.all_users.splice(i,1)},remoteMethod:function(e){var t=this;""!==e?(this.loader=!0,this.$axios.get("/group/?no_page=1&search=".concat(e)).then((function(e){t.users_list=e.data})).finally((function(){t.loader=!1}))):this.users_list=[]}},mounted:function(){},middleware:"auth"},M=(n(1177),n(1179),n(16)),component=Object(M.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("PageHeader",{attrs:{title:e.title,items:e.items}}),e._v(" "),n("ValidationObserver",{ref:"message"},[n("div",{staticClass:"row pb-4"},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h1",{staticClass:"mTitle mb-3"},[e._v("Announcement Information")]),e._v(" "),n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[e._v(" Image:*")])]),e._v(" "),n("ValidationProvider",{staticClass:"mr-2 w-full",scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[n("FoniyUploadImage",{class:{invalid:o[0]},model:{value:e.message.photo,callback:function(t){e.$set(e.message,"photo",t)},expression:"message.photo"}})]}}])})],1),e._v(" "),n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[e._v(" Title:*")])]),e._v(" "),n("ValidationProvider",{staticClass:"mr-2 w-full",attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[n("b-input",{class:{invalid:o[0]},model:{value:e.message.title,callback:function(t){e.$set(e.message,"title",t)},expression:"message.title"}})]}}])})],1),e._v(" "),n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[e._v(" Content:* ")])]),e._v(" "),n("ValidationProvider",{staticClass:"mr-2 w-full",staticStyle:{position:"relative"},attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[n("div",{staticClass:"w-full",class:{invalid:o[0]}},[n("quill-editor",{staticStyle:{"min-height":"250px","max-width":"max-content"},attrs:{options:e.editorOption},model:{value:e.message.description,callback:function(t){e.$set(e.message,"description",t)},expression:"message.description"}}),e._v(" "),n("p",{staticClass:"error-text c-red m-0 mt-1"},[e._v("Please enter description!")])],1)]}}])})],1),e._v(" "),n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[e._v("Attachments:")])]),e._v(" "),n("FoniyUploadFile",{model:{value:e.message.announcement_attachments,callback:function(t){e.$set(e.message,"announcement_attachments",t)},expression:"message.announcement_attachments"}})],1)])])]),e._v(" "),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[e._v("System Groups:")])]),e._v(" "),n("el-select",{staticClass:"foniy-select w-full",attrs:{disabled:e.CheckDisabled("all_groups"),filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter a keyword","remote-method":e.remoteMethod,loading:e.loader},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}},e._l(e.users_list,(function(t,i){return n("el-option",{key:i,attrs:{label:t.name,value:t.id,disabled:e.CheckDisabled(t.id)}},[n("div",{staticClass:"d-flex",on:{click:function(n){return e.SelectUser(t)}}},[n("div",{staticClass:"subject-type mr-2  bg-primary"},[e._v("G")]),e._v("\n                                        "+e._s(t.name)+"\n                                    ")])])})),1)],1),e._v(" "),["branch_admin","super_admin","admin"].includes(e.role)?n("div",{staticClass:"item mb-3"},[n("b-button",{staticClass:"btn-rounded mb-1",attrs:{variant:"dark",disabled:e.CheckDisabled("all_teachers")},on:{click:function(t){return e.SetData("all_teachers","teacher","All Teachers")}}},[e._v("All Teachers "),n("i",{staticClass:"mdi mdi-plus ml-2"})]),e._v(" "),n("b-button",{staticClass:"btn-rounded mb-1",attrs:{variant:"dark",disabled:e.CheckDisabled("all_groups")},on:{click:function(t){return e.SetData("all_groups","student","All Groups")}}},[e._v("All Groups "),n("i",{staticClass:"mdi mdi-plus ml-2"})]),e._v(" "),n("b-button",{staticClass:"btn-rounded mb-1",attrs:{variant:"dark",disabled:e.CheckDisabled("all_parents")},on:{click:function(t){return e.SetData("all_parents","parent","All Parents")}}},[e._v("All Parents "),n("i",{staticClass:"mdi mdi-plus ml-2"})])],1):e._e(),e._v(" "),n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[e._v("Seleted("+e._s(e.message.all_users.length)+"):")])]),e._v(" "),e._l(e.message.all_users,(function(t,i){return n("b-button",{key:i,staticClass:"btn-rounded mb-1 mr-1",attrs:{variant:"light"}},[n("div",{staticClass:"d-flex align-items-center"},[n("div",{staticClass:"subject-type mr-2 ",class:"all_teachers"==t.id?"bg-blue":"all_parents"==t.id?"bg-orange":"bg-primary"},[e._v("\n                                        "+e._s("all_teachers"==t.id?"T":"all_parents"==t.id?"P":"G")+"\n                                    ")]),e._v(" "),(t.name,[e._v("\n                                        "+e._s(t.name)+"\n                                    ")]),e._v(" "),n("i",{staticClass:"mdi mdi-close-thick ml-2",on:{click:function(t){return e.DeletArray(i)}}})],2)])})),e._v(" "),e.error_userlist?n("p",{staticClass:"color-red "},[e._v("Please select one (Groups, All Groups, Teachers, Parents) ")]):e._e()],2)])])])]),e._v(" "),n("div",{staticClass:"page-footer fixed"},[n("div",{staticClass:"flex-box"},[n("b-button",{attrs:{size:"md"},on:{click:function(t){return e.$router.go(-1)}}},[e._v(" Cancel ")]),e._v(" "),n("b-button",{attrs:{size:"md",variant:"success"},on:{click:function(t){return e.save()}}},[e._v("Save ")])],1)])])],1)}),[],!1,null,"5b7f711e",null);t.default=component.exports;installComponents(component,{PageHeader:n(837).default,FoniyUploadImage:n(911).default,FoniyUploadFile:n(846).default})},837:function(e,t,n){"use strict";n.r(t);var o=n(35),l={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(o.c)(["layout"])},r=n(16),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==e.layout.layoutType&&"two-column"!==e.layout.layoutType}},[n("h4",{staticClass:"page-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"page-title-right"},[n("b-breadcrumb",{staticClass:"m-0",attrs:{items:e.items}})],1)])])])}),[],!1,null,null,null);t.default=component.exports},845:function(e,t,n){var content=n(855);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("0b28fe11",content,!0,{sourceMap:!1})},846:function(e,t,n){"use strict";n.r(t);n(22),n(14),n(171),n(19),n(2),n(58),n(42),n(12),n(7),n(57),n(62),n(43);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw r}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var r={props:["value","delete","one"],data:function(){return{fileList:[]}},watch:{value:{handler:function(e){this.fileList=e},immediate:!0},fileList:function(){this.$emit("input",this.fileList)}},methods:{dragFile:function(e){if(this.one){var t=e.dataTransfer.files[0];this.fileList.push({name:t.name,file:t,loader:!1})}else{var n,l=o(e.dataTransfer.files);try{for(l.s();!(n=l.n()).done;){var i=n.value;this.fileList.push({name:i.name,file:i,loader:!1})}}catch(e){l.e(e)}finally{l.f()}}},inputFile:function(e){if(this.one){var t=e.target.files[0];this.fileList.push({name:t.name,file:t,loader:!1})}else{var n,l=o(e.target.files);try{for(l.s();!(n=l.n()).done;){var i=n.value;this.fileList.push({name:i.name,file:i,loader:!1})}}catch(e){l.e(e)}finally{l.f()}}},UploadOneFile:function(){},deleteFile:function(i){var e=this;this.fileList[i].id?(this.fileList[i].loader=!0,this.$axios.delete("".concat(this.delete).concat(this.fileList[i].id)).then((function(){e.fileList.splice(i,1)})).catch((function(){e.fileList[i].loader=!0}))):this.fileList.splice(i,1)}}},c=(n(854),n(16)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"foniy-drag-uploads"},[!e.one||e.one&&0==e.fileList.length?o("div",{staticClass:"foniy-drop-file",on:{drop:[e.dragFile,function(e){e.preventDefault()}],dragover:function(e){e.preventDefault()}}},[o("img",{attrs:{src:n(851),alt:""}}),e._v(" "),o("h1",[e._v("Drop files here or click to upload")]),e._v(" "),o("p",[e._v("(Recommended: zip, Rar, PDF, DOCX, PPTX, XLSX, JPEG, JPG, PNG)")]),e._v(" "),o("input",{attrs:{type:"file",multiple:!e.one},on:{input:e.inputFile}})]):e._e(),e._v(" "),o("div",{staticClass:"foniy-drag-uploads-list"},e._l(e.fileList,(function(t,l){return o("div",{key:l,staticClass:"foniy-drag-uploads-list-item"},[o("div",{staticClass:"foniy-drag-uploads-list-content"},[o("div",{staticClass:"foniy-file-link"},[o("a",{attrs:{href:t.link?t.link:t.file}},[o("img",{attrs:{src:n(852),alt:""}}),e._v(" "),o("p",[e._v(e._s(t.name))])])]),e._v(" "),t.loader?o("button",[o("i",{staticClass:"el-icon-loading"})]):o("el-popconfirm",{attrs:{"confirm-button-text":"OK","cancel-button-text":"No, Thanks","icon-color":"red",title:"Are you sure to delete this File?"},on:{confirm:function(t){return e.deleteFile(l)}}},[o("button",{attrs:{slot:"reference"},slot:"reference"},[o("img",{attrs:{src:n(853),alt:""}})])])],1)])})),0)])}),[],!1,null,null,null);t.default=component.exports},851:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjYzNSAzMEg5TDE4IDIxTDIwLjgyIDIzLjgyQzIxLjc1IDIyLjM1IDIzLjA0IDIxLjE1IDI0LjYgMjAuNEwyNyAxOFYxOS42MzVDMjcuNDk1IDE5LjU2IDI3Ljk5IDE5LjUgMjguNSAxOS41QzI5LjAxIDE5LjUgMjkuNTA1IDE5LjU2IDMwIDE5LjYzNVYxMkwyMSAzSDlDNy4zMzUgMyA2IDQuMzM1IDYgNlYzMEM2IDMwLjc5NTYgNi4zMTYwNyAzMS41NTg3IDYuODc4NjggMzIuMTIxM0M3LjQ0MTI5IDMyLjY4MzkgOC4yMDQzNSAzMyA5IDMzSDIwLjcxNUMyMC4xOSAzMi4wODUgMTkuODE1IDMxLjA4IDE5LjYzNSAzMFpNMTkuNSA1LjI1TDI3Ljc1IDEzLjVIMTkuNVY1LjI1Wk0xMiAxMy41QzEyLjc5NTYgMTMuNSAxMy41NTg3IDEzLjgxNjEgMTQuMTIxMyAxNC4zNzg3QzE0LjY4MzkgMTQuOTQxMyAxNSAxNS43MDQ0IDE1IDE2LjVDMTUgMTcuMjk1NiAxNC42ODM5IDE4LjA1ODcgMTQuMTIxMyAxOC42MjEzQzEzLjU1ODcgMTkuMTgzOSAxMi43OTU2IDE5LjUgMTIgMTkuNUMxMC4zMzUgMTkuNSA5IDE4LjE2NSA5IDE2LjVDOSAxNC44MzUgMTAuMzUgMTMuNSAxMiAxMy41Wk0zMCAyMi41VjI3SDM0LjVWMzBIMzBWMzQuNUgyN1YzMEgyMi41VjI3SDI3VjIyLjVIMzBaIiBmaWxsPSIjQUVCNUJDIi8+Cjwvc3ZnPgo="},852:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDlWMy41TDE4LjUgOUgxM1pNNiAyQzQuODkgMiA0IDIuODkgNCA0VjIwQzQgMjAuNTMwNCA0LjIxMDcxIDIxLjAzOTEgNC41ODU3OSAyMS40MTQyQzQuOTYwODYgMjEuNzg5MyA1LjQ2OTU3IDIyIDYgMjJIMThDMTguNTMwNCAyMiAxOS4wMzkxIDIxLjc4OTMgMTkuNDE0MiAyMS40MTQyQzE5Ljc4OTMgMjEuMDM5MSAyMCAyMC41MzA0IDIwIDIwVjhMMTQgMkg2WiIgZmlsbD0iIzgwODE4NSIvPgo8L3N2Zz4K"},853:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjgzMzcgNS4zNDE5OUwxNC42NTg3IDQuMTY2OTlMMTAuMDAwMyA4LjgyNTMzTDUuMzQxOTkgNC4xNjY5OUw0LjE2Njk5IDUuMzQxOTlMOC44MjUzMyAxMC4wMDAzTDQuMTY2OTkgMTQuNjU4N0w1LjM0MTk5IDE1LjgzMzdMMTAuMDAwMyAxMS4xNzUzTDE0LjY1ODcgMTUuODMzN0wxNS44MzM3IDE0LjY1ODdMMTEuMTc1MyAxMC4wMDAzTDE1LjgzMzcgNS4zNDE5OVoiIGZpbGw9IiMyQjJEMzMiLz4KPC9zdmc+Cg=="},854:function(e,t,n){"use strict";n(845)},855:function(e,t,n){var o=n(52)(!1);o.push([e.i,'.foniy-drag-uploads{width:100%}.foniy-drop-file{width:100%;padding:30px;background:#f8f8f8;border:1.5px dashed #ced4da;border-radius:4px;display:flex;flex-direction:column;align-items:center;position:relative;cursor:pointer}.foniy-drop-file img{margin-bottom:16px}.foniy-drop-file h1{font-family:"Roboto";font-style:normal;font-weight:500;font-size:16px;text-align:center;color:#2b2d33;line-height:20px;position:relative;z-index:0;margin:0 0 10px}.foniy-drop-file p{margin:0;font-family:"Roboto";font-style:normal;font-weight:400;font-size:13px;line-height:16px;color:#aaabad}.foniy-drop-file input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;z-index:1}.foniy-drag-uploads-list{display:flex;flex-wrap:wrap;padding:15px -2px 30px}.foniy-drag-uploads-list .foniy-drag-uploads-list-item{padding:2px}.foniy-drag-uploads-list .foniy-file-link{width:calc(100% - 20px);padding-right:10px}.foniy-drag-uploads-list .foniy-drag-uploads-list-content{display:flex;align-items:center;border:1px solid #e9eaea;background:#f4f4f4;border-radius:4px;padding:10px;width:300px;box-sizing:border-box}.foniy-drag-uploads-list a{margin-right:10px;display:flex;align-items:center;font-family:"Roboto";font-style:normal;font-weight:400;font-size:14px;color:#2b2d33;line-height:16px;width:100%}.foniy-drag-uploads-list a img{margin-right:8px;width:20px}.foniy-drag-uploads-list a p{margin:0;width:calc(100% - 28px);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.foniy-drag-uploads-list button{outline:none;border:none;background:none;cursor:pointer;display:flex;align-items:center;justify-content:center;justify-content:flex-end;padding:0}.foniy-drag-uploads-list button img{width:20px}',""]),e.exports=o},892:function(e,t,n){var content=n(958);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("8228a00a",content,!0,{sourceMap:!1})},911:function(e,t,n){"use strict";n.r(t);n(2),n(42),n(43),n(848),n(526);var o={props:["value"],data:function(){return{photo:null}},watch:{value:{handler:function(e){this.photo=e},immediate:!0},photo:function(){this.$emit("input",this.photo)}},methods:{inputFile:function(e){var t=e.target.files[0];this.photo={file:t,url:URL.createObjectURL(t)}}},middleware:"auth"},l=(n(957),n(16)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"foniy-upload-image"},[e.photo?o("div",{staticClass:"foniy-upload-image-img"},[o("img",{attrs:{src:e.photo.url?e.photo.url:e.photo,alt:""}}),e._v(" "),o("div",{staticClass:"foniy-upload-image-controls"},[o("div",{staticClass:"foniy-image-edit mr-2"},[o("i",{staticClass:"mdi mdi-circle-edit-outline"}),e._v(" "),o("input",{attrs:{type:"file",accept:"image/*"},on:{input:e.inputFile}})]),e._v(" "),o("div",{staticClass:"foniy-image-edit"},[o("a",{attrs:{href:e.photo.url?e.photo.url:e.photo,target:"_blank"}},[o("i",{staticClass:"mdi mdi-eye"})])])]),e._v(" "),o("div",{staticClass:"foniy-upload-image-cover"})]):e._e(),e._v(" "),e.photo?e._e():o("input",{attrs:{type:"file",accept:"image/*"},on:{input:e.inputFile}}),e._v(" "),e.photo?e._e():o("div",{staticClass:"foniy-upload-image-info"},[o("img",{attrs:{src:n(956),alt:""}}),e._v(" "),o("p",[e._v("Choose photo")])])])}),[],!1,null,null,null);t.default=component.exports},956:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyOSAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjkwMDYgMjdIMy4yNjU2MkwxMi4yNjU2IDE4TDE1LjA4NTYgMjAuODJDMTYuMDE1NiAxOS4zNSAxNy4zMDU2IDE4LjE1IDE4Ljg2NTYgMTcuNEwyMS4yNjU2IDE1VjE2LjYzNUMyMS43NjA2IDE2LjU2IDIyLjI1NTYgMTYuNSAyMi43NjU2IDE2LjVDMjMuMjc1NiAxNi41IDIzLjc3MDYgMTYuNTYgMjQuMjY1NiAxNi42MzVWOUwxNS4yNjU2IDBIMy4yNjU2MkMxLjYwMDYzIDAgMC4yNjU2MjUgMS4zMzUgMC4yNjU2MjUgM1YyN0MwLjI2NTYyNSAyNy43OTU2IDAuNTgxNjk1IDI4LjU1ODcgMS4xNDQzIDI5LjEyMTNDMS43MDY5MSAyOS42ODM5IDIuNDY5OTggMzAgMy4yNjU2MiAzMEgxNC45ODA2QzE0LjQ1NTYgMjkuMDg1IDE0LjA4MDYgMjguMDggMTMuOTAwNiAyN1pNMTMuNzY1NiAyLjI1TDIyLjAxNTYgMTAuNUgxMy43NjU2VjIuMjVaTTYuMjY1NjIgMTAuNUM3LjA2MTI3IDEwLjUgNy44MjQzNCAxMC44MTYxIDguMzg2OTQgMTEuMzc4N0M4Ljk0OTU1IDExLjk0MTMgOS4yNjU2MiAxMi43MDQ0IDkuMjY1NjIgMTMuNUM5LjI2NTYyIDE0LjI5NTYgOC45NDk1NSAxNS4wNTg3IDguMzg2OTQgMTUuNjIxM0M3LjgyNDM0IDE2LjE4MzkgNy4wNjEyNyAxNi41IDYuMjY1NjIgMTYuNUM0LjYwMDYzIDE2LjUgMy4yNjU2MiAxNS4xNjUgMy4yNjU2MiAxMy41QzMuMjY1NjIgMTEuODM1IDQuNjE1NjIgMTAuNSA2LjI2NTYyIDEwLjVaTTI0LjI2NTYgMTkuNVYyNEgyOC43NjU2VjI3SDI0LjI2NTZWMzEuNUgyMS4yNjU2VjI3SDE2Ljc2NTZWMjRIMjEuMjY1NlYxOS41SDI0LjI2NTZaIiBmaWxsPSIjQUVCNUJDIi8+Cjwvc3ZnPgo="},957:function(e,t,n){"use strict";n(892)},958:function(e,t,n){var o=n(52)(!1);o.push([e.i,'.foniy-upload-image{width:100%;width:480px;height:270px;background:#f4f4f4;border:1px dashed #ced4da;border-radius:4px;position:relative;display:flex;align-items:center;justify-content:center}.foniy-upload-image a{color:#fff}.foniy-upload-image input{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0}.foniy-upload-image .foniy-upload-image-info{display:flex;flex-direction:column;align-items:center}.foniy-upload-image .foniy-upload-image-info p{margin:8px 0 0;font-family:"Roboto";font-style:normal;font-weight:500;font-size:14px;line-height:16px;text-align:center;color:#6e768e}.foniy-upload-image .foniy-upload-image-img{width:100%;height:100%;overflow:hidden;position:relative}.foniy-upload-image .foniy-upload-image-img img{width:100%;position:relative;z-index:0}.foniy-upload-image .foniy-upload-image-img .foniy-upload-image-controls{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:2;color:#fff}.foniy-upload-image .foniy-upload-image-img .foniy-upload-image-cover{position:absolute;left:0;top:0;width:100%;z-index:1;height:100%;background:#000;opacity:.6}.foniy-upload-image .foniy-image-edit{position:relative;cursor:pointer}.foniy-upload-image .foniy-image-edit i{font-size:20px}.foniy-upload-image .foniy-image-edit input{position:absolute;width:100%;height:100%;left:0;top:0;opacity:0}.foniy-upload-image .foniy-image-edit:hover,.foniy-upload-image .foniy-image-edit:hover a{color:#58b99d}',""]),e.exports=o}}]);