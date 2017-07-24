webpackJsonp([3],{"./node_modules/slugify/index.js":function(e,t,o){!function(t,o,n){e.exports=n()}("slugify",this,function(){function e(e,o){return e.split("").reduce(function(e,o){return t[o]&&(o=t[o]),o=o.replace(/[^\w\s$*_+~.()'"!\-:@]/g,""),e+=o},"").replace(/^\s+|\s+$/g,"").replace(/[-\s]+/g,o||"-").replace("#{replacement}$","")}var t={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ő":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ű":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ő":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ű":"u","ý":"y","þ":"th","ÿ":"y","ẞ":"SS","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ά":"a","έ":"e","ί":"i","ό":"o","ύ":"y","ή":"h","ώ":"w","ς":"s","ϊ":"i","ΰ":"y","ϋ":"y","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ά":"A","Έ":"E","Ί":"I","Ό":"O","Ύ":"Y","Ή":"H","Ώ":"W","Ϊ":"I","Ϋ":"Y","ş":"s","Ş":"S","ı":"i","İ":"I","ç":"c","Ç":"C","ü":"u","Ü":"U","ö":"o","Ö":"O","ğ":"g","Ğ":"G","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"yo","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ё":"Yo","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","Є":"Ye","І":"I","Ї":"Yi","Ґ":"G","є":"ye","і":"i","ї":"yi","ґ":"g","č":"c","ď":"d","ě":"e","ň":"n","ř":"r","š":"s","ť":"t","ů":"u","ž":"z","Č":"C","Ď":"D","Ě":"E","Ň":"N","Ř":"R","Š":"S","Ť":"T","Ů":"U","Ž":"Z","ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z","Ą":"A","Ć":"C","Ę":"e","Ł":"L","Ń":"N","Ś":"S","Ź":"Z","Ż":"Z","ā":"a","č":"c","ē":"e","ģ":"g","ī":"i","ķ":"k","ļ":"l","ņ":"n","š":"s","ū":"u","ž":"z","Ā":"A","Č":"C","Ē":"E","Ģ":"G","Ī":"i","Ķ":"k","Ļ":"L","Ņ":"N","Š":"S","Ū":"u","Ž":"Z","€":"euro","₢":"cruzeiro","₣":"french franc","£":"pound","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","¢":"cent","¥":"yen","元":"yuan","円":"yen","﷼":"rial","₠":"ecu","¤":"currency","฿":"baht",$:"dollar","©":"(c)","œ":"oe","Œ":"OE","∑":"sum","®":"(r)","†":"+","“":'"',"”":'"',"‘":"'","’":"'","∂":"d","ƒ":"f","™":"tm","℠":"sm","…":"...","˚":"o","º":"o","ª":"a","•":"*","∆":"delta","∞":"infinity","♥":"love","&":"and","|":"or","<":"less",">":"greater"};return e.extend=function(e){for(var o in e)t[o]=e[o]},e})},"./src/components/Disqus.js":function(e,t,o){(function(n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var o=arguments.length<=2||void 0===arguments[2]?"":arguments[2];Object.keys(t).forEach(function(n){e[o+n]=t[n]})}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=o("./node_modules/react/react.js"),u=r(d),p=o("./node_modules/prop-types/index.js"),m=(r(p),["shortname","identifier","title","url","category_id"]),f=[],g=!1,h=function(e){function t(){var e,o,n,r;a(this,t);for(var i=arguments.length,c=Array(i),d=0;d<i;d++)c[d]=arguments[d];return o=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.addDisqusScript=function(){if(!g){var e=n.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+n.props.shortname+".disqus.com/embed.js",t.appendChild(e),g=!0}},n.loadDisqus=function(){var e={};m.forEach(function(t){n.props[t]&&(e[t]=n.props[t])}),e.url&&e.url.length||(e.url=window.location.href,e.url=e.url.replace(/#/,"")+"#!newthread");var t={};f.forEach(function(e){n.props[e]&&(t[e]=n.props[e])}),"undefined"!=typeof window.DISQUS?window.DISQUS.reset({reload:!0,config:function(){l(this.page,e),l(this.page,t)}}):(l(window,e,"disqus_"),l(window,{config:function(){l(this.page,t)}},"disqus_"),n.addDisqusScript())},r=o,s(n,r)}return i(t,e),c(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){return n.createElement("div",{id:"disqus_thread"})}}]),t}(u.default.Component);t.default=h,e.exports=t.default}).call(t,o("./node_modules/glamor-react/lib/index.js"))},"./src/css/post.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,'.markdown-post{position:relative;font-size:1.1875rem}.markdown-post>:not(pre):not(code):not(.stretch){max-width:920px;width:100%;padding:0 1rem}.markdown-post>.stretch{max-width:900px;margin:1.5rem auto}.markdown-post img{height:auto;width:100%;display:block}.markdown-post>ul>li>p{margin:0}.markdown-post>ul li{padding-left:.2rem;margin:.75rem 0 .75rem 1.2rem}.markdown-post>ul ul{margin-left:0;padding-left:0}.markdown-post hr{position:relative;height:1rem;margin:1.5rem 0;border:none}.markdown-post hr:after{clear:both;display:block;content:"";position:absolute;bottom:0;left:0;right:0;height:1px;background-image:linear-gradient(90deg,transparent 0,rgba(0,0,0,.08) 3%,rgba(0,0,0,.08) 97%,transparent);background-image:-webkit-linear-gradient(90deg,transparent 0,rgba(0,0,0,.08) 3%,rgba(0,0,0,.08) 97%,transparent)}.markdown-post h2{color:#e32b46;font-weight:400;line-height:3rem;font-size:2.46869rem}.markdown-post h3{font-size:2.14rem;font-weight:300;margin:1rem 0}.markdown-post h4{font-weight:400;font-size:1.6rem;margin:.5rem 0}.markdown-post h4 a{color:#e32b46}.markdown-post h4 a:focus,.markdown-post h4 a:hover{color:#333}.markdown-post a .content-title,.markdown-post a:focus .content-title,.markdown-post a:hover .content-title{color:#e32b46;margin-top:0}.markdown-post a:focus .content-title,.markdown-post a:hover .content-title{color:#333}.markdown-post .content-date{color:#999;font-weight:600;font-size:.77519rem}.markdown-post .content-summary{color:#666}.markdown-post a:first-of-type:hover{text-decoration:none}.markdown-post .gatsby-resp-image-image{padding-bottom:1px}.disqus-comments{width:100%;max-width:820px;margin:4rem auto 2rem;padding:0 1rem}@media only screen and (min-width:992px){.markdown-post{font-size:1rem}}',""])},"./src/css/prism.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,'pre{margin:1.5rem 0}code{background-color:#f1f1f1;font-size:smaller;padding:.2rem .3rem;font-weight:200;-webkit-font-smoothing:antialiased}code[class*=language-]{display:block;overflow-x:auto;padding:1rem;line-height:1.5rem;font-size:.9rem;background:#23241f;-webkit-text-size-adjust:none}code[class*=language-],pre[class*=language-]{font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:.4em .8em;margin:.5em 0;overflow:auto;background:"#222"}code[class*=language-]{background:#121212;color:#f1f1f1;width:100%;max-width:900px;margin:2rem auto}:not(pre)>code[class*=language-]{padding:.2em;border-radius:.3em;box-shadow:none;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#aaa}.token.punctuation{color:#e8e8e8}.namespace{opacity:.7}.token.boolean,.token.constant,.token.number,.token.property,.token.symbol,.token.tag{color:#f92672}.token.builtin,.token.char,.token.selector,.token.string{color:#e2d62e}.language-css .token.string,.toke.variable,.token.entity,.token.inserted,.token.operator,.token.url{color:#a6e22e}.token.atrule,.token.attr-value{color:#f92672}.token.keyword{color:#66d9ef}.token.attr-name,.token.class-name{color:#a6e22e}.token.important,.token.regex{color:orange}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.deleted{color:red}',""])},"./src/css/style.css":function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Lato);",""]),t.push([e.id,"html{height:100%;box-sizing:border-box;font-family:Lato,sans-serif;font-weight:300;font-size:16px;line-height:1.4;margin:0;padding:0}@media (min-width:800px){html{line-height:1.5;font-size:18px}}@media (min-width:1200px){html{font-size:22.4px;line-height:1.6}}*,:after,:before{box-sizing:inherit}body{min-height:100%;display:flex;flex-direction:column;margin:0;padding:0}a{text-decoration:none;color:#0089bb}p a:hover{text-decoration:underline}strong{font-weight:400}.tag-link{color:#e32b46}",""])},'./node_modules/babel-loader/lib/index.js?{"plugins":["/var/www/fxcosta-gatsby-v3/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/var/www/fxcosta-gatsby-v3/node_modules/babel-preset-env/lib/index.js","/var/www/fxcosta-gatsby-v3/node_modules/babel-preset-stage-0/lib/index.js","/var/www/fxcosta-gatsby-v3/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/post.js':function(e,t,o){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o("./node_modules/react/react.js"),c=n(l),d=o("./node_modules/react-helmet/lib/Helmet.js"),u=n(d),p=o("./node_modules/gatsby-link/index.js"),m=n(p),f=o("./node_modules/lodash/get.js"),g=n(f),h=o("./node_modules/date-fns/format/index.js"),b=n(h),y=o("./src/components/Disqus.js"),w=n(y),k=o("./src/components/ContentHeader.js"),x=n(k),v=o("./src/components/Wrapper.js"),_=n(v),j=o("./src/components/Container.js"),E=n(j),O=o("./node_modules/slugify/index.js"),z=n(O);o("./src/css/prism.css"),o("./src/css/style.css"),o("./src/css/post.css");var S=function(t){function o(){var t,n,s,i;r(this,o);for(var l=arguments.length,c=Array(l),d=0;d<l;d++)c[d]=arguments[d];return n=s=a(this,(t=o.__proto__||Object.getPrototypeOf(o)).call.apply(t,[this].concat(c))),s.renderTags=function(t){var o=(0,g.default)(t,"frontmatter.tags"),n=o.length,r=function(e){return e===n-1?null:", "};return o.map(function(t,o){var n=(0,z.default)(t);return e.createElement("span",{key:t},e.createElement(m.default,{className:"tag-link",to:"/blog/tags/"+n},t),r(o))})},i=n,a(s,i)}return s(o,t),i(o,[{key:"render",value:function(){var t=this.props.data.markdownRemark,o=(0,g.default)(this.props,"data.site.siteMetadata.title"),n=(0,b.default)((0,g.default)(t,"frontmatter.date"),"MMMM D, YYYY"),r=this.renderTags(t);return e.createElement("div",null,e.createElement(u.default,{title:t.frontmatter.title+" | "+o}),e.createElement(x.default,{title:t.frontmatter.title,date:n,tags:r}),e.createElement(_.default,{tag:"main",className:"main-article__section"},e.createElement(E.default,null,e.createElement("article",{className:"markdown-post",dangerouslySetInnerHTML:{__html:t.html}}),e.createElement("section",{className:"disqus-comments"},e.createElement(w.default,{shortname:"fxcosta-github-io",title:t.frontmatter.title,url:"http://fxcosta.github.io"+this.props.location.pathname})))))}}]),o}(c.default.Component);t.default=S;t.pageQuery="** extracted graphql fragment **"}).call(t,o("./node_modules/glamor-react/lib/index.js"))}});
//# sourceMappingURL=page-component---src-templates-post-js-d6dcfcb574031fdcc127.js.map