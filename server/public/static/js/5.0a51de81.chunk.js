(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{523:function(e,t,o){"use strict";var n=o(147);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(76)),i=n(o(4)),r=n(o(0)),u=n(o(8)),l=o(234),s=o(148),c=o(575),f=o(576);function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function m(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){(0,i.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var p=function(e){var t=e.emoji,o=e.skin,n=e.set,a=e.data;return(0,l.getData)(t,o,n,a)},b=function(e){var t=p(e),o=t.sheet_x,n=t.sheet_y,a=100/(e.sheetColumns-1),i=100/(e.sheetRows-1);return"".concat(a*o,"% ").concat(i*n,"%")},g=function(e){var t=e.emoji,o=e.skin,n=e.set,a=e.data;return(0,l.getSanitizedData)(t,o,n,a)},k=function(e){return!isNaN(e-parseFloat(e))},h=function e(t){for(var o in t.data.compressed&&(0,s.uncompress)(t.data),e.defaultProps)void 0==t[o]&&void 0!=e.defaultProps[o]&&(t[o]=e.defaultProps[o]);var n=p(t);if(!n)return t.fallback?t.fallback(null,t):null;var i=n.unified,u=n.custom,c=n.short_names,f=n.imageUrl,d={},h=t.children,j="emoji-mart-emoji",v=i&&(0,l.unifiedToNative)(i),y=[v].concat(c).filter(Boolean).join(", "),O=null;if(!i&&!u)return t.fallback?t.fallback(n,t):null;if(t.tooltip&&(O=c[0]),t.native&&i)j+=" emoji-mart-emoji-native",d={fontSize:t.size},h=v,t.forceSize&&(d.display="inline-block",d.width=t.size,d.height=t.size,d.wordBreak="keep-all");else if(u)j+=" emoji-mart-emoji-custom",d={width:t.size,height:t.size,display:"inline-block"},d=n.spriteUrl?m({},d,{backgroundImage:"url(".concat(n.spriteUrl,")"),backgroundSize:"".concat(100*t.sheetColumns,"% ").concat(100*t.sheetRows,"%"),backgroundPosition:b(t)}):m({},d,{backgroundImage:"url(".concat(f,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"});else{if(!(void 0==n["has_img_".concat(t.set)]||n["has_img_".concat(t.set)]))return t.fallback?t.fallback(n,t):null;d={width:t.size,height:t.size,display:"inline-block",backgroundImage:"url(".concat(t.backgroundImageFn(t.set,t.sheetSize),")"),backgroundSize:"".concat(100*t.sheetColumns,"% ").concat(100*t.sheetRows,"%"),backgroundPosition:b(t)}}var P={name:"span",props:{}};return t.onClick&&t.useButton&&(P.name="button",P.props={type:"button"}),t.html?(d=function(e){var t=document.createElement("div");for(var o in e){var n=e[o];k(n)&&(n+="px"),t.style[o]=n}return t.getAttribute("style")}(d),"<".concat(P.name," style='").concat(d,"' aria-label='").concat(y,"' ").concat(O?"title='".concat(O,"'"):""," class='").concat(j,"'>").concat(h||"","</").concat(P.name,">")):r.default.createElement(P.name,(0,a.default)({onClick:function(e){return function(e,t){t.onClick&&(0,t.onClick)(g(t),e)}(e,t)},onMouseEnter:function(e){return function(e,t){t.onOver&&(0,t.onOver)(g(t),e)}(e,t)},onMouseLeave:function(e){return function(e,t){t.onLeave&&(0,t.onLeave)(g(t),e)}(e,t)},"aria-label":y,title:O,className:j},P.props),r.default.createElement("span",{style:d},h))};h.propTypes=m({},c.EmojiPropTypes,{data:u.default.object.isRequired}),h.defaultProps=f.EmojiDefaultProps;var j=h;t.default=j},575:function(e,t,o){"use strict";var n=o(147);Object.defineProperty(t,"__esModule",{value:!0}),t.PickerPropTypes=t.EmojiPropTypes=void 0;var a=n(o(8)),i={data:a.default.object.isRequired,onOver:a.default.func,onLeave:a.default.func,onClick:a.default.func,fallback:a.default.func,backgroundImageFn:a.default.func,native:a.default.bool,forceSize:a.default.bool,tooltip:a.default.bool,useButton:a.default.bool,skin:a.default.oneOf([1,2,3,4,5,6]),sheetSize:a.default.oneOf([16,20,32,64]),sheetColumns:a.default.number,sheetRows:a.default.number,set:a.default.oneOf(["apple","google","twitter","facebook"]),size:a.default.number.isRequired,emoji:a.default.oneOfType([a.default.string,a.default.object]).isRequired};t.EmojiPropTypes=i;var r={onClick:a.default.func,onSelect:a.default.func,onSkinChange:a.default.func,perLine:a.default.number,emojiSize:a.default.number,i18n:a.default.object,style:a.default.object,title:a.default.string,emoji:a.default.string,color:a.default.string,set:i.set,skin:i.skin,native:a.default.bool,backgroundImageFn:i.backgroundImageFn,sheetSize:i.sheetSize,emojisToShowFilter:a.default.func,showPreview:a.default.bool,showSkinTones:a.default.bool,emojiTooltip:i.tooltip,useButton:i.useButton,theme:a.default.oneOf(["auto","light","dark"]),include:a.default.arrayOf(a.default.string),exclude:a.default.arrayOf(a.default.string),recent:a.default.arrayOf(a.default.string),autoFocus:a.default.bool,enableFrequentEmojiSort:a.default.bool,custom:a.default.arrayOf(a.default.shape({name:a.default.string.isRequired,short_names:a.default.arrayOf(a.default.string).isRequired,emoticons:a.default.arrayOf(a.default.string),keywords:a.default.arrayOf(a.default.string),imageUrl:a.default.string,spriteUrl:a.default.string,sheet_x:a.default.number,sheet_y:a.default.number,size:a.default.number,sheetColumns:a.default.number,sheetRows:a.default.number})),skinEmoji:a.default.string,notFound:a.default.func,notFoundEmoji:a.default.string,icons:a.default.object};t.PickerPropTypes=r},576:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmojiDefaultProps=t.PickerDefaultProps=void 0;var n={skin:1,set:"apple",sheetSize:64,sheetColumns:57,sheetRows:57,native:!1,forceSize:!1,tooltip:!1,useButton:!0,backgroundImageFn:function(e,t){return"https://unpkg.com/emoji-datasource-".concat(e,"@").concat("5.0.1","/img/").concat(e,"/sheets-256/").concat(t,".png")}};t.EmojiDefaultProps=n;var a={onClick:function(){},onSelect:function(){},onSkinChange:function(){},emojiSize:24,perLine:9,i18n:{},style:{},title:"Emoji Mart\u2122",emoji:"department_store",color:"#ae65c5",set:n.set,theme:"light",skin:null,defaultSkin:n.skin,native:n.native,sheetSize:n.sheetSize,backgroundImageFn:n.backgroundImageFn,emojisToShowFilter:null,showPreview:!0,showSkinTones:!0,emojiTooltip:n.tooltip,useButton:n.useButton,autoFocus:!1,enableFrequentEmojiSort:!1,custom:[],skinEmoji:"",notFound:function(){},notFoundEmoji:"sleuth_or_spy",icons:{}};t.PickerDefaultProps=a}}]);