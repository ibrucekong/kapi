!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="../../",n(n.s=0)}([function(e,t){let n=parent.document.querySelector("html.dark"),r=parent.document.body.classList.toString().includes("dark");(n||r)&&document.body.classList.add("dark"),function(){const e=parent.localStorage.setItem;parent.localStorage.setItem=function(t,n){let r=new Event("setItemEvent");r.key=t,r.newValue=n,parent.window.dispatchEvent(r),e.apply(this,arguments)}}(),parent.window.addEventListener("setItemEvent",e=>{"vitepress-theme-appearance"===e.key&&("dark"===e.newValue?document.body.classList.add("dark"):"auto"===e.newValue&&document.body.classList.remove("dark"))}),new Vue({el:"#app",data:()=>({form:{phone:"",email:"",desc:""},formRules:{phone:[{required:!0,message:"电话号码不能为空",trigger:"change"},{phoneType:"mobile",message:"请输入正确的电话号码",validator:function(e,t,n){const r=/^[1][3,4,5,6,7,8,9][0-9]{9}$/,o=/^0\d{2,3}-?\d{7,8}$/,a=/^[1-9]\d{6,7}$/;if(!t)return n(new Error("请输入电话号码"));e.phoneType=e.phoneType||"mobile","mobile"===e.phoneType&&(t&&!r.test(t)?n(new Error("请输入合法的电话号码")):n()),"phone"===e.phoneType&&(t&&!o.test(t)?n(new Error("请输入合法的电话号码")):n()),"all"===e.phoneType&&(!t||o.test(t)||r.test(t)?n():n(new Error("请输入合法的电话号码"))),"allAndNoArea"===e.phoneType&&(!t||o.test(t)||r.test(t)||a.test(t)?n():n(new Error("请输入合法的电话号码")))},trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"change"},{message:"请输入正确的邮箱地址",validator:function(e,t,n){if(!t)return n(new Error("请输入邮箱地址"));/^([a-zA-Z]|[0-9])(\w|\-|\.)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(t)?n():n(new Error("请输入合法的邮箱地址"))},trigger:"blur"}],desc:[{required:!0,message:"申请说明不能为空",trigger:"change"}]},debounceAuth:null}),mounted(){this.debounceAuth=this.debounce(()=>this.auth(),1e3)},methods:{auth(){this.$refs.form.validate(e=>{if(e){const e={method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},data:JSON.stringify(this.form),url:"http://www.zhreleven.com:9021/kapi/auth-key/"};axios(e).then(e=>{console.log(e)}).catch(e=>{console.warn(e)})}})},formatDateTime(e){if(""===e||!e)return"";let t=(e=new Date(e)).getFullYear(),n=e.getMonth()+1;n=n<10?"0"+n:n;let r=e.getDate();r=r<10?"0"+r:r;let o=e.getHours();o=o<10?"0"+o:o;let a=e.getMinutes();a=a<10?"0"+a:a;let u=e.getSeconds();return u=u<10?"0"+u:u,t+"-"+n+"-"+r+" "+o+":"+a+":"+u},debounce(e,t,n){let r,o,a=function(){let a=this,u=arguments;if(r&&clearTimeout(r),n){let n=!r;r=setTimeout((function(){r=null}),t),n&&(o=e.apply(a,u))}else r=setTimeout((function(){e.apply(a,u)}),t);return o};return a.cancel=function(){clearTimeout(r),r=null},a}}})}]);