(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{5423:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(7801)}])},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},a=t(6273),c=t(387),u=t(7190);var l={};function f(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),s=i.default.useMemo((function(){var n=r(a.resolveHref(o,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?a.resolveHref(o,e.as):i||t}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,m=e.shallow,x=e.scroll,y=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,g=r(u.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],_=i.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);i.default.useEffect((function(){var e=w&&t&&a.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&f(o,d,p,{locale:n})}),[p,d,w,y,t,o]);var E={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,c,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:u,scroll:c}))}(e,o,d,p,h,m,x,y)},onMouseEnter:function(e){a.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var P="undefined"!==typeof y?y:o&&o.locale,k=o&&o.isLocaleDomain&&a.getDomainLocale(p,P,o&&o.locales,o&&o.domainLocales);E.href=k||a.addBasePath(a.addLocale(p,P,o&&o.defaultLocale))}return i.default.cloneElement(n,E)};n.default=s},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,u=o.useRef(),l=r(o.useState(!1),2),f=l[0],s=l[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return s(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=t(7294),i=t(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},7500:function(e,n,t){"use strict";var r=t(1664);function o(){var e,n,t=(e=["\n  /* background: blue; */\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return o=function(){return t},t}var i=(0,t(7379).ZP)(r.default)(o());n.Z=i},7801:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return m},default:function(){return x}});var r=t(5893),o=t(9008),i=t(7500),a=t(7379);function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function u(){var e=c(["\n  height: 100vh;\n  width: 100vw;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return u=function(){return e},e}function l(){var e=c(["\n  margin: 8% auto;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n\n  h1 {\n    margin-bottom: 32px;\n  }\n\n  @media (min-width: 650px) {\n    & {\n      max-width: calc(800px - (30px * 2));\n    }\n  }\n"]);return l=function(){return e},e}function f(){var e=c(["\n  margin-bottom: 32px;\n  list-style: none;\n\n  h2 {\n    margin-bottom: 4px;\n  }\n\n  p {\n    margin-bottom: 4px;\n  }\n"]);return f=function(){return e},e}function s(){var e=c(["\n  color: var(--color-fg-muted);\n  display: flex;\n  align-items: center;\n\n  time,\n  small {\n    font-size: 0.8em;\n  }\n\n  time {\n    margin-right: 4px;\n  }\n"]);return s=function(){return e},e}var d=a.ZP.div(u()),p=a.ZP.main(l()),v=a.ZP.li(f()),h=a.ZP.div(s()),m=!0,x=function(e){var n=e.allPosts;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Yudi Yamane"}),(0,r.jsx)("meta",{name:"description",content:"Blog do Yudi"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(d,{children:(0,r.jsxs)(p,{children:[(0,r.jsx)("h1",{children:"Posts"}),(0,r.jsx)("br",{}),(0,r.jsx)("ul",{children:n.map((function(e){return(0,r.jsxs)(v,{children:[(0,r.jsx)("h2",{style:{fontWeight:"normal"},children:(0,r.jsx)(i.Z,{href:"/blog/posts/".concat(e.id),children:(0,r.jsx)("a",{children:e.title})})}),(0,r.jsxs)("p",{children:[" ",e.excerpt," "]}),(0,r.jsxs)(h,{children:[(0,r.jsxs)("time",{children:[" ",e.date," "]}),e.tags?(0,r.jsxs)("small",{children:[" | ",e.tags.join(", ")]}):(0,r.jsx)(r.Fragment,{})]})]},"".concat(e.date,"-").concat(e.title))}))})]})})]})}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=5423,e(e.s=n);var n}));var n=e.O();_N_E=n}]);