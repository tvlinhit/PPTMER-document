"use strict";(self.webpackChunkpptmer_document=self.webpackChunkpptmer_document||[]).push([[89],{8665:function(e,a,t){t.d(a,{Z:function(){return E}});var r=t(3366),n=t(7294),l=t(6010),i=t(4814),s=t(9960),c="sidebar_q+wC",o="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",d="sidebarItem_cjdF",u="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",p=t(5999);function h(e){var a=e.sidebar;return 0===a.items.length?null:n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},a.title),n.createElement("ul",{className:m},a.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var v=["sidebar","toc","children"];var E=function(e){var a=e.sidebar,t=e.toc,s=e.children,c=(0,r.Z)(e,v),o=a&&a.items.length>0;return n.createElement(i.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:a})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),t&&n.createElement("div",{className:"col col--2"},t))))}},2754:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var r=t(7294),n=t(2263),l=t(8665),i=t(8561),s=t(9960),c=t(5999);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(s.Z,{className:"pagination-nav__link",to:t},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(s.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},r.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=t(2822);var d=function(e){var a=e.metadata,t=e.items,s=e.sidebar,c=(0,n.Z)().siteConfig.title,d=a.blogDescription,u=a.blogTitle,g="/"===a.permalink?c:u;return r.createElement(l.Z,{title:g,description:d,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},t.map((function(e){var a=e.content;return r.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,assets:a.assets,metadata:a.metadata,truncated:a.metadata.truncated},r.createElement(a,null))})),r.createElement(o,{metadata:a}))}},8561:function(e,a,t){t.d(a,{Z:function(){return _}});var r=t(7294),n=t(6010),l=t(3905),i=t(5999),s=t(9960),c=t(4996),o=t(2822),m=t(7707),d=t(6753),u="blogPostTitle_d4p0",g="blogPostData_-Im+",p="blogPostDetailsFull_xD8n",h=t(62),v="image_9q7L";var E=function(e){var a=e.author,t=a.name,n=a.title,l=a.url,i=a.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:v,src:i,alt:t})),t&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},t))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_8c0z";function f(e){var a=e.authors,t=e.assets;return 0===a.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},a.map((function(e,a){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",b),key:a},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(l=t.authorsImageUrls[a])?l:e.imageURL})}))})))}var _=function(e){var a,t,v,E,b=(v=(0,o.c2)().selectMessage,function(e){var a=Math.ceil(e);return v(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),_=(0,c.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,x=void 0!==w&&w,B=P.date,S=P.formattedDate,C=P.permalink,I=P.tags,L=P.readingTime,y=P.title,M=P.editUrl,R=P.authors,U=null!=(a=k.image)?a:Z.image,D=!x&&T,F=I.length>0;return r.createElement("article",{className:x?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=x?"h1":"h2",r.createElement("header",null,r.createElement(E,{className:u,itemProp:"headline"},x?y:r.createElement(s.Z,{itemProp:"url",to:C},y)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:B,itemProp:"datePublished"},S),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",b(L))),r.createElement(f,{authors:R,assets:k}))),U&&r.createElement("meta",{itemProp:"image",content:_(U,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:m.Z},N)),(F||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[p]=x,t))},F&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":D})},r.createElement(h.Z,{tags:I})),x&&M&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:M})),D&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":F})},r.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+y},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,a,t){t.d(a,{Z:function(){return u}});var r=t(7294),n=t(5999),l=t(7462),i=t(3366),s=t(6010),c="iconEdit_mS5F",o=["className"],m=function(e){var a=e.className,t=(0,i.Z)(e,o);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,a),"aria-hidden":"true"},t),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=t(2822);function u(e){var a=e.editUrl;return r.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},r.createElement(m,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,a,t){t.d(a,{Z:function(){return o}});var r=t(7294),n=t(6010),l=t(9960),i="tag_WK-t",s="tagRegular_LXbV",c="tagWithCount_S5Zl";var o=function(e){var a,t=e.permalink,o=e.name,m=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(i,(a={},a[s]=!m,a[c]=m,a))},o,m&&r.createElement("span",null,m))}},62:function(e,a,t){t.d(a,{Z:function(){return o}});var r=t(7294),n=t(6010),l=t(5999),i=t(7774),s="tags_NBRY",c="tag_F03v";function o(e){var a=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},a.map((function(e){var a=e.label,t=e.permalink;return r.createElement("li",{key:t,className:c},r.createElement(i.Z,{name:a,permalink:t}))}))))}},6979:function(e,a,t){var r=t(7294),n=t(4184),l=t.n(n),i=t(6775),s=t(2263),c=t(8084);a.Z=function(e){var a=(0,r.useRef)(!1),n=(0,r.useRef)(null),o=(0,r.useState)(!1),m=o[0],d=o[1],u=(0,i.k6)(),g=(0,s.Z)(),p=g.siteConfig,h=void 0===p?{}:p,v=g.isClient,E=void 0!==v&&v,b=h.baseUrl,f=(0,c.usePluginData)("docusaurus-lunr-search"),_=function(){a.current||(Promise.all([fetch(""+b+f.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+b+f.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(878),t.e(245)]).then(t.bind(t,4130)),Promise.all([t.e(532),t.e(343)]).then(t.bind(t,3343))]).then((function(e){var a=e[0],t=e[1],r=e[2].default;0!==a.length&&(!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var r=b+t.url;document.createElement("a").href=r,u.push(r)}})}(a,t,r),d(!0))})),a.current=!0)},N=(0,r.useCallback)((function(a){n.current.contains(a.target)||n.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return E&&_(),r.createElement("div",{className:"navbar__search",key:"search-box"},r.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:N,onKeyDown:N,tabIndex:0}),r.createElement("input",{id:"search_input_react",type:"search",placeholder:m?"Search":"Loading...","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:_,onMouseOver:_,onFocus:N,onBlur:N,ref:n,disabled:!m}))}}}]);