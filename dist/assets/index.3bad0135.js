var ce=Object.defineProperty,ie=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var Y=(e,t,s)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,L=(e,t)=>{for(var s in t||(t={}))ue.call(t,s)&&Y(e,s,t[s]);if(q)for(var s of q(t))de.call(t,s)&&Y(e,s,t[s]);return e},N=(e,t)=>ie(e,le(t));import{c as pe,V as ge,r as g,o as i,a as y,w as f,b as a,d as p,u as W,e as _e,f as C,g as z,n as me,h as l,F as T,i as h,j as J,k as he,l as fe,m as Se,p as K,s as ye,q as ve,t as be,v as $e,x as Ae,y as we,z as Ie,A as Ce,B as Te,C as Ee,D as xe,E as Re,G as Ue,H as Pe,I as Le,J as ke,K as Me,L as Ne,M as Oe,N as Fe,O as Ge,P as $,Q as Ve,R as E,S as _,T as m,U as Be,W as He,X as O,Y as A,Z as x,_ as X,$ as je,a0 as F,a1 as G,a2 as De,a3 as qe,a4 as Ye,a5 as We}from"./vendor.e8134c2c.js";const ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=s(n);fetch(n.href,c)}};ze();const Je="\u0412\u0445\u043E\u0434",Ke="\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",Xe="\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",Qe="\u041F\u0430\u0440\u043E\u043B\u044C",Ze="Email",et="\u0412\u043E\u0437\u0440\u0430\u0441\u0442",tt="\u0418\u043C\u044F",st="\u041F\u043E\u043B",ot="\u041C\u0443\u0436\u0441\u043A\u043E\u0439",nt="\u0416\u0435\u043D\u0441\u043A\u0438\u0439",at="\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",rt="\u0412\u044B\u0431\u0440\u0430\u0442\u044C",ct='\u041F\u043E\u043B\u0435 "{name}" \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043A \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E.',it='\u041F\u043E\u043B\u0435 "{name}" \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 {min} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.',lt='\u041F\u043E\u043B\u0435 "{name}" \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 {max} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.',ut="\u0416\u0434\u0438\u0442\u0435...",dt="\u0412\u044B\u0439\u0442\u0438",pt="\u042F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438.",gt="\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043Aa(-\u043E\u0432)",_t="\u0412\u044B",mt="\u0432 \u0441\u0435\u0442\u0438",ht="\u043F\u0435\u0447\u0430\u0442\u0430\u0435\u0442",ft="\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",St="\u0413\u043B\u0430\u0432\u043D\u0430\u044F",yt="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",vt="\u041F\u043E\u0438\u0441\u043A";var bt={Login:Je,Forgot:Ke,Signup:Xe,Password:Qe,Email:Ze,Age:et,Username:tt,Gender:st,Male:ot,Female:nt,Save:at,Choose:rt,"Leave chat":"\u041F\u043E\u043A\u0438\u043D\u0443\u0442\u044C \u0447\u0430\u0442","Left chat":"\u0412\u044B \u043F\u043E\u043A\u0438\u043D\u0443\u043B\u0438 \u0447\u0430\u0442.","Join chat":"\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u043A \u0447\u0430\u0442\u0443","No chats selected":"\u041D\u0435\u0442 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0447\u0430\u0442\u043E\u0432.","No messages":"\u041D\u043E\u0432\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u043D\u0435\u0442.","Joined chat":"\u0412\u044B \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u043B\u0438\u0441\u044C \u043A \u0447\u0430\u0442\u0443.",Required:ct,"Valid email":'\u041F\u043E\u043B\u0435 "Email" \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441.',Min:it,Max:lt,"User join chat":'\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C "{username}" \u0441\u0435\u0439\u0447\u0430\u0441 \u0432 \u0447\u0430\u0442\u0435.',"User leave chat":'\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C "{username}" \u043F\u043E\u043A\u0438\u043D\u0443\u043B \u0447\u0430\u0442.',"User online":'\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C "{username}" \u0441\u0435\u0439\u0447\u0430\u0441 \u0432 \u0441\u0435\u0442\u0438.',"User offline":'\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C "{username}" \u043D\u0435 \u0432 \u0441\u0435\u0442\u0438.',Loading:ut,"General data":"\u041E\u0431\u0449\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438","Successful login message":"\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443.","Logout Message":"\u0412\u044B \u0432\u044B\u0448\u043B\u0438 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u044B.",Logout:dt,"Public chats":"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0447\u0430\u0442\u044B","No public chats":"\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0447\u0430\u0442\u043E\u0432.","Alert label success":"\u0423\u0441\u043F\u0435\u0445!","Alert label error":"\u041E\u0448\u0438\u0431\u043A\u0430!","Alert label info":"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F!","Alert label warning":"\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435!","Confirm password":"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F","Passwords must match":"\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442.","Firebase: Error (auth/user-not-found).":"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.","Firebase: Error (auth/wrong-password).":"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.","Firebase: Error (auth/email-already-in-use).":"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441 \u0442\u0430\u043A\u0438\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.",Agree:pt,"Reset password":"\u0421\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F","Instructions reset password":"\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043F\u043E \u0441\u0431\u0440\u043E\u0441\u0443 \u043F\u0430\u0440\u043E\u043B\u044F \u0431\u044B\u043B\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B \u043D\u0430 \u0432\u0430\u0448 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.",groupMembers:gt,You:_t,"Information about chat group":"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0433\u0440\u0443\u043F\u043F\u0435",online:mt,typing:ht,"Write Something":"\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C ...",NotFound:ft,Home:St,Settings:yt,"404 - Page not found":"404 - \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",Search:vt,"Information about user":"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435"};const $t="login",At="Forgot password?",wt="Signup",It="Password",Ct="Email",Tt="Age",Et="Username",xt="Gender",Rt="Male",Ut="Female",Pt="Save",Lt="Choose",kt='The "{name}" field is required.',Mt='The "{name}" must be at least {min}.',Nt='The "{name}" must be no more than {max}.',Ot="Loading...",Ft="Logout",Gt="I accept the Terms of Use and Privacy policy.",Vt="Group members",Bt="You",Ht="online",jt="typing",Dt="Page not found.",qt="Home",Yt="Settings",Wt="Search";var zt={login:$t,Forgot:At,Signup:wt,Password:It,Email:Ct,Age:Tt,Username:Et,Gender:xt,Male:Rt,Female:Ut,Save:Pt,Choose:Lt,"Leave chat":"Leave the chat","Left chat":"You have left the chat.","Joined chat":"You have joined the chat.","Join chat":"Join the chat","No chats selected":"No chats selected.","No messages":"No messages.",Required:kt,"Valid email":'The "Email" must be a valid email address.',Min:Mt,Max:Nt,"User join chat":'User "{username}" in the chat.',"User leave chat":'User "{username}" left the chat.',"User online":'User "{username}" online.',"User offline":'User "{username}" offline.',Loading:Ot,Logout:Ft,"Public chats":"Public chats","No public chats":"No public chats.","General data":"General data","Successful login message":"You have successfully logged in.","Logout Message":"You are logged out.","Alert label success":"Success!","Alert label error":"Error!","Alert label info":"Information!","Alert label warning":"Warning!","Confirm password":"Confirm password","Passwords must match":"Passwords must match.","Firebase: Error (auth/user-not-found).":"User not found.","Firebase: Error (auth/wrong-password).":"User not found.","Firebase: Error (auth/email-already-in-use).":"User already in use.",Agree:Gt,"Reset password":"Reset password","Instructions reset password":"Password reset instructions were sent to your email address.",groupMembers:Vt,You:Bt,"Information about chat group":"Information about chat group",online:Ht,typing:jt,"Write Something":"Write Something ...",NotFound:Dt,Home:qt,Settings:Yt,"404 - Page not found":"404 - Page not found",Search:Wt,"Information about user":"Information about user"};const Jt=pe({messages:{ru:bt,en:zt},legacy:!1,fallbackLocale:"en",locale:"ru",globalInjection:!0});var d=(e,t)=>{const s=e.__vccOpts||e;for(const[o,n]of t)s[o]=n;return s};const Kt={props:{src:{type:String,required:!0},alt:{type:String,required:!0}},components:{VueLoadImage:ge}},Xt=["src","alt"],Qt=a("div",{class:"flex h-full justify-center items-center"},[a("div",{class:"text-red-500 text-sm"},"Image load fails")],-1);function Zt(e,t,s,o,n,c){const r=g("app-loader"),u=g("vue-load-image");return i(),y(u,{class:"relative hidden sm:block w-1/2 overflow-hidden"},{image:f(()=>[a("img",{src:s.src,alt:s.alt,class:"object-cover h-full transform scale-110"},null,8,Xt)]),preloader:f(()=>[p(r)]),error:f(()=>[Qt]),_:1})}var es=d(Kt,[["render",Zt]]);const ts=()=>{const e=W(),{t}=_e(),s=async()=>{await me(()=>{var o;document.title=(o=t(e.meta.title))!=null?o:"Chat"})};C(()=>{s()}),z(e,()=>{s()})};var ss="/chat-client/assets/chat-bg.7cea9a77.png";const os={name:"AuthLayout",components:{AppImage:es},setup(){return ts(),{imgUrl:ss}}},ns={class:"container mx-auto"},as={class:"flex justify-center items-center min-h-screen"},rs={class:"flex w-full z-10 bg-white lg:w-1/2 overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-300 ring-inset"};function cs(e,t,s,o,n,c){const r=g("app-bg-pattern"),u=g("app-image"),I=g("router-view");return i(),l(T,null,[p(r),a("div",ns,[a("div",as,[a("div",rs,[p(u,{src:o.imgUrl,alt:"App chat"},null,8,["src"]),p(I)])])])],64)}var is=d(os,[["render",cs]]);const ls={name:"App",setup(){const e=W();return{layout:h(()=>e.meta.layout)}},components:{AuthLayout:is}};function us(e,t,s,o,n,c){const r=g("app-toast"),u=g("router-view");return i(),l(T,null,[p(r),o.layout?(i(),y(J(o.layout+"-layout"),{key:0})):(i(),y(u,{key:1}))],64)}var ds=d(ls,[["render",us]]),ps={apiKey:"AIzaSyBUTSG6k-OIP4PwxG1sLrhdveFocRt8-Dw",authDomain:"chat-app-cfaa8.firebaseapp.com",projectId:"chat-app-cfaa8",storageBucket:"chat-app-cfaa8.appspot.com",messagingSenderId:"130683707360",appId:"1:130683707360:web:7c21946a99e960568ad585"};he(ps);const gs="modulepreload",Q={},_s="/chat-client/",w=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${_s}${o}`,o in Q)return;Q[o]=!0;const n=o.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":gs,n||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),n)return new Promise((u,I)=>{r.addEventListener("load",u),r.addEventListener("error",I)})})).then(()=>t())},ms=[{path:"/",name:"home",meta:{title:"Home"},component:()=>w(()=>import("./Home.36f18c44.js"),["assets/Home.36f18c44.js","assets/vendor.e8134c2c.js"])},{path:"/login",name:"login",meta:{layout:"auth",title:"Login"},component:()=>w(()=>import("./Login.f2637825.js"),["assets/Login.f2637825.js","assets/object.07269202.js","assets/vendor.e8134c2c.js"])},{path:"/forgot",name:"forgot",meta:{layout:"auth",title:"Reset password"},component:()=>w(()=>import("./Forgot.ca8f28ec.js"),["assets/Forgot.ca8f28ec.js","assets/object.07269202.js","assets/vendor.e8134c2c.js"])},{path:"/signup",name:"signup",meta:{layout:"auth",title:"Signup"},component:()=>w(()=>import("./SignUp.328ed1e8.js"),["assets/SignUp.328ed1e8.js","assets/object.07269202.js","assets/vendor.e8134c2c.js"])},{path:"/first-login",name:"firstLoginSettings",meta:{layout:"auth",title:"Settings"},component:()=>w(()=>import("./FirstLoginSettings.ff96c442.js"),["assets/FirstLoginSettings.ff96c442.js","assets/object.07269202.js","assets/vendor.e8134c2c.js"])},{path:"/:pathMatch(.*)*",name:"notFound",component:()=>w(()=>import("./NotFound.99ffa0fd.js"),["assets/NotFound.99ffa0fd.js","assets/vendor.e8134c2c.js"]),meta:{title:"404 - Page not found"}}],k=fe({history:Se("/chat-client/"),routes:ms}),R=K();var U={async firebaseLogin({email:e,password:t}){try{return await ye(R,e,t)}catch(s){return Promise.reject(s)}},async firebaseLogout(){try{return await ve(R)}catch(e){return Promise.reject(e)}},async firebaseSignUp({email:e,password:t}){try{return await be(R,e,t)}catch(s){return Promise.reject(s)}},async firebaseResetPassword(e){try{return await $e(R,e)}catch(t){return Promise.reject(t)}},async getUserIdToken(){try{return await R.currentUser.getIdToken()}catch(e){return Promise.reject(e)}}},M={IS_LOGGED_IN:"IS_LOGGED_IN",IS_PROGRESS_STATUS_USERS_IN_CHAT:"IS_PROGRESS_STATUS_USERS_IN_CHAT",IS_PROGRESS_STATUS_USER_INFO:"IS_PROGRESS_STATUS_USER_INFO",IS_PROGRESS_STATUS_AUTH:"IS_PROGRESS_STATUS_AUTH",IS_PROGRESS_STATUS_MESSAGES:"IS_PROGRESS_STATUS_MESSAGES",IS_PROGRESS_STATUS_SELECTED_CHAT:"IS_PROGRESS_STATUS_SELECTED_CHAT",SET_NOTIFY:"SET_NOTIFY",IS_TOAST:"IS_TOAST",CLEAR_NOTIFY:"CLEAR_NOTIFY",SET_USER:"SET_USER",IS_NEW_USER:"IS_NEW_USER",SET_PUBLIC:"SET_PUBLIC",SELECT_CHAT_ID:"SELECT_CHAT_ID",CURRENT_CHAT:"CURRENT_CHAT",CURRENT_CHAT_MESSAGES:"CURRENT_CHAT_MESSAGES",ADD_MESSAGE:"ADD_MESSAGE",SET_USERS_IN_CURRENT_CHAT:"SET_USERS_IN_CURRENT_CHAT"};const hs=e=>{const t=localStorage.getItem("app_token");return e.headers.Authorization=`Bearer ${t}`,e},fs=e=>{e.interceptors.request.use(hs),e.interceptors.response.use(t=>t,async t=>(t.response.status===401?(await S.dispatch("auth/logout"),k.push({name:"login"})):t.response.status===404&&k.push({name:"notFound"}),Promise.reject(t)))},v=Ae.create({baseURL:"https://chatboris1979.herokuapp.com/api/"});fs(v);const{SET_USER:V,IS_PROGRESS_STATUS_USER_INFO:B,IS_PROGRESS_STATUS_USERS_IN_CHAT:H,SET_USERS_IN_CURRENT_CHAT:Z}=M;var Ss={namespaced:!0,state:{user:null,allUsersInCurrentChat:null,isProgressStatusUserInfo:!0,isProgressStatusUsersInChat:!0},getters:{user:({user:e})=>e,isProgressStatusUserInfo:({isProgressStatusUserInfo:e})=>e,isProgressStatusUsersInChat:({isProgressStatusUsersInChat:e})=>e,allUsersInCurrentChat:({allUsersInCurrentChat:e})=>e},mutations:{[V](e,t){e.user=t},[B](e,t){e.isProgressStatusUserInfo=t},[H](e,t){e.isProgressStatusUsersInChat=t},[Z](e,t){e.allUsersInCurrentChat=t}},actions:{setUserState:{handler({dispatch:e},t){t&&e("getUser",t.email)},root:!0},async getUser({commit:e},t){try{const s=await v.get(`/users/${t}`);e(V,s.data)}catch(s){console.log(s)}},async createUserInfo({commit:e},t){try{e(B,!0);const s=await v.post("/users",t);e(V,s.data)}catch(s){console.log(s)}finally{e(B,!1)}},async getAllUsersInCurrentChat({commit:e},t){try{e(H,!0);const s=await v.get("/users/chats/"+t);e(Z,s.data)}catch(s){console.log(s)}finally{e(H,!1)}}}};const{IS_LOGGED_IN:ee,IS_PROGRESS_STATUS_AUTH:b,IS_NEW_USER:te}=M;var ys={namespaced:!0,state:{isLoggedIn:!!localStorage.getItem("app_token"),isProgressStatusAuth:!1,isNewUser:!1},getters:{isLoggedIn:({isLoggedIn:e})=>e,isProgressStatusAuth:({isProgressStatusAuth:e})=>e,isNewUser:({isNewUser:e})=>e},mutations:{[ee](e,t){e.isLoggedIn=t},[b](e,t){e.isProgressStatusAuth=t},[te](e,t){e.isNewUser=t}},actions:{setLoggedIn:{root:!0,handler({commit:e},t){e(ee,t)}},async login({commit:e,dispatch:t},{email:s,password:o,t:n}){try{e(b,!0),await U.firebaseLogin({email:s,password:o})}catch(c){t("setNotify",{type:"error",message:n(c.message)},{root:!0})}finally{e(b,!1)}},async logout({commit:e}){try{await U.firebaseLogout()}catch(t){console.log(t.message)}},async signup({commit:e,dispatch:t},{email:s,password:o,t:n}){try{e(b,!0),await U.firebaseSignUp({email:s,password:o}),e(te,!0)}catch(c){t("setNotify",{type:"error",message:n(c.message)},{root:!0})}finally{e(b,!1)}},async resetPassword({commit:e,dispatch:t},{email:s,t:o}){try{e(b,!0),await U.firebaseResetPassword(s),t("setNotify",{type:"info",message:o("Instructions reset password")},{root:!0})}catch(n){t("setNotify",{type:"error",message:o(n.message)},{root:!0})}finally{e(b,!1)}}}};const{SET_PUBLIC:se,SELECT_CHAT_ID:oe,CURRENT_CHAT:ne,CURRENT_CHAT_MESSAGES:ae,ADD_MESSAGE:re,IS_PROGRESS_STATUS_MESSAGES:j,IS_PROGRESS_STATUS_SELECTED_CHAT:D}=M;var vs={namespaced:!0,state:{publicChat:[],selectedChatId:"",currentChat:null,currentChatMessages:[],isProgressStatusMessages:!0,isProgressStatusSelectedChat:!0},getters:{publicChat:({publicChat:e})=>e,selectedChatId:({selectedChatId:e})=>e,currentChat:({currentChat:e})=>e,currentChatMessages:({currentChatMessages:e})=>e,isProgressStatusMessages:({isProgressStatusMessages:e})=>e,isProgressStatusSelectedChat:({isProgressStatusSelectedChat:e})=>e},mutations:{[se](e,t){e.publicChat=t},[oe](e,t){e.selectedChatId=t},[ne](e,t){e.currentChat=t},[ae](e,t){e.currentChatMessages=t},[re](e,t){e.currentChatMessages.push(t)},[j](e,t){e.isProgressStatusMessages=t},[D](e,t){e.isProgressStatusSelectedChat=t}},actions:{async getPublicChats({commit:e}){try{const t=await v.get("/chats/public");e(se,t.data)}catch(t){console.log(t)}},async selectChat({commit:e,dispatch:t},s){e(oe,s),await t("getSelectedChat",s),await t("getSelectedChatMessages",s)},async getSelectedChat({commit:e},t){try{e(D,!0);const s=await v.get("/chats/"+t);e(ne,s.data)}catch(s){console.log(s)}finally{e(D,!1)}},async getSelectedChatMessages({commit:e},t){try{e(j,!0);const s=await v.get("/messages/chat/"+t);e(ae,s.data)}catch(s){console.log(s)}finally{e(j,!1)}},addMessage({commit:e},t){e(re,t)}}};const{SET_NOTIFY:bs,IS_TOAST:$s,CLEAR_NOTIFY:As}=M;var ws={state:{messagePool:[],isToast:!1},getters:{message:({messagePool:e})=>e[e.length-1],isToast:({isToast:e})=>e},mutations:{[bs](e,t){e.messagePool.push(t)},[As](e){e.message=[]},[$s](e,t){e.isToast=t}},actions:{setNotify({commit:e,dispatch:t},s){setTimeout(()=>{e("IS_TOAST",!0),e("SET_NOTIFY",s),t("clearNotify",5e3)},1e3)},clearNotify({commit:e},t=0){let s;clearTimeout(s),s=setTimeout(()=>{e("IS_TOAST",!1),e("CLEAR_NOTIFY")},t)}}};const Is=e=>{const t=["login","signup","forgot"];k.beforeEach((s,o,n)=>t.includes(s.name)&&e.state.auth.isLoggedIn?n({name:"home"}):!t.includes(s.name)&&!e.state.auth.isLoggedIn?n({name:"login"}):n())},S=we({modules:{user:Ss,auth:ys,notify:ws,chat:vs}}),Cs=K();Ie(Cs,async e=>{if(e){const t=await U.getUserIdToken();localStorage.setItem("app_token",t)}else localStorage.removeItem("app_token");await S.dispatch("setLoggedIn",!!e),await S.dispatch("setUserState",e)});Is(S);const Ts={name:"AppIcon",props:{icon:{type:String,required:!0}},components:{LockOpenIcon:Ce,ExclamationCircleIcon:Te,CheckIcon:Ee,InformationCircleIcon:xe,XIcon:Re,PaperAirplaneIcon:Ue,CogIcon:Pe,UserGroupIcon:Le,DotsVerticalIcon:ke,MenuIcon:Me,ArrowLeftIcon:Ne,SearchIcon:Oe,EyeIcon:Fe,EyeOffIcon:Ge}};function Es(e,t,s,o,n,c){return i(),y(J(s.icon+"-icon"))}var xs=d(Ts,[["render",Es]]);const Rs=(e,t)=>{const s=$("");C(()=>{s.value=e.value});const o=h(()=>e.value==="password"),n=h(()=>s.value==="password"?"eye":"eye-off");return{isTypePassword:o,icon:n,input:t,switchVisibility:()=>{s.value=s.value==="password"?"text":"password",t.value.type=s.value}}},Us={name:"AppInput",emits:["update:modelValue"],props:{errorMessage:{type:String,default:null},name:{type:String,required:!0},label:{type:String,default:null},type:{type:String,default:"text"},modelValue:{type:String},isActiveFocus:{type:Boolean,default:!1}},setup(e,{emit:t}){const s=$(null),{type:o,errorMessage:n,isActiveFocus:c}=Ve(e),r=I=>{t("update:modelValue",I.target.value)},u=h(()=>n.value?"border-red-300 focus-within:border-red-500":"border-gray-300 focus-within:border-blue-500");return C(()=>{c.value&&s.value.focus()}),L({change:r,input:s,inputBorderState:u},Rs(o,s))}},Ps=["type","name","value","autocomplete"],Ls=["textContent"],ks=["textContent"];function Ms(e,t,s,o,n,c){const r=g("app-icon");return i(),l("div",null,[a("div",{class:m([o.inputBorderState,"border-b-2 relative my-4"])},[e.isTypePassword?(i(),y(r,{key:0,icon:e.icon,onClick:e.switchVisibility,class:"absolute bg-none right-0 top-[calc(100%-1.3rem)] w-5 h-5 cursor-pointer transition duration-200 ease-in-out text-gray-300 hover:text-gray-600"},null,8,["icon","onClick"])):E("",!0),a("input",{class:"float-input block w-full appearance-none focus:outline-none bg-transparent",type:s.type,name:s.name,value:s.modelValue,onInput:t[0]||(t[0]=(...u)=>o.change&&o.change(...u)),placeholder:" ",ref:"input",autocomplete:s.name},null,40,Ps),a("label",{textContent:_(e.$t(s.label)),class:m([{"is-invalid":s.errorMessage},"float-label -z-1 text-gray-500 absolute top-0 duration-300 origin-0"])},null,10,Ls)],2),s.errorMessage?(i(),l("div",{key:0,class:"-mt-3 text-xs text-red-500",textContent:_(s.errorMessage)},null,8,ks)):E("",!0)])}var Ns=d(Us,[["render",Ms]]);const Os={name:"AppTextarea",emits:["update:modelValue"],props:{modelValue:String,isFocus:{type:Boolean,default:!1}},setup(e,{emit:t}){const s=$(null),o=c=>{t("update:modelValue",c.target.value)},n=()=>{e.isFocus&&s.value.focus()};return C(()=>{n()}),Be(()=>{n()}),{change:o,root:s}}},Fs=["value","placeholder"];function Gs(e,t,s,o,n,c){return i(),l("textarea",{rows:"1",class:"w-full overflow-auto focus:outline-none text-gray-600 focus:placeholder-gray-300 placeholder-gray-400 bg-gray-100 rounded-lg p-3 resize-none",ref:"root",value:s.modelValue,onInput:t[0]||(t[0]=(...r)=>o.change&&o.change(...r)),onKeypress:t[1]||(t[1]=He(O((...r)=>o.change&&o.change(...r),["prevent"]),["enter"])),placeholder:e.$t("Write Something")},null,40,Fs)}var Vs=d(Os,[["render",Gs]]);const Bs={name:"AppButton",props:{color:{type:String,default:"primary",validate(e){return["primary","success","danger","warning"].includes(e)}},isButtonLoading:{type:Boolean,default:!1},type:{type:String,default:"submit"}},setup(e){const t=$(null);return z(()=>e.isButtonLoading,s=>{s?t.value.disabled=s:t.value.removeAttribute("disabled")}),{btn:t}}},Hs=["type"],js=a("div",{class:"btn-loader group-hover:border-white"},null,-1);function Ds(e,t,s,o,n,c){return i(),l("button",{class:m(["btn group","btn-"+s.color]),type:s.type,ref:"btn"},[s.isButtonLoading?(i(),l(T,{key:0},[js,a("span",null,_(e.$t("Loading")),1)],64)):A(e.$slots,"default",{key:1})],10,Hs)}var qs=d(Bs,[["render",Ds]]);const Ys={name:"AppToast",setup(){const e={error:{title:"Alert label error",icon:"exclamation-circle"},success:{title:"Alert label success",icon:"check"},info:{title:"Alert label info",icon:"information-circle"},warning:{title:"Alert label warning",icon:"information-circle"}},t=h(()=>S.getters.message),s=h(()=>S.getters.isToast),o=h(()=>t.value?N(L({},e[t.value.type]),{message:t.value.message,type:t.value.type}):null);return{close:()=>{S.dispatch("clearNotify")},toast:o,isToast:s}}},Ws={key:0,class:"fixed top-4 right-4 z-30"},zs={class:"container"},Js={class:"toast"},Ks={class:"px-4 py-2 -mx-3"},Xs={class:"mx-3"},Qs=["textContent"],Zs=["textContent"];function eo(e,t,s,o,n,c){const r=g("app-icon"),u=g("app-button-close");return i(),y(X,{to:"body"},[p(x,{name:"fade"},{default:f(()=>[o.isToast?(i(),l("div",Ws,[a("div",zs,[a("div",Js,[a("div",{class:m([["toast-"+o.toast.type],"flex items-center justify-center w-12"])},[p(r,{icon:o.toast.icon,class:"h-6 w-6 text-white"},null,8,["icon"])],2),a("div",Ks,[a("div",Xs,[a("span",{class:m([["toast-title-"+o.toast.type],"font-semibold"]),textContent:_(e.$t(o.toast.title))},null,10,Qs),a("p",{textContent:_(o.toast.message)},null,8,Zs)])]),p(u,{onClick:o.close,class:"mr-2 mt-2"},null,8,["onClick"])])])])):E("",!0)]),_:1})])}var to=d(Ys,[["render",eo]]);const so={name:"AppLoader"},oo={class:"absolute inset-0 flex justify-center items-center"},no=a("div",{class:"loader"},null,-1),ao=[no];function ro(e,t,s,o,n,c){return i(),l("div",oo,ao)}var co=d(so,[["render",ro]]);const io={name:"AppCheckboxInput",emits:["update:modelValue"],props:{modelValue:Boolean,name:String}},lo={class:"flex"},uo=["id","checked"],po=["for"];function go(e,t,s,o,n,c){return i(),l("div",lo,[a("input",{type:"checkbox",id:s.name,checked:s.modelValue,onChange:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.checked))},null,40,uo),a("label",{for:s.name,class:"ml-2 -mt-1"},[A(e.$slots,"default")],8,po)])}var _o=d(io,[["render",go]]);const mo={name:"AppSelectInput",emits:["update:modelValue"],props:{errorMessage:{type:String,default:null},name:{type:String,required:!0},label:{type:String,required:!0},options:Array,modelValue:String},setup(e,{emit:t}){const s=h(()=>e.errorMessage?"border-red-300 focus-within:border-red-500":"border-gray-300 focus-within:border-blue-500");return{change:n=>{t("update:modelValue",n.target.value)},inputBorderState:s}}},ho=["id","name","value"],fo={selected:"",value:"",disabled:""},So=["value","textContent"],yo=["textContent"],vo=["textContent"];function bo(e,t,s,o,n,c){return i(),l("div",null,[a("div",{class:m([o.inputBorderState,"border-b-2 relative my-4"])},[a("select",{class:"float-input block w-full appearance-none focus:outline-none bg-transparent",id:s.name,name:s.name,value:s.modelValue,onChange:t[0]||(t[0]=(...r)=>o.change&&o.change(...r))},[a("option",fo,_(e.$t("Choose")),1),(i(!0),l(T,null,je(s.options,(r,u)=>(i(),l("option",{key:u,value:r.value,textContent:_(r.label)},null,8,So))),128))],40,ho),a("label",{textContent:_(e.$t(s.label)),class:m([{"is-invalid":s.errorMessage},"float-label -z-1 text-gray-500 absolute top-0 duration-300 origin-0"])},null,10,yo)],2),s.errorMessage?(i(),l("div",{key:0,class:"-mt-3 text-xs text-red-500",textContent:_(s.errorMessage)},null,8,vo)):E("",!0)])}var $o=d(mo,[["render",bo]]);const Ao={name:"AppRadioInput",emits:["update:modelValue"],props:{modelValue:{type:String},name:{type:String,required:!0},checked:{type:Boolean,default:!1},id:{type:String,required:!0},value:{type:String,required:!0}}},wo={class:"flex items-center gap-2"},Io=["id","checked","name","value"],Co=["for"];function To(e,t,s,o,n,c){return i(),l("div",wo,[a("input",{type:"radio",id:s.id,checked:s.checked,name:s.name,value:s.value,onInput:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.value))},null,40,Io),a("label",{for:s.id,class:"text-gray-500"},[A(e.$slots,"default")],8,Co)])}var Eo=d(Ao,[["render",To]]);const xo={name:"AppAlert",props:{type:{type:String,required:!0,validator(e){return["error","success","info","warning"].includes(e)}}},setup(e){return{alert:$({error:{title:"Alert label error",icon:"exclamation-circle"},success:{title:"Alert label success",icon:"check"},info:{title:"Alert label info",icon:"information-circle"},warning:{title:"Alert label warning",icon:"information-circle"}}[e.type])}}},Ro={class:"flex gap-2 flex-wrap"},Uo=["textContent"];function Po(e,t,s,o,n,c){const r=g("app-icon");return i(),l("div",{class:m(["alert",["alert-"+s.type]]),role:"alert"},[a("div",Ro,[p(r,{icon:o.alert.icon,class:"h-6 w-6 text-teal"},null,8,["icon"]),a("div",{class:"font-bold",textContent:_(e.$t(o.alert.title))},null,8,Uo),a("div",null,[A(e.$slots,"default")])])],2)}var Lo=d(xo,[["render",Po]]);const ko={name:"AppBadge",props:{label:{type:[String,Number],required:!0},type:{type:String,default:"primary",validate(e){return["primary","secondary","success","danger","warning","info","light","dark"].includes(e)}}},setup(e){const t=["px-2","py-1","text-xs","font-medium","tracking-wide","rounded-full","text-white"],s={primary:["bg-indigo-400"],success:["bg-green-400"],danger:["bg-red-400"]},o=h(()=>s[e.type]);return{classes:t,activeClass:o}}},Mo=["textContent"];function No(e,t,s,o,n,c){return i(),l("span",{class:m([...o.classes,...o.activeClass]),textContent:_(s.label)},null,10,Mo)}var Oo=d(ko,[["render",No]]);const Fo={name:"AppDropdown",props:{icon:{type:String,default:"chevron-down"}},setup(){const e=$(!1),t=()=>{e.value=!1};return C(()=>{document.addEventListener("click",t)}),{show:e}}},Go={class:"relative grow"},Vo={class:"flex items-center"},Bo={class:"ml-auto"},Ho={class:"flex items-center"},jo={class:"right-0 top-full mt-2 bg-gray-50 rounded absolute z-10 shadow border border-gray-300 max-w-xs text-sm"};function Do(e,t,s,o,n,c){const r=g("app-icon");return i(),l("div",Go,[a("div",Vo,[a("div",Bo,[a("div",Ho,[a("button",{onClick:t[0]||(t[0]=O(u=>o.show=!o.show,["stop"])),class:"focus:outline-none"},[p(r,{icon:s.icon,class:"w-5 h-5 text-gray-400"},null,8,["icon"])])]),p(x,{name:"slide-in-right"},{default:f(()=>[F(a("div",jo,[A(e.$slots,"default")],512),[[G,o.show]])]),_:3})])])])}var qo=d(Fo,[["render",Do]]);const Yo={name:"AppModal",emits:["update:state"],props:{state:{type:Boolean,default:!1},title:String},setup(e,{emit:t}){return{hideModal:()=>{t("update:state",!1)}}}},Wo={class:"opacity-50 fixed inset-0 z-20 bg-black"},zo={class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-30"},Jo={class:"max-w-lg border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-6"},Ko={class:"flex items-center justify-between p-2 border-b border-solid border-gray-200 rounded-t gap-4"},Xo={class:"text-lg ml-3 font-semibold"},Qo={class:"relative flex-auto"};function Zo(e,t,s,o,n,c){const r=g("app-button-close");return i(),y(X,{to:"body"},[p(x,{name:"fade"},{default:f(()=>[F(a("div",Wo,null,512),[[G,s.state]])]),_:1}),p(x,{name:"fade"},{default:f(()=>[F(a("div",zo,[a("div",{onClick:t[0]||(t[0]=O((...u)=>o.hideModal&&o.hideModal(...u),["self"])),class:"relative flex flex-col items-center justify-center min-h-full"},[a("div",Jo,[a("div",Ko,[a("div",Xo,_(s.title),1),p(r,{onClose:o.hideModal},null,8,["onClose"])]),a("div",Qo,[A(e.$slots,"default")])])])],512),[[G,s.state]])]),_:3})])}var en=d(Yo,[["render",Zo]]);const tn={name:"AppTypingLoader"},sn={class:"bg-white flex space-x-1 p-2 justify-center items-center"},on=a("div",{class:"first-circle"},null,-1),nn=a("div",{class:"second-circle"},null,-1),an=a("div",{class:"last-circle"},null,-1),rn=[on,nn,an];function cn(e,t,s,o,n,c){return i(),l("div",sn,rn)}var ln=d(tn,[["render",cn]]);const un={name:"AppHamburger"},dn={class:"inline-flex items-center justify-center p-1 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"};function pn(e,t,s,o,n,c){const r=g("app-icon");return i(),l("button",dn,[p(r,{icon:"menu",class:"block h-5 w-5 text-gray-600"})])}var gn=d(un,[["render",pn]]);const _n={name:"AppAvatar",props:{name:{type:String,required:!0},isOnline:{type:Boolean},classes:{type:Array,default:()=>["w-10","h-10"]}},setup(){const e=["bg-red","bg-green"],t=["400"],s=n=>Math.floor(Math.random()*n.length);return{getRandomBgColor:h(()=>{const n=s(e),c=s(t);return`${e[n]}-${t[c]}`})}}},mn=["textContent"];function hn(e,t,s,o,n,c){return i(),l(T,null,[a("div",{class:m([[...s.classes,o.getRandomBgColor],"flex items-center justify-center rounded-full shrink-0"])},[a("span",{class:"font-bold text-white text-lg",textContent:_(e.$filters.firstChar(s.name))},null,8,mn)],2),p(x,{name:"fade"},{default:f(()=>[s.isOnline?(i(),l("div",{key:0,class:m([o.getRandomBgColor,"w-3 h-3 border-2 border-white bottom-0 right-0 absolute rounded-lg"])},null,2)):E("",!0)]),_:1})],64)}var fn=d(_n,[["render",hn]]);const Sn={name:"AppSearch",emits:["update:modelValue"],props:{modelValue:String},setup(e,{emit:t}){return{change:o=>{t("update:modelValue",o.target.value)}}}},yn={class:"relative text-gray-600 focus-within:text-gray-400 grow-1"},vn={class:"absolute inset-y-0 left-0 flex items-center pl-2"},bn=["aria-placeholder","placeholder","value"];function $n(e,t,s,o,n,c){const r=g("app-icon");return i(),l("div",yn,[a("span",vn,[p(r,{icon:"search",class:"w-5 h-5"})]),a("input",{"aria-placeholder":e.$t("Search"),placeholder:e.$t("Search"),class:"py-2 pr-2 pl-10 block w-full rounded-lg outline-none focus:text-gray-700 focus:outline-none focus:placeholder-gray-300 placeholder-gray-400 bg-gray-100",type:"search",name:"search",autocomplete:"search",value:s.modelValue,onInput:t[0]||(t[0]=(...u)=>o.change&&o.change(...u))},null,40,bn)])}var An=d(Sn,[["render",$n]]);const wn={name:"AppButtonClose",emits:["close"],setup(e,{emit:t}){return{close:()=>{t("close")}}}};function In(e,t,s,o,n,c){const r=g("app-icon");return i(),l("button",{onClick:t[0]||(t[0]=(...u)=>o.close&&o.close(...u)),class:"inline-flex items-center justify-center w-6 h-6 p-1 rounded-full group hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:bg-gray-200 bg-gray-100 shrink-0"},[p(r,{icon:"x",class:"text-gray-500 transition-colors duration-300 group-hover:text-gray-800"})])}var Cn=d(wn,[["render",In]]);const Tn={name:"AppBgPattern"},En={class:"bg-chat-pattern -z-1 absolute inset-0 bg-repeat bg-center opacity-25"};function xn(e,t,s,o,n,c){return i(),l("div",En)}var Rn=d(Tn,[["render",xn]]),Un=[xs,Ns,qs,to,Vs,co,_o,$o,Eo,Lo,Oo,qo,en,ln,gn,fn,An,Cn,Rn],Pn={name:"focus",mounted(e){e.focus()}},Ln={name:"scroll-down",updated(e,t){t.value!==0&&(e.scrollTop=e.scrollHeight)}},kn=[Pn,Ln],Mn={passedTime(e){if(!Number.isInteger(e))return;const t=new Date(e),s={lastWeek:"'\u041D\u0430 \u043F\u0440\u043E\u0448\u043B\u043E\u0439 \u043D\u0435\u0434\u0435\u043B\u0435'",yesterday:"'\u0412\u0447\u0435\u0440\u0430 \u0432' HH:mm",today:"'\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432' HH:mm",tomorrow:"''",nextWeek:"''",other:"dd.MM.yyyy"},o=N(L({},De),{formatRelative:n=>s[n]});return qe(t,new Date,{locale:o})},firstChar(e){return e.charAt(0).toUpperCase()},ucFirst(e){return e&&e[0].toUpperCase()+e.slice(1)}},Nn={install(e,{connection:t,options:s}){const o=Ye(t,s);e.config.globalProperties.$socket=o,e.provide("socket",o)}};const P=We(ds);P.use(Jt).use(k).use(S).use(Nn,{connection:"https://chatboris1979.herokuapp.com/",options:{}});kn.forEach(e=>{P.directive(e.name,e)});P.config.globalProperties.$filters=Mn;Un.forEach(e=>{P.component(e.name,e)});P.mount("#app");export{d as _,k as r,S as s,ts as u};
