(window.webpackJsonp=window.webpackJsonp||[]).push([[258,41,257],{1077:function(t,e,r){"use strict";r.r(e),r.d(e,"tasks",(function(){return o}));var o=[{id:1,status:"Upcoming",items:[{id:1,title:"iOS App home page",description:"There are many variations of passages of Lorem Ipsum available.",date:"Jan 16, 2019",task:"Medium",user:[r(172),r(527)],groupId:1},{id:2,title:"Topnav layout design",description:"Many desktop publishing packages and web page.",date:"Jan 22, 2019",task:"Low",user:[r(257)],groupId:1},{id:3,title:"Invite user to a project",description:"If you are going to use a passage of Lorem Ipsum.",date:"Feb 08, 2019",task:"Low",user:[r(524)],groupId:1},{id:4,title:"Write a release note",description:"There are many variations of passages of Lorem Ipsum available.",date:"Feb 12, 2019",task:"High",user:[r(529),r(531)],groupId:1}]},{id:2,status:"In Progress",items:[{id:5,title:"Enable analytics tracking",description:"It has roots in a piece of classical Latin literature from 45 BC.",date:"Feb 12, 2019",task:"Low",user:[r(529)],groupId:2},{id:6,title:"Topnav layout design",description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined.",date:"Jan 31, 2019",task:"Low",user:[r(528),r(258)],groupId:2},{id:7,title:"Code HTML email template",description:"There are many variations of passages of Lorem Ipsum available.",date:"Mar 27, 2019",task:"High",user:[r(530)],groupId:2}]},{id:3,status:"Completed",items:[{id:8,title:"Brand logo design",description:"Various versions have evolved over the years, sometimes by accident.",date:"Mar 27, 2019",task:"Low",user:[r(257)],groupId:3},{id:9,title:"Improve animation loader",description:"A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",date:"Mar 27, 2019",task:"Medium",user:[r(527)],groupId:3},{id:10,title:"Dashboard Re-design",description:"There are many variations of passages of Lorem Ipsum available.",date:"Apr 19, 2019",task:"Low",user:[r(524),r(528)],groupId:3},{id:11,title:"iOS App home page",description:"you need to be sure there isn't anything embarrassing hidden in the middle of text.",date:"Apr 27, 2019",task:"Low",user:[r(258)],groupId:3}]}]},1405:function(t,e,r){"use strict";r.r(e);var o=r(1077),d={head:function(){return{title:"".concat(this.title," | MIS tbteam.uz")}},data:function(){return{tasks:o.tasks,title:"Kanban Board",items:[{text:"abis.uz",href:"/"},{text:"Apps",href:"/"},{text:"Kanban Board",active:!0}],options:{dropzoneSelector:".drag-inner-list",draggableSelector:".drag-item"}}},middleware:"auth"},n=r(16),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader",{attrs:{title:t.title,items:t.items}}),t._v(" "),r("div",{directives:[{name:"drag-and-drop",rawName:"v-drag-and-drop:options",value:t.options,expression:"options",arg:"options"}],staticClass:"drag-container"},[r("div",{staticClass:"row drag-list"},t._l(t.tasks,(function(e){return r("div",{key:e.id,staticClass:"col-lg-4 drag-column"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("b-dropdown",{staticClass:"float-right",attrs:{right:"",variant:"black","toggle-class":"p-0"}},[r("template",{slot:"button-content"},[r("i",{staticClass:"mdi mdi-dots-vertical m-0 text-muted h3"})]),t._v(" "),r("b-dropdown-item",{attrs:{href:"javascript: void(0);"}},[t._v("Edit")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"javascript: void(0);"}},[t._v("Delete")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"javascript: void(0);"}},[t._v("Add Members")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"javascript: void(0);"}},[t._v("Add Due Date")])],2),t._v(" "),r("span",{staticClass:"drag-column-header"},[r("h4",{staticClass:"header-title"},[t._v(t._s(e.status))]),t._v(" "),r("p",{staticClass:"sub-header"},[t._v("\n                Your awesome text goes here. Your awesome text goes here.\n              ")])]),t._v(" "),r("vue-draggable-group",{attrs:{groups:t.tasks,"data-id":e.id},model:{value:e.items,callback:function(r){t.$set(e,"items",r)},expression:"group.items"}},[r("ul",{staticClass:"\n                  sortable-list\n                  tasklist\n                  list-unstyled\n                  ui-sortable\n                  drag-inner-list\n                ",attrs:{"data-id":e.id}},t._l(e.items,(function(e){return r("li",{key:e.id,staticClass:"drag-item ui-sortable-handle",class:{"task-low":""+e.task=="Low","task-high":""+e.task=="High","task-medium":""+e.task=="Medium"},attrs:{"data-id":e.id}},[r("div",{staticClass:"\n                      checkbox checkbox-blue\n                      mb-2\n                      checkbox-single\n                      float-right\n                    "},[r("input",{attrs:{type:"checkbox"}}),t._v(" "),r("label")]),t._v(" "),r("h5",{staticClass:"mt-0"},[r("a",{staticClass:"text-dark",attrs:{href:"javascript: void(0);"}},[t._v(t._s(e.title))])]),t._v(" "),r("p",[t._v(t._s(e.description))]),t._v(" "),r("div",{staticClass:"clearfix"}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-auto"},[r("a",{staticClass:"text-muted",attrs:{href:"javascript: void(0);"}},[r("img",{staticClass:"avatar-sm img-thumbnail rounded-circle",attrs:{src:""+e.user[0],alt:"task-user"}}),t._v(" "),e.user[1]?r("img",{staticClass:"avatar-sm img-thumbnail rounded-circle ml-1",attrs:{src:""+e.user[1],alt:"task-user"}}):t._e()])]),t._v(" "),r("div",{staticClass:"col"},[r("div",{staticClass:"text-right"},[r("p",{staticClass:"font-13 mt-2 mb-0"},[r("i",{staticClass:"mdi mdi-calendar"}),t._v("\n                          "+t._s(e.date)+"\n                        ")])])])])])})),0)]),t._v(" "),t._m(0,!0)],1)])])})),0)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"btn btn-primary btn-block mt-3",attrs:{href:"javascript: void(0);"}},[r("i",{staticClass:"mdi mdi-plus-circle"}),t._v(" Add New\n            ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(837).default})},837:function(t,e,r){"use strict";r.r(e);var o=r(35),d={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},computed:Object(o.c)(["layout"])},n=r(16),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"page-title-box",class:{"page-title-box-alt":"vertical"!==t.layout.layoutType&&"two-column"!==t.layout.layoutType}},[r("h4",{staticClass:"page-title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"page-title-right"},[r("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);