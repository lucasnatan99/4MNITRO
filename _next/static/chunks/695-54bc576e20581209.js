(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{3571:function(e){/*!@license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE*/e.exports=function(){"use strict";let{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:o,getOwnPropertyDescriptor:r}=Object,{freeze:i,seal:a,create:l}=Object,{apply:c,construct:s}="undefined"!=typeof Reflect&&Reflect;i||(i=function(e){return e}),a||(a=function(e){return e}),c||(c=function(e,t,n){return e.apply(t,n)}),s||(s=function(e,t){return new e(...t)});let u=b(Array.prototype.forEach),m=b(Array.prototype.pop),f=b(Array.prototype.push),p=b(String.prototype.toLowerCase),d=b(String.prototype.toString),h=b(String.prototype.match),g=b(String.prototype.replace),y=b(String.prototype.indexOf),T=b(String.prototype.trim),E=b(RegExp.prototype.test),_=(j=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(j,t)});function b(e){return function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return c(e,t,o)}}function A(e,o){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p;t&&t(e,null);let i=o.length;for(;i--;){let t=o[i];if("string"==typeof t){let e=r(t);e!==t&&(n(o)||(o[i]=e),t=e)}e[t]=!0}return e}function N(t){let n=l(null);for(let[o,i]of e(t))void 0!==r(t,o)&&(n[o]=i);return n}function S(e,t){for(;null!==e;){let n=r(e,t);if(n){if(n.get)return b(n.get);if("function"==typeof n.value)return b(n.value)}e=o(e)}return function(e){return console.warn("fallback value for",e),null}}let w=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),k=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),v=i(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),L=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),C=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),x=i(["#text"]),D=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),O=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),M=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),I=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),U=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),P=a(/<%[\w\W]*|[\w\W]*%>/gm),H=a(/\${[\w\W]*}/gm),F=a(/^data-[\-\w.\u00B7-\uFFFF]/),z=a(/^aria-[\-\w]+$/),W=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),B=a(/^(?:\w+script|data):/i),G=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Y=a(/^html$/i);var j,q=Object.freeze({__proto__:null,MUSTACHE_EXPR:U,ERB_EXPR:P,TMPLIT_EXPR:H,DATA_ATTR:F,ARIA_ATTR:z,IS_ALLOWED_URI:W,IS_SCRIPT_OR_DATA:B,ATTR_WHITESPACE:G,DOCTYPE_NAME:Y});let X=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null,o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));let r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function t(){let n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window,r=e=>t(e);if(r.version="3.0.6",r.removed=[],!o||!o.document||9!==o.document.nodeType)return r.isSupported=!1,r;let{document:a}=o,c=a,s=c.currentScript,{DocumentFragment,HTMLTemplateElement,Node,Element,NodeFilter,NamedNodeMap=o.NamedNodeMap||o.MozNamedAttrMap,HTMLFormElement,DOMParser,trustedTypes:b}=o,U=Element.prototype,P=S(U,"cloneNode"),H=S(U,"nextSibling"),F=S(U,"childNodes"),z=S(U,"parentNode");if("function"==typeof HTMLTemplateElement){let e=a.createElement("template");e.content&&e.content.ownerDocument&&(a=e.content.ownerDocument)}let B="",{implementation:G,createNodeIterator:j,createDocumentFragment:K,getElementsByTagName:V}=a,{importNode:$}=c,Z={};r.isSupported="function"==typeof e&&"function"==typeof z&&G&&void 0!==G.createHTMLDocument;let{MUSTACHE_EXPR:J,ERB_EXPR:Q,TMPLIT_EXPR:ee,DATA_ATTR:et,ARIA_ATTR:en,IS_SCRIPT_OR_DATA:eo,ATTR_WHITESPACE:er}=q,{IS_ALLOWED_URI:ei}=q,ea=null,el=A({},[...w,...R,...k,...L,...x]),ec=null,es=A({},[...D,...O,...M,...I]),eu=Object.seal(l(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),em=null,ef=null,ep=!0,ed=!0,eh=!1,eg=!0,ey=!1,eT=!1,eE=!1,e_=!1,eb=!1,eA=!1,eN=!1,eS=!0,ew=!1,eR=!0,ek=!1,ev={},eL=null,eC=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ex=null,eD=A({},["audio","video","img","source","image","track"]),eO=null,eM=A({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),eI="http://www.w3.org/1998/Math/MathML",eU="http://www.w3.org/2000/svg",eP="http://www.w3.org/1999/xhtml",eH=eP,eF=!1,ez=null,eW=A({},[eI,eU,eP],d),eB=null,eG=["application/xhtml+xml","text/html"],eY=null,ej=null,eq=a.createElement("form"),eX=function(e){return e instanceof RegExp||e instanceof Function},eK=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!ej||ej!==e){if(e&&"object"==typeof e||(e={}),e=N(e),eY="application/xhtml+xml"===(eB=eB=-1===eG.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE)?d:p,ea="ALLOWED_TAGS"in e?A({},e.ALLOWED_TAGS,eY):el,ec="ALLOWED_ATTR"in e?A({},e.ALLOWED_ATTR,eY):es,ez="ALLOWED_NAMESPACES"in e?A({},e.ALLOWED_NAMESPACES,d):eW,eO="ADD_URI_SAFE_ATTR"in e?A(N(eM),e.ADD_URI_SAFE_ATTR,eY):eM,ex="ADD_DATA_URI_TAGS"in e?A(N(eD),e.ADD_DATA_URI_TAGS,eY):eD,eL="FORBID_CONTENTS"in e?A({},e.FORBID_CONTENTS,eY):eC,em="FORBID_TAGS"in e?A({},e.FORBID_TAGS,eY):{},ef="FORBID_ATTR"in e?A({},e.FORBID_ATTR,eY):{},ev="USE_PROFILES"in e&&e.USE_PROFILES,ep=!1!==e.ALLOW_ARIA_ATTR,ed=!1!==e.ALLOW_DATA_ATTR,eh=e.ALLOW_UNKNOWN_PROTOCOLS||!1,eg=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,ey=e.SAFE_FOR_TEMPLATES||!1,eT=e.WHOLE_DOCUMENT||!1,eb=e.RETURN_DOM||!1,eA=e.RETURN_DOM_FRAGMENT||!1,eN=e.RETURN_TRUSTED_TYPE||!1,e_=e.FORCE_BODY||!1,eS=!1!==e.SANITIZE_DOM,ew=e.SANITIZE_NAMED_PROPS||!1,eR=!1!==e.KEEP_CONTENT,ek=e.IN_PLACE||!1,ei=e.ALLOWED_URI_REGEXP||W,eH=e.NAMESPACE||eP,eu=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&eX(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(eu.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&eX(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(eu.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(eu.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ey&&(ed=!1),eA&&(eb=!0),ev&&(ea=A({},[...x]),ec=[],!0===ev.html&&(A(ea,w),A(ec,D)),!0===ev.svg&&(A(ea,R),A(ec,O),A(ec,I)),!0===ev.svgFilters&&(A(ea,k),A(ec,O),A(ec,I)),!0===ev.mathMl&&(A(ea,L),A(ec,M),A(ec,I))),e.ADD_TAGS&&(ea===el&&(ea=N(ea)),A(ea,e.ADD_TAGS,eY)),e.ADD_ATTR&&(ec===es&&(ec=N(ec)),A(ec,e.ADD_ATTR,eY)),e.ADD_URI_SAFE_ATTR&&A(eO,e.ADD_URI_SAFE_ATTR,eY),e.FORBID_CONTENTS&&(eL===eC&&(eL=N(eL)),A(eL,e.FORBID_CONTENTS,eY)),eR&&(ea["#text"]=!0),eT&&A(ea,["html","head","body"]),ea.table&&(A(ea,["tbody"]),delete em.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw _('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw _('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');B=(n=e.TRUSTED_TYPES_POLICY).createHTML("")}else void 0===n&&(n=X(b,s)),null!==n&&"string"==typeof B&&(B=n.createHTML(""));i&&i(e),ej=e}},eV=A({},["mi","mo","mn","ms","mtext"]),e$=A({},["foreignobject","desc","title","annotation-xml"]),eZ=A({},["title","style","font","a","script"]),eJ=A({},R);A(eJ,k),A(eJ,v);let eQ=A({},L);A(eQ,C);let e0=function(e){let t=z(e);t&&t.tagName||(t={namespaceURI:eH,tagName:"template"});let n=p(e.tagName),o=p(t.tagName);return!!ez[e.namespaceURI]&&(e.namespaceURI===eU?t.namespaceURI===eP?"svg"===n:t.namespaceURI===eI?"svg"===n&&("annotation-xml"===o||eV[o]):!!eJ[n]:e.namespaceURI===eI?t.namespaceURI===eP?"math"===n:t.namespaceURI===eU?"math"===n&&e$[o]:!!eQ[n]:e.namespaceURI===eP?(t.namespaceURI!==eU||!!e$[o])&&(t.namespaceURI!==eI||!!eV[o])&&!eQ[n]&&(eZ[n]||!eJ[n]):"application/xhtml+xml"===eB&&!!ez[e.namespaceURI])},e1=function(e){f(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},e2=function(e,t){try{f(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){f(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ec[e]){if(eb||eA)try{e1(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}}},e3=function(e){let t=null,o=null;if(e_)e="<remove></remove>"+e;else{let t=h(e,/^[\r\n\t ]+/);o=t&&t[0]}"application/xhtml+xml"===eB&&eH===eP&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");let r=n?n.createHTML(e):e;if(eH===eP)try{t=new DOMParser().parseFromString(r,eB)}catch(e){}if(!t||!t.documentElement){t=G.createDocument(eH,"template",null);try{t.documentElement.innerHTML=eF?B:r}catch(e){}}let i=t.body||t.documentElement;return(e&&o&&i.insertBefore(a.createTextNode(o),i.childNodes[0]||null),eH===eP)?V.call(t,eT?"html":"body")[0]:eT?t.documentElement:i},e9=function(e){return j.call(e.ownerDocument||e,e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT,null)},e4=function(e){return"function"==typeof Node&&e instanceof Node},e6=function(e,t,n){Z[e]&&u(Z[e],e=>{e.call(r,t,n,ej)})},e5=function(e){let t=null;if(e6("beforeSanitizeElements",e,null),e instanceof HTMLFormElement&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof NamedNodeMap)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes))return e1(e),!0;let n=eY(e.nodeName);if(e6("uponSanitizeElement",e,{tagName:n,allowedTags:ea}),e.hasChildNodes()&&!e4(e.firstElementChild)&&E(/<[/\w]/g,e.innerHTML)&&E(/<[/\w]/g,e.textContent))return e1(e),!0;if(!ea[n]||em[n]){if(!em[n]&&e7(n)&&(eu.tagNameCheck instanceof RegExp&&E(eu.tagNameCheck,n)||eu.tagNameCheck instanceof Function&&eu.tagNameCheck(n)))return!1;if(eR&&!eL[n]){let t=z(e)||e.parentNode,n=F(e)||e.childNodes;if(n&&t){let o=n.length;for(let r=o-1;r>=0;--r)t.insertBefore(P(n[r],!0),H(e))}}return e1(e),!0}return e instanceof Element&&!e0(e)||("noscript"===n||"noembed"===n||"noframes"===n)&&E(/<\/no(script|embed|frames)/i,e.innerHTML)?(e1(e),!0):(ey&&3===e.nodeType&&(t=e.textContent,u([J,Q,ee],e=>{t=g(t,e," ")}),e.textContent!==t&&(f(r.removed,{element:e.cloneNode()}),e.textContent=t)),e6("afterSanitizeElements",e,null),!1)},e8=function(e,t,n){if(eS&&("id"===t||"name"===t)&&(n in a||n in eq))return!1;if(ed&&!ef[t]&&E(et,t));else if(ep&&E(en,t));else if(!ec[t]||ef[t]){if(!(e7(e)&&(eu.tagNameCheck instanceof RegExp&&E(eu.tagNameCheck,e)||eu.tagNameCheck instanceof Function&&eu.tagNameCheck(e))&&(eu.attributeNameCheck instanceof RegExp&&E(eu.attributeNameCheck,t)||eu.attributeNameCheck instanceof Function&&eu.attributeNameCheck(t))||"is"===t&&eu.allowCustomizedBuiltInElements&&(eu.tagNameCheck instanceof RegExp&&E(eu.tagNameCheck,n)||eu.tagNameCheck instanceof Function&&eu.tagNameCheck(n))))return!1}else if(eO[t]);else if(E(ei,g(n,er,"")));else if(("src"===t||"xlink:href"===t||"href"===t)&&"script"!==e&&0===y(n,"data:")&&ex[e]);else if(eh&&!E(eo,g(n,er,"")));else if(n)return!1;return!0},e7=function(e){return e.indexOf("-")>0},te=function(e){e6("beforeSanitizeAttributes",e,null);let{attributes:t}=e;if(!t)return;let o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ec},i=t.length;for(;i--;){let a=t[i],{name:l,namespaceURI:c,value:s}=a,f=eY(l),p="value"===l?s:T(s);if(o.attrName=f,o.attrValue=p,o.keepAttr=!0,o.forceKeepAttr=void 0,e6("uponSanitizeAttribute",e,o),p=o.attrValue,o.forceKeepAttr||(e2(l,e),!o.keepAttr))continue;if(!eg&&E(/\/>/i,p)){e2(l,e);continue}ey&&u([J,Q,ee],e=>{p=g(p,e," ")});let d=eY(e.nodeName);if(e8(d,f,p)){if(ew&&("id"===f||"name"===f)&&(e2(l,e),p="user-content-"+p),n&&"object"==typeof b&&"function"==typeof b.getAttributeType){if(c);else switch(b.getAttributeType(d,f)){case"TrustedHTML":p=n.createHTML(p);break;case"TrustedScriptURL":p=n.createScriptURL(p)}}try{c?e.setAttributeNS(c,l,p):e.setAttribute(l,p),m(r.removed)}catch(e){}}}e6("afterSanitizeAttributes",e,null)},tt=function e(t){let n=null,o=e9(t);for(e6("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)e6("uponSanitizeShadowNode",n,null),e5(n)||(n.content instanceof DocumentFragment&&e(n.content),te(n));e6("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null,i=null,a=null,l=null;if((eF=!e)&&(e="<!-->"),"string"!=typeof e&&!e4(e)){if("function"==typeof e.toString){if("string"!=typeof(e=e.toString()))throw _("dirty is not a string, aborting")}else throw _("toString is not a function")}if(!r.isSupported)return e;if(eE||eK(t),r.removed=[],"string"==typeof e&&(ek=!1),ek){if(e.nodeName){let t=eY(e.nodeName);if(!ea[t]||em[t])throw _("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof Node)1===(i=(o=e3("<!---->")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===i.nodeName?o=i:"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!eb&&!ey&&!eT&&-1===e.indexOf("<"))return n&&eN?n.createHTML(e):e;if(!(o=e3(e)))return eb?null:eN?B:""}o&&e_&&e1(o.firstChild);let s=e9(ek?e:o);for(;a=s.nextNode();)e5(a)||(a.content instanceof DocumentFragment&&tt(a.content),te(a));if(ek)return e;if(eb){if(eA)for(l=K.call(o.ownerDocument);o.firstChild;)l.appendChild(o.firstChild);else l=o;return(ec.shadowroot||ec.shadowrootmode)&&(l=$.call(c,l,!0)),l}let m=eT?o.outerHTML:o.innerHTML;return eT&&ea["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&E(Y,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),ey&&u([J,Q,ee],e=>{m=g(m,e," ")}),n&&eN?n.createHTML(m):m},r.setConfig=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};eK(e),eE=!0},r.clearConfig=function(){ej=null,eE=!1},r.isValidAttribute=function(e,t,n){ej||eK({});let o=eY(e),r=eY(t);return e8(o,r,n)},r.addHook=function(e,t){"function"==typeof t&&(Z[e]=Z[e]||[],f(Z[e],t))},r.removeHook=function(e){if(Z[e])return m(Z[e])},r.removeHooks=function(e){Z[e]&&(Z[e]=[])},r.removeAllHooks=function(){Z={}},r}()}()},6304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let o=n(1024),r=o._(n(2265)),i=r.default.createContext(null)},4033:function(e,t,n){e.exports=n(94)}}]);