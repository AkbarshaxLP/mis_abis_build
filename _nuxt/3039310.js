(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1140:function(t,e,n){"use strict";n.r(e);var _={data:function(){return{List:[]}},methods:{_Get:function(){var t=this;this.$axios.get("/teacherlessoninfo/?teacher=".concat(this.$route.params.id)).then((function(e){t.List=e.data}))}},mounted:function(){this._Get()}},o=n(16),component=Object(o.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t.loading?t._e():n("div",{staticClass:"foniy-table mb-3"},[n("table",{staticClass:"border-bottom"},[t._m(1),t._v(" "),t._l(t.List,(function(e,i){return n("tr",{key:i},[n("td",[t._v(" "+t._s(i+1)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.subject_name)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.group_name)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.branch_name)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.assignments)+" ")]),t._v(" "),n("td",[t._v(" "+t._s(e.is_main_teacher?"YES":"NO")+" ")])])}))],2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"d-flex align-items-center mb-2"},[n("h4",[t._v("Additional Info")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"bg-gray"},[n("th",{staticClass:"font-weight-bold",staticStyle:{width:"50px"}},[t._v("#")]),t._v(" "),n("th",{staticClass:"font-weight-bold"},[t._v("Subject")]),t._v(" "),n("th",{staticClass:"font-weight-bold"},[t._v("Group")]),t._v(" "),n("th",{staticClass:"font-weight-bold"},[t._v("Branch")]),t._v(" "),n("th",{staticClass:"font-weight-bold"},[t._v("Assignment Count")]),t._v(" "),n("th",{staticClass:"font-weight-bold"},[t._v("Main Teacher")])])}],!1,null,null,null);e.default=component.exports}}]);