(window.webpackJsonp=window.webpackJsonp||[]).push([[230,35,41],{1081:function(t,e,n){var content=n(1236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("29769525",content,!0,{sourceMap:!1})},1235:function(t,e,n){"use strict";n(1081)},1236:function(t,e,n){var o=n(52)(!1);o.push([t.i,".card[data-v-1127e5f7]{min-height:100%}.page-footer[data-v-1127e5f7]{width:100%;background:#fff;position:relative;display:flex;align-items:center;justify-content:flex-end;padding:15px 20px;border:1px solid #e7eaed;border-radius:.25rem}",""]),t.exports=o},1431:function(t,e,n){"use strict";n.r(e);n(2),n(6),n(7),n(57),n(14),n(8),n(47),n(68);var o=n(5),l=n.n(o),r={components:{FoniyUploadFile:n(846).default},data:function(){return{value:"",title:"Edit Assignment",items:[{text:"Edit Assignment",active:!0}],students:[],lessons:[],topics:[],lesson:"",topic:"",form:{title:"",description:"",points:"",due_date_time:"",assignment_attachments:[],topic:6,students:["All"]},loading:!1}},methods:{save:function(){var t=this;this.$refs.form.validate().then((function(e){if(e){t.loading=!0,t.form.topic=parseInt(t.$route.query.topic);var data=new FormData,n="";"All"==t.form.students[0]?t.students.forEach((function(element,i){0!=i?n=n+","+element.id:n+=element.id})):t.form.students.forEach((function(element,i){0!=i?n=n+","+element:n+=element})),data.append("due_date_time",l()(t.form.due_date_time).format("YYYY-MM-DD HH:mm")),data.append("students",n),data.append("title",t.form.title),data.append("description",t.form.description),data.append("points",t.form.points),data.append("topic","".concat(t.form.topic));var a=0;t.form.assignment_attachments.forEach((function(element){element.id||(data.append("assignment_attachments[".concat(a,"]file"),element.file),a+=1)})),t.$axios.put("/assignment/".concat(t.$route.params.id,"/"),data).then((function(e){t.$swal.fire({icon:"success",title:"Assignment is edited success.",confirmButtonText:"Ok",timer:1500}),t.$router.push("/lessons/in-group/assignment/".concat(e.data.id,"?lesson=").concat(t.$route.query.lesson,"&topic=").concat(t.$route.query.topic,"&topic_name=").concat(t.$route.query.topic_name))})).catch((function(){t.$swal.fire({icon:"error",title:"Assignment is not edited!",text:"Server is not working! Please try again leter.",confirmButtonText:"Ok",timer:1500})})).finally((function(){t.loading=!1}))}else t.$swal.fire({icon:"error",title:"Iltimos, kerakli maydonlarni toʻldiring!",confirmButtonText:"Ok",timer:1500})}))},_Get:function(){var t=this;this.$axios.get("/assignment/".concat(this.$route.params.id,"/")).then((function(e){for(var n=0,o=Object.keys(t.form);n<o.length;n++){var i=o[n];"due_date_time"!=i&&"students"!=i&&(t.form[i]=e.data[i]),"due_date_time"==i&&(t.form.due_date_time=e.data.due_date_time),"students"==i&&(e.data.studentwork.length==t.students.length?t.form.students=["All"]:function(){var data=[];e.data.studentwork.forEach((function(element){data.push(element.student.id)})),t.form.students=data}())}}))},getStudents:function(){var t=this,e=this.$route.query.lesson;this.$axios.get("/users/student?lesson=".concat(e,"&limit=1000")).then((function(e){t.students=e.data.results}))},getLessons:function(){var t=this;this.$axios.get("/lesson/").then((function(e){t.lessons=e.data.results}))},CheckStudent:function(){this.form.students.includes("All")&&(this.form.students=["All"])}},mounted:function(){this.getStudents(),this.getLessons(),this._Get(),this.$route.query&&(this.topic=this.$route.query.topic_name?this.$route.query.topic_name:"",this.lesson=this.$route.query.lesson_name?this.$route.query.lesson_name:"")},middleware:"auth"},d=(n(1235),n(16)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),t.form?n("ValidationObserver",{ref:"form"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h1",{staticClass:"mTitle mb-3"},[t._v("Edit Assignment")]),t._v(" "),n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[t._v(" Title:*")])]),t._v(" "),n("ValidationProvider",{staticClass:"mr-2 w-full",attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("b-input",{class:{invalid:o[0]},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})]}}],null,!1,322517941)})],1),t._v(" "),n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[t._v(" Instructions (optional):* ")])]),t._v(" "),n("ValidationProvider",{staticClass:"mr-2 w-full",attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("b-textarea",{class:{invalid:o[0]},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})]}}],null,!1,78973199)})],1),t._v(" "),n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[t._v("Attachments:")])]),t._v(" "),n("FoniyUploadFile",{attrs:{delete:"/assignment_attachments/"},model:{value:t.form.assignment_attachments,callback:function(e){t.$set(t.form,"assignment_attachments",e)},expression:"form.assignment_attachments"}})],1)])])]),t._v(" "),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[t._v("Class and Lesson:")])]),t._v(" "),n("el-select",{staticClass:"foniy-select w-full",attrs:{placeholder:"Select",disabled:""},model:{value:t.lesson,callback:function(e){t.lesson=e},expression:"lesson"}},t._l(1,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),t._v(" "),n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[t._v("Topic:")])]),t._v(" "),n("el-select",{staticClass:"foniy-select w-full",attrs:{placeholder:"Select",disabled:""},model:{value:t.topic,callback:function(e){t.topic=e},expression:"topic"}},t._l(1,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),t._v(" "),n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[t._v("Students:")])]),t._v(" "),n("ValidationProvider",{staticClass:"mr-2 w-full",attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("el-select",{staticClass:"w-full foniy-select",class:{invalid:o[0]},attrs:{"collapse-tags":!0,multiple:"","default-first-option":"",placeholder:"Choose student"},on:{change:function(e){return t.CheckStudent()}},model:{value:t.form.students,callback:function(e){t.$set(t.form,"students",e)},expression:"form.students"}},[n("el-option",{attrs:{value:"All",label:"All Students"}}),t._v(" "),t._l(t.students,(function(e){return n("el-option",{key:e.id,attrs:{label:e.last_name+" "+e.first_name+" "+e.middle_name,value:e.id,disabled:t.form.students.includes("All")}})}))],2)]}}],null,!1,3844794588)})],1),t._v(" "),n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[t._v("Points:")])]),t._v(" "),n("ValidationProvider",{staticClass:"mr-2 w-full",attrs:{rules:"required|integer|between:0,100"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("el-input",{class:{invalid:o[0]},attrs:{placeholder:"Points",type:"number",max:100},model:{value:t.form.points,callback:function(e){t.$set(t.form,"points",e)},expression:"form.points"}})]}}],null,!1,900926377)})],1),t._v(" "),n("div",{staticClass:"item mb-3"},[n("p",{staticClass:"mb-1"},[n("strong",[t._v(" Due date and time:*")])]),t._v(" "),n("ValidationProvider",{staticClass:"mr-2 w-full",attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("el-date-picker",{staticClass:"foniy-input w-full",class:{invalid:o[0]},attrs:{"format-value":"yyyy-MM-dd HH:mm",format:"yyyy-MM-dd HH:mm",type:"datetime",placeholder:"____-__-__ __:__"},model:{value:t.form.due_date_time,callback:function(e){t.$set(t.form,"due_date_time",e)},expression:"form.due_date_time"}})]}}],null,!1,448129757)})],1)])])]),t._v(" "),n("div",{staticClass:"col-md-12 mt-2"},[n("div",{staticClass:"page-footer"},[n("div",{staticClass:"flex-box"},[n("b-button",{attrs:{size:"md"},on:{click:function(e){return t.$router.go(-1)}}},[t._v(" Cancel ")]),t._v(" "),n("b-button",{attrs:{size:"md",variant:"success"},on:{click:function(e){return t.save()}}},[t._v(" Save ")])],1)])])])]):t._e()],1)}),[],!1,null,"1127e5f7",null);e.default=component.exports;installComponents(component,{PageHeader:n(837).default,FoniyUploadFile:n(846).default})},837:function(t,e,n){"use strict";n.r(e);var o=n(35),l={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(o.c)(["layout"])},r=n(16),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[n("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"page-title-right"},[n("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},845:function(t,e,n){var content=n(855);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("0b28fe11",content,!0,{sourceMap:!1})},846:function(t,e,n){"use strict";n.r(e);n(22),n(14),n(171),n(19),n(2),n(58),n(42),n(12),n(7),n(57),n(62),n(43);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,d=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return d=t.done,t},e:function(t){c=!0,r=t},f:function(){try{d||null==n.return||n.return()}finally{if(c)throw r}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var r={props:["value","delete","one"],data:function(){return{fileList:[]}},watch:{value:{handler:function(t){this.fileList=t},immediate:!0},fileList:function(){this.$emit("input",this.fileList)}},methods:{dragFile:function(t){if(this.one){var e=t.dataTransfer.files[0];this.fileList.push({name:e.name,file:e,loader:!1})}else{var n,l=o(t.dataTransfer.files);try{for(l.s();!(n=l.n()).done;){var i=n.value;this.fileList.push({name:i.name,file:i,loader:!1})}}catch(t){l.e(t)}finally{l.f()}}},inputFile:function(t){if(this.one){var e=t.target.files[0];this.fileList.push({name:e.name,file:e,loader:!1})}else{var n,l=o(t.target.files);try{for(l.s();!(n=l.n()).done;){var i=n.value;this.fileList.push({name:i.name,file:i,loader:!1})}}catch(t){l.e(t)}finally{l.f()}}},UploadOneFile:function(){},deleteFile:function(i){var t=this;this.fileList[i].id?(this.fileList[i].loader=!0,this.$axios.delete("".concat(this.delete).concat(this.fileList[i].id)).then((function(){t.fileList.splice(i,1)})).catch((function(){t.fileList[i].loader=!0}))):this.fileList.splice(i,1)}}},d=(n(854),n(16)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"foniy-drag-uploads"},[!t.one||t.one&&0==t.fileList.length?o("div",{staticClass:"foniy-drop-file",on:{drop:[t.dragFile,function(t){t.preventDefault()}],dragover:function(t){t.preventDefault()}}},[o("img",{attrs:{src:n(851),alt:""}}),t._v(" "),o("h1",[t._v("Drop files here or click to upload")]),t._v(" "),o("p",[t._v("(Recommended: zip, Rar, PDF, DOCX, PPTX, XLSX, JPEG, JPG, PNG)")]),t._v(" "),o("input",{attrs:{type:"file",multiple:!t.one},on:{input:t.inputFile}})]):t._e(),t._v(" "),o("div",{staticClass:"foniy-drag-uploads-list"},t._l(t.fileList,(function(e,l){return o("div",{key:l,staticClass:"foniy-drag-uploads-list-item"},[o("div",{staticClass:"foniy-drag-uploads-list-content"},[o("div",{staticClass:"foniy-file-link"},[o("a",{attrs:{href:e.link?e.link:e.file}},[o("img",{attrs:{src:n(852),alt:""}}),t._v(" "),o("p",[t._v(t._s(e.name))])])]),t._v(" "),e.loader?o("button",[o("i",{staticClass:"el-icon-loading"})]):o("el-popconfirm",{attrs:{"confirm-button-text":"OK","cancel-button-text":"No, Thanks","icon-color":"red",title:"Are you sure to delete this File?"},on:{confirm:function(e){return t.deleteFile(l)}}},[o("button",{attrs:{slot:"reference"},slot:"reference"},[o("img",{attrs:{src:n(853),alt:""}})])])],1)])})),0)])}),[],!1,null,null,null);e.default=component.exports},851:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjYzNSAzMEg5TDE4IDIxTDIwLjgyIDIzLjgyQzIxLjc1IDIyLjM1IDIzLjA0IDIxLjE1IDI0LjYgMjAuNEwyNyAxOFYxOS42MzVDMjcuNDk1IDE5LjU2IDI3Ljk5IDE5LjUgMjguNSAxOS41QzI5LjAxIDE5LjUgMjkuNTA1IDE5LjU2IDMwIDE5LjYzNVYxMkwyMSAzSDlDNy4zMzUgMyA2IDQuMzM1IDYgNlYzMEM2IDMwLjc5NTYgNi4zMTYwNyAzMS41NTg3IDYuODc4NjggMzIuMTIxM0M3LjQ0MTI5IDMyLjY4MzkgOC4yMDQzNSAzMyA5IDMzSDIwLjcxNUMyMC4xOSAzMi4wODUgMTkuODE1IDMxLjA4IDE5LjYzNSAzMFpNMTkuNSA1LjI1TDI3Ljc1IDEzLjVIMTkuNVY1LjI1Wk0xMiAxMy41QzEyLjc5NTYgMTMuNSAxMy41NTg3IDEzLjgxNjEgMTQuMTIxMyAxNC4zNzg3QzE0LjY4MzkgMTQuOTQxMyAxNSAxNS43MDQ0IDE1IDE2LjVDMTUgMTcuMjk1NiAxNC42ODM5IDE4LjA1ODcgMTQuMTIxMyAxOC42MjEzQzEzLjU1ODcgMTkuMTgzOSAxMi43OTU2IDE5LjUgMTIgMTkuNUMxMC4zMzUgMTkuNSA5IDE4LjE2NSA5IDE2LjVDOSAxNC44MzUgMTAuMzUgMTMuNSAxMiAxMy41Wk0zMCAyMi41VjI3SDM0LjVWMzBIMzBWMzQuNUgyN1YzMEgyMi41VjI3SDI3VjIyLjVIMzBaIiBmaWxsPSIjQUVCNUJDIi8+Cjwvc3ZnPgo="},852:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDlWMy41TDE4LjUgOUgxM1pNNiAyQzQuODkgMiA0IDIuODkgNCA0VjIwQzQgMjAuNTMwNCA0LjIxMDcxIDIxLjAzOTEgNC41ODU3OSAyMS40MTQyQzQuOTYwODYgMjEuNzg5MyA1LjQ2OTU3IDIyIDYgMjJIMThDMTguNTMwNCAyMiAxOS4wMzkxIDIxLjc4OTMgMTkuNDE0MiAyMS40MTQyQzE5Ljc4OTMgMjEuMDM5MSAyMCAyMC41MzA0IDIwIDIwVjhMMTQgMkg2WiIgZmlsbD0iIzgwODE4NSIvPgo8L3N2Zz4K"},853:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjgzMzcgNS4zNDE5OUwxNC42NTg3IDQuMTY2OTlMMTAuMDAwMyA4LjgyNTMzTDUuMzQxOTkgNC4xNjY5OUw0LjE2Njk5IDUuMzQxOTlMOC44MjUzMyAxMC4wMDAzTDQuMTY2OTkgMTQuNjU4N0w1LjM0MTk5IDE1LjgzMzdMMTAuMDAwMyAxMS4xNzUzTDE0LjY1ODcgMTUuODMzN0wxNS44MzM3IDE0LjY1ODdMMTEuMTc1MyAxMC4wMDAzTDE1LjgzMzcgNS4zNDE5OVoiIGZpbGw9IiMyQjJEMzMiLz4KPC9zdmc+Cg=="},854:function(t,e,n){"use strict";n(845)},855:function(t,e,n){var o=n(52)(!1);o.push([t.i,'.foniy-drag-uploads{width:100%}.foniy-drop-file{width:100%;padding:30px;background:#f8f8f8;border:1.5px dashed #ced4da;border-radius:4px;display:flex;flex-direction:column;align-items:center;position:relative;cursor:pointer}.foniy-drop-file img{margin-bottom:16px}.foniy-drop-file h1{font-family:"Roboto";font-style:normal;font-weight:500;font-size:16px;text-align:center;color:#2b2d33;line-height:20px;position:relative;z-index:0;margin:0 0 10px}.foniy-drop-file p{margin:0;font-family:"Roboto";font-style:normal;font-weight:400;font-size:13px;line-height:16px;color:#aaabad}.foniy-drop-file input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;z-index:1}.foniy-drag-uploads-list{display:flex;flex-wrap:wrap;padding:15px -2px 30px}.foniy-drag-uploads-list .foniy-drag-uploads-list-item{padding:2px}.foniy-drag-uploads-list .foniy-file-link{width:calc(100% - 20px);padding-right:10px}.foniy-drag-uploads-list .foniy-drag-uploads-list-content{display:flex;align-items:center;border:1px solid #e9eaea;background:#f4f4f4;border-radius:4px;padding:10px;width:300px;box-sizing:border-box}.foniy-drag-uploads-list a{margin-right:10px;display:flex;align-items:center;font-family:"Roboto";font-style:normal;font-weight:400;font-size:14px;color:#2b2d33;line-height:16px;width:100%}.foniy-drag-uploads-list a img{margin-right:8px;width:20px}.foniy-drag-uploads-list a p{margin:0;width:calc(100% - 28px);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.foniy-drag-uploads-list button{outline:none;border:none;background:none;cursor:pointer;display:flex;align-items:center;justify-content:center;justify-content:flex-end;padding:0}.foniy-drag-uploads-list button img{width:20px}',""]),t.exports=o}}]);