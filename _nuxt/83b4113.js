(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1040:function(e,t,n){"use strict";n.r(t);n(8),n(7),n(9),n(10);var c=n(0),r=(n(22),n(2),n(6),n(4),n(47),n(12),n(25),n(14),n(42),n(43),n(848),n(526),n(1166)),l=n(35),d=n(5),o=n.n(d);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={props:["id"],computed:h(h({},Object(l.b)("dictionary",["dic_academic_year"])),{},{role:function(){var e;return null===(e=this.$store.state.auth.user)||void 0===e?void 0:e.role.name},semester_list:function(){var e=this,data=[];return this.dic_academic_year.forEach((function(element){element.current_academicyear&&(e.filter.academic_year=element.id,element.semesters.forEach((function(t){t.current_semester&&(e.filter.semester=t.id)})),data=element.semesters)})),data},cur_academic_year:function(){var data="";return this.dic_academic_year.forEach((function(element){element.current_academicyear&&(data=element.id)})),data},cur_semester:function(){var e=this,data="";return this.dic_academic_year.forEach((function(element){element.current_academicyear&&(e.filter.academic_year=element.id,element.semesters.forEach((function(e){e.current_semester&&(data=e.id)})))})),data},User:function(){return this.$store.state.auth.user}}),data:function(){var e;return e={loader:!1,filter:{semester:"",academic_year:""},types:[{id:1,name:"Rarely"},{id:2,name:"Sometimes"},{id:3,name:"Most of the time"},{id:4,name:"Always"}],List:{}},Object(c.a)(e,"loader",!1),Object(c.a)(e,"downloadLoader",!1),e},watch:{current_semester:function(){this.semester=this.cur_semester?this.cur_semester:this.semester_list[0].id},"filter.semester":function(){this.LearnerList()}},methods:{checkCurDate:function(e){if(["branch_admin"].includes(this.role))return!0;var t=new Date;return(t=o()(t).format("YYYY-MM-DD"))>=o()(this.formatDate(e)).format("YYYY-MM-DD")},formatDate:function(e){var a=e.split(".");return a=a[2]+"-"+a[1]+"-"+a[0]},LearnerList:function(){var e=this;this.loader=!0;var t=this.$route.params.id?this.$route.params.id:this.id;this.$axios.get("/midtermreportlist/?academic_year=".concat(this.filter.academic_year,"&semester=").concat(this.filter.semester,"&student=").concat(t)).then((function(t){if(t.data.academicachievement&&t.data.academicachievement.forEach((function(element,i){element.academicachievement?t.data.academicachievement[i].academicachievement=h({edit:!1,delete:!1,loading:!1},element.academicachievement):t.data.academicachievement[i].academicachievement={edit:!1,delete:!1,loading:!1,areas_of_excellence:"",areas_for_improvement:"",predictedgrade:"",lesson:element.id,midtermreport:t.data.id}})),e.List=t.data,!t.data.id){var data={academic_year:e.filter.academic_year,semester:e.filter.semester,student:parseInt(e.$route.params.id)};["branch_admin","teacher"].includes(e.role)&&e.$axios.post("/midtermreport/",data).then((function(){e.LearnerList()}))}})).finally((function(){e.loader=!1}))},SaveChildAs:function(e,i,t){var n=this;if((["branch_admin"].includes(this.role)||this.List.class_teacher&&this.List.class_teacher.id==this.User.id)&&(!e.asalearner||e.asalearner&&!e.asalearner.loading))if(e.asalearner&&e.asalearner.id){var data={id:e.asalearner.id,midtermreport:this.List.id,asalearnerdict:e.id,rate_text:this.types[t].name,rate:this.types[t].id,loading:!0};this.List.asalearnerdict[i].asalearner=data,this.$axios.put("/learner/".concat(e.asalearner.id,"/"),data).then((function(e){data.id=e.data.id,data.loading=!1,n.List.asalearnerdict[i].asalearner=data})).finally((function(){data.loading=!1,n.List.asalearnerdict[i].asalearner=data}))}else{var c={midtermreport:this.List.id,asalearnerdict:e.id,rate_text:this.types[t].name,rate:this.types[t].id,loading:!0};this.List.asalearnerdict[i].asalearner=c,this.$axios.post("/learner/",c).then((function(e){c.id=e.data.id,c.loading=!1,n.List.asalearnerdict[i].asalearner=c})).finally((function(){c.loading=!1,n.List.asalearnerdict[i].asalearner=c}))}},SaveChildPS:function(e,i,t){var n=this;if((["branch_admin"].includes(this.role)||this.List.class_teacher&&this.List.class_teacher.id==this.User.id)&&(!e.psdevelopment||e.psdevelopment&&!e.psdevelopment.loading))if(e.psdevelopment&&e.psdevelopment.id){var data={id:e.psdevelopment.id,midtermreport:this.List.id,p_s_developmentdict:e.id,rate_text:this.types[t].name,rate:this.types[t].id,loading:!0};this.List.psdevelopmentdict[i].psdevelopment=data,this.$axios.put("/p_s_development/".concat(e.psdevelopment.id,"/"),data).then((function(e){data.id=e.data.id,data.loading=!1,n.List.psdevelopmentdict[i].psdevelopment.id=e.data.id})).finally((function(){data.loading=!1,n.List.psdevelopmentdict[i].psdevelopment=data}))}else{var c={midtermreport:this.List.id,p_s_developmentdict:e.id,rate_text:this.types[t].name,rate:this.types[t].id,loading:!0};this.List.psdevelopmentdict[i].psdevelopment=c,this.$axios.post("/p_s_development/",c).then((function(e){c.id=e.data.id,c.loading=!1,n.List.psdevelopmentdict[i].psdevelopment.id=e.data.id})).finally((function(){c.loading=!1,n.List.psdevelopmentdict[i].psdevelopment.id=c}))}},SavechildAC:function(e,i){var t=this;if(e.academicachievement.id){this.List.academicachievement[i].academicachievement.loading=!0,this.List.academicachievement[i].academicachievement.edit=!1;var data={areas_of_excellence:e.academicachievement.areas_of_excellence,areas_for_improvement:e.academicachievement.areas_for_improvement,predictedgrade:e.academicachievement.predictedgrade};this.$axios.put("/academic_achievement/".concat(e.academicachievement.id,"/"),data).then((function(e){t.List.academicachievement[i].academicachievement.id=e.data.id})).finally((function(){t.List.academicachievement[i].academicachievement.loading=!1}))}else{this.List.academicachievement[i].academicachievement.loading=!0,this.List.academicachievement[i].academicachievement.edit=!1;var n={midtermreport:this.List.id,lesson:e.id,areas_of_excellence:e.academicachievement.areas_of_excellence,areas_for_improvement:e.academicachievement.areas_for_improvement,predictedgrade:e.academicachievement.predictedgrade};this.$axios.post("/academic_achievement/",n).then((function(e){t.List.academicachievement[i].academicachievement.id=e.data.id})).finally((function(){t.List.academicachievement[i].academicachievement.loading=!1}))}},GenerateDoc:function(){var e=[new r.TableRow({children:[new r.TableCell({children:[new r.Paragraph({children:[new r.TextRun({text:"Academic Achievement:",bold:!0,font:"Times New Roman",allCaps:!0,size:"12pt"})],alignment:r.AlignmentType.CENTER,spacing:{after:"5pt",before:"5pt"}})],verticalAlign:r.VerticalAlign.CENTER,columnSpan:4})]})];this.List.academicachievement.forEach((function(element){var data=new r.TableRow({children:[new r.TableCell({children:[new r.Paragraph({children:[new r.TextRun({text:element.subject_name?element.subject_name:" ",bold:!0,font:"Times New Roman",allCaps:!0,size:"10pt"})],alignment:r.AlignmentType.CENTER,spacing:{after:"5pt",before:"5pt"}})],verticalAlign:r.VerticalAlign.CENTER,width:{size:30,type:r.WidthType.PERCENTAGE}}),new r.TableCell({children:[new r.Paragraph({children:[new r.TextRun({text:element.academicachievement&&element.academicachievement.areas_of_excellence?element.academicachievement.areas_of_excellence:" ",bold:!1,font:"Times New Roman",allCaps:!0,size:"10pt"})],alignment:r.AlignmentType.CENTER,spacing:{after:"5pt",before:"5pt"}})],verticalAlign:r.VerticalAlign.CENTER,width:{size:30,type:r.WidthType.PERCENTAGE}}),new r.TableCell({children:[new r.Paragraph({children:[new r.TextRun({text:element.academicachievement&&element.academicachievement.areas_for_improvement?element.academicachievement.areas_for_improvement:" ",bold:!1,font:"Times New Roman",allCaps:!0,size:"10pt"})],alignment:r.AlignmentType.CENTER,spacing:{after:"5pt",before:"5pt"}})],verticalAlign:r.VerticalAlign.CENTER,width:{size:30,type:r.WidthType.PERCENTAGE}}),new r.TableCell({children:[new r.Paragraph({children:[new r.TextRun({text:element.academicachievement&&element.academicachievement.predictedgrade?element.academicachievement.predictedgrade:"",bold:!1,font:"Times New Roman",allCaps:!0,size:"10pt"})],alignment:r.AlignmentType.CENTER,spacing:{after:"5pt",before:"5pt"}})],verticalAlign:r.VerticalAlign.CENTER,width:{size:10,type:r.WidthType.PERCENTAGE}})]});e.push(data)}));var t=[new r.TableRow({children:[new r.TableCell({children:[new r.Paragraph({children:[new r.TextRun({text:"Student",bold:!0,font:"Times New Roman",allCaps:!0,size:"10pt"})],spacing:{after:"5pt",before:"5pt"}})],verticalAlign:r.VerticalAlign.CENTER,width:{size:30,type:r.WidthType.PERCENTAGE}}),new r.TableCell({children:[new r.Paragraph({children:[new r.TextRun({text:"Student",bold:!0,font:"Times New Roman",allCaps:!0,size:"10pt"})],spacing:{after:"5pt",before:"5pt"}})],verticalAlign:r.VerticalAlign.CENTER,width:{size:30,type:r.WidthType.PERCENTAGE}}),new r.TableCell({children:[new r.Paragraph({children:[new r.TextRun({text:"Student",bold:!0,font:"Times New Roman",allCaps:!0,size:"10pt"})],spacing:{after:"5pt",before:"5pt"}})],verticalAlign:r.VerticalAlign.CENTER,width:{size:30,type:r.WidthType.PERCENTAGE}})]})],n=new r.Document({sections:[{properties:{page:{margin:{top:"40pt",right:"40pt",bottom:"40pt",left:"40pt"}}},children:[new r.Paragraph({children:[new r.TextRun({text:"Mid-Term 1 Progress Report  November 2022",bold:!0,font:"Times New Roman",allCaps:!0,size:"12pt"}),new r.TextRun({text:"\t",size:"12pt"})],alignment:r.AlignmentType.CENTER,spacing:{after:"5pt",before:"5pt"}}),new r.Table({rows:t,width:{size:100,type:r.WidthType.PERCENTAGE}}),new r.Paragraph({children:[new r.TextRun({text:"\t",bold:!0,font:"Times New Roman",allCaps:!0,size:"12pt"})],alignment:r.AlignmentType.CENTER,spacing:{after:"5pt",before:"5pt"}}),new r.Table({rows:e,width:{size:100,type:r.WidthType.PERCENTAGE}})]}]});r.Packer.toBuffer(n).then((function(e){console.log(e);var t=new Blob([e],{type:"application/doc"}),link=document.createElement("a");link.href=URL.createObjectURL(t),link.download="AbisDoc.docx",link.click()}))},DownloadDoc:function(){var e=this;this.downloadLoader=!0;var t=this.$route.params.id?this.$route.params.id:this.id;this.$axios.get("/midtermreportdocx/?academic_year=".concat(this.filter.academic_year,"&semester=").concat(this.filter.semester,"&student=").concat(t),{responseType:"blob"}).then((function(e){var n=new Blob([e.data],{type:"application/docx"}),link=document.createElement("a");link.href=URL.createObjectURL(n),link.download="AbisStudent".concat(t,".docx"),link.click()})).finally((function(){e.downloadLoader=!1}))}},mounted:function(){this.cur_semester&&(this.filter.semester=this.cur_semester?this.cur_semester:this.semester_list[0].id,this.LearnerList()),this.cur_academic_year&&(this.filter.academic_year=this.cur_academic_year)}},v=n(16),component=Object(v.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"student-form",attrs:{id:"doc"}},[n("header",{staticClass:"d-flex align-items-center justify-content-between mb-3"},[n("h4",{staticClass:"m-0"},[e._v("Progress Report")]),e._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("el-select",{staticClass:"  foniy-select mr-1",attrs:{placeholder:"Academic year"},model:{value:e.filter.academic_year,callback:function(t){e.$set(e.filter,"academic_year",t)},expression:"filter.academic_year"}},e._l(e.dic_academic_year,(function(e,i){return n("el-option",{key:i,attrs:{label:e.name,value:e.id}})})),1),e._v(" "),n("el-select",{staticClass:"  foniy-select mr-1",attrs:{placeholder:"Term"},model:{value:e.filter.semester,callback:function(t){e.$set(e.filter,"semester",t)},expression:"filter.semester"}},e._l(e.semester_list,(function(t,i){return n("el-option",{key:i,attrs:{label:i+1+"-term",value:t.id,disabled:!e.checkCurDate(t.start_semester)}})})),1),e._v(" "),n("b-button",{attrs:{disabled:e.downloadLoader,variant:"light"},on:{click:e.DownloadDoc}},[e.downloadLoader?e._e():n("i",{staticClass:"mdi mdi-microsoft-excel mr-1"}),e._v(" "),e.downloadLoader?n("i",{staticClass:"el-icon-loading mr-1"}):e._e(),e._v("\n                 Download\n            ")])],1)]),e._v(" "),e.List.id?n("div",{staticClass:"foniy-table"},[n("table",{staticClass:"border-all"},[n("tr",[n("th",{staticClass:"font-weight-bold"},[e._v("\n                    Student: "+e._s(e._f("fio")(e.List.student))+" \n                    "),n("br"),e._v("\n                    Group: "+e._s(e.List.group_name)+"\n                ")]),e._v(" "),n("th",{staticClass:"font-weight-bold"},[e._v("\n                    Programme: Pearson Edexcel Primary\n                ")]),e._v(" "),n("th",{staticClass:"font-weight-bold"},[e._v("\n                    Days Absent: "+e._s(e.List.days_absent)+"\n                ")])]),e._v(" "),n("tr",[n("th",{staticClass:"font-weight-bold"},[e._v("\n                    Class teacher: "+e._s(e._f("fio")(e.List.class_teacher))+"\n                ")]),e._v(" "),n("th",{staticClass:"font-weight-bold"},[e._v("\n                    Date issued: "+e._s(e.List.date_issued)+"\n                ")]),e._v(" "),n("th",{staticClass:"font-weight-bold"},[e._v("\n                    Days Attended: "+e._s(e.List.days_attended)+"\n                ")])])])]):e._e(),e._v(" "),e.List.id?n("div",{staticClass:"foniy-table mt-3"},[n("table",{staticClass:"border-all"},[e._m(0),e._v(" "),n("tr",[n("th",e._l(e.types,(function(t,i){return n("span",{key:i,staticClass:"mr-2"},[n("span",{staticClass:"font-weight-bold"},[e._v(" "+e._s(t.id)+".")]),e._v(e._s(t.name))])})),0),e._v(" "),n("th",{staticClass:"font-weight-bold text-center bg-gray"},[e._v("1")]),e._v(" "),n("th",{staticClass:"font-weight-bold text-center bg-gray"},[e._v("2")]),e._v(" "),n("th",{staticClass:"font-weight-bold text-center bg-gray"},[e._v("3")]),e._v(" "),n("th",{staticClass:"font-weight-bold text-center bg-gray"},[e._v("4")])]),e._v(" "),e._l(e.List.asalearnerdict,(function(t,i){return n("tr",{key:i},[n("td",{staticClass:"font-weight-bold"},[e._v("\n                    "+e._s(t.name)+"\n                ")]),e._v(" "),n("td",{staticClass:"cursor-pointer text-center font-weight-bold font-20",class:{"bg-gray":!["branch_admin"].includes(e.role)||e.List.class_teacher&&!e.List.class_teacher.id==e.User.id},staticStyle:{width:"60px",height:"60px"},on:{click:function(n){return e.SaveChildAs(t,i,0)}}},[t.asalearner&&1==t.asalearner.rate&&!t.asalearner.loading?n("i",{staticClass:"mdi mdi-plus font-weight-bold",staticStyle:{color:"#000"}}):e._e(),e._v(" "),t.asalearner&&1==t.asalearner.rate&&t.asalearner.loading?n("i",{staticClass:"el-icon-loading font-weight-bold"}):e._e()]),e._v(" "),n("td",{staticClass:"cursor-pointer text-center font-weight-bold font-20",class:{"bg-gray":!["branch_admin"].includes(e.role)||e.List.class_teacher&&!e.List.class_teacher.id==e.User.id},staticStyle:{width:"60px",height:"60px"},on:{click:function(n){return e.SaveChildAs(t,i,1)}}},[t.asalearner&&2==t.asalearner.rate&&!t.asalearner.loading?n("i",{staticClass:"mdi mdi-plus font-weight-bold",staticStyle:{color:"#000"}}):e._e(),e._v(" "),t.asalearner&&2==t.asalearner.rate&&t.asalearner.loading?n("i",{staticClass:"el-icon-loading font-weight-bold"}):e._e()]),e._v(" "),n("td",{staticClass:"cursor-pointer text-center font-weight-bold font-20",class:{"bg-gray":!["branch_admin"].includes(e.role)||e.List.class_teacher&&!e.List.class_teacher.id==e.User.id},staticStyle:{width:"60px",height:"60px"},on:{click:function(n){return e.SaveChildAs(t,i,2)}}},[t.asalearner&&3==t.asalearner.rate&&!t.asalearner.loading?n("i",{staticClass:"mdi mdi-plus font-weight-bold",staticStyle:{color:"#000"}}):e._e(),e._v(" "),t.asalearner&&3==t.asalearner.rate&&t.asalearner.loading?n("i",{staticClass:"el-icon-loading font-weight-bold"}):e._e()]),e._v(" "),n("td",{staticClass:"cursor-pointer text-center font-weight-bold font-20",class:{"bg-gray":!["branch_admin"].includes(e.role)||e.List.class_teacher&&!e.List.class_teacher.id==e.User.id},staticStyle:{width:"60px",height:"60px"},on:{click:function(n){return e.SaveChildAs(t,i,3)}}},[t.asalearner&&4==t.asalearner.rate&&!t.asalearner.loading?n("i",{staticClass:"mdi mdi-plus font-weight-bold",staticStyle:{color:"#000"}}):e._e(),e._v(" "),t.asalearner&&4==t.asalearner.rate&&t.asalearner.loading?n("i",{staticClass:"el-icon-loading font-weight-bold"}):e._e()])])}))],2)]):e._e(),e._v(" "),e.List.id?n("div",{staticClass:"foniy-table mt-3"},[n("table",{staticClass:"border-all"},[e._m(1),e._v(" "),n("tr",[n("th",e._l(e.types,(function(t,i){return n("span",{key:i,staticClass:"mr-2"},[n("span",{staticClass:"font-weight-bold"},[e._v(" "+e._s(t.id)+".")]),e._v(e._s(t.name))])})),0),e._v(" "),n("th",{staticClass:"font-weight-bold text-center bg-gray"},[e._v("1")]),e._v(" "),n("th",{staticClass:"font-weight-bold text-center bg-gray"},[e._v("2")]),e._v(" "),n("th",{staticClass:"font-weight-bold text-center bg-gray"},[e._v("3")]),e._v(" "),n("th",{staticClass:"font-weight-bold text-center bg-gray"},[e._v("4")])]),e._v(" "),e._l(e.List.psdevelopmentdict,(function(t,i){return n("tr",{key:i},[n("td",{staticClass:"font-weight-bold"},[e._v("\n                    "+e._s(t.name)+"\n                ")]),e._v(" "),n("td",{staticClass:"cursor-pointer text-center font-weight-bold font-20",class:{"bg-gray":!["branch_admin"].includes(e.role)||e.List.class_teacher&&!e.List.class_teacher.id==e.User.id},staticStyle:{width:"60px",height:"60px"},on:{click:function(n){return e.SaveChildPS(t,i,0)}}},[t.psdevelopment&&1==t.psdevelopment.rate&&!t.psdevelopment.loading?n("i",{staticClass:"mdi mdi-plus font-weight-bold",staticStyle:{color:"#000"}}):e._e(),e._v(" "),t.psdevelopment&&1==t.psdevelopment.rate&&t.psdevelopment.loading?n("i",{staticClass:"el-icon-loading font-weight-bold"}):e._e()]),e._v(" "),n("td",{staticClass:"cursor-pointer text-center font-weight-bold font-20",class:{"bg-gray":!["branch_admin"].includes(e.role)||e.List.class_teacher&&!e.List.class_teacher.id==e.User.id},staticStyle:{width:"60px",height:"60px"},on:{click:function(n){return e.SaveChildPS(t,i,1)}}},[t.psdevelopment&&2==t.psdevelopment.rate&&!t.psdevelopment.loading?n("i",{staticClass:"mdi mdi-plus font-weight-bold",staticStyle:{color:"#000"}}):e._e(),e._v(" "),t.psdevelopment&&2==t.psdevelopment.rate&&t.psdevelopment.loading?n("i",{staticClass:"el-icon-loading font-weight-bold"}):e._e()]),e._v(" "),n("td",{staticClass:"cursor-pointer text-center font-weight-bold font-20",class:{"bg-gray":!["branch_admin"].includes(e.role)||e.List.class_teacher&&!e.List.class_teacher.id==e.User.id},staticStyle:{width:"60px",height:"60px"},on:{click:function(n){return e.SaveChildPS(t,i,2)}}},[t.psdevelopment&&3==t.psdevelopment.rate&&!t.psdevelopment.loading?n("i",{staticClass:"mdi mdi-plus font-weight-bold",staticStyle:{color:"#000"}}):e._e(),e._v(" "),t.psdevelopment&&3==t.psdevelopment.rate&&t.psdevelopment.loading?n("i",{staticClass:"el-icon-loading font-weight-bold"}):e._e()]),e._v(" "),n("td",{staticClass:"cursor-pointer text-center font-weight-bold font-20",class:{"bg-gray":!["branch_admin"].includes(e.role)||e.List.class_teacher&&!e.List.class_teacher.id==e.User.id},staticStyle:{width:"60px",height:"60px"},on:{click:function(n){return e.SaveChildPS(t,i,3)}}},[t.psdevelopment&&4==t.psdevelopment.rate&&!t.psdevelopment.loading?n("i",{staticClass:"mdi mdi-plus font-weight-bold",staticStyle:{color:"#000"}}):e._e(),e._v(" "),t.psdevelopment&&4==t.psdevelopment.rate&&t.psdevelopment.loading?n("i",{staticClass:"el-icon-loading font-weight-bold"}):e._e()])])}))],2)]):e._e(),e._v(" "),e.List.id?n("div",{staticClass:"foniy-table mt-3"},[n("table",{staticClass:"border-all"},[e._m(2),e._v(" "),e._m(3),e._v(" "),e._l(e.List.gradingscale,(function(t,i){return n("tr",{key:i},[n("td",{staticClass:"font-weight-bold text-center"},[e._v(" "+e._s(t.percentage)+" ")]),e._v(" "),n("td",{staticClass:"font-weight-bold text-center"},[e._v(" "+e._s(t.gradesymbol)+" ")]),e._v(" "),n("td",{staticClass:"font-weight-bold text-center"},[e._v(" "+e._s(t.nationalequivalency)+" ")]),e._v(" "),n("td",{staticClass:"font-weight-bold text-center"},[e._v(" "+e._s(t.descriptors)+" ")])])}))],2)]):e._e(),e._v(" "),e.List.id?n("div",{staticClass:"foniy-table mt-3"},[n("table",{staticClass:"border-all"},[e._m(4),e._v(" "),n("tr",[n("th",{staticClass:"font-weight-bold text-center"},[e._v(" Subject")]),e._v(" "),n("th",{staticClass:"font-weight-bold text-center"},[e._v("Areas of Excellence")]),e._v(" "),n("th",{staticClass:"font-weight-bold text-center"},[e._v("Areas for Improvement")]),e._v(" "),n("th",{staticClass:"font-weight-bold text-center"},[e._v(" Predicted Grade")]),e._v(" "),["teacher","branch_admin"].includes(e.role)?n("th",{staticClass:"font-weight-bold text-center",staticStyle:{width:"80px"}},[e._v("Action")]):e._e()]),e._v(" "),e._l(e.List.academicachievement,(function(t,i){return n("tr",{key:i},[n("td",{staticClass:"text-center"},[e._v(" "+e._s(t.subject_name)+" ("+e._s(e._f("fio")(t.main_teacher))+") ")]),e._v(" "),n("td",[t.academicachievement.edit?n("el-input",{model:{value:t.academicachievement.areas_of_excellence,callback:function(n){e.$set(t.academicachievement,"areas_of_excellence",n)},expression:"item.academicachievement.areas_of_excellence"}}):n("p",{staticClass:"m-0"},[e._v(" "+e._s(t.academicachievement.areas_of_excellence)+" ")])],1),e._v(" "),n("td",[t.academicachievement.edit?n("el-input",{model:{value:t.academicachievement.areas_for_improvement,callback:function(n){e.$set(t.academicachievement,"areas_for_improvement",n)},expression:"item.academicachievement.areas_for_improvement"}}):n("p",{staticClass:"m-0"},[e._v(" "+e._s(t.academicachievement.areas_for_improvement)+" ")])],1),e._v(" "),n("td",{staticClass:"font-weight-bold text-center"},[t.academicachievement.edit?n("el-input",{attrs:{type:"number"},model:{value:t.academicachievement.predictedgrade,callback:function(n){e.$set(t.academicachievement,"predictedgrade",n)},expression:"item.academicachievement.predictedgrade"}}):n("p",{staticClass:"m-0"},[e._v(" "+e._s(t.academicachievement.predictedgrade)+" ")])],1),e._v(" "),["teacher","branch_admin"].includes(e.role)?n("td",[["branch_admin"].includes(e.role)||e.User.id==t.main_teacher.id?n("div",{staticClass:"d-flex justify-content-center"},[t.academicachievement.edit||t.academicachievement.edit?e._e():n("button",{staticClass:"button simple font-16 font-weight-bold mr-1",on:{click:function(e){t.academicachievement.edit=!0}}},[n("i",{staticClass:"mdi mdi-pencil"})]),e._v(" "),t.academicachievement.edit&&!t.academicachievement.loading?n("button",{staticClass:"button simple font-16 font-weight-bold mr-1 color-green",on:{click:function(n){return e.SavechildAC(t,i)}}},[n("i",{staticClass:"mdi mdi-check-bold"})]):e._e(),e._v(" "),t.academicachievement.loading?n("button",{staticClass:"button simple font-16 font-weight-bold mr-1 color-green",attrs:{disabled:""}},[n("i",{staticClass:"el-icon-loading"})]):e._e()]):e._e()]):e._e()])}))],2)]):e._e(),e._v(" "),n("div",{staticClass:"foniy-table"},[e.List.id||e.loader?e._e():n("div",{staticClass:"empty-time-table",staticStyle:{height:"500px"}},[e._m(5)])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{staticClass:"bg-primary"},[n("th",{staticClass:"font-weight-bold text-center",attrs:{colspan:"5"}},[e._v("Your child as a learner")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{staticClass:"bg-primary"},[n("th",{staticClass:"font-weight-bold text-center",attrs:{colspan:"5"}},[e._v("Your child’s social and personal development")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{staticClass:"bg-primary"},[n("th",{staticClass:"font-weight-bold text-center",attrs:{colspan:"5"}},[e._v("Grading Scale")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",{staticClass:"font-weight-bold text-center"},[e._v(" Percentage")]),e._v(" "),n("th",{staticClass:"font-weight-bold text-center"},[e._v("Grade Symbol")]),e._v(" "),n("th",{staticClass:"font-weight-bold text-center"},[e._v("National Equivalency")]),e._v(" "),n("th",{staticClass:"font-weight-bold text-center"},[e._v(" Descriptors")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{staticClass:"bg-primary"},[n("th",{staticClass:"font-weight-bold text-center",attrs:{colspan:"5"}},[e._v("Academic Achievement")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"text-center"},[n("i",{staticClass:"mdi mdi-timer-outline font-20"}),e._v(" "),n("br"),e._v("\n                Form has not created yet!\n            ")])}],!1,null,null,null);t.default=component.exports}}]);