webpackJsonp([27],{"./node_modules/json-loader/index.js!./.cache/json/blog-ironsmith-a-yeoman-generator-for-metalsmith.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Felix Costa | Full-stack Developer",author:"Felix Costa"}},markdownRemark:{id:"/var/www/fxcosta-gatsby-v3/src/posts/ironsmith.md absPath of file >>> MarkdownRemark",html:'<p>Looking to give <a href="http://metalsmith.io">metalsmith</a> a try but don’t want to deal with configuration? Try out <a href="https://github.com/eddywashere/generator-ironsmith">Ironsmith</a>, a <a href="http://yeoman.io/">yeoman generator</a> that packages common features for building out a blog with metalsmith, gulp and scss. Also included is a beautiful theme ported from jekyll called <a href="https://github.com/johnotander/pixyll">pixyll</a>. Check out the live demo <a href="http://eddywashere.github.io/ironsmith-demo">here</a>.</p>\n<h3>System Prerequisites</h3>\n<p>Before we go on, you’ll need node.js installed. Check out the following links for installing node for your operating system.</p>\n<ul>\n<li><a href="https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#osx">OSX</a></li>\n<li><a href="https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#windows">Windows</a></li>\n<li><a href="https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#debian-and-ubuntu-based-linux-distributions">Debian/Ubuntu</a></li>\n<li><a href="https://nodejs.org/download/">Other options</a></li>\n</ul>\n<h3>Install the tools</h3>\n<p>From your terminal, enter the following commands to install yeoman, ironsmith and gulp globally.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>npm install -g yo generator-ironsmith gulp</code></pre>\n      </div>\n<h3>Building the project</h3>\n<p>With that out of the way, let’s create an empty directory to work in.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>mkdir myawesomesite</code></pre>\n      </div>\n<p>Next let’s scaffold out the content for the project with ironsmith.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>yo ironsmith</code></pre>\n      </div>\n<p>After running that command the generator will ask you a series of questions. Type in your answers to the right of the questions and hit enter to submit them.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>? enter a project name: (Ironsmith) myawesomesite\n? enter a default author name: (Tyler Durden) Robert Paulson</code></pre>\n      </div>\n<p>Next you’ll see a <strong>ton</strong> of console output and when it’s over you’ll be ready to build out your site.</p>\n<h3>Preview with Gulp</h3>\n<p>If everything went ok, you’ll be able to preview your site at <a href="http://localhost:8000">http://localhost:8000</a> by running the following command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>gulp preview</code></pre>\n      </div>\n<p>Your site should look very similar to this demo: <a href="https://eddywashere.github.io/ironsmith-demo/">eddywashere.github.io/ironsmith-demo/</a>.</p>\n<h3>Understanding the project structure</h3>\n<p>The metalsmith content and templates are located in <code>src</code> and <code>templates</code>. Here’s a breakdown of what those directories contain.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>/src\n/src/* # pages\n/src/posts/* # blog posts\n/templates\n/templates/* # page templates to be reference from posts & pages\n/templates/partials/* # partial html files</code></pre>\n      </div>\n<p>The frontend assets are located in <code>js</code>, <code>scss</code> and <code>images</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>/images\n/js\n/scss</code></pre>\n      </div>\n<p>Included in the project is a configuration file, <code>config.js</code>. Use this to include information details about your site while running in development mode or production mode.</p>\n<h3>Create additional posts &#x26; pages</h3>\n<p>To create a new page, type the following command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>yo ironsmith:page</code></pre>\n      </div>\n<p>To create a new post, type the following command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>yo ironsmith:post</code></pre>\n      </div>\n<h3>Deploying to github pages</h3>\n<p>If you link this project to a github repo, you’ll be able to deploy to github pages with the following task:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>gulp build:prod deploy</code></pre>\n      </div>\n<h3>Staying up to date</h3>\n<p>To install updates to ironsmith, run the following command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>npm update generator-ironsmith -g</code></pre>\n      </div>\n<p>Then run <code>yo ironsmith</code> to regenerate any files like <code>ironsmith.js</code> or <code>Gulpfile.js</code>.</p>\n<h3>That’s it!</h3>\n<p>Hopefully I covered everything you need to get started with metalsmith. In the future, I’d like Ironsmith to support options for more themes, better upgrades and last, but not least, refactor the build script. If I missed anything or if you find a bug, please feel free to submit a pr or create an issue at <a href="https://github.com/eddywashere/generator-ironsmith">github.com/eddywashere/generator-ironsmith</a>. Thanks!</p>',frontmatter:{date:"2015-06-22",title:"Ironsmith, a yeoman generator for metalsmith",tags:["metalsmith","gulp","static site","yeoman","generator"]}}},pathContext:{slug:"/blog/ironsmith-a-yeoman-generator-for-metalsmith/",collection:"posts"}}}});
//# sourceMappingURL=path---blog-ironsmith-a-yeoman-generator-for-metalsmith-543a4879612a5c1e8825.js.map