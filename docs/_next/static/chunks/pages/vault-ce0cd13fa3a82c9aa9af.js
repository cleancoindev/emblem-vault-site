_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function i(e){r(c,a,o,i,u,"next",e)}function u(e){r(c,a,o,i,u,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return a}))},bQFp:function(e,t,n){"use strict";var r=n("pVnL"),a=n.n(r),o=n("8OQS"),c=n.n(o),i=n("qKvR"),u=n("q1tI"),s=n("BMxC");var l=Object(u.forwardRef)((function(e,t){var n=e.htmlWidth,r=e.htmlHeight,o=e.alt,u=c()(e,["htmlWidth","htmlHeight","alt"]);return Object(i.d)("img",a()({width:n,height:r,ref:t,alt:o},u))})),f=Object(u.forwardRef)((function(e,t){var n=e.src,r=e.fallbackSrc,o=e.onError,f=e.onLoad,d=e.ignoreFallback,h=c()(e,["src","fallbackSrc","onError","onLoad","ignoreFallback"]),p=function(e){var t=e.src,n=e.onLoad,r=e.onError,a=e.enabled,o=void 0===a||a,c=Object(u.useRef)(!0),i=Object(u.useState)(!1),s=i[0],l=i[1];return Object(u.useEffect)((function(){if(t&&o){var e=new window.Image;e.src=t,e.onload=function(e){c.current&&(l(!0),n&&n(e))},e.onerror=function(e){c.current&&(l(!1),r&&r(e))}}}),[t,n,r,o]),Object(u.useEffect)((function(){return function(){c.current=!1}}),[]),s}({src:n,onLoad:f,onError:o,enabled:!Boolean(d)}),b=d?{src:n,onLoad:f,onError:o}:{src:p?n:r};return Object(i.d)(s.a,a()({as:l,ref:t},b,h))}));f.displayName="Image",t.a=f},o0o1:function(e,t,n){e.exports=n("ls82")},"pZB+":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n("q1tI"),a=n.n(r),o=n("o0o1"),c=n.n(o),i=n("HaE+"),u=n("ODXe"),s=n("Weur"),l=n("BMxC"),f=n("bQFp"),d=n("sK1y"),h=n("Z6YE"),p=n("nOHt"),b=a.a.createElement;function m(){var e=Object(h.b)(),t=(e.account,e.chainId,Object(p.useRouter)()),n=t.query,o=(t.pathname,t.replace,a.a.useState(n.id)),m=Object(u.a)(o,2),v=m[0],g=(m[1],a.a.useState("")),w=Object(u.a)(g,2),j=w[0],O=w[1],E=a.a.useState(""),x=Object(u.a)(E,2),_=x[0],S=x[1],y=a.a.useState(""),k=Object(u.a)(y,2),W=k[0],H=k[1],N=a.a.useState([]),I=Object(u.a)(N,2),L=I[0],B=I[1],F=function(){var e=Object(i.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.emblemvault.io/meta/"+v,{method:"GET",headers:{"Content-Type":"application/json",service:"evmetadata"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O(n.name),H(n.image),S(n.description),B(n.values),S(n.description);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){F()}),[]),b(s.a,{width:"full",align:"center",justifyContent:"center"},b(l.a,{maxW:"sm",borderWidth:"1px",rounded:"lg",overflow:"hidden"},b(l.a,{mt:"1",fontWeight:"semibold",as:"h3",lineHeight:"tight",p:2,textAlign:"center",textTransform:"uppercase"},j,b(f.a,{src:W||"https://circuitsofvalue.com/public/coval-logo.png",size:"250px"})),b(l.a,{p:"6"},b(l.a,{d:"flex",alignItems:"baseline"},b(l.a,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",ml:"2"},L.length?L.map((function(e){return b(d.a,{key:e.name},e.balance," ",e.name)})):b(d.a,null,"Nothing in here! Fill 'er up!"))),b(l.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight"},_))))}var v=a.a.createElement;function g(){return v(m,null)}},zjfc:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vault",function(){return n("pZB+")}])}},[["zjfc",1,0,3,2,4,5]]]);