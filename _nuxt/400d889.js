(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1079:function(e,t,n){var content=n(1232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("32ed7ca0",content,!0,{sourceMap:!1})},1231:function(e,t,n){"use strict";n(1079)},1232:function(e,t,n){var o=n(52)(!1);o.push([e.i,'.group-view-header[data-v-448e51ef]{display:flex;align-items:center}.group-view-header h1[data-v-448e51ef]{font-family:"Roboto";font-style:normal;font-weight:700;font-size:18px;line-height:21px;color:#2b2d33;flex:1}.students-list-table tbody td p[data-v-448e51ef]{margin-bottom:4px;font-style:normal;font-weight:400;font-size:14px;line-height:16px;color:#2b2d33}.students-list-table tbody td span[data-v-448e51ef]{font-family:"Roboto";font-style:normal;font-weight:400;font-size:13px;line-height:16px;color:#90999d}.bg-light-green[data-v-448e51ef]{background:#cdfcb2}.bg-light-green.bg-gray[data-v-448e51ef]{background:#f8f9fa}.bg-light-red[data-v-448e51ef]{background:#ffaeae}.bg-yellow[data-v-448e51ef]{background:#f6fca4}',""]),e.exports=o},1290:function(e,t,n){"use strict";n.r(t);n(8),n(7),n(9),n(10);var o=n(0),r=(n(4),n(2),n(14),n(12),n(6),n(25),n(17),n(5)),l=n.n(r);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={head:function(){return{title:"".concat(this.title," | MIS tbteam.uz")}},computed:{months_list:function(){var e=this;return this.month?this.gradeMonthsList.filter((function(t){return t.month_id==e.month})):this.gradeMonthsList}},data:function(){return{title:"Lesson",loader:!1,loading:!1,gradeBoookList:[],monthSemester:[],semester:0,current_semester:"",weekDays:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],months:["January","Febrary","March","April","May","June","Jule","August","September","Octtomber","November","December"],semesterList:[],form:[],month:"",weeklyData:{},week:"",gradeMonthsList:[],week_list:[],test:{},semester_index:1}},watch:{month:function(){this.week="",this.weeklyData={},this._GET()},semester:function(){this.month="",this.week="",this.weeklyData={},this._GET()}},created:function(){this._getsemester()},methods:{_GET:function(){var e=this;this.loader=!0,this.$axios.get("/gradebooklist/?lesson=".concat(this.$route.params.id,"&semester=").concat(this.semester,"&month=").concat(this.month)).then((function(t){e.test=t.data,e.semester_index=t.data.semester_index;var n=[],o=[];t.data.data.forEach((function(e){o=[],e.gradebook.forEach((function(e){o.push(c(c({},e),{},{loading:!1,usaved:!1,saved:!!e.gradebook}))})),n.push(c(c({},e),{},{exam_loading:!1,saved:!!e.exam,usaved:!1,gradebook:o}))})),e.gradeBoookList=n,e.gradeMonthsList=t.data.months,e._GenerateMonths(t.data.data[0].gradebook),e.generateWeek()})).finally((function(){e.loader=!1}))},setData:function(e,t,n){var o=n.target.value;if(this.form=[],o<101&&o>=0){for(var r=-1,i=0;i<this.form.length;i++)this.form[i].date==e&&this.form[i].student==t&&(r=i);-1!=r?this.form[r].points=o:this.form.push({date:e,student:t,points:o})}},_Save:function(e,t,i,n,o){var r=this;this.$refs.form.validate().then((function(l){if(l&&o&&o<101&&o>=0){var data=new FormData;r.gradeBoookList[i].gradebook[n].loading=!0,data.append("semester",r.semester),data.append("lesson",r.$route.params.id),data.append("gradebookusers[0]date",e),data.append("gradebookusers[0]student",t),data.append("gradebookusers[0]points",o),r.$axios.post("/gradebook/",data).then((function(){r.gradeBoookList[i].gradebook[n].saved=!0,r.gradeBoookList[i].gradebook[n].unsaved=!1,r.form=[]})).catch((function(){r.gradeBoookList[i].gradebook[n].saved=!1,r.gradeBoookList[i].gradebook[n].unsaved=!0,r.$swal.fire({icon:"error",title:"Gradebook is not saved!",text:"Server is not working! Please try again leter.",confirmButtonText:"Ok",timer:1500})})).finally((function(){r.gradeBoookList[i].gradebook[n].loading=!1}))}else{var d=r.gradeBoookList[i].gradebook[n].gradebook_id;""==o&&d&&(r.gradeBoookList[i].gradebook[n].loading=!0,r.$axios.delete("/gradebookuserdestroy/".concat(d,"/")).then((function(){})).catch((function(){r.$swal.fire({icon:"error",title:"Gradebook is not saved!",text:"Server is not working! Please try again leter.",confirmButtonText:"Ok",timer:1500})})).finally((function(){r.gradeBoookList[i].gradebook[n].loading=!1})))}}))},_GenerateMonths:function(data){var e=this,t=this._getMonth(data[0].gradebook_date),n=this._getYear(data[0].gradebook_date),o=[],r=0,l=0;data.forEach((function(element){e._getMonth(element.gradebook_date)!=t&&(console.log(element.gradebook_date),o.push({index:t,year:n,day_count:r}),t=e._getMonth(element.gradebook_date),r=0),r+=1,(l+=1)==data.length&&o.push({index:t,year:n,day_count:r})})),this.monthSemester=o},_getsemester:function(){var e=this;this.$axios.get("/semesterlist/?lesson=".concat(this.$route.params.id)).then((function(t){e.semesterList=t.data,e.semester=t.data[0].id,e.current_semester=t.data[0].id,t.data.forEach((function(element,i){element.current_semester&&(e.semester=element.id,e.current_semester=element.id)})),e._GET()}))},_getDay:function(e){return e.split("-")[2]},_getMonth:function(e){var t=l()(e).format("YYYY-MM-DD");return(t=new Date(t)).getMonth()},_getYear:function(e){var t=l()(e).format("YYYY-MM-DD");return(t=new Date(t)).getFullYear()},formatDate:function(e){var a=e.split(".");return a=a[2]+"-"+a[1]+"-"+a[0]},checkCurDate:function(e){var t=new Date;return(t=l()(t).format("YYYY-MM-DD"))>=l()(this.formatDate(e)).format("YYYY-MM-DD")},generateWeek:function(){var e=this,data=[],t="";this.gradeBoookList[0].gradebook.forEach((function(element){var n=e.getMonday(element.gradebook_date,"monday"),o=e.getMonday(element.gradebook_date,"sunday");n!=t&&(data.push({start:n,end:o}),t=n)})),this.week_list=data.map((function(e){return e}))},getMonday:function(data,e){var t=data;if(t=l()(t).format("YYYY-MM-DD"),t=new Date(t),"monday"==e)if(0==t.getDay())t=t.setDate(t.getDate()-6),t=l()(t).format("YYYY-MM-DD");else{var n=t.getDate()-t.getDay()+1;t=new Date(t.setDate(n)),t=l()(t).format("YYYY-MM-DD")}if("sunday"==e)if(0==t.getDay())t=t.setDate(t.getDate()),t=l()(t).format("YYYY-MM-DD");else{var o=t.getDate()-t.getDay()+7;t=new Date(t.setDate(o)),t=l()(t).format("YYYY-MM-DD")}return t},generateWeeklyData:function(){var e=this;if(this.week){var t=[],n=[];this.weeklyData=[],this.gradeBoookList.forEach((function(o){n=[],o.gradebook.forEach((function(t){t.gradebook_date>=e.week_list[e.week-1].start&&t.gradebook_date<=e.week_list[e.week-1].end&&n.push(t)})),t.push(c(c({},o),{},{gradebook:n}))})),this.weeklyData=t}},SaveExamGrade:function(i,e,t){var n=this;this.$refs.form.validate().then((function(o){if(o&&t&&t<101&&t>=0){n.gradeBoookList[i].exam_loading=!0;var data=new FormData;data.append("semester",n.semester),data.append("lesson",n.$route.params.id),data.append("finalexamuser[0]student",e),data.append("finalexamuser[0]points",t),n.$axios.post("/finalexam/",data).then((function(){n.gradeBoookList[i].saved=!0,n.gradeBoookList[i].unsaved=!1})).catch((function(){n.gradeBoookList[i].saved=!1,n.gradeBoookList[i].unsaved=!0})).finally((function(){n.gradeBoookList[i].exam_loading=!1}))}}))}},middleware:"auth"},_=(n(1231),n(16)),component=Object(_.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[o("div",{staticClass:"table-responsive mb-0"},[o("header",{staticClass:"mb-3"},[o("h4",[e._v("Gradebook")]),e._v(" "),o("div",{staticClass:"d-flex justify-content-between pt-2"},[o("div",{staticClass:"d-flex align-items-center"},[o("el-select",{staticClass:"foniy-select w-full mr-1",attrs:{placeholder:"Select"},model:{value:e.semester,callback:function(t){e.semester=t},expression:"semester"}},e._l(e.semesterList,(function(e,i){return o("el-option",{key:i,attrs:{label:i+1+"-term",value:e.id}})})),1),e._v(" "),o("el-select",{staticClass:" w-full mr-1",attrs:{placeholder:"Months",clearable:""},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}},e._l(e.gradeMonthsList,(function(e,i){return o("el-option",{key:i,attrs:{label:""+e.month_name,value:e.month_id}})})),1),e._v(" "),o("el-select",{staticClass:" w-full mr-1",attrs:{disabled:!e.month,placeholder:"Week",clearable:""},on:{change:function(t){return e.generateWeeklyData()}},model:{value:e.week,callback:function(t){e.week=t},expression:"week"}},e._l(e.week_list,(function(e,i){return o("el-option",{key:i,attrs:{label:i+1+"-week",value:i+1}})})),1),e._v(" "),o("b-button",{staticClass:"mr-1 d-flex",attrs:{size:"md",variant:"light"}},[o("i",{staticClass:"mdi mdi-arrow-down-bold mr-2"}),e._v(" Download")])],1)])]),e._v(" "),o("ValidationObserver",{directives:[{name:"show",rawName:"v-show",value:!e.loader,expression:"!loader"}],ref:"form"},[e.gradeBoookList&&e.gradeBoookList[0]?o("div",{staticClass:"foniy-table mb-3 scroll"},[e.week&&e.weeklyData&&e.weeklyData[0]?o("table",{staticClass:"border-all"},[o("tr",{staticClass:"vertical-center"},[o("th",{attrs:{rowspan:"2"}},[o("p",{staticClass:"font-16 font-weight-bold  m-0"},[e._v("Students")])]),e._v(" "),o("th",{attrs:{colspan:e.weeklyData[0].gradebook.length}},[o("p",{staticClass:"m-0 text-center font-weight-bold"},[e._v(" "+e._s(e.months_list[0].month_name)+" - "+e._s(e.months_list[0].year)+" ")])]),e._v(" "),o("th",{attrs:{colspan:[2,4].includes(e.semester_index)?3:1}},[o("p",{staticClass:"font-16  m-0 font-weight-bold text-center"},[e._v("Percentage")])]),e._v(" "),o("th",{attrs:{colspan:[2,4].includes(e.semester_index)?3:1}},[o("p",{staticClass:"font-16  m-0 font-weight-bold text-center"},[e._v("Grade")])])]),e._v(" "),o("tr",{staticClass:"bg-gray"},[e._l(e.weeklyData[0].gradebook,(function(t,i){return o("th",{key:i,staticStyle:{"min-width":"70px",width:"70px"}},[o("div",{staticClass:"week-day",class:{active:t.current_day}},[o("p",{staticClass:"m-0 mb-1 font-weight-bold",class:{"color-red":6==t.weekday_id,"color-orange":5==t.weekday_id}},[e._v(" "+e._s(e.weekDays[t.weekday_id])+" ")]),e._v(" "),o("p",{staticClass:"m-0",class:{"color-red":6==t.weekday_id,"color-orange":5==t.weekday_id}},[e._v(" "+e._s(e._getDay(t.gradebook_date)))])])])})),e._v(" "),[1,3].includes(e.semester_index)?o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0   font-weight-bold"},[e._v("\n                                Total Av\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0   font-weight-bold"},[e._v("\n                                AFG(60)\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0 font-weight-bold"},[e._v("\n                                Exam(40)\n\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0 font-weight-bold"},[e._v("\n                                Total Grade\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0  font-weight-bold"},[e._v("\n                                Formative Grade\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0  font-weight-bold"},[e._v("\n                                Summative Grade\n                            ")])]):e._e(),e._v(" "),o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0  font-weight-bold"},[e._v("\n                                End of Term Grade\n                            ")])])],2),e._v(" "),e._l(e.weeklyData,(function(t,i){return o("tr",{key:i,staticClass:"hover"},[o("td",{staticStyle:{"min-width":"300px"}},[o("div",{staticClass:"student-name-imame"},[o("div",{staticClass:"user-table-image"},[o("img",{attrs:{src:n(843),alt:""}})]),e._v(" "),o("h1",{staticClass:"font-14 font-weight-normal m-0"},[e._v("\n                                    "+e._s(t.last_name)+" "+e._s(t.first_name)+"\n                                ")])])]),e._v(" "),e._l(t.gradebook,(function(n,r){return o("td",{key:r,class:{"bg-gray":5==n.weekday_id||6==n.weekday_id,"bg-light-green":n.saved,"bg-light-red":n.unsaved}},[5==n.weekday_id||6==n.weekday_id||n.next_day||n.loading?e._e():o("ValidationProvider",{attrs:{rules:"between:0,101"},scopedSlots:e._u([{key:"default",fn:function(l){var d=l.errors;return[o("input",{directives:[{name:"model",rawName:"v-model",value:n.gradebook,expression:"item2.gradebook"}],staticClass:"gradebook-input",class:{invalid:d[0]},attrs:{type:"number",max:"100"},domProps:{value:n.gradebook},on:{blur:function(o){return e._Save(n.gradebook_date,t.id,i,r,n.gradebook)},input:function(t){t.target.composing||e.$set(n,"gradebook",t.target.value)}}})]}}],null,!0)}),e._v(" "),n.loading?o("p",{staticClass:"m-0 text-center"},[e._v(" "+e._s(n.gradebook)+" "),o("i",{staticClass:"el-icon-loading ml-1"})]):e._e()],1)})),e._v(" "),[1,3].includes(e.semester_index)?o("td",{staticClass:"bg-yellow"},[o("p",{staticClass:"font-14 text-center m-0 font-weight-normal"},[e._v("\n                                "+e._s(t.total_av)+"\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("td",{staticClass:"bg-yellow"},[o("p",{staticClass:"font-14 text-center m-0 font-weight-normal"},[e._v("\n                                "+e._s(t.afg)+"\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("td",{class:{"bg-light-green":t.saved,"bg-light-red":t.unsaved}},[t.exam_loading?e._e():o("ValidationProvider",{attrs:{rules:"between:0,101"},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[o("input",{directives:[{name:"model",rawName:"v-model",value:t.exam,expression:"item.exam"}],staticClass:"gradebook-input",class:{invalid:r[0]},attrs:{type:"number",max:"100"},domProps:{value:t.exam},on:{blur:function(n){return e.SaveExamGrade(i,t.id,t.exam)},input:function(n){n.target.composing||e.$set(t,"exam",n.target.value)}}})]}}],null,!0)}),e._v(" "),t.exam_loading?o("p",{staticClass:"m-0 text-center"},[e._v(" "+e._s(t.exam)+" "),o("i",{staticClass:"el-icon-loading ml-1"})]):e._e()],1):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("td",{staticClass:"bg-yellow"},[o("p",{staticClass:"font-14 text-center m-0 font-weight-normal"},[e._v("\n                                "+e._s(t.total_grade)+"\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("td",{staticClass:"bg-yellow"},[o("p",{staticClass:"font-14 text-center m-0 font-weight-normal"},[e._v(" "+e._s(t.formative_grade)+" ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("td",{staticClass:"bg-yellow"},[o("p",{staticClass:"font-14 text-center m-0 font-weight-normal"},[e._v(" "+e._s(t.summative_grade)+" ")])]):e._e(),e._v(" "),o("td",{staticClass:"bg-yellow"},[o("p",{staticClass:"font-14 text-center m-0 font-weight-normal"},[e._v(" "+e._s(t.end_of_term_grade)+"  ")])])],2)}))],2):o("table",{staticClass:"border-all"},[o("tr",{staticClass:"vertical-center"},[o("th",{attrs:{rowspan:"2"}},[o("p",{staticClass:"font-16 font-weight-bold  m-0"},[e._v("Students")])]),e._v(" "),e._l(e.monthSemester,(function(t,i){return o("th",{key:i,attrs:{colspan:t.day_count}},[o("p",{staticClass:"m-0 text-center font-weight-bold"},[e._v(" "+e._s(e.months[t.index])+" - "+e._s(t.year)+" ")])])})),e._v(" "),o("th",{attrs:{colspan:[2,4].includes(e.semester_index)?3:1}},[o("p",{staticClass:"font-16  m-0 font-weight-bold text-center"},[e._v("Percentage")])]),e._v(" "),o("th",{attrs:{colspan:[2,4].includes(e.semester_index)?3:1}},[o("p",{staticClass:"font-16  m-0 font-weight-bold text-center"},[e._v("Grade")])])],2),e._v(" "),o("tr",{staticClass:"bg-gray"},[e._l(e.gradeBoookList[0].gradebook,(function(t,i){return o("th",{key:i,staticStyle:{"min-width":"70px",width:"70px"}},[o("div",{staticClass:"week-day",class:{active:t.current_day}},[o("p",{staticClass:"m-0 mb-1 font-weight-bold",class:{"color-red":6==t.weekday_id,"color-orange":5==t.weekday_id}},[e._v(" "+e._s(e.weekDays[t.weekday_id])+" ")]),e._v(" "),o("p",{staticClass:"m-0",class:{"color-red":6==t.weekday_id,"color-orange":5==t.weekday_id}},[e._v(" "+e._s(e._getDay(t.gradebook_date)))])])])})),e._v(" "),[1,3].includes(e.semester_index)?o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0   font-weight-bold"},[e._v("\n                                Total Av\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0   font-weight-bold"},[e._v("\n                                AFG(60)\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0 font-weight-bold"},[e._v("\n                                Exam(40)\n\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0 font-weight-bold"},[e._v("\n                                Total Grade\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0  font-weight-bold"},[e._v("\n                                Formative Grade\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0  font-weight-bold"},[e._v("\n                                Summative Grade\n                            ")])]):e._e(),e._v(" "),o("th",{staticClass:"bg-yellow",staticStyle:{"min-width":"70px",width:"70px"}},[o("p",{staticClass:"font-12 text-center m-0  font-weight-bold"},[e._v("\n                                End of Term Grade\n                            ")])])],2),e._v(" "),e._l(e.gradeBoookList,(function(t,i){return o("tr",{key:i,staticClass:"hover"},[o("td",{staticStyle:{"min-width":"300px"}},[o("div",{staticClass:"student-name-imame"},[o("div",{staticClass:"user-table-image"},[o("img",{attrs:{src:n(843),alt:""}})]),e._v(" "),o("h1",{staticClass:"font-14 font-weight-normal m-0"},[e._v("\n                                    "+e._s(t.last_name)+" "+e._s(t.first_name)+"\n                                ")])])]),e._v(" "),e._l(t.gradebook,(function(n,r){return o("td",{key:r,class:{"bg-light-green":n.saved,"bg-light-red":n.unsaved,"bg-gray":5==n.weekday_id||6==n.weekday_id}},[5==n.weekday_id||6==n.weekday_id||n.next_day||n.loading?e._e():o("ValidationProvider",{attrs:{rules:"between:0,101"},scopedSlots:e._u([{key:"default",fn:function(l){var d=l.errors;return[o("input",{directives:[{name:"model",rawName:"v-model",value:n.gradebook,expression:"item2.gradebook"}],staticClass:"gradebook-input",class:{invalid:d[0]},attrs:{type:"number",max:"100"},domProps:{value:n.gradebook},on:{blur:function(o){return e._Save(n.gradebook_date,t.id,i,r,n.gradebook)},input:function(t){t.target.composing||e.$set(n,"gradebook",t.target.value)}}})]}}],null,!0)}),e._v(" "),n.loading?o("p",{staticClass:"m-0 text-center"},[e._v(" "+e._s(n.gradebook)+" "),o("i",{staticClass:"el-icon-loading ml-1"})]):e._e()],1)})),e._v(" "),[1,3].includes(e.semester_index)?o("td",{staticClass:"bg-yellow"},[o("p",{staticClass:"font-14 text-center m-0 font-weight-normal"},[e._v("\n                                "+e._s(t.total_av)+"\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("td",{staticClass:"bg-yellow"},[o("p",{staticClass:"font-14 text-center m-0 font-weight-normal"},[e._v("\n                                "+e._s(t.afg)+"\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("td",{class:{"bg-light-green":t.saved,"bg-light-red":t.unsaved}},[t.exam_loading?e._e():o("ValidationProvider",{attrs:{rules:"between:0,101"},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[o("input",{directives:[{name:"model",rawName:"v-model",value:t.exam,expression:"item.exam"}],staticClass:"gradebook-input",class:{invalid:r[0]},attrs:{type:"number",max:"100"},domProps:{value:t.exam},on:{blur:function(n){return e.SaveExamGrade(i,t.id,t.exam)},input:function(n){n.target.composing||e.$set(t,"exam",n.target.value)}}})]}}],null,!0)}),e._v(" "),t.exam_loading?o("p",{staticClass:"m-0 text-center"},[e._v(" "+e._s(t.exam)+" "),o("i",{staticClass:"el-icon-loading ml-1"})]):e._e()],1):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("td",{staticClass:"bg-yellow"},[o("p",{staticClass:"font-14 text-center m-0 font-weight-normal"},[e._v("\n                                "+e._s(t.total_grade)+"\n                            ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("td",{staticClass:"bg-yellow"},[o("p",{staticClass:"font-14 text-center m-0 font-weight-normal"},[e._v(" "+e._s(t.formative_grade)+" ")])]):e._e(),e._v(" "),[2,4].includes(e.semester_index)?o("td",{staticClass:"bg-yellow"},[o("p",{staticClass:"font-14 text-center m-0 font-weight-normal"},[e._v(" "+e._s(t.summative_grade)+" ")])]):e._e(),e._v(" "),o("td",{staticClass:"bg-yellow"},[o("p",{staticClass:"font-14 text-center m-0 font-weight-normal"},[e._v(" "+e._s(t.end_of_term_grade)+"  ")])])],2)}))],2)]):e._e()]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.loader,expression:"loader"}],staticClass:"table-loader",staticStyle:{height:"500px"}},[o("i",{staticClass:"el-icon-loading"}),e._v(" "),o("p",{staticClass:"m-0 mt-1"},[e._v("loading...")])])],1)])}),[],!1,null,"448e51ef",null);t.default=component.exports},843:function(e,t,n){e.exports=n.p+"img/default-avatar.26ed590.svg"}}]);