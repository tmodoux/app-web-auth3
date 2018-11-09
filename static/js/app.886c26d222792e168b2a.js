webpackJsonp([1],{"7zck":function(e,t){},Aoku:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),n={name:"App",data:function(){return{title:"App-web-auth3"}},errorCaptured:function(e,t,r){alert("[Vue warn]: Unexpected error in "+r+":\n      "+e)}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),t("v-app",[t("v-content",[t("v-container",[t("img",{attrs:{src:r("ymUC")}}),this._v(" "),t("router-view")],1)],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("head",[t("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",rel:"stylesheet"}})])}]};var i=r("VU/8")(n,a,!1,function(e){r("Aoku")},null,null).exports,o=r("/ocq"),u={props:{confirmation:{type:Boolean,default:!1},value:{type:String,default:""}},data:function(){return{visiblePass:!1,repass:"",rules:{required:function(e){return!!e||"Password is required."}}}},computed:{matchPassword:function(){return this.value===this.repass||"Password confirmation does not match."}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-text-field",{attrs:{id:"password",value:e.value,appendIcon:e.visiblePass?"lock_open":"lock",type:e.visiblePass?"text":"password",rules:[e.rules.required],label:"Password"},on:{input:function(t){e.$emit("input",t)},"click:append":function(){return e.visiblePass=!e.visiblePass}}}),e._v(" "),e.confirmation?r("v-text-field",{attrs:{id:"passConfirmation",type:e.visiblePass?"text":"password",rules:[e.matchPassword],label:"Password confirmation"},model:{value:e.repass,callback:function(t){e.repass=t},expression:"repass"}}):e._e()],1)},staticRenderFns:[]},l=r("VU/8")(u,c,!1,null,null,null).exports,p={props:{errorMsg:{type:String,default:""},successMsg:{type:String,default:""}},computed:{alertMsg:function(){return this.successMsg.length>0?this.successMsg:this.errorMsg.length>0?this.errorMsg:""},alertType:function(){return this.successMsg.length>0?"success":"error"}}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-divider",{staticClass:"mt-3 mb-2"}),this._v(" "),t("v-alert",{attrs:{value:this.alertMsg,type:this.alertType,transition:"scale-transition"}},[t("span",{domProps:{innerHTML:this._s(this.alertMsg)}})])],1)},staticRenderFns:[]},d=r("VU/8")(p,h,!1,null,null,null).exports,v=r("Zrlr"),f=r.n(v),m=r("Xxa5"),g=r.n(m),w=r("exGp"),k=r.n(w),b=r("wxAW"),y=r.n(b),x=r("mtWM"),A=r.n(x),E=function(){function e(t){var r=this;f()(this,e),this.selection=[];var s=t.regions;Object.keys(s).forEach(function(e){var t=s[e],n=t.zones;Object.keys(n).forEach(function(e){var s=n[e],a=s.hostings;Object.keys(a).forEach(function(e){var n=a[e];r.selection.push({value:e,text:n.name+" ("+t.name+" - "+s.name+")",description:n.description})})})})}return y()(e,[{key:"getSelection",value:function(){return this.selection}}]),e}(),_=function(){function e(t,r,s){f()(this,e),this.core=function(e){return"https://"+e+"."+t},this.register="https://reg."+t,this.appId=r,this.origin=s}return y()(e,[{key:"poll",value:function(){var e=k()(g.a.mark(function e(t){var r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get(this.register+"/access/"+t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateAuthState",value:function(){var e=k()(g.a.mark(function e(t,r){var s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post(this.register+"/access/"+t,r.body);case 2:return s=e.sent,e.abrupt("return",s.status);case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=k()(g.a.mark(function e(t,r){var s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post(this.core(t)+"/auth/login",{username:t,password:r,appId:this.appId});case 2:return s=e.sent,e.abrupt("return",s.data.token);case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"checkAppAccess",value:function(){var e=k()(g.a.mark(function e(t,r,s,n){var a,i;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post(this.core(t)+"/accesses/check-app",{requestingAppId:this.appId,requestedPermissions:r,deviceName:n},{headers:{Authorization:s}});case 2:return a=e.sent,i=a.data,e.abrupt("return",{permissions:i.checkedPermissions,match:i.matchingAccess,mismatch:i.mismatchingAccess});case 5:case"end":return e.stop()}},e,this)}));return function(t,r,s,n){return e.apply(this,arguments)}}()},{key:"createAppAccess",value:function(){var e=k()(g.a.mark(function e(t,r,s,n,a){var i;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post(this.core(t)+"/accesses",{name:this.appId,type:"app",permissions:r,token:n,expireAfter:a},{headers:{Authorization:s}});case 2:return i=e.sent,e.abrupt("return",i.data.access);case 4:case"end":return e.stop()}},e,this)}));return function(t,r,s,n,a){return e.apply(this,arguments)}}()},{key:"updateAppAccess",value:function(){var e=k()(g.a.mark(function e(t,r,s,n,a,i){var o;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.put(this.core(r)+"/accesses/"+t,{name:this.appId,type:"app",permissions:s,token:a,expireAfter:i},{headers:{Authorization:n}});case 2:return o=e.sent,e.abrupt("return",o.data.access);case 4:case"end":return e.stop()}},e,this)}));return function(t,r,s,n,a,i){return e.apply(this,arguments)}}()},{key:"getAvailableHostings",value:function(){var e=k()(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get(this.register+"/hostings");case 2:return t=e.sent,e.abrupt("return",new E(t.data));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=k()(g.a.mark(function e(t,r,s,n,a,i,o){var u;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post(this.register+"/user",{appid:this.appId,username:t,password:r,email:s,hosting:n,languageCode:a||"en",invitationtoken:i||"enjoy",referer:o});case 2:return u=e.sent,e.abrupt("return",u.data);case 4:case"end":return e.stop()}},e,this)}));return function(t,r,s,n,a,i,o){return e.apply(this,arguments)}}()},{key:"checkUsernameExistence",value:function(){var e=k()(g.a.mark(function e(t){var r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post(this.register+"/"+t+"/server");case 2:return r=e.sent,e.abrupt("return",r.server);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getUsernameForEmail",value:function(){var e=k()(g.a.mark(function e(t){var r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.search("@")<0)){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,A.a.get(this.register+"/"+t+"/uid");case 4:return r=e.sent,e.abrupt("return",r.data.uid);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"requestPasswordReset",value:function(){var e=k()(g.a.mark(function e(t){var r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post(this.core(t)+"/account/request-password-reset",{appId:this.appId,username:t},{headers:{Origin:this.origin}});case 2:return r=e.sent,e.abrupt("return",r.status);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"changePassword",value:function(){var e=k()(g.a.mark(function e(t,r,s){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post(this.core(t)+"/account/reset-password",{username:t,newPassword:r,appId:this.appId,resetToken:s},{headers:{Origin:this.origin}});case 2:return n=e.sent,e.abrupt("return",n.status);case 4:case"end":return e.stop()}},e,this)}));return function(t,r,s){return e.apply(this,arguments)}}()},{key:"getServiceInfo",value:function(){var e=k()(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get(this.register+"/service/infos");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),I=function(){function e(t){f()(this,e),this.list="string"==typeof t?JSON.parse(t):t}return y()(e,[{key:"updateList",value:function(e){return this.list=e,this.list}}]),e}();var P=function e(t){f()(this,e);var r=location.hostname.split(".").slice(1).join(".")||t.domain||"pryv.me",s=t.requestingAppId||"pryv-app-web-auth-3";this.language=t.lang||"en",this.appId=s,this.returnURL=t.returnURL,this.oauthState=t.oauthState,this.permissions=new I(t.requestedPermissions),this.pollKey=t.key,this.pryv=new _(r,s),this.user={username:"",personalToken:""}},U=r("Gu7T"),S=r.n(U),F=function(){function e(t){f()(this,e),this.msg=this.parseError(t)}return y()(e,[{key:"parseError",value:function(e){if("string"==typeof e)return"<b>"+e+"</b>";if(null==e||null==e.response||null==e.response.data)return"<b>"+this.unexpectedError()+"</b>";var t=e.response.data,r=t.error,s="<b>"+this.parseErrorData(r||t)+"</b>",n=r?r.data:t.errors;return s+=this.parseSubErrors(n)}},{key:"parseSubErrors",value:function(e){var t=this,r="";return null!=e&&Array.isArray(e)&&e.forEach(function(e){r+="<br/>"+t.parseErrorData(e)}),r}},{key:"parseErrorData",value:function(e){return e.detail||e.message||this.unexpectedError()}},{key:"unexpectedError",value:function(){return"Unexpected error"}}]),e}(),R=function e(t,r){f()(this,e),this.body={status:"ACCEPTED",username:t,token:r}},M=function e(t,r){f()(this,e),this.body={status:"REFUSED",reasonId:t||"REFUSED_BY_USER",message:r||"The user refused to give access to the requested permissions"}};var D,T=function(e,t){var r=e.returnURL;null==r||"false"===r?window.close():(e.oauthState?r+="?state="+e.oauthState+"&code="+e.pollKey:(r+="?prYvkey="+e.pollKey,Object.keys(t.body).forEach(function(e){r+="&prYv"+e+"="+t.body[e]})),location.href=r)},B=(D=k()(g.a.mark(function e(t,r){var s,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=void 0,null==r){e.next=7;break}return e.next=4,t.pryv.updateAppAccess(r,t.user.username,t.permissions.list,t.user.personalToken);case 4:s=e.sent,e.next=10;break;case 7:return e.next=9,t.pryv.createAppAccess(t.user.username,t.permissions.list,t.user.personalToken);case 9:s=e.sent;case 10:return n=new R(t.user.username,s.token),e.next=13,t.pryv.updateAuthState(t.pollKey,n);case 13:T(t,n);case 14:case"end":return e.stop()}},e,this)})),function(e,t){return D.apply(this,arguments)}),G=function(){var e=k()(g.a.mark(function e(t){var r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pryv.getUsernameForEmail(t.user.username);case 2:return r=t.user.username=e.sent,e.next=5,t.pryv.checkUsernameExistence(r);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=k()(g.a.mark(function e(t,r,s){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:return e.next=4,t.pryv.changePassword(t.user.username,r,s);case 4:case"end":return e.stop()}},e,this)}));return function(t,r,s){return e.apply(this,arguments)}}(),Q=function(){var e=k()(g.a.mark(function e(t,r){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:return e.next=4,t.pryv.login(t.user.username,r);case 4:t.user.personalToken=e.sent;case 5:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),Z=function(){var e=k()(g.a.mark(function e(t,r,s){var n,a,i;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t,r);case 2:return e.next=4,t.pryv.checkAppAccess(t.user.username,t.permissions.list,t.user.personalToken);case 4:if(!(n=e.sent).match){e.next=10;break}return a=new R(t.user.username,n.match.token),e.next=9,t.pryv.updateAuthState(t.pollKey,a);case 9:return e.abrupt("return",T(t,a));case 10:i=null,n.permissions&&t.permissions.updateList(n.permissions),n.mismatch&&(i=n.mismatch.id),s(i);case 14:case"end":return e.stop()}},e,this)}));return function(t,r,s){return e.apply(this,arguments)}}(),Y=function(){var e=k()(g.a.mark(function e(t,r,s,n){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pryv.createUser(t.user.username,r,s,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t,r,s,n){return e.apply(this,arguments)}}(),j=function(){var e=k()(g.a.mark(function e(t){var r,s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pryv.getAvailableHostings();case 2:return r=e.sent,s=r.getSelection(),e.abrupt("return",s);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=k()(g.a.mark(function e(t){var r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new M,e.prev=1,e.next=4,t.pryv.updateAuthState(t.pollKey,r);case 4:return e.prev=4,T(t,r),e.finish(4);case 7:case"end":return e.stop()}},e,this,[[1,,4,7]])}));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=k()(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:return e.next=4,t.pryv.requestPasswordReset(t.user.username);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=k()(g.a.mark(function e(t){var r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pryv.getServiceInfo();case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();function N(e,t){var r=this;return k()(g.a.mark(function s(){for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.apply(void 0,[e].concat(S()(a)));case 3:return r.abrupt("return",r.sent);case 6:throw r.prev=6,r.t0=r.catch(0),new F(r.t0);case 9:case"end":return r.stop()}},s,r,[[0,6]])}))}var z=function(e){return{acceptAccess:N(e,B),changePassword:N(e,L),checkAccess:N(e,Z),createUser:N(e,Y),loadHostings:N(e,j),login:N(e,Q),refuseAccess:N(e,H),resetPassword:N(e,q),getServiceInfo:N(e,C),checkUsername:N(e,G)}},V={components:{Password:l,Alerts:d},data:function(){return{password:"",email:"",hosting:"",hostingsSelection:[],newUser:null,submitting:!1,ctx:{},c:null,error:"",success:"",rules:{required:function(e){return!!e||"This field is required."},email:function(e){return/.+@.+/.test(e)||"E-mail must be valid."}},validForm:!1}},created:function(){this.ctx=new P(this.$route.query),this.c=z(this.ctx),this.c.loadHostings().then(this.initHostings).catch(this.showError)},methods:{submit:function(){var e=this;this.$refs.form.validate()&&(this.submitting=!0,this.c.createUser(this.password,this.email,this.hosting).then(function(t){e.newUser=t,null==e.ctx.permissions.list&&(location.href=e.ctx.pryv.core(t.username)),e.success="New user successfully created: "+t.username+"."}).catch(this.showError).finally(function(){e.submitting=!1}))},clear:function(){this.$refs.form.reset()},initHostings:function(e){this.hostingsSelection=e,this.hostingsSelection.length>0&&(this.hosting=this.hostingsSelection[0].value)},showError:function(e){this.error=e.msg}}},O={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Register a new user")]),e._v(" "),null==e.newUser?r("v-form",{ref:"form",attrs:{id:"registerForm"},model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[r("v-text-field",{attrs:{id:"email",rules:[e.rules.required,e.rules.email],label:"E-mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-text-field",{attrs:{id:"username",rules:[e.rules.required],label:"Username"},model:{value:e.ctx.user.username,callback:function(t){e.$set(e.ctx.user,"username",t)},expression:"ctx.user.username"}}),e._v(" "),r("Password",{attrs:{confirmation:!0},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("v-autocomplete",{attrs:{id:"hosting",items:e.hostingsSelection,rules:[e.rules.required],placeholder:"Choose hosting...",label:"Hosting"},model:{value:e.hosting,callback:function(t){e.hosting=t},expression:"hosting"}}),e._v(" "),r("v-btn",{attrs:{id:"submitButton",disabled:!e.validForm||e.submitting},on:{click:e.submit}},[e._v("Create")]),e._v(" "),r("v-btn",{attrs:{id:"clearButton"},on:{click:e.clear}},[e._v("Clear")]),e._v(" "),r("div",[e._v("\n      By registering you agree with our\n      "),r("a",{attrs:{target:"_blank",href:"https://pryv.com/terms-of-use/"}},[e._v("\n      terms of use")]),e._v(".\n    ")])],1):e._e(),e._v(" "),null!=e.ctx.permissions.list?r("div",[r("v-divider",{staticClass:"mt-3 mb-2"}),e._v(" "),r("router-link",{attrs:{to:{name:"Authorization"}}},[r("h3",[e._v("Go back to Sign in")])])],1):e._e(),e._v(" "),r("Alerts",{attrs:{successMsg:e.success,errorMsg:e.error}})],1)},staticRenderFns:[]},W=r("VU/8")(V,O,!1,null,null,null).exports,J={components:{Password:l,Alerts:d},props:{resetToken:{type:String,default:null}},data:function(){return{password:"",error:"",success:"",showForm:!0,submitting:!1,ctx:{},c:null,rules:{required:function(e){return!!e||"This field is required."}},validForm:!1}},computed:{pageTitle:function(){return this.resetToken?"Set a new password":"Reset password"},buttonText:function(){return this.resetToken?"Change password":"Request password reset"}},created:function(){this.ctx=new P(this.$route.query),this.c=z(this.ctx)},methods:{submit:function(){var e=this;this.$refs.form.validate()&&(this.submitting=!0,null==this.resetToken?this.c.resetPassword().then(function(){e.showForm=!1,e.success="We have sent password reset instructions to your e-mail address."}).catch(this.showError).finally(function(){e.submitting=!1}):this.c.changePassword(this.password,this.resetToken).then(function(){e.showForm=!1,e.success="Your password have been successfully changed."}).catch(this.showError).finally(function(){e.submitting=!1}))},showError:function(e){this.error=e.msg}}},K={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.pageTitle))]),e._v(" "),e.showForm?r("v-form",{ref:"form",model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[r("v-text-field",{attrs:{id:"usernameOrEmail",rules:[e.rules.required],label:"Username or email"},model:{value:e.ctx.user.username,callback:function(t){e.$set(e.ctx.user,"username",t)},expression:"ctx.user.username"}}),e._v(" "),null!=e.resetToken?r("Password",{attrs:{confirmation:!0},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}):e._e(),e._v(" "),r("v-btn",{attrs:{id:"submitButton",disabled:!e.validForm||e.submitting},on:{click:e.submit}},[e._v(e._s(e.buttonText))])],1):e._e(),e._v(" "),null!=e.ctx.permissions.list?r("div",[r("v-divider",{staticClass:"mt-3 mb-2"}),e._v(" "),r("router-link",{attrs:{to:{name:"Authorization"}}},[r("h3",[e._v("Go back to Sign in")])])],1):e._e(),e._v(" "),r("Alerts",{attrs:{successMsg:e.success,errorMsg:e.error}})],1)},staticRenderFns:[]},X=r("VU/8")(J,K,!1,null,null,null).exports,$={props:{permissionsList:{type:Array,default:function(){return[]}},appId:{type:String,default:""}},data:function(){return{dialog:!0}},methods:{closeDialog:function(e){this.dialog=!1,this.$emit(e)}}},ee={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{width:"600",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline grey lighten-2",attrs:{id:"appIdText"}},[r("span",[e._v("App "),r("b",[e._v(e._s(e.appId))]),e._v(" is requesting : ")])]),e._v(" "),r("v-card-text",[r("ul",e._l(e.permissionsList,function(t,s){return r("li",{key:s},[e._v("\n          A permission on stream "),r("b",[e._v(e._s(t.name||t.defaultName))]),e._v(" with level "),r("b",[e._v(e._s(t.level.toUpperCase()))])])}))]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{id:"refusePermissions"},on:{click:function(t){e.closeDialog("refused")}}},[e._v("Reject")]),e._v(" "),r("v-btn",{attrs:{id:"acceptPermissions"},on:{click:function(t){e.closeDialog("accepted")}}},[e._v("Accept")])],1)],1)],1)},staticRenderFns:[]},te={components:{Password:l,Permissions:r("VU/8")($,ee,!1,null,null,null).exports,Alerts:d},data:function(){return{password:"",personalToken:"",error:"",checkedPermissions:null,accessId:null,serviceInfos:{},submitting:!1,c:null,ctx:{},rules:{required:function(e){return!!e||"This field is required."},email:function(e){return/.+@.+/.test(e)||"E-mail must be valid"}},validForm:!1}},created:function(){this.ctx=new P(this.$route.query),this.c=z(this.ctx),this.c.getServiceInfo().then(this.showInfos).catch(this.showError)},methods:{submit:function(){var e=this;this.$refs.form.validate()&&(this.submitting=!0,this.c.checkAccess(this.password,this.showPermissions).catch(this.showError).finally(function(){e.submitting=!1}))},showPermissions:function(e){this.checkedPermissions=this.ctx.permissions.list,this.accessId=e},accept:function(){this.c.acceptAccess(this.accessId).catch(this.showError)},refuse:function(){this.c.refuseAccess().catch(this.showError)},showError:function(e){this.error=e.msg},showInfos:function(e){this.serviceInfos=e}}},re={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Sign in")]),e._v(" "),null!=e.checkedPermissions?r("Permissions",{attrs:{appId:e.ctx.appId,permissionsList:e.checkedPermissions},on:{accepted:e.accept,refused:e.refuse}}):e._e(),e._v(" "),r("v-form",{ref:"form",model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[r("v-text-field",{attrs:{id:"usernameOrEmail",rules:[e.rules.required],label:"Username or email"},model:{value:e.ctx.user.username,callback:function(t){e.$set(e.ctx.user,"username",t)},expression:"ctx.user.username"}}),e._v(" "),r("Password",{model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("v-btn",{attrs:{id:"submitButton",disabled:!e.validForm||e.submitting},on:{click:e.submit}},[e._v("Sign In")]),e._v(" "),r("v-btn",{on:{click:e.refuse}},[e._v("Cancel")]),e._v(" "),e.serviceInfos.support?r("div",[e._v("\n      Feel free to reach our\n      "),r("a",{attrs:{href:e.serviceInfos.support,target:"_blank"}},[e._v("\n        helpdesk")]),e._v("\n      if you have questions.\n    ")]):e._e()],1),e._v(" "),r("v-divider",{staticClass:"mt-3 mb-2"}),e._v(" "),r("router-link",{attrs:{to:{name:"RegisterUser"}}},[r("h3",[e._v("Create an account")])]),e._v(" "),r("router-link",{attrs:{to:{name:"ResetPassword"}}},[r("h3",[e._v("Forgot password")])]),e._v(" "),r("Alerts",{attrs:{errorMsg:e.error}})],1)},staticRenderFns:[]},se=r("VU/8")(te,re,!1,null,null,null).exports,ne={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("404 - Page not found")]),this._v("\n  The page you are looking for is like time in quantum gravity theories, it does not exist.\n")])}]},ae=r("VU/8")(null,ne,!1,null,null,null).exports,ie={components:{Alerts:d},data:function(){return{username:"",error:"",ctx:{},c:null,rules:{required:function(e){return!!e||"This field is required."}},validForm:!1}},created:function(){this.ctx=new P(this.$route.query),this.c=z(this.ctx)},methods:{submit:function(){this.$refs.form.validate()&&this.c.checkUsername().then(this.toMyPryv).catch(this.showError)},toMyPryv:function(){location.href=this.ctx.pryv.core(this.ctx.user.username)},showError:function(e){this.error=e.msg}}},oe={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Signin hub")]),e._v(" "),r("v-form",{ref:"form",model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[r("v-text-field",{attrs:{id:"usernameOrEmail",rules:[e.rules.required],label:"Username or email"},model:{value:e.ctx.user.username,callback:function(t){e.$set(e.ctx.user,"username",t)},expression:"ctx.user.username"}}),e._v(" "),r("v-btn",{attrs:{id:"submitButton",disabled:!e.validForm},on:{click:e.submit}},[e._v("Go to my Pryv")])],1),e._v(" "),r("Alerts",{attrs:{errorMsg:e.error}})],1)},staticRenderFns:[]},ue=r("VU/8")(ie,oe,!1,null,null,null).exports;s.default.use(o.a);var ce=new o.a({mode:"history",base:"access",routes:[{path:"/",redirect:{name:"Authorization"}},{path:"/auth",name:"Authorization",component:se,alias:"/access.html"},{path:"/register",name:"RegisterUser",component:W,alias:"/register.html"},{path:"/reset",name:"ResetPassword",component:X,props:function(e){return{resetToken:e.query.resetToken}},alias:"/reset-password.html"},{path:"/signin",name:"SigninHub",component:ue,alias:"/signinhub.html"},{path:"*",component:ae}]});function le(e){return!!Object.keys(e.query).length}ce.beforeEach(function(e,t,r){!le(e)&&le(t)?r({name:e.name,query:t.query}):r()});var pe=ce,he=r("3EgV"),de=r.n(he);r("7zck");s.default.use(de.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:pe,components:{App:i},template:"<App/>"})},ymUC:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAIAAAC1eHXNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0FFQTU4M0Q4NUQ5MTFFMzhBQUJBRDQ4MDI4ODg5NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0FFQTU4M0U4NUQ5MTFFMzhBQUJBRDQ4MDI4ODg5NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQUVBNTgzQjg1RDkxMUUzOEFBQkFENDgwMjg4ODk2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQUVBNTgzQzg1RDkxMUUzOEFBQkFENDgwMjg4ODk2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppc+5zgAAAbdSURBVHja7Fi7j1ZF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"}},["NHnr"]);
//# sourceMappingURL=app.886c26d222792e168b2a.js.map