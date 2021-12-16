var N=Object.defineProperty,q=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var $=(e,o,s)=>o in e?N(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,_=(e,o)=>{for(var s in o||(o={}))M.call(o,s)&&$(e,s,o[s]);if(b)for(var s of b(o))P.call(o,s)&&$(e,s,o[s]);return e},h=(e,o)=>q(e,y(o));import{c as U,a as v,d as j,u as E,b as S}from"./object.792997c9.js";import{e as R,a7 as O,i as D,N as V,r as n,o as F,h as I,b as c,d as t,O as m,w as k,a3 as A,X as T,a as G}from"./vendor.e16af399.js";import{r as H,_ as B}from"./index.5d7405f0.js";const W=()=>{const{t:e}=R(),o=O(),s=D(()=>o.getters["auth/isProgressStatusAuth"]),f=V(!0),u=V(!0),l=6,r=U({email:v().required(e("Required",{name:"Email"})).email(e("Valid email")),password:v().required(e("Required",{name:e("Password")})).min(l,e("Min",{name:e("Password"),min:l})),password_confirmation:v().required(e("Required",{name:e("Confirm password")})).oneOf([j("password")],e("Passwords must match"))}),{errors:i,handleSubmit:g}=E({validationSchema:r}),{value:w}=S("password"),{value:d}=S("email"),{value:a}=S("password_confirmation"),C=g(async p=>{!u.value||await o.dispatch("auth/signup",h(_({},p),{t:e}))});return o.watch((p,L)=>L["auth/isNewUser"],p=>{p&&H.push({name:"firstLoginSettings"})}),{onSubmit:C,agree:u,email:d,password:w,password_confirmation:a,errors:i,isActiveFocus:f,isButtonLoading:s}},X={name:"SignupForm",setup(){return _({},W())}},z={class:"w-full md:w-1/2 p-5"},J={class:"flex items-center pb-5"},K={class:"auth-subform"};function Q(e,o,s,f,u,l){const r=n("app-icon"),i=n("app-input"),g=n("app-checkbox-input"),w=n("app-button"),d=n("router-link");return F(),I("div",z,[c("div",J,[t(r,{icon:"lock-open",class:"w-6 h-6"}),c("h2",null,m(e.$t("Signup")),1)]),c("form",{onSubmit:o[4]||(o[4]=T((...a)=>e.onSubmit&&e.onSubmit(...a),["prevent"])),class:"space-y-8"},[t(i,{isActiveFocus:e.isActiveFocus,label:"Email",type:"email",name:"email",modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=a=>e.email=a),modelModifiers:{trim:!0},"error-message":e.errors.email},null,8,["isActiveFocus","modelValue","error-message"]),t(i,{label:"Password",type:"password",name:"password",modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=a=>e.password=a),modelModifiers:{trim:!0},"error-message":e.errors.password},null,8,["modelValue","error-message"]),t(i,{label:"Confirm password",name:"password_confirmation",type:"password",modelValue:e.password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=a=>e.password_confirmation=a),modelModifiers:{trim:!0},"error-message":e.errors.password_confirmation},null,8,["modelValue","error-message"]),t(g,{modelValue:e.agree,"onUpdate:modelValue":o[3]||(o[3]=a=>e.agree=a),name:"agree",class:"text-xs"},{default:k(()=>[A(m(e.$t("Agree")),1)]),_:1},8,["modelValue"]),t(w,{isButtonLoading:e.isButtonLoading},{default:k(()=>[A(m(e.$t("Signup")),1)]),_:1},8,["isButtonLoading"])],32),c("div",K,[t(d,{to:{name:"forgot"},class:"text-sm hover:underline",textContent:m(e.$t("Forgot"))},null,8,["textContent"]),t(d,{to:{name:"login"},class:"text-sm hover:underline",textContent:m(e.$t("Login"))},null,8,["textContent"])])])}var Y=B(X,[["render",Q]]);const Z={name:"Signup",components:{SignupForm:Y}};function x(e,o,s,f,u,l){const r=n("signup-form");return F(),G(r)}var te=B(Z,[["render",x]]);export{te as default};
