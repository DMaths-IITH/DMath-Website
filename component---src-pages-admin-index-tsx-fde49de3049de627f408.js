(self.webpackChunkdepartment_of_mathematics=self.webpackChunkdepartment_of_mathematics||[]).push([[308],{7845:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(7294))&&n.__esModule?n:{default:n};r(7429);var l=function(e){return a.default.createElement("div",{className:"reactCircularLoader",style:{display:"flex",position:"relative",alignContent:"space-around",justifyContent:"center"}},a.default.createElement("svg",{className:"reactCircularLoaderSvg",height:e.diameter,width:e.diameter,viewBox:"0 0 100 100"},a.default.createElement("circle",{className:"reactCircularLoaderSecondary",cx:"50%",cy:"50%",r:"45%",style:{strokeWidth:e.secondaryWidth,stroke:e.secondaryColor,position:absolute,right:0,top:0,fill:"none",strokeLinecap:"round"}}),a.default.createElement("circle",{className:"reactCircularLoaderPrimary animate",cx:"50%",cy:"50%",r:"45%",style:{strokeWidth:e.primaryWidth,stroke:e.primaryColor,position:absolute,right:0,top:0,fill:"none",strokeLinecap:"round"}})))};t.default=l},2009:function(e,t,r){"use strict";var n;t.Z=void 0;var a=((n=r(7845))&&n.__esModule?n:{default:n}).default;t.Z=a},1450:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),l=(n=r(5697))&&n.__esModule?n:{default:n},o=r(3720),i=r(3);function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(c,e);var t,r,n,l,u=(t=c,function(){var e,r=v(t);if(b()){var n=v(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return h(this,e)});function c(){var e;m(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return E(y(e=u.call.apply(u,[this].concat(r))),"state",{hovered:!1}),E(y(e),"getStyle",(function(t){var r="dark"===e.props.type?i.darkStyle:i.lightStyle;return e.state.hovered?p({},r,{},i.hoverStyle,{},t):e.props.disabled?p({},r,{},i.disabledStyle,{},t):p({},r,{},t)})),E(y(e),"mouseOver",(function(){e.props.disabled||e.setState({hovered:!0})})),E(y(e),"mouseOut",(function(){e.props.disabled||e.setState({hovered:!1})})),E(y(e),"click",(function(t){e.props.disabled||e.props.onClick(t)})),e}return r=c,(n=[{key:"render",value:function(){var e=this.props,t=e.label,r=e.style,n=d(e,["label","style"]);return a.default.createElement("div",s({},n,{role:"button",onClick:this.click,style:this.getStyle(r),onMouseOver:this.mouseOver,onMouseOut:this.mouseOut}),a.default.createElement(o.GoogleIcon,this.props),a.default.createElement("span",null,t))}}])&&g(r.prototype,n),l&&g(r,l),c}(a.PureComponent);t.default=w,E(w,"propTypes",{label:l.default.string,disabled:l.default.bool,tabIndex:l.default.number,onClick:l.default.func,type:l.default.oneOf(["light","dark"]),style:l.default.object}),E(w,"defaultProps",{label:"Sign in with Google",disabled:!1,type:"dark",tabIndex:0,onClick:function(){}})},3720:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleIcon=void 0;var n=o(r(7294)),a=o(r(5697)),l=r(3);function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=n.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:l.svgStyle},n.default.createElement("defs",null,n.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},n.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),n.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),n.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),n.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),n.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),n.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),n.default.createElement("feMerge",null,n.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),n.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),n.default.createElement("feMergeNode",{in:"SourceGraphic"}))),n.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"}),n.default.createElement("rect",{id:"path-3",x:"5",y:"5",width:"38",height:"38",rx:"1"})),n.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -219.000000)"}),n.default.createElement("g",{id:"btn_google_dark_normal",transform:"translate(-1.000000, -1.000000)"},n.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},n.default.createElement("g",{id:"button-bg"},n.default.createElement("use",{fill:"#4285F4",fillRule:"evenodd"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}))),n.default.createElement("g",{id:"button-bg-copy"},n.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"})),n.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},n.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),n.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),n.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),n.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),n.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),n.default.createElement("g",{id:"handles_square"})))),d=n.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:l.svgStyle},n.default.createElement("defs",null,n.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},n.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),n.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),n.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),n.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),n.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),n.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),n.default.createElement("feMerge",null,n.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),n.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),n.default.createElement("feMergeNode",{in:"SourceGraphic"}))),n.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"})),n.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -160.000000)"}),n.default.createElement("g",{id:"btn_google_light_normal",transform:"translate(-1.000000, -1.000000)"},n.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},n.default.createElement("g",{id:"button-bg"},n.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}))),n.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},n.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),n.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),n.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),n.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),n.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),n.default.createElement("g",{id:"handles_square"})))),f=n.default.createElement("svg",{width:"46px",height:"46px",viewBox:"0 0 46 46",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:l.svgStyle},n.default.createElement("defs",null,n.default.createElement("rect",{id:"path-1",x:"0",y:"0",width:"40",height:"40",rx:"2"})),n.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.default.createElement("g",{id:"9-PATCH",transform:"translate(-788.000000, -219.000000)"}),n.default.createElement("g",{id:"btn_google_dark_disabled",transform:"translate(-1.000000, -1.000000)"},n.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)"},n.default.createElement("g",{id:"button-bg"},n.default.createElement("use",{fillOpacity:"0.08",fill:"#000000",fillRule:"evenodd"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}))),n.default.createElement("path",{d:"M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z",id:"Shape-Copy",fillOpacity:"0.4",fill:"#000000"}),n.default.createElement("g",{id:"handles_square"})))),p=function(e){var t=e.disabled,r=e.type;return n.default.createElement("div",{style:t?u({},l.iconStyle,{},l.disabledIconStyle):l.iconStyle},t?f:"dark"===r?s:d)};t.GoogleIcon=p,p.propTypes={disabled:a.default.bool,type:a.default.oneOf(["light","dark"])},p.defaultProps={type:"dark"}},6030:function(e,t,r){"use strict";Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(1450))&&n.__esModule?n:{default:n}},3:function(e,t){"use strict";function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.disabledIconStyle=t.disabledStyle=t.hoverStyle=t.svgStyle=t.iconStyle=t.lightStyle=t.darkStyle=void 0;var l={height:"50px",width:"240px",border:"none",textAlign:"center",verticalAlign:"center",boxShadow:"0 2px 4px 0 rgba(0,0,0,.25)",fontSize:"16px",lineHeight:"48px",display:"block",borderRadius:"1px",transition:"background-color .218s, border-color .218s, box-shadow .218s",fontFamily:"Roboto,arial,sans-serif",cursor:"pointer",userSelect:"none"},o=n({backgroundColor:"#4285f4",color:"#fff"},l);t.darkStyle=o;var i=n({backgroundColor:"#fff",color:"rgba(0,0,0,.54)"},l);t.lightStyle=i;t.iconStyle={width:"48px",height:"48px",textAlign:"center",verticalAlign:"center",display:"block",marginTop:"1px",marginLeft:"1px",float:"left",backgroundColor:"#fff",borderRadius:"1px",whiteSpace:"nowrap"};t.svgStyle={width:"48px",height:"48px",display:"block"};t.hoverStyle={boxShadow:"0 0 3px 3px rgba(66,133,244,.3)",transition:"background-color .218s, border-color .218s, box-shadow .218s"};t.disabledStyle={backgroundColor:"rgba(37, 5, 5, .08)",color:"rgba(0, 0, 0, .40)",cursor:"not-allowed"};t.disabledIconStyle={backgroundColor:"transparent"}},780:function(e,t,r){"use strict";r.r(t);var n=r(2137),a=r(3552),l=r(7757),o=r.n(l),i=r(7294),u=r(6030),c=r(4630),s=r(2009),d=function(e){function t(t,r){var a;return(a=e.call(this,t,r)||this).onLogin=(0,n.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isUserLoggedIn:!0}),e.next=3,c.J.verifyUser();case 3:e.sent?("undefined"!=typeof window&&sessionStorage.setItem("isAdminLoggedIn","True"),a.setState({isAdminLoggedIn:!0})):(c.J.logout((function(){})),alert("Sorry, you do not have access to this service."),a.setState({isAdminLoggedIn:!1,isUserLoggedIn:!1}));case 5:case"end":return e.stop()}}),e)}))),a.login=function(){c.J.login(a.onLogin)},a.getLoginComponent=function(){return i.createElement("div",{className:"adminWelcomeBox"},i.createElement("h2",{className:"adminTitle"},"DMath Admin"),i.createElement("p",null,"Welcome to the admin page! Please login with you IITH mail id to use the admin services."),i.createElement(u.ZP,{onClick:function(){return a.login()}}))},a.getVerifyComponent=function(){var e=c.J.getUser();return i.createElement("div",{className:"adminWelcomeBox"},i.createElement("h2",{className:"adminTitle"},"DMath Admin"),i.createElement("p",null,"Welcome to the admin page, "+e.name+" ("+e.email+")"),i.createElement(s.Z,{primaryColor:"white",secondaryColor:"rgb(170,170,170",diameter:"18px",primaryWidth:"3px",secondaryWidth:"5px"}),i.createElement("p",null,"Verifying your access level..."))},a.createNewPage=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.path.split("/").join("-"),c.J.saveChanges("pages",r,{components:[]}),e.next=4,c.J.getPageData("pages","pages");case 4:(n=e.sent)[r]=t.type,c.J.saveChanges("pages","pages",n),a.setState({addNewPage:!1});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getAdminComponent=function(){var e=c.J.getUser(),t={path:"",type:"./src/components/pageview/PageView.tsx"};return i.createElement("div",{className:"adminWelcomeBox"},i.createElement("h2",{className:"adminTitle"},"DMath Admin"),i.createElement("p",null,"Welcome to the admin page, "+e.name+" ("+e.email+")"),i.createElement("div",null,i.createElement("a",{href:"/jsoneditor"},i.createElement("button",null,"Go to Json Editor")),i.createElement("button",{style:{marginLeft:"10px"},onClick:function(){return a.setState({addNewPage:!a.state.addNewPage})}},"Add a new page")),a.state.addNewPage?i.createElement("div",{style:{marginTop:"15px",border:"2px solid rgb(170,170,170)",padding:"10px"}},i.createElement("div",{className:"adminNewPageRow"},i.createElement("div",{style:{marginRight:"10px"}},"Enter the path to the page (relative URL path):"),i.createElement("input",{onChange:function(e){return t.path=e.target.value}})),i.createElement("div",{className:"adminNewPageRow"},i.createElement("div",{style:{marginRight:"10px"}},"Select the page type:"),i.createElement("select",{onChange:function(e){return t.type=e.target.value}},i.createElement("option",{value:"./src/components/pageview/PageView.tsx"},"Default"),i.createElement("option",{value:"./src/components/yearview/YearView.tsx"},"Year Template"))),i.createElement("button",{onClick:function(){a.createNewPage(t)}},"Create Page")):null)},c.J.initialize_auth(a.onLogin),a.state={isUserLoggedIn:c.J.isUserLoggedIn(),isAdminLoggedIn:c.J.isAdminLoggedIn(),addNewPage:!1},a}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement("div",{className:"adminPage"},this.state.isUserLoggedIn?this.state.isAdminLoggedIn?this.getAdminComponent():this.getVerifyComponent():this.getLoginComponent())},t}(i.Component);t.default=d},7429:function(e,t,r){"use strict";r.r(t)}}]);
//# sourceMappingURL=component---src-pages-admin-index-tsx-fde49de3049de627f408.js.map