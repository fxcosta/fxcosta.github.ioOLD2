webpackJsonp([50739212244294],{245:function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=r(2),i=n(s),c=r(8),u=n(c),f=r(29),p=n(f),d=r(31),m=n(d),g=r(14),h=n(g),E=r(33),y=n(E),b=r(34),v=n(b),w=r(26),M=n(w),_=r(25),x=n(_),T=r(71),j=n(T),O=function(e){return e?(0,h.default)(e)?e:e.split(",").map(function(e){return e.trim()}):[]},k={posts:{margin:"0"},post:{margin:"0 0 3rem 0",":last-child":{margin:"0"}},postDate:{color:"#999",fontWeight:"600",fontSize:".77519rem",margin:"0"},postTitle:{margin:"0 0 .5rem 0",color:"#E32B46",fontWeight:"400",fontSize:"1.6rem"},postExcerpt:{color:"#666",lineHeight:"1.5rem",margin:"0 0 .5rem 0"}},P=function(t){function r(){var n,l,s;o(this,r);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return n=l=a(this,t.call.apply(t,[this].concat(c))),l.renderPosts=function(){var t=[],r=(0,m.default)(l,"props.data.allMarkdownRemark.edges",[]);return r.forEach(function(r){var n=((0,m.default)(r,"node.frontmatter.title","missing title"),O((0,m.default)(r,"node.frontmatter.tags")),(0,j.default)((0,m.default)(r,"node.frontmatter.date"),"MMMM D, YYYY"));t.push(e.createElement("article",{css:k.post,key:r.node.fields.slug},e.createElement(p.default,{to:r.node.fields.slug},e.createElement("date",{css:k.postDate},n),e.createElement("h4",{css:k.postTitle},r.node.frontmatter.title),e.createElement("p",{css:k.postExcerpt},r.node.excerpt))))}),t},s=n,a(l,s)}return l(r,t),r.prototype.render=function(){var t=this.renderPosts(),r=e.createElement("span",null,"Tag: ",e.createElement("i",{style:{color:"#777"}},this.props.pathContext.tag));return e.createElement("div",null,e.createElement(y.default,{title:(0,m.default)(this,"props.data.site.siteMetadata.title")}),e.createElement(v.default,{title:r}),e.createElement(M.default,{tag:"main"},e.createElement(x.default,{size:"small"},e.createElement("section",{css:k.posts},t))))},r}(i.default.Component);P.propTypes={route:u.default.object},t.default=P;t.pageQuery="** extracted graphql fragment **"}).call(t,r(10))}});
//# sourceMappingURL=component---src-templates-tags-js-91edaab1fe6feedf5ffa.js.map