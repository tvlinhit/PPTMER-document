"use strict";(self.webpackChunkpptmer_document=self.webpackChunkpptmer_document||[]).push([[85],{6416:function(e,a,n){n.r(a),n.d(a,{default:function(){return u}});var t=n(7294),l=n(6010),r=n(4814),c=n(3905),i=n(7707),s=n(1575),o=n(2822),m="mdxPageWrapper_eQvw";var u=function(e){var a=e.content,n=a.frontMatter,u=a.metadata,d=n.title,h=n.description,v=n.wrapperClassName,f=n.hide_table_of_contents,p=u.permalink;return t.createElement(r.Z,{title:d,description:h,permalink:p,wrapperClassName:null!=v?v:o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",m)},t.createElement("div",{className:(0,l.Z)("col",!f&&"col--8")},t.createElement(c.Zo,{components:i.Z},t.createElement(a,null))),!f&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(s.Z,{toc:a.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},1575:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(7462),l=n(3366),r=n(7294),c=n(6010),i=n(5002),s="tableOfContents_vrFS",o=["className"];var m=function(e){var a=e.className,n=(0,l.Z)(e,o);return r.createElement("div",{className:(0,c.Z)(s,"thin-scrollbar",a)},r.createElement(i.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7462),l=n(3366),r=n(7294),c=n(2822),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?r.createElement("ul",{className:l?void 0:n},a.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function o(e){var a=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,h=void 0===d?void 0:d,v=e.minHeadingLevel,f=e.maxHeadingLevel,p=(0,l.Z)(e,i),g=(0,c.LU)(),N=null!=v?v:g.tableOfContents.minHeadingLevel,_=null!=f?f:g.tableOfContents.maxHeadingLevel,b=(0,c.DA)({toc:a,minHeadingLevel:N,maxHeadingLevel:_}),k=(0,r.useMemo)((function(){if(u&&h)return{linkClassName:u,linkActiveClassName:h,minHeadingLevel:N,maxHeadingLevel:_}}),[u,h,N,_]);return(0,c.Si)(k),r.createElement(s,(0,t.Z)({toc:b,className:o,linkClassName:u},p))}},6979:function(e,a,n){var t=n(7294),l=n(4184),r=n.n(l),c=n(6775),i=n(2263),s=n(8084);a.Z=function(e){var a=(0,t.useRef)(!1),l=(0,t.useRef)(null),o=(0,t.useState)(!1),m=o[0],u=o[1],d=(0,c.k6)(),h=(0,i.Z)(),v=h.siteConfig,f=void 0===v?{}:v,p=h.isClient,g=void 0!==p&&p,N=f.baseUrl,_=(0,s.usePluginData)("docusaurus-lunr-search"),b=function(){a.current||(Promise.all([fetch(""+N+_.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+N+_.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(878),n.e(245)]).then(n.bind(n,4130)),Promise.all([n.e(532),n.e(343)]).then(n.bind(n,3343))]).then((function(e){var a=e[0],n=e[1],t=e[2].default;0!==a.length&&(!function(e,a,n){new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var t=N+n.url;document.createElement("a").href=t,d.push(t)}})}(a,n,t),u(!0))})),a.current=!0)},k=(0,t.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return g&&b(),t.createElement("div",{className:"navbar__search",key:"search-box"},t.createElement("span",{"aria-label":"expand searchbar",role:"button",className:r()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:k,onKeyDown:k,tabIndex:0}),t.createElement("input",{id:"search_input_react",type:"search",placeholder:m?"Search":"Loading...","aria-label":"Search",className:r()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:b,onMouseOver:b,onFocus:k,onBlur:k,ref:l,disabled:!m}))}}}]);