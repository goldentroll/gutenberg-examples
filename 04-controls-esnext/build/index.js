!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){"use strict";n.r(t);var r=n(0),o=wp.i18n.__,a=wp.blocks.registerBlockType,l=wp.editor,c=l.RichText,u=l.AlignmentToolbar,i=l.BlockControls;a("gutenberg-examples/example-04-controls-esnext",{title:o("Example: Controls (ESNext)","gutenberg-examples"),icon:"universal-access-alt",category:"layout",attributes:{content:{type:"array",source:"children",selector:"p"},alignment:{type:"string",default:"none"}},edit:function(e){var t=e.attributes,n=t.content,o=t.alignment,a=e.className;return Object(r.createElement)("div",null,Object(r.createElement)(i,null,Object(r.createElement)(u,{value:o,onChange:function(t){e.setAttributes({alignment:void 0===t?"none":t})}})),Object(r.createElement)(c,{className:a,style:{textAlign:o},tagName:"p",onChange:function(t){e.setAttributes({content:t})},value:n}))},save:function(e){return Object(r.createElement)(c.Content,{className:"gutenberg-examples-align-".concat(e.attributes.alignment),tagName:"p",value:e.attributes.content})}})}]);