(window.webpackJsonp=window.webpackJsonp||[]).push([[248,41,74,75],{1083:function(t,e,r){var content=r(1240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("0c4e25b9",content,!0,{sourceMap:!1})},1239:function(t,e,r){"use strict";r(1083)},1240:function(t,e,r){var o=r(52)(!1);o.push([t.i,".tab2 .nav-pills .nav-link{background:#edeff1;margin-right:12px}.tab2 .nav-pills .nav-link.active{background:#66307f}",""]),t.exports=o},1433:function(t,e,r){"use strict";r.r(e);r(2);var o=r(909),_=r(910),l={components:{PersonalInfo:o.default,SystemUser:_.default},data:function(){return{title:"Student info",items:[{text:"Student Info",active:!0}],form:{}}},created:function(){this.__GET()},methods:{__GET:function(){var t=this,e=this.$route.params.id;e&&(this.loading=!0,this.$axios({method:"GET",url:"/users/student/".concat(e)}).then((function(e){t.form=e.data})).finally((function(){t.loading=!1})))}}},v=(r(1239),r(16)),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),r("div",{staticClass:"card tab2"},[r("div",{staticClass:"card-body"},[r("b-tabs",{attrs:{pills:""}},[r("b-tab",{attrs:{title:"Personal"}},[r("PersonalInfo",{attrs:{form:t.form}})],1),t._v(" "),r("b-tab",{attrs:{title:"System User"}},[r("SystemUser",{attrs:{form:t.form}})],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(837).default})},837:function(t,e,r){"use strict";r.r(e);var o=r(35),_={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(o.c)(["layout"])},l=r(16),component=Object(l.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[r("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"page-title-right"},[r("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},909:function(t,e,r){"use strict";r.r(e);var o={props:{form:{type:Object,default:{}}},data:function(){return{}}},_=r(16),component=Object(_.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-info"},[r("div",{staticClass:"row parent"},[t._m(0),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"item"},[r("p",[t._v("Last/Family Name:")]),t._v(" "),t.form.last_name?r("h3",[t._v(t._s(t.form.last_name))]):r("h3",[t._v("--")])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Middle Name:")]),t._v(" "),t.form.middle_name?r("h3",[t._v(t._s(t.form.middle_name))]):r("h3",[t._v("--")])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Date of birth:")]),t._v(" "),t.form.date_of_birth?r("h3",[t._v(t._s(t.form.date_of_birth))]):r("h3",[t._v("--")])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Phone number:")]),t._v(" "),t.form.phone?r("h3",[r("a",{attrs:{href:"tel:+"+t.form.phone}},[t._v(t._s(t._f("phone")(t.form.phone)))])]):r("h3",[t._v("--")])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Region:")]),t._v(" "),t.form.region?r("h3",[t._v(" "+t._s(t.form.region)+" ")]):r("h3",[t._v("--")])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Address:")]),t._v(" "),t.form.address?r("h3",[t._v(t._s(t.form.address))]):r("h3",[t._v("--")])])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"item"},[r("p",[t._v("First Name:")]),t._v(" "),t.form.first_name?r("h3",[t._v(t._s(t.form.first_name))]):r("h3",[t._v("--")])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Gender:")]),t._v(" "),t.form.gender?r("h3",[t._v(t._s(t._f("gender")(t.form.gender)))]):r("h3",[t._v("--")])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Created date:")]),t._v(" "),r("h3",[t._v(t._s(t.form.created_at?t.form.created_at:"--"))])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("E-Mail:")]),t._v(" "),r("h3",[t.form.email?r("a",{attrs:{href:"mailto:"+t.form.email}},[t._v(t._s(t.form.email))]):r("h3",[t._v("--")])])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("District (city):")]),t._v(" "),t.form.district?r("h3",[t._v(" "+t._s(t.form.district)+" ")]):r("h3",[t._v("--")])])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("viewer",[t.form.photo?r("img",{staticClass:"user-photo",attrs:{src:t.form.photo}}):t._e()])],1)]),t._v(" "),r("div",{staticClass:"row parent"},[t._m(1),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"item"},[r("p",[t._v("Document type:")]),t._v(" "),t.form.document_type?r("h3",[t._v(t._s(t.form.document_type))]):r("h3",[t._v("--")])]),t._v(" "),t._m(2)]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"item"},[r("p",[t._v("Document Seria and Number:")]),t._v(" "),t.form.passport_serial?r("h3",[t._v(t._s(t.form.passport_serial))]):r("h3",[t._v("--")])])])]),t._v(" "),r("div",{staticClass:"row parent"},[t._m(3),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"item"},[r("p",[t._v("Social Status:")]),t._v(" "),t.form.social_status_name?r("h3",[t._v(t._s(t.form.social_status_name))]):r("h3",[t._v("--")])])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"item"},[r("p",[t._v("Is Poor:")]),t._v(" "),r("h3",[t._v(t._s(t.form.poor?"Yes":"No"))])])])]),t._v(" "),t.form.father?r("div",{staticClass:"row parent"},[t._m(4),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"item"},[r("p",[t._v("Last/Family Name:")]),t._v(" "),t.form.father.last_name?r("h3",[t._v(t._s(t.form.father.last_name))]):r("h3",[t._v("--")])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Middle Name:")]),t._v(" "),t.form.father.middle_name?r("h3",[t._v(t._s(t.form.father.middle_name))]):r("h3",[t._v("--")])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Phone number:")]),t._v(" "),t.form.father.phone?r("h3",[r("a",{attrs:{href:"tel:"+t.form.father.phone}},[t._v(t._s(t._f("phone")(t.form.father.phone)))])]):r("h3",[t._v("--")])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Notes:")]),t._v(" "),t.form.father.notes?r("h3",[t._v(" "+t._s(t.form.father.notes)+" ")]):r("h3",[t._v("--")])])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"item"},[r("p",[t._v("First Name:")]),t._v(" "),r("h3",[t._v(t._s(t.form.father.first_name))])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Date of birth:")]),t._v(" "),r("h3",[t._v(t._s(t.form.father.date_of_birth))])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("E-Mail:")]),t._v(" "),t.form.father.emai?r("h3",[r("a",{attrs:{href:"mailto:"+t.form.father.email}},[t._v(t._s(t.form.father.email))])]):r("h3",[t._v("\n                  --\n                ")])])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"item"},[r("viewer",[t.form.father.photo?r("img",{staticClass:"user-photo",attrs:{src:t.form.father.photo}}):t._e()])],1)])]):t._e(),t._v(" "),t.form.mother?r("div",{staticClass:"row parent"},[t._m(5),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"item"},[r("p",[t._v("Last/Family Name:")]),t._v(" "),r("h3",[t._v(t._s(t.form.mother.last_name))])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Middle Name:")]),t._v(" "),r("h3",[t._v(t._s(t.form.mother.middle_name))])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Phone number:")]),t._v(" "),r("h3",[r("a",{attrs:{href:"tel:"+t.form.mother.phone}},[t._v(t._s(t._f("phone")(t.form.mother.phone)))])])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Notes:")]),t._v(" "),t.form.mother.notes?r("h3",[t._v(" "+t._s(t.form.mother.notes)+" ")]):r("h3",[t._v("--")])])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"item"},[r("p",[t._v("First Name:")]),t._v(" "),r("h3",[t._v(t._s(t.form.mother.first_name))])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Date of birth:")]),t._v(" "),r("h3",[t._v(t._s(t.form.mother.date_of_birth))])]),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("E-Mail:")]),t._v(" "),t.form.mother.email?r("h3",[r("a",{attrs:{href:"mailto:"+t.form.mother.email}},[t._v(t._s(t.form.mother.email))])]):r("h3",[t._v("--")])])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"item"},[r("viewer",[t.form.mother.photo?r("img",{staticClass:"user-photo",attrs:{src:t.form.mother.photo}}):t._e()])],1)])]):t._e(),t._v(" "),r("div",{staticClass:"row parent"},[t._m(6),t._v(" "),r("div",{staticClass:"col-md-6"},[t._m(7),t._v(" "),r("div",{staticClass:"item"},[r("p",[t._v("Additional Information:")]),t._v(" "),t.form.additional_info?r("h3",[t._v(t._s(t.form.additional_info))]):r("h3",[t._v("--")])])]),t._v(" "),t._m(8)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"col-12"},[r("h1",[t._v("Personal Information")]),t._v(" "),r("span",{staticClass:"status red"},[t._v("Not added to the group")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"col-12"},[r("h1",[t._v("Personal Identity Information")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item"},[r("p",[t._v("Country:")]),t._v(" "),r("h3",[t._v("Uzbekistan")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"col-12"},[r("h1",[t._v("Social Status")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"col-12"},[r("h1",[t._v("Father")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"col-12"},[r("h1",[t._v("Mother")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"col-12"},[r("h1",[t._v("Education Admission")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item"},[r("p",[t._v("Education Type (Level, Class):")]),t._v(" "),r("h3",[t._v("--")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"item"},[r("p",[t._v("Language of Education:")]),t._v(" "),r("h3",[t._v("English")])])])}],!1,null,null,null);e.default=component.exports},910:function(t,e,r){"use strict";r.r(e);r(22),r(2),r(8);var o={props:{form:{type:Object,default:{}}},data:function(){return{loading:!1,change_password:!1,password:{}}},computed:{role:function(){var t;return null===(t=this.$store.state.auth.user)||void 0===t?void 0:t.role.name}},methods:{clearForm:function(){this.password={}},save:function(){var t=this;this.$refs.form1.validate().then((function(e){if(e){t.loading=!0;var r=t.form.id;t.$axios({url:"/user/change_password/".concat(r,"/"),method:r?"PATCH":"POST",data:t.password}).then((function(e){t.$Swal.fire({title:"Password was changed!",type:"success"}),t.form.password=t.password.password1,t.clearForm(),t.change_password=!1})).catch((function(e){var r=e.response.data,o=Object.keys(r),_="string"==typeof r[o[0]]?r[o[0]]:r[o[0]][0];t.$Swal.fire({title:"Error",text:_||"error has occurred",type:"error"})})).finally((function(){t.loading=!1}))}}))}}},_=r(16),component=Object(_.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"user-info"},[r("div",{staticClass:"row parent"},[r("header",{staticClass:"col-12"},[r("h1",[t._v("System User")]),t._v(" "),r("span",{staticClass:"status",class:{red:!t.form.system_user}},[t._v(t._s(t.form.system_user?"ACTIVE":"NOT ACTIVE")+"\n            ")])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"item"},[r("p",[t._v("LOGIN:")]),t._v(" "),r("h3",[t._v(t._s(t.form.login))])]),t._v(" "),["super_admin","branch_admin"].includes(t.role)?r("div",{staticClass:"item"},[r("p",[t._v("PASSWORD: ")]),t._v(" "),r("h3",[t._v(t._s(t.form.password))]),t._v(" "),r("h3",[r("a",{attrs:{href:"#"},on:{click:function(e){t.change_password=!t.change_password}}},[r("u",[t._v("Change Password")])])])]):t._e()])]),t._v(" "),r("b-modal",{attrs:{title:"Change pasword","title-class":"font-18","body-class":"p-4"},on:{hide:function(e){return t.clearForm()}},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var o=e.cancel;return[r("b-button",{attrs:{size:"md"},on:{click:function(t){return o()}}},[t._v(" Cancel ")]),t._v(" "),r("b-button",{attrs:{size:"md",variant:"success"},on:{click:function(e){return t.save()}}},[t._v(" Save ")])]}}]),model:{value:t.change_password,callback:function(e){t.change_password=e},expression:"change_password"}},[r("ValidationObserver",{ref:"form1"},[r("div",{staticClass:"mb-2"},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("p",{staticClass:"mb-1"},[t._v("New Password")]),t._v(" "),r("b-input",{class:{invalid:o[0]},attrs:{type:"password",placeholder:"New Password"},model:{value:t.password.password1,callback:function(e){t.$set(t.password,"password1",e)},expression:"password.password1"}})]}}])})],1),t._v(" "),r("div",[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("p",{staticClass:"mb-1"},[t._v("Repeat Password")]),t._v(" "),r("b-input",{class:{invalid:o[0]},attrs:{type:"password",placeholder:"New Password"},model:{value:t.password.password2,callback:function(e){t.$set(t.password,"password2",e)},expression:"password.password2"}})]}}])})],1)])],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"item"},[r("p",[t._v("ROLE:")]),t._v(" "),r("h3",[t._v("Student")])])])}],!1,null,null,null);e.default=component.exports}}]);