(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7942:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},u=t(4957),c=t(9898),l=t(639);var i={};function f(e,n,t,r){if(e&&u.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),s=a.default.useMemo((function(){var n=u.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?u.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,_=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,E=l.useIntersection({rootMargin:"200px"}),L=r(E,2),w=L[0],M=L[1],k=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);a.default.useEffect((function(){var e=M&&t&&u.isLocalURL(d),n="undefined"!==typeof _?_:o&&o.locale,r=i[d+"%"+p+(n?"%"+n:"")];e&&!r&&f(o,d,p,{locale:n})}),[p,d,M,_,t,o]);var m={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:c}))}(e,o,d,p,h,b,y,_)},onMouseEnter:function(e){u.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof _?_:o&&o.locale,I=o&&o.isLocaleDomain&&u.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);m.href=I||u.addBasePath(u.addLocale(p,C,o&&o.defaultLocale))}return a.default.cloneElement(n,m)};n.default=s},639:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,l=o.useRef(),i=o.useState(!1),f=r(i,2),s=f[0],d=f[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||s||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!u&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[p,s]};var o=t(7294),a=t(6286),u="undefined"!==typeof IntersectionObserver;var c=new Map},2748:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(1664),o=t(5893);function a(){return(0,o.jsxs)("div",{children:["Hello World."," ",(0,o.jsx)(r.default,{href:"/about",as:"/gh-pages-app/about",children:(0,o.jsx)("a",{children:"About"})})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2748)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);