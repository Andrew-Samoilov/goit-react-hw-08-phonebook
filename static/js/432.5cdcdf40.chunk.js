(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[432],{9432:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var r=t(2791),o=t(9434),a=function(e){return e.contacts.items},i=function(e){return e.contacts.isLoading},c=function(e){return e.contacts.error},l=function(e){return e.filters.filter},u=t(3634),s="ContactForm_contactForm__nO+vQ",d="ContactForm_contactLabel__jJxMl",f="ContactForm_inputField__euQpC",m="ContactForm_button__Mtmii",v="ContactForm_listUl__qyILl",p="ContactForm_listItem__8bxdW",h="ContactForm_divItem__gu-ht",g=t(4942),b=t(3366),x=t(7462),Z=t(8182),S=t(4419),y=t(2065),z=t(6934),w=t(1402),C=t(1776),_=t(4036),j=t(5878),R=t(1217);function I(e){return(0,R.Z)("MuiIconButton",e)}var N=(0,j.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),F=t(3329),k=["edge","children","className","color","disabled","disableFocusRipple","size"],M=(0,z.ZP)(C.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"default"!==t.color&&n["color".concat((0,_.Z)(t.color))],t.edge&&n["edge".concat((0,_.Z)(t.edge))],n["size".concat((0,_.Z)(t.size))]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,x.Z)({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(n.vars||n).palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,y.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),(function(e){var n,t=e.theme,r=e.ownerState,o=null==(n=(t.vars||t).palette)?void 0:n[r.color];return(0,x.Z)({},"inherit"===r.color&&{color:"inherit"},"inherit"!==r.color&&"default"!==r.color&&(0,x.Z)({color:null==o?void 0:o.main},!r.disableRipple&&{"&:hover":(0,x.Z)({},o&&{backgroundColor:t.vars?"rgba(".concat(o.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,y.Fq)(o.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===r.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===r.size&&{padding:12,fontSize:t.typography.pxToRem(28)},(0,g.Z)({},"&.".concat(N.disabled),{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}))})),T=r.forwardRef((function(e,n){var t=(0,w.Z)({props:e,name:"MuiIconButton"}),r=t.edge,o=void 0!==r&&r,a=t.children,i=t.className,c=t.color,l=void 0===c?"default":c,u=t.disabled,s=void 0!==u&&u,d=t.disableFocusRipple,f=void 0!==d&&d,m=t.size,v=void 0===m?"medium":m,p=(0,b.Z)(t,k),h=(0,x.Z)({},t,{edge:o,color:l,disabled:s,disableFocusRipple:f,size:v}),g=function(e){var n=e.classes,t=e.disabled,r=e.color,o=e.edge,a=e.size,i={root:["root",t&&"disabled","default"!==r&&"color".concat((0,_.Z)(r)),o&&"edge".concat((0,_.Z)(o)),"size".concat((0,_.Z)(a))]};return(0,S.Z)(i,I,n)}(h);return(0,F.jsx)(M,(0,x.Z)({className:(0,Z.Z)(g.root,i),centerRipple:!0,focusRipple:!f,disabled:s,ref:n,ownerState:h},p,{children:a}))})),A=t(7247),B=function(e){var n=e.id,t=e.name,r=e.number,a=(0,o.I0)();return(0,F.jsxs)("div",{className:h,children:[(0,F.jsxs)("span",{children:[t,": ",r]}),(0,F.jsx)(T,{"aria-label":"delete",size:"small",children:(0,F.jsx)(A.Z,{fontSize:"inherit",onClick:function(){return a((0,u.GK)(n))}})})]})},P=function(){var e=function(e,n){if(n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}return e}((0,o.v9)(a),(0,o.v9)(l));return(0,F.jsx)("ul",{className:v,children:e.map((function(e){return(0,F.jsx)("li",{className:p,children:(0,F.jsx)(B,{id:e.id,number:e.number,name:e.name})},e.id)}))})},E=t(9439),L=function(){var e=(0,o.I0)(),n=(0,r.useState)(""),t=(0,E.Z)(n,2),i=t[0],c=t[1],l=(0,r.useState)(""),v=(0,E.Z)(l,2),p=v[0],h=v[1],g=function(e){"name"===e.currentTarget.name&&c(e.currentTarget.value),"number"===e.currentTarget.name&&h(e.currentTarget.value)},b=(0,o.v9)(a);return(0,F.jsx)("div",{children:(0,F.jsxs)("form",{className:s,onSubmit:function(n){var t=b.find((function(e){return e.name===i}));n.preventDefault(),t?alert("Contact ".concat(i," already exist!")):(e((0,u.uK)({name:i,number:p})),c(""),h(""))},children:[(0,F.jsxs)("label",{className:d,children:["Name",(0,F.jsx)("input",{className:f,value:i,onChange:g,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,F.jsxs)("label",{className:d,children:["Number",(0,F.jsx)("input",{className:f,value:p,onChange:g,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,F.jsx)("button",{className:m,type:"submit",children:"Add contact"})]})})},O=t(3165),V=function(){var e=(0,o.I0)(),n=(0,o.v9)(l);return(0,F.jsxs)("label",{className:d,children:["Find contact by name",(0,F.jsx)("input",{value:n,onChange:function(n){e((0,O.T)(n.currentTarget.value))},name:"filter",className:f,type:"text"})]})};function q(){var e=(0,o.v9)(i),n=(0,o.v9)(c),t=(0,o.I0)();return(0,r.useEffect)((function(){t((0,u.yF)())}),[t]),(0,F.jsxs)("main",{children:[(0,F.jsx)("h1",{children:"Phonebook"}),(0,F.jsx)(L,{}),(0,F.jsx)("h2",{children:"Contacts"}),(0,F.jsx)(V,{}),e&&!n&&(0,F.jsx)("b",{children:"Request in progress..."}),(0,F.jsx)(P,{})]})}},7247:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var o=r(t(5649)),a=t(3329),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(3519)},3519:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return y},debounce:function(){return z},deprecatedPropType:function(){return w},isMuiElement:function(){return C},ownerDocument:function(){return j},ownerWindow:function(){return R},requirePropFactory:function(){return I},setRef:function(){return N},unstable_ClassNameGenerator:function(){return V},unstable_useEnhancedEffect:function(){return F},unstable_useId:function(){return A},unsupportedProp:function(){return B},useControlled:function(){return P},useEventCallback:function(){return E.Z},useForkRef:function(){return L.Z},useIsFocusVisible:function(){return O.Z}});var r=t(5902),o=t(4036);var a=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),(function(){}))},i=t(7462),c=t(2791),l=t.t(c,2),u=t(3366),s=t(8182),d=t(4419),f=t(1402),m=t(6934),v=t(5878),p=t(1217);function h(e){return(0,p.Z)("MuiSvgIcon",e)}(0,v.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var g=t(3329),b=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],x=(0,m.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"inherit"!==t.color&&n["color".concat((0,o.Z)(t.color))],n["fontSize".concat((0,o.Z)(t.fontSize))]]}})((function(e){var n,t,r,o,a,i,c,l,u,s,d,f,m,v,p,h,g,b=e.theme,x=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=b.transitions)||null==(t=n.create)?void 0:t.call(n,"fill",{duration:null==(r=b.transitions)||null==(o=r.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(a=b.typography)||null==(i=a.pxToRem)?void 0:i.call(a,20))||"1.25rem",medium:(null==(c=b.typography)||null==(l=c.pxToRem)?void 0:l.call(c,24))||"1.5rem",large:(null==(u=b.typography)||null==(s=u.pxToRem)?void 0:s.call(u,35))||"2.1875rem"}[x.fontSize],color:null!=(d=null==(f=(b.vars||b).palette)||null==(m=f[x.color])?void 0:m.main)?d:{action:null==(v=(b.vars||b).palette)||null==(p=v.action)?void 0:p.active,disabled:null==(h=(b.vars||b).palette)||null==(g=h.action)?void 0:g.disabled,inherit:void 0}[x.color]}})),Z=c.forwardRef((function(e,n){var t=(0,f.Z)({props:e,name:"MuiSvgIcon"}),r=t.children,a=t.className,c=t.color,l=void 0===c?"inherit":c,m=t.component,v=void 0===m?"svg":m,p=t.fontSize,Z=void 0===p?"medium":p,S=t.htmlColor,y=t.inheritViewBox,z=void 0!==y&&y,w=t.titleAccess,C=t.viewBox,_=void 0===C?"0 0 24 24":C,j=(0,u.Z)(t,b),R=(0,i.Z)({},t,{color:l,component:v,fontSize:Z,instanceFontSize:e.fontSize,inheritViewBox:z,viewBox:_}),I={};z||(I.viewBox=_);var N=function(e){var n=e.color,t=e.fontSize,r=e.classes,a={root:["root","inherit"!==n&&"color".concat((0,o.Z)(n)),"fontSize".concat((0,o.Z)(t))]};return(0,d.Z)(a,h,r)}(R);return(0,g.jsxs)(x,(0,i.Z)({as:v,className:(0,s.Z)(N.root,a),focusable:"false",color:S,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:n},I,j,{ownerState:R,children:[r,w?(0,g.jsx)("title",{children:w}):null]}))}));Z.muiName="SvgIcon";var S=Z;function y(e,n){function t(t,r){return(0,g.jsx)(S,(0,i.Z)({"data-testid":"".concat(n,"Icon"),ref:r},t,{children:e}))}return t.muiName=S.muiName,c.memo(c.forwardRef(t))}var z=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];var c=function(){e.apply(r,a)};clearTimeout(n),n=setTimeout(c,t)}return r.clear=function(){clearTimeout(n)},r};var w=function(e,n){return function(){return null}};var C=function(e,n){return c.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)};function _(e){return e&&e.ownerDocument||document}var j=_;var R=function(e){return _(e).defaultView||window};var I=function(e,n){return function(){return null}},N=t(2971).Z,F=t(5721).Z,k=t(9439),M=0;var T=l.useId;var A=function(e){if(void 0!==T){var n=T();return null!=e?e:n}return function(e){var n=c.useState(e),t=(0,k.Z)(n,2),r=t[0],o=t[1],a=e||r;return c.useEffect((function(){null==r&&o("mui-".concat(M+=1))}),[r]),a}(e)};var B=function(e,n,t,r,o){return null};var P=function(e){var n=e.controlled,t=e.default,r=(e.name,e.state,c.useRef(void 0!==n).current),o=c.useState(t),a=(0,k.Z)(o,2),i=a[0],l=a[1];return[r?n:i,c.useCallback((function(e){r||l(e)}),[])]},E=t(6868),L=t(4843),O=t(3031),V={configure:function(e){r.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=432.5cdcdf40.chunk.js.map