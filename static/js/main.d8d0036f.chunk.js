(this["webpackJsonpsdhc-sprinklers-ui"]=this["webpackJsonpsdhc-sprinklers-ui"]||[]).push([[0],{48:function(e){e.exports=JSON.parse('{"domain":"sdhc.au.auth0.com","clientId":"T9V1SyVCcWGu8Z42UuFfFp7dPsGWGjfJ"}')},75:function(e,t,n){e.exports=n(92)},80:function(e,t,n){},81:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),i=n.n(c),o=(n(80),n(118)),l=(n(81),n(112)),u=n(111),s=n(7),p=n.n(s),m=n(14),f=n(17),d=n(39),h=n(55),v=function(){return window.history.replaceState({},document.title,window.location.pathname)},g=r.a.createContext(),E=function(){return Object(a.useContext)(g)},b=function(e){var t=e.children,n=e.onRedirectCallback,c=void 0===n?v:n,i=Object(d.a)(e,["children","onRedirectCallback"]),o=Object(a.useState)(),l=Object(f.a)(o,2),u=l[0],s=l[1],E=Object(a.useState)(),b=Object(f.a)(E,2),w=b[0],y=b[1],O=Object(a.useState)(),j=Object(f.a)(O,2),k=j[0],S=j[1],x=Object(a.useState)(!0),T=Object(f.a)(x,2),A=T[0],C=T[1],I=Object(a.useState)(!1),W=Object(f.a)(I,2),P=W[0],R=W[1];Object(a.useEffect)((function(){(function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)(i);case 2:if(t=e.sent,S(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,c(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,s(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:o=e.sent,y(o);case 19:C(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var U=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},R(!0),e.prev=2,e.next=5,k.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,R(!1),e.finish(10);case 13:return e.next=15,k.getUser();case 15:n=e.sent,y(n),s(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,k.handleRedirectCallback();case 3:return e.next=5,k.getUser();case 5:t=e.sent,C(!1),s(!0),y(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(g.Provider,{value:{isAuthenticated:u,user:w,loading:A,popupOpen:P,loginWithPopup:U,handleRedirectCallback:G,getIdTokenClaims:function(){return k.getIdTokenClaims.apply(k,arguments)},loginWithRedirect:function(){return k.loginWithRedirect.apply(k,arguments)},getTokenSilently:function(){return k.getTokenSilently.apply(k,arguments)},getTokenWithPopup:function(){return k.getTokenWithPopup.apply(k,arguments)},logout:function(){return k.logout.apply(k,arguments)}}},t)},w=n(36);var y=function(e){var t=e.to,n=e.color,a=e.children,c=r.a.useMemo((function(){return r.a.forwardRef((function(e,n){return r.a.createElement(w.a,Object.assign({to:t,ref:n},e))}))}),[t]);return r.a.createElement(u.a,{color:n,component:c},a)},O=function(){var e=E(),t=e.isAuthenticated,n=e.loginWithRedirect,a=e.logout;return r.a.createElement(l.a,{position:"fixed"},!t&&r.a.createElement(u.a,{color:"inherit",onClick:function(){return n({})}},"Login"),t&&r.a.createElement("span",null,r.a.createElement(y,{color:"inherit",to:"/profile"},"PROFILE"),r.a.createElement(y,{color:"inherit",to:"/sprinklers"},"SPRINKLERS"),r.a.createElement(u.a,{color:"inherit",onClick:function(){return a()}},"Log out")))},j=n(8),k=function(){var e=E(),t=e.loading,n=e.user;return t||!n?r.a.createElement("div",null,"Loading..."):r.a.createElement(a.Fragment,null,r.a.createElement("img",{src:n.picture,alt:"Profile"}),r.a.createElement("h2",null,n.name),r.a.createElement("p",null,n.email),r.a.createElement("code",null,JSON.stringify(n,null,2)))},S=n(117),x=n(120),T=n(121),A=n(119),C=n(113),I=n(114),W=n(123),P=n(60),R=n.n(P),U=n(115),G=n(59);var N=function(e){var t=e.name,n=e.estimatedEndTime,a=e.active;return r.a.createElement(A.a,{width:1/3},r.a.createElement(C.a,null,r.a.createElement(W.a,{title:t}),r.a.createElement(I.a,null,r.a.createElement(A.a,{height:50},a&&r.a.createElement(U.a,{color:"primary"}),!a&&r.a.createElement(R.a,{fontSize:"large",color:"primary"})),r.a.createElement(A.a,{height:30},n&&r.a.createElement(G.a,{date:new Date(n),renderer:function(e){var t=e.minutes,n=e.seconds;return e.completed?null:"".concat(t,":").concat(n.toString().padStart(2,"0"))}})))))},_=n(116),z=n(61),B=n.n(z),J=n(62),L=n.n(J);var F=function(e){var t=e.callApi,n=e.disabled;return r.a.createElement(u.a,{onClick:function(){return t()},size:"large",color:"primary",fullWidth:!0,disabled:n},"Trigger")};var H=function(e){var t=e.activeIcons,n=e.displayActive,a=e.buttonActive,c=e.name,i=e.triggerSprinkler,o=[];if(n)for(var l=0;l<(t||1);l++)o.push(r.a.createElement(B.a,{key:l,color:"primary"}));return r.a.createElement(A.a,{width:1/4},r.a.createElement(C.a,null,r.a.createElement(W.a,{title:c}),n?o:r.a.createElement(L.a,{color:"disabled"}),r.a.createElement(_.a,null,r.a.createElement(F,{disabled:!a||t>=3,callApi:i}))))},q=n(63),D=n.n(q),M=n(64),V=n.n(M);var K=function(e){var t=e.isOn,n=e.triggerToggle,a=t?"Turn Off":"Turn On";return r.a.createElement(A.a,{width:1/3},r.a.createElement(C.a,null,r.a.createElement(A.a,{height:184},r.a.createElement(W.a,{title:"Power"}),r.a.createElement(I.a,null,t&&r.a.createElement(D.a,{fontSize:"large",color:"primary"}),!t&&r.a.createElement(V.a,{fontSize:"large",color:"primary"})),r.a.createElement(_.a,null,r.a.createElement(u.a,{onClick:n,size:"large",color:"primary",fullWidth:!0},a)))))};var Z=function(e){var t=e.triggerToggle;return r.a.createElement(A.a,{width:1/3},r.a.createElement(C.a,null,r.a.createElement(A.a,{height:184},r.a.createElement(W.a,{title:"Sequence"}),r.a.createElement(I.a,null),r.a.createElement(_.a,null,r.a.createElement(u.a,{onClick:t,size:"large",color:"primary",fullWidth:!0},"Activate")))))},$=n(65),Q=n.n($),X=function(){return"localhost"===window.location.hostname},Y={protocol:X()?"http":"https",apiHost:(X(),"home.erinandmitchell.com")},ee=function(e){return function(t){return function(){var n=Object(m.a)(p.a.mark((function n(a){var r,c,i,o,l,u,s,m,f,d,h,v,g=arguments;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=g.length>1&&void 0!==g[1]?g[1]:"",c=Y.apiHost,i=Y.protocol,n.next=4,a();case 4:for(o=n.sent,l=o.__raw,u={method:t,headers:{Authorization:"Bearer ".concat(l),"Content-Type":"application/json"}},s=g.length,m=new Array(s>2?s-2:0),f=2;f<s;f++)m[f-2]=g[f];return d=Q.a.apply(void 0,[u].concat(m)),n.next=11,fetch("".concat(i,"://").concat(c,"/").concat(e).concat(r),d);case 11:return h=n.sent,n.next=14,h.json();case 14:return v=n.sent,n.abrupt("return",v);case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},te=(ee("GET"),ee("PUT"),ee("pump")),ne=te("GET"),ae=(te("PUT"),ee("sprinkler")),re=(ae("GET"),ae("PUT")),ce=ee("power"),ie=function(e,t){var n={active:t};return ce("PUT")(e,"",{body:JSON.stringify(n)})},oe=ce("GET"),le=ee("sequence")("GET"),ue=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),o=Object(f.a)(i,2),l=o[0],u=o[1],s=Object(a.useState)(),d=Object(f.a)(s,2),h=d[0],v=d[1],g=Object(a.useState)(!1),b=Object(f.a)(g,2),w=b[0],y=b[1],O=Object(a.useState)(0),j=Object(f.a)(O,2),k=j[0],A=j[1],C=Object(a.useState)(!1),I=Object(f.a)(C,2),W=I[0],P=I[1],R=E().getIdTokenClaims,U=function(e){u(e),A(k+1),c(!0)},G=function(e){return Object(m.a)(p.a.mark((function t(){var n,a,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return U(e),t.next=3,re(R,"/".concat(e));case 3:n=t.sent,a=n.success,r=n.message,c=a?"Success":"An Error Occured",y({message:r||c,severity:a?"success":"error"});case 8:case"end":return t.stop()}}),t)})))},_=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(R);case 2:t=e.sent,n=t.running,a=t.estimated_end_time,r=t.running_sprinkler_name,i=t.increment_count,c(n),u(r),A(i),v(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(R);case 2:t=e.sent,(n=t.active)||A(0),P(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){_(),z()};Object(a.useEffect)((function(){B();var e=setInterval((function(){B()}),2e3);return function(){return clearInterval(e)}}),[]);var J=function(e,t){"clickaway"!==t&&y(!1)},L=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(R,!W);case 2:t=e.sent,(n=t.active)||A(0),P(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(R);case 2:t=e.sent,n=t.success,a=t.message,r=n?"Success":"An Error Occured",y({message:a||r,severity:n?"success":"error"});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{container:!0,spacing:3},r.a.createElement(S.a,{container:!0,item:!0,justify:"space-evenly",alignItems:"center"},r.a.createElement(N,{name:"Pump",estimatedEndTime:h,active:n}),r.a.createElement(K,{isOn:W,triggerToggle:L})),r.a.createElement(S.a,{container:!0,item:!0,justify:"space-evenly",alignItems:"center"},r.a.createElement(H,{triggerSprinkler:G("north"),name:"North",buttonActive:W&&(!l||"north"===l),displayActive:W&&"north"===l,activeIcons:k}),r.a.createElement(H,{triggerSprinkler:G("middle"),name:"Centre",buttonActive:W&&(!l||"middle"===l),displayActive:W&&"middle"===l,activeIcons:k}),r.a.createElement(H,{triggerSprinkler:G("south"),name:"South",buttonActive:W&&(!l||"south"===l),displayActive:W&&"south"===l,activeIcons:k})),r.a.createElement(S.a,{container:!0,item:!0,justify:"space-evenly",alignItems:"center"},r.a.createElement(H,{triggerSprinkler:G("east"),name:"East",buttonActive:W&&(!l||"east"===l),displayActive:W&&"east"===l,activeIcons:k}),r.a.createElement(H,{triggerSprinkler:G("west"),name:"West",buttonActive:W&&(!l||"west"===l),displayActive:W&&"west"===l,activeIcons:k})),r.a.createElement(S.a,{container:!0,item:!0,justify:"space-evenly",alignItems:"center"},r.a.createElement(Z,{triggerToggle:F}))),r.a.createElement(x.a,{open:!!w,autoHideDuration:5e3,onClose:J},r.a.createElement(T.a,{onClose:J,severity:w.severity},w.message)))},se=n(15),pe=Object(se.a)(),me=function(e){var t=e.component,n=e.path,c=Object(d.a)(e,["component","path"]),i=E(),o=i.loading,l=i.isAuthenticated,u=i.loginWithRedirect;Object(a.useEffect)((function(){o||l||function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({appState:{targetUrl:window.location.pathname}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,l,u,n]);return r.a.createElement(j.a,Object.assign({path:n,render:function(e){return!0===l?r.a.createElement(t,e):null}},c))},fe=Object(o.a)((function(e){return{appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}}));var de=function(){var e=E().loading,t=fe();return e?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"App"},r.a.createElement(j.b,{history:pe},r.a.createElement("header",null,r.a.createElement(O,{className:t.appBar})),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.appBarSpacer}),r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/",exact:!0}),r.a.createElement(me,{path:"/profile",component:k}),r.a.createElement(me,{path:"/sprinklers",component:ue})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=n(48);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,{domain:he.domain,client_id:he.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){pe.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.d8d0036f.chunk.js.map