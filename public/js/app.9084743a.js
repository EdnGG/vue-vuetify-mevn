(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var r=a[s];0!==o[r]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},o={app:0},i=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ae7630f2"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"843a5944"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var l=i[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[t],f.parentNode.removeChild(f),a(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){s[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0195":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{staticClass:"button-done-sorting",attrs:{color:"primary"},on:{click:function(e){return t.$store.commit("toggleSorting")}}},[t._v(" Done Sorting ")])},s=[],o={},i=o,r=(a("edba"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),d=Object(r["a"])(i,n,s,!1,null,null,null);e["default"]=d.exports;l()(d,{VBtn:u["a"]})},"0baa":function(t,e,a){"use strict";a("8fd9")},"0cae":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"no-tasks"},[a("v-icon",{attrs:{size:"100",color:"primary"}},[t._v(" mdi-check ")]),a("div",{staticClass:"text-h5 primary--text"},[t._v(" No tasks ")])],1)},s=[],o=(a("c5ff"),a("2877")),i=a("6544"),r=a.n(i),c=a("132d"),l={},u=Object(o["a"])(l,n,s,!1,null,null,null);e["default"]=u.exports;r()(u,{VIcon:c["a"]})},"279c":function(t,e,a){},"436b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{staticClass:"pt-0",attrs:{flat:""}},[t.sorting?a("Draggable",{attrs:{move:t.move},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.myList,callback:function(e){t.myList=e},expression:"myList"}},t._l(t.myList,(function(t){return a("task-item",{key:t._id,attrs:{task:t}})})),1):t._l(t.myList,(function(t){return a("task-item",{key:t._id,attrs:{task:t}})}))],2)},s=[],o=a("1da1"),i=a("5530"),r=(a("96cf"),a("2f62")),c=a("b76a"),l=a.n(c),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-item",{staticClass:"white",class:{"blue lighten-5":t.task.done},attrs:{ripple:!1},on:{click:function(e){return t.doneTask(t.task._id)}},scopedSlots:t._u([{key:"default",fn:function(){return[a("v-list-item-action",[a("v-checkbox",{attrs:{"input-value":t.task.done,color:"primary"}})],1),a("v-list-item-content",[a("v-list-item-title",{class:{"text-decoration-line-through":t.task.done}},[t._v(" "+t._s(t.task.title)+" ")])],1),t.task.dueDate?a("v-list-item-action",[a("v-list-item-action-text",[a("v-icon",{attrs:{small:""}},[t._v(" mdi-calendar ")]),t._v(" "+t._s(t._f("niceDate")(t.task.dueDate))+" ")],1)],1):t._e(),a("v-list-item-action",[a("task-menu",{attrs:{task:t.task}})],1),t.$store.state.sorting?a("v-list-item-action",[a("v-btn",{staticClass:"handle",attrs:{color:"primary",icon:""}},[a("v-icon",[t._v("mdi-drag-horizontal-variant")])],1)],1):t._e()]},proxy:!0}])}),a("v-divider")],1)},d=[],f=a("b166"),m={props:["task"],components:{"task-menu":a("4cb2").default},filters:{niceDate:function(t){return Object(f["a"])(new Date(t.replaceAll("-","/").substring(0,10)),"MMM d")}},methods:{doneTask:function(t){var e=this;try{this.task.done=!this.task.done,this.axios.put("/todos/done/".concat(t),{done:this.task.done}).then((function(t){e.$store.dispatch("getUserTasks")}))}catch(a){console.log(a)}}}},v=m,h=(a("d0e4"),a("2877")),p=a("6544"),k=a.n(p),b=a("8336"),g=a("ac7c"),_=a("ce7e"),T=a("132d"),w=a("da13"),y=a("1800"),x=a("5d23"),V=Object(h["a"])(v,u,d,!1,null,null,null),S=V.exports;k()(V,{VBtn:b["a"],VCheckbox:g["a"],VDivider:_["a"],VIcon:T["a"],VListItem:w["a"],VListItemAction:y["a"],VListItemActionText:x["a"],VListItemContent:x["b"],VListItemTitle:x["c"]});var O={components:{TaskItem:S,Draggable:l.a},data:function(){return{}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(r["d"])(["allTasks","sorting"])),Object(r["c"])(["tasksFiltered"])),{},{myList:{get:function(){return this.tasksFiltered},set:function(t){console.log("set: ",t),this.$store.commit("setUpdateList",t)}}}),watch:{myList:{handler:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.sorting){a.next=5;break}return console.log("sorting true"),a.next=4,e.$store.dispatch("updateList",t);case 4:return a.abrupt("return",a.sent);case 5:console.log("Sorting is disabled");case 6:case"end":return a.stop()}}),a)})))()}}},methods:{move:function(t){var e=t.draggedContext;console.log("move",e)}}},j=O,C=a("8860"),$=Object(h["a"])(j,n,s,!1,null,null,null);e["default"]=$.exports;k()($,{VList:C["a"]})},"45ab":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{staticClass:"mt-1 expanding-search",class:{closed:t.searchClosed&&!t.$store.state.search},attrs:{value:t.$store.state.search,disabled:t.$store.state.sorting,placeholder:"Search","prepend-inner-icon":"mdi-magnify",filled:"",dense:"",clearable:""},on:{input:function(e){return t.$store.commit("setSearch",e)},focus:function(e){t.searchClosed=!1},blur:function(e){t.searchClosed=!0}}})},s=[],o={data:function(){return{searchClosed:!0,search:null}}},i=o,r=(a("a851"),a("2877")),c=a("6544"),l=a.n(c),u=a("8654"),d=Object(r["a"])(i,n,s,!1,null,null,null);e["default"]=d.exports;l()(d,{VTextField:u["a"]})},"4cb2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",icon:""}},"v-btn",s,!1),n),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.items,(function(e,n){return a("v-list-item",{key:n,on:{click:function(e){return t.handleClick(n)}}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1),t.dialogs.edit?a("dialog-edit",{attrs:{task:t.task},on:{close:function(e){t.dialogs.edit=!1}}}):t._e(),t.dialogs.dueDate?a("dialog-due-date",{attrs:{task:t.task},on:{close:function(e){t.dialogs.dueDate=!1}}}):t._e(),t.dialogs.delete?a("dialog-delete",{attrs:{task:t.task},on:{close:function(e){t.dialogs.delete=!1}}}):t._e()],1)},s=[],o=(a("ac1f"),a("841c"),{props:["task"],components:{"dialog-delete":a("ee45").default,"dialog-edit":a("91db").default,"dialog-due-date":a("c12a").default},data:function(){return{dialogs:{delete:!1,edit:!1,dueDate:!1},items:[{title:"Edit",icon:"mdi-pencil",click:function(){console.log("edit"),this.dialogs.edit=!0}},{title:"Due date",icon:"mdi-calendar",click:function(){console.log("calendar"),this.dialogs.dueDate=!0}},{title:"Delete",icon:"mdi-delete",click:function(){this.dialogs.delete=!0}},{title:"Sort",icon:"mdi-drag-horizontal-variant",click:function(){this.$store.state.search?this.$store.commit("showSnackbar","Sort is disabled while searching"):this.$store.commit("toggleSorting")}}]}},methods:{handleClick:function(t){console.log("Index: ",t),this.items[t].click.call(this)}}}),i=o,r=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),d=a("132d"),f=a("8860"),m=a("da13"),v=a("34c3"),h=a("5d23"),p=a("e449"),k=Object(r["a"])(i,n,s,!1,null,null,null);e["default"]=k.exports;l()(k,{VBtn:u["a"],VIcon:d["a"],VList:f["a"],VListItem:m["a"],VListItemIcon:v["a"],VListItemTitle:h["c"],VMenu:p["a"]})},"51d7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",color:"white"}},"v-btn",s,!1),n),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list-item-group",[a("v-list",[a("router-link",{attrs:{to:"/"}},[t.isActive?t._e():a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v(" mdi-login ")])],1),a("v-list-item-title",[t._v(" Login ")])],1)],1),a("router-link",{attrs:{to:"/signup"}},[t.isActive?t._e():a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v(" mdi-account-plus ")])],1),a("v-list-item-title",[t._v(" Register ")])],1)],1),t.isActive?a("v-list-item",{on:{click:function(e){return t.closeSesion()}}},[a("v-list-item-icon",[a("v-icon",[t._v(" mdi-exit-run ")])],1),a("v-list-item-title",[t._v(" Exit ")])],1):t._e()],1)],1)],1)},s=[],o=a("5530"),i=a("2f62"),r={name:"RigthSideToolbar",data:function(){return{}},computed:Object(o["a"])({},Object(i["c"])(["isActive"])),methods:Object(o["a"])({},Object(i["b"])(["closeSesion"]))},c=r,l=a("2877"),u=a("6544"),d=a.n(u),f=a("8336"),m=a("132d"),v=a("8860"),h=a("da13"),p=a("1baa"),k=a("34c3"),b=a("5d23"),g=a("e449"),_=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=_.exports;d()(_,{VBtn:f["a"],VIcon:m["a"],VList:v["a"],VListItem:h["a"],VListItemGroup:p["a"],VListItemIcon:k["a"],VListItemTitle:b["c"],VMenu:g["a"]})},5367:function(t,e,a){"use strict";a("eac7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=a("bc3a"),o=a.n(s),i=a("2106"),r=a.n(i),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{"mobile-breakpoint":768,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-img",{staticClass:"pa-4 pt-7",attrs:{height:"190",src:"space.jpg",gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},[a("v-avatar",{staticClass:"mb-2",attrs:{size:"70"}},[t.userDB?a("img",{attrs:{src:t.userDB.image?t.userDB.image:t.defaultImage,alt:"User Avatar"}}):t._e(),t.userDB?t._e():a("img",{attrs:{src:t.defaultImage,alt:"User Avatar"}})]),t.userDB?a("div",[a("div",{staticClass:"white--text text-subtitle-1 font-weight-bold"},[t._v(t._s(t.userDB.name?t.userDB.name:""))]),a("div",{staticClass:"white--text text-subtitle-2"},[t._v(t._s(t.userDB.email?t.userDB.email:""))])]):t._e(),t.userDB?t._e():a("div",[a("div",{staticClass:"white--text text-subtitle-1 font-weight-bold"}),a("div",{staticClass:"white--text text-subtitle-2"})])],1),t.isActive?a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.to,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1):t._e()],1),a("v-app-bar",{attrs:{app:"",color:"#primary",dark:"",prominent:"",src:"space.jpg",height:"/todo"===t.$route.path?220:190},scopedSlots:t._u([{key:"img",fn:function(e){var n=e.props;return[a("v-img",t._b({attrs:{gradient:"to top right, rgba(19,84,122,.9), rgba(128,208,199,.9)"}},"v-img",n,!1))]}}])},[a("v-container",{staticClass:"header-container pa-0"},[a("v-row",["/todo"===t.$route.path||"/profile"===t.$route.path||"/about"===t.$route.path||"/stripe"===t.$route.path?a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}):t._e(),a("v-spacer"),"/todo"===t.$route.path?a("search"):t._e(),a("rigth-side-toolbar")],1),a("v-row",[a("v-app-bar-title",{staticClass:"ml-4 text-h4"},[t._v(" Todos ")])],1),a("v-row",{attrs:{id:"row__tools"}},[a("live-date-time"),a("local-weather")],1),"/todo"===t.$route.path?a("v-row",[a("field-add-task")],1):t._e()],1)],1),a("v-main",[a("router-view"),a("snackbar")],1)],1)},l=[],u=a("5530"),d=a("2f62"),f={components:{"field-add-task":a("748c").default,snackbar:a("9169").default,search:a("45ab").default,"live-date-time":a("c380").default,"rigth-side-toolbar":a("51d7").default,"local-weather":a("fbc6").default},data:function(){return{defaultImage:"https://lenguajejs.com/javascript/logo.svg",drawer:!1,items:[{title:"Todo",icon:"mdi-format-list-checks",to:"/todo"},{title:"About",icon:"mdi-help-box",to:"/about"},{title:"Profile",icon:"mdi-emoticon-cool-outline",to:"/profile"},{title:"Stripe API",icon:"mdi-cart",to:"/stripe"}]}},mounted:function(){this.isActive&&this.$store.dispatch("getUserTasks")},computed:Object(u["a"])(Object(u["a"])({},Object(d["d"])(["userDB","weather"])),Object(d["c"])(["isActive"]))},m=f,v=(a("cf25"),a("2877")),h=a("6544"),p=a.n(h),k=a("7496"),b=a("40dc"),g=a("5bc1"),_=a("bb78"),T=a("8212"),w=a("a523"),y=a("132d"),x=a("adda"),V=a("8860"),S=a("da13"),O=a("5d23"),j=a("34c3"),C=a("f6c4"),$=a("f774"),D=a("0fd9"),E=a("2fa4"),L=Object(v["a"])(m,c,l,!1,null,null,null),A=L.exports;p()(L,{VApp:k["a"],VAppBar:b["a"],VAppBarNavIcon:g["a"],VAppBarTitle:_["a"],VAvatar:T["a"],VContainer:w["a"],VIcon:y["a"],VImg:x["a"],VList:V["a"],VListItem:S["a"],VListItemContent:O["b"],VListItemIcon:j["a"],VListItemTitle:O["c"],VMain:C["a"],VNavigationDrawer:$["a"],VRow:D["a"],VSpacer:E["a"]});a("d3b7"),a("3ca3"),a("ddb0"),a("99af"),a("b0c0");var I=a("8c4f"),R=(a("a3b3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mb-8 pa-8",attrs:{justify:"center"}},[a("v-col",{attrs:{lg:"8"}},[a("v-container",{staticClass:"d-flex justify-center",attrs:{justify:"center"}},[a("h1",[t._v("Login")])]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),a("v-text-field",{attrs:{"append-icon":t.show4?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min],name:"input-10-2",label:"Password",hint:"At least 8 characters",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.user.pass,callback:function(e){t.$set(t.user,"pass",e)},expression:"user.pass"}}),a("div",{staticClass:"d-flex align-end flex-column",staticStyle:{"margin-top":"-5px"}},[a("router-link",{attrs:{to:{name:"ForgotPassword"}}},[t._v(" Forgot Password? ")])],1),a("v-container",{staticClass:"d-flex justify-center my-12",attrs:{justify:"center"}},[a("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.login}},[t._v(" Login ")]),a("v-btn",{attrs:{color:"warning"},on:{click:t.resetValidation}},[t._v(" Reset Validation ")])],1)],1),a("v-container",{staticClass:"d-flex justify-center my-12",attrs:{justify:"center"}},[a("GoogleLogin",{attrs:{params:t.params,renderParams:t.renderParams,onSuccess:t.onSuccess,onFailure:t.onFailure}})],1)],1)],1)],1)}),B=[],U=a("e571"),P=a.n(U),F={components:{GoogleLogin:P.a},data:function(){return{valid:!0,name:"",show4:!1,rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"}},nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],params:{client_id:"784763271473-mfngi6muqqlvk5spuadfre52ebj7ts1a.apps.googleusercontent.com"},message:{color:"",text:""},renderParams:{width:250,height:50,longtitle:!0},id_token:"",user:{email:"",pass:""}}},methods:Object(u["a"])(Object(u["a"])({validate:function(){return this.$refs.form.validate()},resetValidation:function(){this.$refs.form.resetValidation()}},Object(d["b"])(["guardarUsuario"])),{},{onFailure:function(t){console.log("Autentication failure",t)},onSuccess:function(t){var e=this;this.id_token=t.getAuthResponse().id_token,this.axios.post("/google",{id_token:this.id_token}).then((function(t){var a=t.data;e.user=a,e.guardarUsuario(a),e.$router.push({name:"Todo"})})).catch((function(t){e.message.text=t.response.data.msg,e.message.color="danger",e.showAlert()}))},login:function(){var t=this;try{if(!this.validate())throw new Error("Form is not valid");this.axios.post("/login",this.user).then((function(e){var a=e.data;t.guardarUsuario(a),t.$store.dispatch("getUserTasks"),t.$router.push({name:"Todo"})})).catch((function(e){t.$store.commit("showSnackbar","".concat(e.response.data.message))}))}catch(e){console.log(e)}}})},M=F,q=a("8336"),N=a("62ad"),z=a("4bd4"),K=a("8654"),H=Object(v["a"])(M,R,B,!1,null,null,null),J=H.exports;p()(H,{VBtn:q["a"],VCol:N["a"],VContainer:w["a"],VForm:z["a"],VRow:D["a"],VTextField:K["a"]});var W=a("3384"),G=a.n(W),Y=(a("ac1f"),a("841c"),a("4de4"),a("d81d"),a("caad"),a("2532"),a("0e44"));n["a"].use(d["a"]);var Q=new d["a"].Store({state:{token:"",userDB:{},search:null,task:!0,allTasks:[],sorting:!1,appTitle:"TaskAmazing!",weather:{},snackbar:{show:!1,text:""}},mutations:{actualizarImagenUsuario:function(t,e){t.userDB=e},obtenerUsuario:function(t,e){t.token=e.token,t.userDB=e.userDB},setSearch:function(t,e){t.search=e,console.log(e)},hideSnackbar:function(t){t.snackbar.show=!1},updateTaskDueDate:function(t,e){console.log(e);var a=t.tasks.filter((function(t){return t.id===e.id}))[0];a.dueDate=e.dueDate},SET_DONE_TASK:function(t,e){console.log("SET_DONE_TASK",e),t.allTasks=e},updateTaskTitle:function(t,e){console.log(e);var a=t.tasks.filter((function(t){return t.id===e.id}))[0];a.title=e.title},deleteTask:function(t,e){t.tasks=t.tasks.filter((function(t){return t.id!==e}))},setTasks:function(t,e){t.tasks=e},showSnackbar:function(t,e){var a=0;t.snackbar.show&&(t.snackbar.show=!1,a=300),setTimeout((function(){t.snackbar.show=!0,t.snackbar.text=e}),a)},toggleSorting:function(t){t.sorting=!t.sorting},setUpdateList:function(t,e){t.allTasks=e},addTask:function(t,e){console.log("addtask: ",e),t.allTasks.push(e)},SET_USERTASK:function(t,e){t.allTasks=e},SET_LOCAL_WEATHER:function(t,e){t.weather=e}},actions:{getLocalWeather:function(t){var e=t.commit;return navigator.geolocation.getCurrentPosition((function(t){var a=t.coords.latitude,n=t.coords.longitude,s="https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&appid=").concat("d6c24668ffa14da4d37165d6faebafe0","&units=imperial");fetch(s).then((function(t){return t.json()})).then((function(t){e("SET_LOCAL_WEATHER",t)})).catch((function(t){console.log(t)}))}))},doneTask:function(t,e){var a=t.commit,n=state.allTasks.filter((function(t){return t._id===e}))[0];n.done=!n.done,o.a.put("/todos/done/".concat(n._id),{done:task.done}).then((function(t){console.log("res de doneTask action: ",t),a("SET_DONE_TASK",e),a("showSnackbar"," correctly"),dispatch("getUserTasks")})).catch((function(t){a("showSnackbar","ERROR: "+t.response),console.error("Error"+t.response)}))},addTask:function(t,e){var a=t.state,n=t.commit,s={id:this.state.userDB._id,title:e,done:!1,dueDate:null,index:a.allTasks.length},i={headers:{token:a.token}};o.a.post("/todos",s,i).then((function(t){console.log("res.data: ",t.data),n("addTask",t.data)})).catch((function(t){console.log("Error from frontend",t)}))},getUserTasks:function(t){var e=t.state,a=t.commit,n={headers:{token:e.token}};o.a.get("/todos",n).then((function(t){console.log("Get all notes:",t.data),a("SET_USERTASK",t.data)})).catch((function(t){console.log(t.response)}))},deleteTask:function(t,e){var a=t.commit,n=t.dispatch;o.a.delete("/todos/".concat(e)).then((function(t){a("showSnackbar","Task deleted correctly"),n("getUserTasks")})).catch((function(t){a("showSnackbar","ERROR: "+t.response),console.log(t.response)}))},updateList:function(t,e){var a=t.commit,n=e.map((function(t,e){return Object(u["a"])(Object(u["a"])({},t),{},{index:e+1})}));o.a.put("/todos",n).then((function(t){a("showSnackbar","List updated correctly")})).catch((function(t){a("showSnackbar","ERROR: "+t),console.log(t.response)}))},updateTask:function(t,e){var a=t.commit,n=t.dispatch;o.a.put("/todos/".concat(e.id),{title:e.title}).then((function(t){a("showSnackbar","Task updated correctly"),n("getUserTasks")})).catch((function(t){a("showSnackbar","ERROR: "+t.response),console.log(t.response)}))},updateTaskDueDate:function(t,e){var a=t.commit,n=t.dispatch;o.a.put("/todos/duedate/".concat(e.id),{dueDate:e.dueDate}).then((function(t){a("showSnackbar","Set due date correctly"),n("getUserTasks")})).catch((function(t){a("showSnackbar","ERROR: "+t.response),console.log(t.response)}))},updateImageUsuario:function(t,e){var a=t.commit;a("actualizarImagenUsuario",e)},closeSesion:function(t){var e=t.commit;localStorage.removeItem("token"),tt.push({name:"Login"}),e("obtenerUsuario","")},guardarUsuario:function(t,e){var a=t.commit;localStorage.setItem("token",e.token),a("obtenerUsuario",e)}},getters:{isActive:function(t){return!!t.token},tasksFiltered:function(t){return t.search?t.allTasks.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())})):t.allTasks}},plugins:[Object(Y["a"])()]});n["a"].use(I["a"]);var X=[{path:"/",name:"Login",component:J},{path:"/signup",name:"Signup",component:function(){return a.e("about").then(a.bind(null,"34c3b"))}},{path:"/todo",name:"Todo",component:function(){return Promise.resolve().then(a.bind(null,"a3b3"))},meta:{requireAuth:!0}},{path:"/profile",name:"Profile",component:function(){return a.e("about").then(a.bind(null,"c66d"))},meta:{requireAuth:!0}},{path:"/forgot-password",name:"ForgotPassword",component:function(){return a.e("about").then(a.bind(null,"f243"))}},{path:"/reset-password/:resetLink",name:"ResetPassword",component:function(){return a.e("about").then(a.bind(null,"0813"))}},{path:"/stripe",name:"Stripe",component:function(){return a.e("about").then(a.bind(null,"b23f"))},meta:{requireAuth:!0}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Z=new I["a"]({mode:"history",base:"/",routes:X});Z.beforeEach((function(t,e,a){var n=t.matched.some((function(t){return t.meta.requireAuth}));n&&""===Q.state.token?a({name:"Login"}):(document.title="".concat("TaskAmazing!"," - ").concat(t.name),a())})),Z.afterEach((function(t,e){G()(0,{duration:0})}));var tt=Z,et=a("f309");n["a"].use(et["a"]);var at=new et["a"]({});n["a"].use(a("2ead")),n["a"].use(r.a,o.a),o.a.defaults.baseURL="https://vue-vuetify-todo.herokuapp.com",n["a"].config.productionTip=!1,new n["a"]({router:tt,store:Q,vuetify:at,render:function(t){return t(A)}}).$mount("#app")},"69b0":function(t,e,a){},"748c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{staticClass:"field-add-task pa-3",attrs:{outlined:"",placeholder:"Add Task","hide-details":"",clearable:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask.apply(null,arguments)}},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-icon",{attrs:{disabled:t.newTaskTitleInvalid},on:{click:t.addTask}},[t._v(" mdi-plus ")])]},proxy:!0}]),model:{value:t.newTaskTitle,callback:function(e){t.newTaskTitle=e},expression:"newTaskTitle"}})},s=[],o={data:function(){return{newTaskTitle:""}},methods:{addTask:function(){this.newTaskTitleInvalid||(this.$store.dispatch("addTask",this.newTaskTitle),this.newTaskTitle="",this.$store.dispatch("getUserTasks"))}},computed:{newTaskTitleInvalid:function(){return!this.newTaskTitle}}},i=o,r=(a("5367"),a("2877")),c=a("6544"),l=a.n(c),u=a("132d"),d=a("8654"),f=Object(r["a"])(i,n,s,!1,null,null,null);e["default"]=f.exports;l()(f,{VIcon:u["a"],VTextField:d["a"]})},"8fd9":function(t,e,a){},9169:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){return t.$store.commit("hideSnackbar")}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.$store.state.snackbar.show,callback:function(e){t.$set(t.$store.state.snackbar,"show",e)},expression:"$store.state.snackbar.show"}},[t._v(" "+t._s(t.$store.state.snackbar.text)+" ")])},s=[],o={data:function(){return{}}},i=o,r=(a("0baa"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),d=a("2db4"),f=Object(r["a"])(i,n,s,!1,null,null,null);e["default"]=f.exports;l()(f,{VBtn:u["a"],VSnackbar:d["a"]})},"91db":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{value:!0,persistent:"","max-width":"290"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" Edit task ")]),a("v-card-text",[t._v(" Edit the title of this task: "),a("v-text-field",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveTask.apply(null,arguments)}},model:{value:t.taskTitle,callback:function(e){t.taskTitle=e},expression:"taskTitle"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{disabled:t.taskTitleInvalid,color:"red darken-1",text:""},on:{click:t.saveTask}},[t._v(" Save ")])],1)],1)],1)},s=[],o={props:["task"],data:function(){return{taskTitle:null}},mounted:function(){this.taskTitle=this.task.title},computed:{taskTitleInvalid:function(){return!this.taskTitle||this.taskTitle===this.task.title}},methods:{saveTask:function(){if(!this.taskTitleInvalid){var t={id:this.task._id,title:this.taskTitle};this.$store.dispatch("updateTask",t),this.$emit("close"),this.$vuetify.goTo(0,{duration:0})}}}},i=o,r=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),d=a("b0af"),f=a("99d9"),m=a("169a"),v=a("2fa4"),h=a("8654"),p=Object(r["a"])(i,n,s,!1,null,null,null);e["default"]=p.exports;l()(p,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VDialog:m["a"],VSpacer:v["a"],VTextField:h["a"]})},"93b2":function(t,e,a){},a3b3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t.tasksFiltered.length?a("list-tasks"):a("no-tasks"),t.$store.state.sorting?a("button-done-sorting"):t._e()],1)},s=[],o=a("5530"),i=a("2f62"),r={name:"Home",components:{"list-tasks":a("436b").default,"no-tasks":a("0cae").default,"button-done-sorting":a("0195").default},data:function(){return{newTaskTitle:""}},computed:Object(o["a"])(Object(o["a"])({},Object(i["d"])(["token","allTasks"])),Object(i["c"])(["tasksFiltered"])),methods:{addTask:function(){this.$store.commit("addTask",this.newTaskTitle),this.newTaskTitle=""}}},c=r,l=a("2877"),u=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=u.exports},a851:function(t,e,a){"use strict";a("69b0")},af4a:function(t,e,a){},c12a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{ref:"dialog",attrs:{value:!0,"return-value":t.date,persistent:"",width:"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.saveTask}},[t._v(" OK ")])],1)],1)},s=[],o={props:["task"],data:function(){return{date:null}},mounted:function(){this.task.dueDate&&(this.date=this.task.dueDate)},methods:{saveTask:function(){var t={id:this.task._id,dueDate:this.date};this.$store.dispatch("updateTaskDueDate",t),this.$emit("close")}}},i=o,r=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),d=a("2e4b"),f=a("169a"),m=a("2fa4"),v=Object(r["a"])(i,n,s,!1,null,null,null);e["default"]=v.exports;l()(v,{VBtn:u["a"],VDatePicker:d["a"],VDialog:f["a"],VSpacer:m["a"]})},c380:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-subtitle-1 ml-4"},[t._v(" "+t._s(t.date)+" ")])},s=[],o=a("b166"),i={data:function(){return{date:""}},methods:{getDate:function(){this.date=Object(o["a"])(new Date,"MMMM d, H:mm:ss"),setTimeout(this.getDate,1e3)}},mounted:function(){this.getDate()}},r=i,c=a("2877"),l=Object(c["a"])(r,n,s,!1,null,null,null);e["default"]=l.exports},c5ff:function(t,e,a){"use strict";a("af4a")},cf25:function(t,e,a){"use strict";a("fea6")},d0e4:function(t,e,a){"use strict";a("93b2")},eac7:function(t,e,a){},edba:function(t,e,a){"use strict";a("279c")},ee45:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{value:!0,persistent:"","max-width":"290"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" Delete Task? ")]),a("v-card-text",[t._v(" Are you sure you want to delete this task? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" No ")]),a("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){return t.$store.dispatch("deleteTask",t.task._id)}}},[t._v(" Yes ")])],1)],1)],1)},s=[],o={props:["task"],data:function(){return{}}},i=o,r=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),d=a("b0af"),f=a("99d9"),m=a("169a"),v=a("2fa4"),h=Object(r["a"])(i,n,s,!1,null,null,null);e["default"]=h.exports;l()(h,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VDialog:m["a"],VSpacer:v["a"]})},fbc6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-subtitle-1 ml-4"},[t._v(" "+t._s(t.weather.name)+" - "+t._s(t.weather.sys.country)+" - "+t._s(t.weather.weather[0].main)+" - "+t._s(Math.round(t.weather.main.temp))+"°F ")])},s=[],o=a("5530"),i=(a("99af"),a("2f62")),r={data:function(){return{}},methods:{dateBuilder:function(){var t=new Date,e=["January","February","March","April","May","June","July","August","September","Octuber","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=a[t.getDay()],s=t.getDate(),o=e[t.getMonth()],i=t.getFullYear();return"".concat(n," ").concat(s," ").concat(o," ").concat(i," ")}},computed:Object(o["a"])({},Object(i["d"])(["weather"])),mounted:function(){},created:function(){this.$store.dispatch("getLocalWeather")}},c=r,l=a("2877"),u=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=u.exports},fea6:function(t,e,a){}});
//# sourceMappingURL=app.9084743a.js.map