_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"6tc4":function(e,t,r){"use strict";var n=r("lSNA"),a=r.n(n),o=r("5D9J"),i=r("OJSm"),l=r("BMxC"),c=r("QdyT");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var d=Object(o.a)(l.a)((function(e){var t,r=e.type,n=void 0===r?"checkbox":r,o=e._hover,l=e._invalid,d=e._disabled,s=e._focus,b=e._checked,p=e._child,f=void 0===p?{opacity:0}:p,h=e._checkedAndChild,v=void 0===h?{opacity:1}:h,g=e._checkedAndDisabled,O=e._checkedAndFocus,m=e._checkedAndHover,y="input[type="+n+"]:checked:disabled + &, input[type="+n+"][aria-checked=mixed]:disabled + &",j="input[type="+n+"]:checked:hover:not(:disabled) + &, input[type="+n+"][aria-checked=mixed]:hover:not(:disabled) + &",w="input[type="+n+"]:checked:focus + &, input[type="+n+"][aria-checked=mixed]:focus + &",x="input[type="+n+"]:disabled + &",C="input[type="+n+"]:focus + &",k="input[type="+n+"]:hover:not(:disabled):not(:checked) + &",S="input[type="+n+"]:checked + &, input[type="+n+"][aria-checked=mixed] + &",P="input[type="+n+"][aria-invalid=true] + &";return Object(i.a)(((t={})[C]=Object(c.b)(s),t[k]=Object(c.b)(o),t[x]=Object(c.b)(d),t[P]=Object(c.b)(l),t[y]=Object(c.b)(g),t[w]=Object(c.b)(O),t[j]=Object(c.b)(m),t["& > *"]=Object(c.b)(f),t[S]=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(c.b)(b),{"& > *":Object(c.b)(v)}),t))}));d.displayName="ControlBox",d.defaultProps={display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"all 120ms",flexShrink:"0","aria-hidden":"true"},t.a=d},"81Wl":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Ce}));var n=r("q1tI"),a=r.n(n),o=r("wx14"),i=r("o0o1"),l=r.n(i),c=r("HaE+"),u=r("XZ7F"),d=r("Weur"),s=r("BMxC"),b=r("pVnL"),p=r.n(b),f=r("8OQS"),h=r.n(f),v=r("qKvR"),g=r("iUFP"),O=r("+Cyc"),m=r("D7Da"),y=r("lSNA"),j=r.n(y),w=r("mf32"),x=r("CjxU");function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(r,!0).forEach((function(t){j()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S={display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",transition:"all 0.2s",_focus:{zIndex:"1",boxShadow:"outline"}},P={_disabled:{opacity:.4,cursor:"not-allowed"}},D=function(e){switch(e.variant){case"line":return function(e){var t=e.color;return{tabList:{borderBottom:"2px",borderColor:"inherit"},tab:{borderBottom:"2px",borderColor:"transparent",mb:"-2px",_selected:{color:{light:t+".600",dark:t+".300"}[e.colorMode],borderColor:"currentColor"},_active:{bg:"gray.200"},_disabled:{opacity:.4,cursor:"not-allowed"}}}}(e);case"enclosed":return function(e){var t=e.color,r=e.colorMode,n={light:t+".600",dark:t+".300"},a={light:"#fff",dark:e.theme.colors.gray[800]};return{tab:{roundedTop:"md",border:"1px",borderColor:"transparent",mb:"-1px",_selected:{color:n[r],borderColor:"inherit",borderBottomColor:a[r]}},tabList:{mb:"-1px",borderBottom:"1px",borderColor:"inherit"}}}(e);case"enclosed-colored":return function(e){var t=e.color,r=e.colorMode;return{tab:{border:"1px",borderColor:"inherit",bg:{light:"gray.50",dark:"whiteAlpha.50"}[r],mb:"-1px",_notLast:{mr:"-1px"},_selected:{bg:{light:"#fff",dark:"gray.800"}[r],color:{light:t+".600",dark:t+".300"}[r],borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"}},tabList:{mb:"-1px",borderBottom:"1px",borderColor:"inherit"}}}(e);case"soft-rounded":return function(e){var t=e.color;return{tab:{rounded:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:t+".700",bg:t+".100"}},tabList:{}}}(e);case"solid-rounded":return function(e){var t=e.color,r=e.colorMode;return{tab:{rounded:"full",fontWeight:"semibold",color:{light:"gray.600",dark:"inherit"}[r],_selected:{color:{light:"#fff",dark:"gray.800"}[r],bg:{light:t+".600",dark:t+".300"}[r]}},tabList:{}}}(e);case"unstyled":return{}}},I=function(e){var t,r,n=e.align,a=e.orientation;return"horizontal"===a&&(t={alignItems:"center",justifyContent:{end:"flex-end",center:"center",start:"flex-start"}[n],maxWidth:"full"},r={height:"100%"}),"vertical"===a&&(t={flexDirection:"column"},r={width:"100%"}),{tabList:t,tab:r}},R={sm:{padding:"0.25rem 1rem",fontSize:"0.85rem"},md:{fontSize:"1rem",padding:"0.5rem 1rem"},lg:{fontSize:"1.15rem",padding:"0.75rem 1rem"}},z=Object(n.forwardRef)((function(e,t){var r=e.isSelected,a=e.isDisabled,o=e.id,i=(e.size,h()(e,["isSelected","isDisabled","id","size"])),l=function(){var e=Object(x.b)(),t=Object(n.useContext)(W),r=t.variant,a=t.color,o=t.size,i=t.isFitted,l=t.orientation,c=Object(w.c)().colorMode,u=D({variant:r,color:a,theme:e,colorMode:c}),d=I({orientation:l});return k({},S,{},P,{},R[o],{},u&&u.tab,{},d&&d.tab,{},i&&{flex:1})}();return Object(v.d)(O.a,p()({ref:t,role:"tab",tabIndex:r?0:-1,id:"tab:"+o,outline:"none",as:"button",type:"button",disabled:a,"aria-selected":r,"aria-disabled":a,"aria-controls":"panel:"+o},l,i))}));z.displayName="Tab";var _=Object(n.forwardRef)((function(e,t){var r=e.children,a=e.onKeyDown,o=(e.onClick,h()(e,["children","onKeyDown","onClick"])),i=Object(n.useContext)(W),l=i.id,c=i.index,u=i.manualIndex,s=i.onManualTabChange,b=i.isManual,f=i.onChangeTab,g=i.onFocusPanel,O=i.orientation,y=function(){var e=Object(x.b)(),t=Object(n.useContext)(W),r=t.variant,a=t.align,o=t.orientation,i=D({variant:r,theme:e}),l=I({align:a,orientation:o});return k({},i&&i.tabList,{},l&&l.tabList)}(),j=Object(n.useRef)([]),w=Object(m.b)(r),C=w.map((function(e,t){return!0===e.props.isDisabled?null:t})).filter((function(e){return null!=e})),S=C.indexOf(c),P=C.length,R=function(e){var t=C[e];j.current[t].focus(),f&&f(t)},z=w.map((function(e,t){var r=b?t===u:t===c;return Object(n.cloneElement)(e,{ref:function(e){return j.current[t]=e},isSelected:r,onClick:function(r){j.current[t].focus(),s(t),f(t),e.props.onClick&&e.props.onClick(r)},id:l+"-"+t})}));return Object(v.d)(d.a,p()({onKeyDown:function(e){"ArrowRight"===e.key&&(e.preventDefault(),R((S+1)%P));"ArrowLeft"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),R((S-1+P)%P));"Home"===e.key&&(e.preventDefault(),R(0)),"End"===e.key&&(e.preventDefault(),R(P-1)),"ArrowDown"===e.key&&(e.preventDefault(),g&&g()),a&&a(e)},ref:t,role:"tablist","aria-orientation":O},y,o),z)}));_.displayName="TabList";var E=Object(n.forwardRef)((function(e,t){var r=e.children,n=e.isSelected,a=e.selectedPanelRef,o=e.id,i=h()(e,["children","isSelected","selectedPanelRef","id"]);return Object(v.d)(s.a,p()({ref:function(e){n&&Object(m.a)(a,e),Object(m.a)(t,e)},role:"tabpanel",tabIndex:-1,"aria-labelledby":"tab:"+o,hidden:!n,id:"panel:"+o,outline:0},i),r)}));E.displayName="TabPanel";var L=Object(n.forwardRef)((function(e,t){var r=e.children,a=h()(e,["children"]),o=Object(n.useContext)(W),i=o.index,l=o.selectedPanelRef,c=o.id,u=o.isManual,d=o.manualIndex,b=Object(m.b)(r).map((function(e,t){return Object(n.cloneElement)(e,{isSelected:u?t===d:t===i,selectedPanelRef:l,id:c+"-"+t})}));return Object(v.d)(s.a,p()({tabIndex:"-1",ref:t},a),b)}));L.displayName="TabPanels";var W=Object(n.createContext)(),A=Object(n.forwardRef)((function(e,t){var r=e.children,a=e.onChange,o=e.index,i=e.defaultIndex,l=e.isManual,c=e.variant,u=void 0===c?"line":c,d=e.variantColor,b=void 0===d?"blue":d,f=e.align,O=void 0===f?"start":f,y=e.size,j=void 0===y?"md":y,w=e.orientation,x=void 0===w?"horizontal":w,C=e.isFitted,k=h()(e,["children","onChange","index","defaultIndex","isManual","variant","variantColor","align","size","orientation","isFitted"]);Object(m.h)("Tabs",b);var S=Object(n.useRef)(null!=o).current,P=Object(n.useRef)(),D=Object(n.useState)((function(){return l?o||i||0:i||0})),I=D[0],R=D[1],z=Object(n.useState)(o||i||0),_=z[0],E=z[1],L=l?I:S?o:I,A=S?o:_,B={id:Object(g.a)(),index:L,manualIndex:A,onManualTabChange:function(e){S||E(e),l&&a&&a(e)},isManual:l,onChangeTab:function(e){S||R(e),S&&l&&R(e),l||a&&a(e)},selectedPanelRef:P,onFocusPanel:function(){P.current&&P.current.focus()},color:b,size:j,align:O,variant:u,isFitted:C,orientation:x};return Object(v.d)(W.Provider,{value:B},Object(v.d)(s.a,p()({ref:t},k),r))}));A.displayName="Tabs";var B=A,N=r("Yn+B"),q=r("we/t"),F=r("jgTY"),M=r("FpzS"),T=r("sK1y"),H=Object(n.forwardRef)((function(e,t){var r=Object(w.c)().colorMode,n=Object(q.b)(e);return Object(v.d)(T.a,p()({mt:2,ref:t,id:n.id?n.id+"-help-text":null,color:{light:"gray.500",dark:"whiteAlpha.600"}[r],lineHeight:"normal",fontSize:"sm"},e))}));H.displayName="FormHelperText";var V=H,K=r("w0db"),Q=Object(n.forwardRef)((function(e,t){var r=e.children,n=e.icon,a=h()(e,["children","icon"]),o=Object(w.c)().colorMode,i=Object(q.b)(a);return i.isInvalid?Object(v.d)(d.a,p()({ref:t,color:{light:"red.500",dark:"red.300"}[o],id:i.id?i.id+"-error-message":null,mt:2,fontSize:"sm",align:"center"},a),Object(v.d)(K.a,{"aria-hidden":!0,name:n||"warning",mr:"0.5em"}),Object(v.d)(T.a,{lineHeight:"normal"},r)):null}));Q.displayName="FormErrorMessage";var G=Q,J=Object(n.forwardRef)((function(e,t){var r=e.onChange,a=e.name,o=e.variantColor,i=e.size,l=e.defaultValue,c=e.isInline,u=e.value,d=e.spacing,b=void 0===d?2:d,f=e.children,O=h()(e,["onChange","name","variantColor","size","defaultValue","isInline","value","spacing","children"]),y=Object(n.useRef)(null!=u).current,j=Object(n.useState)(l||null),w=j[0],x=j[1],C=y?u:w,k=Object(n.useRef)(),S=function(e){y||x(e.target.value),r&&r(e,e.target.value)},P="radio-"+Object(g.a)(),D=a||P,I=Object(m.b)(f),R=I.map((function(e,t){var r=I.length===t+1,a=c?{mr:b}:{mb:b};return Object(v.d)(s.a,p()({key:t,display:c?"inline-block":"block"},!r&&a),Object(n.cloneElement)(e,{size:e.props.size||i,variantColor:e.props.variantColor||o,name:D,onChange:S,isChecked:e.props.value===C}))}));return Object(n.useImperativeHandle)(t,(function(){return{focus:function(){var e=k.current.querySelector("input:not(:disabled):checked");e||(e=k.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]),Object(v.d)(s.a,p()({ref:k,role:"radiogroup"},O),R)}));J.displayName="RadioGroup";var U=J,Z=r("6tc4"),X=r("+Z5E"),Y=r("8hg0");function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ee={userSelect:"none",border:"2px",rounded:"md",borderColor:"inherit",transition:"background-color 120ms, box-shadow 250ms"},te=function(e){var t={lg:5,md:4,sm:"radio"===e.type?3:"auto"};return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(r,!0).forEach((function(t){j()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},ee,{},e.size&&{rounded:"sm"},{},function(e){var t=e.color,r="dark"===e.colorMode,n=r?200:500;return{color:"white",_checked:{bg:Object(Y.d)(t,n),borderColor:Object(Y.d)(t,n),color:r?"gray.900":void 0},_checkedAndDisabled:{borderColor:r?"transparent":"gray.200",bg:r?"whiteAlpha.300":"gray.200",color:r?"whiteAlpha.500":"gray.500"},_disabled:{bg:r?"whiteAlpha.100":"gray.100",borderColor:r?"transparent":"gray.100"},_focus:{boxShadow:"outline"},_invalid:{borderColor:r?"red.300":"red.500"}}}(e),{size:t[e.size]})},re=Object(n.forwardRef)((function(e,t){var r=e.id,n=e.name,a=e.value,o=e["aria-label"],i=e["aria-labelledby"],l=e.variantColor,c=void 0===l?"blue":l,u=e.defaultIsChecked,d=e.isChecked,b=e.isFullWidth,f=e.size,g=void 0===f?"md":f,O=e.isDisabled,y=e.isInvalid,j=e.onChange,x=e.onBlur,C=e.onFocus,k=e.children,S=h()(e,["id","name","value","aria-label","aria-labelledby","variantColor","defaultIsChecked","isChecked","isFullWidth","size","isDisabled","isInvalid","onChange","onBlur","onFocus","children"]);Object(m.h)("Radio",c);var P=Object(w.c)().colorMode,D=te({color:c,size:g,colorMode:P,type:"radio"});return Object(v.d)(s.a,p()({as:"label",display:"inline-flex",verticalAlign:"top",htmlFor:r,alignItems:"center",width:b?"full":void 0,cursor:O?"not-allowed":"pointer"},S),Object(v.d)(X.a,{as:"input",type:"radio","aria-label":o,"aria-labelledby":i,id:r,ref:t,name:n,value:a,"aria-invalid":y,defaultChecked:u,onChange:j,onBlur:x,onFocus:C,checked:d,disabled:O}),Object(v.d)(Z.a,p()({},D,{type:"radio",rounded:"full"}),Object(v.d)(s.a,{bg:"currentColor",as:"span",rounded:"full",size:"50%"})),k&&Object(v.d)(s.a,{ml:2,fontSize:g,userSelect:"none",opacity:O?.32:1},k))}));re.displayName="Radio";var ne=re,ae=r("eJLp"),oe=Object(n.forwardRef)((function(e,t){return Object(v.d)(M.a,p()({py:"8px",minHeight:"80px",lineHeight:"short",ref:t,as:"textarea"},e))}));oe.displayName="Textarea";var ie=oe;Object(n.forwardRef)((function(e,t){var r=e.minHeight,a=void 0===r?"39px":r,o=e.onInput,i=h()(e,["minHeight","onInput"]),l=Object(n.useState)(0),c=l[0],u=l[1],d=Object(n.useRef)(),s=t||d;Object(n.useLayoutEffect)((function(){s.current&&u(s.current.scrollHeight)}),[s]);return Object(v.d)(oe,p()({rows:"1",onInput:function(e){s.current&&setTimeout((function(){u("auto"),u(s.current.scrollHeight)}),0),o&&o(e)},css:{height:c,resize:"none",overflow:"hidden",minHeight:a},ref:s},i))})).displayName="ExpandingTextarea";var le=r("MKZ1"),ce=r("IP4Q"),ue=r("KEox"),de=r("LqLE"),se=r("Y1ui"),be=r.n(se),pe=r("Z6YE"),fe=r("nOHt"),he=r("zIq6"),ve=r("N39q"),ge=r("21eR"),Oe=r("iBPG"),me=a.a.createElement,ye=null,je=null;function we(e){var t=Object(u.a)(),r=t.isOpen,a=t.onToggle,i=(Object(fe.useRouter)().query,Object(n.useState)(0)),b=i[0],p=i[1],f=Object(pe.b)(),h=f.account,v=f.chainId,g=Object(n.useState)(h||""),O=g[0],m=g[1],y=Object(n.useState)("Public"),j=(y[0],y[1]),w=Object(n.useState)(""),x=w[0],C=w[1],k=Object(n.useState)(""),S=k[0],P=k[1],D=Object(n.useState)(""),I=D[0],R=D[1],W=Object(n.useState)(""),A=W[0],H=W[1],K=Object(n.useState)(!1),Q=K[0],J=K[1],Z=Object(n.useState)({loaded:!0,private:!1}),X=Z[0],Y=Z[1],$=Object(n.useState)(null),ee=$[0],te=$[1],re=Object(n.useState)(!0),oe=re[0],se=(re[1],Object(n.useState)(!1)),we=se[0],xe=se[1],Ce=Object(n.useState)(!1),ke=Ce[0],Se=Ce[1],Pe=Object(n.useState)(null),De=Pe[0],Ie=Pe[1],Re=Object(n.useState)(null),ze=Re[0],_e=Re[1],Ee=Object(n.useState)(null),Le=Ee[0],We=Ee[1],Ae=Object(n.useState)(null),Be=Ae[0],Ne=Ae[1],qe=Object(n.useState)(!1),Fe=qe[0],Me=qe[1],Te=Object(n.useState)(!1),He=Te[0],Ve=Te[1],Ke=Object(n.useState)(""),Qe=Ke[0],Ge=Ke[1],Je=Object(n.useState)(""),Ue=Je[0],Ze=Je[1],Xe=Object(ge.b)(ve.p.vaultHandler[v],ve.p.vaultHandlerAbi,!0),Ye=Object(ge.b)(ve.p.coval[v],ve.p.covalAbi,!0),$e=function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Ie,e.next=3,Ye.decimals();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=_e,e.next=8,Ye.allowance(h,ve.p.vaultHandler[v]).then((function(e){return e.toString()}));case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=We,e.next=13,Ye.balanceOf(h).then((function(e){return e.toString()}));case 13:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=Ne,e.next=18,Xe.price().then((function(e){return e.toString()}));case 18:e.t7=e.sent,(0,e.t6)(e.t7),Number(ze)>=Number(Be)?J(!0):J(!1);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var et=Object(n.useState)(""),tt=et[0],rt=et[1];return Object(n.useEffect)((function(){h&&tt!=h&&(rt(h),m(h))}),[h,tt]),Object(n.useEffect)((function(){h&&v&&$e()})),me(be.a,{loaded:X.loaded},me(d.a,{width:"full",align:"center",justifyContent:"center"},me(s.a,{maxW:"sm",borderWidth:"1px",rounded:"lg",overflow:"hidden"},me(B,{defaultIndex:0,index:b,onChange:function(e){return p(e)}},me(_,null,me(z,null,"Make"),me(z,null,"My"),me(z,null,"Vault")),me(L,null,me(E,null,me(N.a,{direction:"column",align:"center",spacing:"2rem",flexGrow:1,justifyContent:"center",px:"2rem",py:"2rem",shouldWrapChildren:!0},me(N.a,{direction:"row",align:"flex-start",spacing:"0rem",flexWrap:"wrap",shouldWrapChildren:!0},me(q.a,{isRequired:!0,isInvalid:O&&!Object(Oe.h)(O)},me(F.a,{htmlFor:"owner-address"},"Vault Owner Address"),me(M.a,{type:"text",id:"owner-address","aria-describedby":"owner-helper-text",placeholder:"0xdeadbeef",maxLength:42,value:O,onChange:function(e){return m(e.target.value)}}),me(V,{id:"owner-helper-text"},"What is the address of the first owner of this vault? Pro tip: When you connect a web3 wallet, this will populate automagically with your address."),me(G,null,"Address is not a valid ETH address"))),me(N.a,{direction:"row",align:"flex-start",spacing:"0rem",flexWrap:"wrap",shouldWrapChildren:!0},me(q.a,{as:"fieldset",isRequired:!0},me(F.a,null,"Public or Private?"),me(U,{id:"pubpriv",defaultValue:"Public",onChange:function(e){j(e.target.value),Y({loaded:X.loaded,private:"Private"===e.target.value})}},me(ne,{value:"Public"},"Public"),me(ne,{value:"Private"},"Private")),me(V,{id:"email-helper-text"},"Do you want the contents and addresses to be password protected?")),X.private?me(q.a,{isRequired:!0},me(F.a,null,"Password"),me(M.a,{type:"password",id:"vault-password",onChange:function(e){return H(e.target.value)},"aria-describedby":"password-helper-text",autoComplete:"off"}),me(V,{id:"password-helper-text"},"Used to encrypt/decrypt")):""),me(N.a,{direction:"row",align:"flex-start",spacing:"0rem",flexWrap:"wrap",shouldWrapChildren:!0},me(ae.a,{onClick:function(){return p(1)}},"Next")))),me(E,null,me(N.a,{direction:"column",align:"center",spacing:"2rem",flexGrow:1,justifyContent:"center",px:"2rem",py:"2rem",shouldWrapChildren:!0},me(N.a,{direction:"row",align:"flex-start",spacing:"0rem",flexWrap:"wrap",shouldWrapChildren:!0},me(q.a,{isRequired:!0,isInvalid:x&&x.length<3&&x.length>200},me(F.a,{htmlFor:"vault-name"},"Vault Name"),me(M.a,{type:"text",id:"vault-name","aria-describedby":"vault-name-text",minLength:3,maxLength:200,value:x,onChange:function(e){return C(e.target.value)},autoComplete:"off"}),me(V,{id:"vault-name-text"},"Give it some love so you can find it later."),me(G,null,"Name needs at least 3 characters. 200 is max."))),me(N.a,{direction:"row",align:"flex-start",spacing:"0rem",flexWrap:"wrap",shouldWrapChildren:!0},me(q.a,{isRequired:!0,isInvalid:S&&S.length<3&&S.length>1024},me(F.a,{htmlFor:"vault-desc"},"Vault Description"),me(ie,{id:"vault-desc",size:"lg","aria-describedby":"vault-desc-text",minLength:3,maxLength:1024,value:S,onChange:function(e){return P(e.target.value)},autoComplete:"off"}),me(V,{id:"vault-desc-text"},"Add some fluffy text to tell people what the point is!"),me(G,null,"Description needs to be at least 3 characters. 1024 is max."))),me(ae.a,{onClick:a},"Include Encrypted Text In Vault"),me(le.a,{isOpen:r},oe?me(N.a,{direction:"row",align:"flex-start",spacing:"0rem",flexWrap:"wrap",shouldWrapChildren:!0},me(q.a,null,me(F.a,{htmlFor:"vault-key"},"Key"),me(M.a,{type:"text",id:"vault-key","aria-describedby":"vault-key-text",maxLength:200,value:Qe,onChange:function(e){return Ge(e.target.value)},autoComplete:"off"}),me(V,{id:"vault-key-text"},"Key Name (Public)"),me(G,null,"---Some Error")),me(q.a,null,me(F.a,{htmlFor:"vault-value"},"Value"),me(M.a,{type:"password",id:"vault-value","aria-describedby":"vault-value-text",maxLength:200,value:Ue,onChange:function(e){return Ze(e.target.value)},autoComplete:"off"}),me(V,{id:"vault-value-text"},"Key Value (Encrypted)"),me(G,null,"---Some Error"))):null),me(N.a,{direction:"row",align:"flex-start",spacing:"0rem",flexWrap:"wrap",shouldWrapChildren:!0},me(ce.a,{spacing:4},me(ae.a,{onClick:function(){return p(0)}},"Back"),me(ae.a,{onClick:function(){return p(2)}},"Next"))))),me(E,null,me(N.a,{direction:"column",align:"center",spacing:"2rem",flexGrow:1,justifyContent:"center",px:"2rem",py:"2rem",shouldWrapChildren:!0},me(N.a,{direction:"row",align:"flex-start",spacing:"0rem",flexWrap:"wrap",shouldWrapChildren:!0},me(q.a,null,me(F.a,{htmlFor:"vault-img"},"Vault Image"),me(s.a,{p:1,rounded:"lg",overflow:"hidden"},me(N.a,{align:"center",p:1},me("input",{type:"file",onChange:function(){return function(){var e=document.querySelector("#preview"),t=document.querySelector("input[type=file]"),r=new FileReader;r.addEventListener("load",(function(){var t;e&&(e.src=(null===(t=r.result)||void 0===t?void 0:t.toString())||""),e&&R(e.src)}),!1),t.files&&r.readAsDataURL(t.files[0])}()}}),me(ue.a,null),me(F.a,{htmlFor:"vault-image-url"},"Or Image URL"),me(M.a,{type:"text",id:"vault-image-url","aria-describedby":"vault-image-url-text",minLength:3,maxLength:200,value:I,defaultValue:"http://",onChange:function(e){return R(e.target.value)},autoComplete:"off"}),me("img",{id:"preview",src:"",width:"250","margin-top":"6"}))))),Q?me(N.a,{direction:"row",align:"flex-start",spacing:"0rem",flexWrap:"wrap",shouldWrapChildren:!0},me(s.a,{maxW:"sm",borderWidth:"1px",p:1,rounded:"lg",overflow:"hidden"},me(T.a,null,"Creating a vault spends ",Be*Math.pow(10,-De)," Coval from your wallet"))):null,Number(Le)<Number(Be)?me(s.a,{d:"flex",alignItems:"baseline",justifyContent:"space-between",mt:"2"},me(ae.a,Object(o.a)({width:"100%",as:"a"},{href:location.origin+"/buy?chain="+v+"&output=0x3D658390460295FB963f54dC0899cfb1c30776Df&input=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",target:"_blank",rel:"noopener noreferrer"}),"Buy coval")):null,me(N.a,{direction:"row",align:"flex-start",spacing:"0rem",flexWrap:"wrap",shouldWrapChildren:!0},me(ce.a,{spacing:4},me(ae.a,{onClick:function(){return p(1)}},"Back"),h?!O||!Object(Oe.h)(O)||!x||x.length<3||!S||S.length<3?me(ae.a,{isDisabled:!0,type:"submit"},"Check Fields!"):Q||He?!Q&&He?me(ae.a,{isDisabled:!0,type:"submit"},"Approving ..."):Number(Le)<Number(Be)?me(ae.a,{isDisabled:!0,type:"submit"},"Insufficient Balance"):ee||Fe||we||ke?me(ae.a,{isDisabled:!0,type:"submit"},"Making Vault ..."):me(ae.a,{onClick:function(e){e.preventDefault(),Y({loaded:!1,private:X.private});var t={fromAddress:h,toAddress:O,description:S,name:x,image:I,chainId:v,private:X.private,password:A||"",values:[]};Qe&&Ue&&t.values.push({key:Qe,value:Ue}),console.log(JSON.stringify(t)),fetch(ve.h+"/mint",{method:"POST",headers:{"Content-Type":"application/json",service:"evmetadata"},body:JSON.stringify(t)}).then(function(){var e=Object(c.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y({loaded:!0,private:X.private}),e.next=3,t.json();case 3:r=e.sent,ye=r.data.tokenId,je=r.password,te(r.data.tx),xe(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},type:"submit"},"DO IT!"):me(ae.a,{onClick:function(){Ve(!0),Ye.approve(ve.p.vaultHandler[v],"100000000000000").then((function(e){var t=e.hash;te(t)})).catch((function(e){4001==(null===e||void 0===e?void 0:e.code)&&Ve(!1)}))},type:"submit"},"Approve Coval"):me(ae.a,{isDisabled:!0,type:"submit"},"No Wallet Connected!")))),we?me(de.a,{status:"info"},me(de.b,null),"Talking to contract ..."):null,ke?me(de.a,{status:"info"},me(de.b,null),"Making vault ... one moment"):null,He?me(de.a,{status:"info"},me(de.b,null),"Handling approval flow ..."):null))))),ee?me(he.a,{hash:ee,onComplete:function(){te(null),Fe?setTimeout((function(){Se(!1),location.href=location.origin+"/nft?id="+ye}),500):He?Ve(!1):(Me(!0),Xe.buyWithPaymentOnly(O,ye,je).then((function(e){var t=e.hash;setTimeout((function(){te(t),Se(!0)}),100)})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)?console.log("tx failed.",e):(Me(!1),xe(!1))})),xe(!1))}}):null)}var xe=a.a.createElement;function Ce(){return xe(we,null)}},FpzS:function(e,t,r){"use strict";var n=r("pVnL"),a=r.n(n),o=r("8OQS"),i=r.n(o),l=r("qKvR"),c=r("q1tI"),u=r("we/t"),d=r("+Cyc"),s=r("lSNA"),b=r.n(s),p=r("CjxU"),f=r("mf32"),h=r("za5s");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={_readOnly:{bg:"transparent",boxShadow:"none !important",userSelect:"all"}},m={bg:"transparent",px:void 0,height:void 0},y=function(e){switch(e.variant){case"flushed":return function(e){var t=e.theme,r=e.focusBorderColor,n=e.errorBorderColor,a=Object(h.h)(t.colors,r,r),o=Object(h.h)(t.colors,n,n);return g({},O,{borderBottom:"2px",borderColor:"inherit",rounded:0,px:void 0,bg:"transparent",_focus:{zIndex:1,borderColor:a},_invalid:{borderColor:o}})}(e);case"unstyled":return m;case"filled":return function(e){var t=e.theme,r=e.focusBorderColor,n=e.errorBorderColor,a=e.colorMode,o=Object(h.h)(t.colors,r,r),i=Object(h.h)(t.colors,n,n);return g({},O,{border:"2px",borderColor:"transparent",bg:{light:"gray.100",dark:"whiteAlpha.50"}[a],_hover:{bg:{light:"gray.200",dark:"whiteAlpha.100"}[a]},_disabled:{opacity:"0.4",cursor:"not-allowed"},_focus:{zIndex:1,bg:"transparent",borderColor:o},_invalid:{borderColor:i}})}(e);case"outline":return function(e){var t=e.theme,r=e.colorMode,n=e.focusBorderColor,a=e.errorBorderColor,o=Object(h.h)(t.colors,n,n),i=Object(h.h)(t.colors,a,a);return g({},O,{border:"1px",borderColor:{light:"inherit",dark:"whiteAlpha.50"}[r],bg:{light:"white",dark:"whiteAlpha.100"}[r],_hover:{borderColor:{light:"gray.300",dark:"whiteAlpha.200"}[r]},_disabled:{opacity:"0.4",cursor:"not-allowed"},_focus:{zIndex:1,borderColor:o,boxShadow:"0 0 0 1px "+o},_invalid:{borderColor:i,boxShadow:"0 0 0 1px "+i}})}(e);default:return{}}},j={display:"flex",alignItems:"center",position:"relative",transition:"all 0.2s",outline:"none",appearance:"none"},w={lg:{fontSize:"lg",px:4,height:12,rounded:"md"},md:{fontSize:"md",px:4,height:10,rounded:"md"},sm:{fontSize:"sm",px:3,height:8,rounded:"sm"}},x=function(e){var t=g({},e,{theme:Object(p.b)(),colorMode:Object(f.c)().colorMode});return g({width:e.isFullWidth?"100%":void 0},j,{},function(e){return w[e.size]}(t),{},y(t))},C=Object(c.forwardRef)((function(e,t){e.size,e.variant;var r=e.as,n=e["aria-label"],o=e["aria-describedby"],c=e.isReadOnly,s=(e.isFullWidth,e.isDisabled,e.isInvalid,e.isRequired,e.focusBorderColor,e.errorBorderColor,i()(e,["size","variant","as","aria-label","aria-describedby","isReadOnly","isFullWidth","isDisabled","isInvalid","isRequired","focusBorderColor","errorBorderColor"])),b=x(e),p=Object(u.b)(e);return Object(l.d)(d.a,a()({ref:t,as:r,readOnly:p.isReadOnly,"aria-readonly":c,disabled:p.isDisabled,"aria-label":n,"aria-invalid":p.isInvalid,required:p.isRequired,"aria-required":p.isRequired,"aria-disabled":p.isDisabled,"aria-describedby":o},b,s))}));C.displayName="Input",C.defaultProps={size:"md",as:"input",variant:"outline",isFullWidth:!0,focusBorderColor:"blue.500",errorBorderColor:"red.500"};t.a=C},IP4Q:function(e,t,r){"use strict";var n=r("pVnL"),a=r.n(n),o=r("lSNA"),i=r.n(o),l=r("8OQS"),c=r.n(l),u=r("qKvR"),d=r("q1tI"),s=r("BMxC"),b=r("D7Da");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var f=Object(d.forwardRef)((function(e,t){var r=e.size,n=e.variantColor,o=e.variant,l=e.isAttached,f=e.spacing,h=void 0===f?2:f,v=e.children,g=c()(e,["size","variantColor","variant","isAttached","spacing","children"]),O=Object(b.b)(v),m=O.map((function(e,t){var a=0===t,c=t===O.length-1;return Object(d.cloneElement)(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({size:r||e.props.size,variantColor:e.props.variantColor||n,variant:e.props.variant||o,_focus:{boxShadow:"outline",zIndex:1}},!c&&!l&&{mr:h},{},a&&l&&{roundedRight:0},{},c&&l&&{roundedLeft:0},{},!c&&l&&{borderRight:0},{},!a&&!c&&l&&{rounded:0}))}));return Object(u.d)(s.a,a()({ref:t,display:"inline-block"},g),m)}));t.a=f},KEox:function(e,t,r){"use strict";var n=r("pVnL"),a=r.n(n),o=r("8OQS"),i=r.n(o),l=r("qKvR"),c=r("BMxC"),u=r("q1tI"),d=Object(u.forwardRef)((function(e,t){var r=e.orientation,n=i()(e,["orientation"]),o="vertical"===r?{borderLeft:"0.0625rem solid",height:"auto",mx:2}:{borderBottom:"0.0625rem solid",width:"auto",my:2};return Object(l.d)(c.a,a()({ref:t,as:"hr","aria-orientation":r,border:"0",opacity:"0.6"},o,{borderColor:"inherit"},n))}));t.a=d},LqLE:function(e,t,r){"use strict";r.d(t,"a",(function(){return C})),r.d(t,"b",(function(){return k}));var n=r("pVnL"),a=r.n(n),o=r("8OQS"),i=r.n(o),l=r("qKvR"),c=r("q1tI"),u=r("BMxC"),d=r("w0db"),s=r("lSNA"),b=r.n(s),p=r("8hg0"),f=r("CjxU"),h=r("mf32");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t=e.color,r=e.theme.colors,n=r[t]&&r[t][200];return{light:{bg:t+".100"},dark:{bg:Object(p.b)(n,"lowest")}}},m=function(e){switch(e.variant){case"solid":return function(e){var t=e.color;return{light:{bg:t+".500",color:"white"},dark:{bg:t+".200",color:"gray.900"}}}(e);case"subtle":return O(e);case"top-accent":return function(e){var t=e.color;return{light:g({pt:2},O(e).light,{borderTop:"4px",borderColor:t+".500"}),dark:g({pt:2},O(e).dark,{borderTop:"4px",borderColor:t+".200"})}}(e);case"left-accent":return function(e){var t=e.color;return{light:g({pl:3},O(e).light,{borderLeft:"4px",borderColor:t+".500"}),dark:g({pl:3},O(e).dark,{borderLeft:"4px",borderColor:t+".200"})}}(e);default:return{}}},y={display:"flex",alignItems:"center",position:"relative",overflow:"hidden",pl:4,pr:4,pt:3,pb:3},j=function(e){var t=Object(h.c)().colorMode,r=g({},e,{theme:Object(f.b)()});return g({},y,{},m(r)[t])},w={info:{icon:"info",color:"blue"},warning:{icon:"warning-2",color:"orange"},success:{icon:"check-circle",color:"green"},error:{icon:"warning",color:"red"}},x=Object(c.createContext)(),C=function(e){var t=e.status,r=void 0===t?"info":t,n=e.variant,o=void 0===n?"subtle":n,c=i()(e,["status","variant"]),d=j({variant:o,color:w[r]&&w[r].color}),s={status:r,variant:o};return Object(l.d)(x.Provider,{value:s},Object(l.d)(u.a,a()({role:"alert"},d,c)))},k=function(e){var t=function(){var e=Object(c.useContext)(x);if(void 0===e)throw new Error("useAlertContext must be used within a AlertContextProvider");return e}(),r=t.status,n=function(e){var t=e.variant,r=e.color,n=Object(h.c)().colorMode;if(["left-accent","top-accent","subtle"].includes(t))return{light:{color:r+".500"},dark:{color:r+".200"}}[n]}({variant:t.variant,color:w[r]&&w[r].color});return Object(l.d)(d.a,a()({mr:3,size:5,name:w[r]&&w[r].icon},n,e))}},XZ7F:function(e,t,r){"use strict";var n=r("q1tI");t.a=function(e){var t=Object(n.useState)(Boolean(e)),r=t[0],a=t[1],o=Object(n.useCallback)((function(){return a(!1)}),[]);return{isOpen:r,onOpen:Object(n.useCallback)((function(){return a(!0)}),[]),onClose:o,onToggle:Object(n.useCallback)((function(){return a((function(e){return!e}))}),[])}}},bLGy:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return r("81Wl")}])},"we/t":function(e,t,r){"use strict";r.d(t,"b",(function(){return d}));var n=r("pVnL"),a=r.n(n),o=r("8OQS"),i=r.n(o),l=r("qKvR"),c=r("q1tI"),u=r("BMxC"),d=function(e){var t=b();return t?Object.keys(t).reduce((function(r,n){return r[n]=e[n],t&&null==e[n]&&(r[n]=t[n]),r}),{}):e},s=Object(c.createContext)(),b=function(){return Object(c.useContext)(s)},p=Object(c.forwardRef)((function(e,t){var r=e.isInvalid,n=e.isRequired,o=e.isDisabled,c=e.isReadOnly,d=i()(e,["isInvalid","isRequired","isDisabled","isReadOnly"]),b={isRequired:n,isDisabled:o,isInvalid:r,isReadOnly:c};return Object(l.d)(s.Provider,{value:b},Object(l.d)(u.a,a()({role:"group",ref:t},d)))}));p.displayName="FormControl",t.a=p},zIq6:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("wx14"),a=r("ODXe"),o=r("q1tI"),i=r.n(o),l=r("IP4Q"),c=r("eJLp"),u=r("yI6m"),d=r("OQ2h"),s=r("Z6YE"),b=r("zmG3"),p=r("iBPG"),f=i.a.createElement;function h(e){var t=e.hash,r=e.onComplete,i=Object(s.b)(),h=i.library,v=i.chainId,g=Object(b.i)(),O=Object(a.a)(g,2)[1].removeTransaction,m=Object(o.useState)(),y=m[0],j=m[1];return Object(o.useEffect)((function(){if(h){var e=!0;return h.waitForTransaction(t).then((function(t){e&&(r&&r(),j(1===t.status))})),function(){e=!1}}}),[h,t]),f(l.a,{spacing:0},f(c.a,Object(n.a)({as:"a",variantColor:"boolean"===typeof y?y?"green":"red":"blue",leftIcon:"boolean"===typeof y?y?"check-circle":"warning":function(){return f(u.a,{size:"sm",mr:"0.5rem",ml:"-0.25rem"})},rightIcon:"external-link",style:{borderTopRightRadius:0,borderBottomRightRadius:0}},{href:Object(p.e)(p.b.Transaction,[v,t]),target:"_blank",rel:"noopener noreferrer"}),Object(p.j)(t,2)),f(d.a,{icon:"close",variantColor:"boolean"===typeof y?y?"green":"red":"blue","aria-label":"Close",style:{borderTopLeftRadius:0,borderBottomLeftRadius:0},borderLeft:"1px solid white",onClick:function(){O(v,t)}}))}}},[["bLGy",1,0,6,8,2,3,4,5,7,10,9,12,14]]]);