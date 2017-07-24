webpackJsonp([4],{"./src/css/Page.css":function(e,t,r){t=e.exports=r("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,".description__section{text-align:left}.description__resume{font-size:1.1875rem}@media only screen and (min-width:992px){.description__resume{font-size:1rem}}",""])},'./node_modules/babel-loader/lib/index.js?{"plugins":["/var/www/fxcosta-gatsby-v3/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/var/www/fxcosta-gatsby-v3/node_modules/babel-preset-env/lib/index.js","/var/www/fxcosta-gatsby-v3/node_modules/babel-preset-stage-0/lib/index.js","/var/www/fxcosta-gatsby-v3/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,t,r){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=r("./node_modules/react/react.js"),c=o(l),d=r("./node_modules/prop-types/index.js"),u=o(d),m=r("./node_modules/gatsby-link/index.js"),p=o(m),f=r("./node_modules/lodash/get.js"),b=o(f),g=r("./node_modules/lodash/isArray.js"),h=o(g),y=r("./node_modules/react-helmet/lib/Helmet.js"),_=o(y),x=r("./node_modules/date-fns/format/index.js"),w=o(x),v=r("./src/components/Wrapper.js"),E=o(v),j=r("./src/components/Container.js"),k=o(j);r("./src/css/Page.css");var z=function(e){return e?(0,h.default)(e)?e:e.split(",").map(function(e){return e.trim()}):[]},O={selfie:{borderRadius:"100%",display:"inline-block",width:"6rem","@media(min-width: 800px)":{width:"7rem"}},title:{fontSize:"2.14rem",margin:"0",fontWeight:"300",color:"#555"},subtitle:{fontSize:"1.1rem",margin:"-0.35rem 0 0 0"},leading:{fontSize:"1.1rem"},button:{color:"#fff",border:"1px solid #E32B46",padding:".5rem 1rem",display:"inline-block",borderRadius:"2px",fontSize:"1rem",backgroundColor:"#E32B46",marginTop:"1rem",textDecoration:"none",":hover":{backgroundColor:"transparent",color:"#E32B46",textDecoration:"none"}},buttonOutline:{border:"1px solid #E32B46",padding:".5rem 1rem",display:"inline-block",borderRadius:"2px",fontSize:"1rem",textDecoration:"none",color:"#E32B46",backgroundColor:"transparent",":hover":{textDecoration:"none",backgroundColor:"#E32B46",color:"#fff"}},posts:{margin:"2rem 0 0 0"},post:{margin:"0 0 3rem 0"},postDate:{color:"#999",fontWeight:"600",fontSize:".77519rem",margin:"0"},postTitle:{margin:"0 0 .5rem 0",color:"#E32B46",fontWeight:"400",fontSize:"1.6rem"},postExcerpt:{color:"#666",lineHeight:"1.5rem",margin:"0 0 .5rem 0"}},P=function(t){function r(){var t,o,s,i;n(this,r);for(var l=arguments.length,c=Array(l),d=0;d<l;d++)c[d]=arguments[d];return o=s=a(this,(t=r.__proto__||Object.getPrototypeOf(r)).call.apply(t,[this].concat(c))),s.renderPosts=function(){var t=[],r=(0,b.default)(s,"props.data.allMarkdownRemark.edges",[]);return r.forEach(function(r){var o=((0,b.default)(r,"node.frontmatter.title","missing title"),z((0,b.default)(r,"node.frontmatter.tags")),(0,w.default)((0,b.default)(r,"node.frontmatter.date"),"MMMM D, YYYY"));t.push(e.createElement("article",{css:O.post,key:r.node.fields.slug},e.createElement(p.default,{to:r.node.fields.slug},e.createElement("date",{css:O.postDate},o),e.createElement("h4",{css:O.postTitle},r.node.frontmatter.title),e.createElement("p",{css:O.postExcerpt},r.node.excerpt))))}),t},i=o,a(s,i)}return s(r,t),i(r,[{key:"render",value:function(){this.renderPosts();return e.createElement("div",{className:"description"},e.createElement(_.default,{title:(0,b.default)(this,"props.data.site.siteMetadata.title")}),e.createElement(E.default,{tag:"header"},e.createElement(k.default,{size:"large"},e.createElement("h1",{css:O.title},"Hi, I'm Felix Costa"),e.createElement("section",{className:"description__section"},e.createElement("p",{className:"description__resume"},"I'm ",e.createElement("strong",null,"Full-stack Developer"),", I live in Lauro de Freitas - BA, currently working at Sotero Tech and also as Freelancer."),e.createElement("p",{className:"description__resume"},"I'm passionate about code, the web, good practices and challenges. I follow with pleasure the following philosophy: Study -> learn -> share."),e.createElement("p",{className:"description__resume"},'Open source enthusiast, GDG Lauro de Freitas organizer, participant / listener from various communities and PHP "evangelist".'),e.createElement("p",{className:"description__resume"},"The curiosity, the desire to always learn more and be updated and the challenges of projects that I already participated, motivate me and drives me to always seek my best. In short, I love my work.")))))}}]),r}(c.default.Component);P.propTypes={route:u.default.object},t.default=P;t.pageQuery="** extracted graphql fragment **"}).call(t,r("./node_modules/glamor-react/lib/index.js"))}});
//# sourceMappingURL=page-component---src-pages-index-js-aa03730ed5c776697113.js.map