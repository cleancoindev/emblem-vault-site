_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{CKsJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nft",function(){return n("Z8wp")}])},Z8wp:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Z}));var a=n("q1tI"),r=n.n(a),o=n("wx14"),i=n("o0o1"),c=n.n(i),s=n("HaE+"),l=n("XZ7F"),u=n("Weur"),d=n("BMxC"),f=n("Yn+B"),p=n("sK1y"),m=n("pboS"),b=n("FpzS"),h=n("7fKF"),g=n("IP4Q"),v=n("eJLp"),w=n("MKZ1"),O=n("jgTY"),j=n("LqLE"),y=n("bQFp"),S=n("8Kt/"),x=n.n(S),C=n("Z6YE"),k=n("nOHt"),T=n("Ute3"),E=n("Y1ui"),_=n.n(E),A=n("a6RD"),I=n.n(A),H=n("iBPG"),N=n("zIq6"),F=n("N39q"),G=n("21eR"),P=n("c+OE"),V=n.n(P),L=n("NFKh"),J=n.n(L),K=n("sd7e"),W=n("IujW"),R=n.n(W),M=n("wH4i"),q=n.n(M),B=n("PLxQ"),z=r.a.createElement,D=I()((function(){return Promise.all([n.e(10),n.e(16)]).then(n.bind(null,"X/Jl"))}),{loadableGenerated:{webpack:function(){return["X/Jl"]},modules:["./AddrModal"]}}),U=I()((function(){return Promise.all([n.e(10),n.e(17)]).then(n.bind(null,"0bCS"))}),{loadableGenerated:{webpack:function(){return["0bCS"]},modules:["./KeysModal"]}});function Y(){var e,t=Object(C.b)(),n=t.account,i=t.chainId,S=t.library,E=Object(k.useRouter)().query,A=Object(a.useState)(!1),I=A[0],P=A[1],L=Object(a.useState)(E.key),W=L[0],M=L[1],Y=Object(a.useState)(E.framed||!0),X=Y[0],Z=(Y[1],Object(a.useState)(E.id)),Q=Z[0],$=(Z[1],Object(a.useState)(E.experimental)),ee=($[0],$[1],Object(a.useState)("")),te=ee[0],ne=ee[1],ae=Object(a.useState)(""),re=ae[0],oe=ae[1],ie=Object(a.useState)(""),ce=ie[0],se=ie[1],le=Object(a.useState)([]),ue=le[0],de=le[1],fe=Object(a.useState)([]),pe=fe[0],me=fe[1],be=Object(a.useState)([]),he=be[0],ge=be[1],ve=Object(a.useState)(!1),we=ve[0],Oe=ve[1],je=Object(a.useState)(0),ye=je[0],Se=je[1],xe=Object(a.useState)(null),Ce=xe[0],ke=xe[1],Te=Object(a.useState)(null),Ee=Te[0],_e=Te[1],Ae=Object(a.useState)(""),Ie=Ae[0],He=Ae[1],Ne=Object(a.useState)(""),Fe=Ne[0],Ge=Ne[1],Pe=Object(a.useState)({loaded:!1}),Ve=Pe[0],Le=Pe[1],Je=Object(a.useState)(!1),Ke=Je[0],We=Je[1],Re=Object(a.useState)(!1),Me=Re[0],qe=Re[1],Be=Object(a.useState)("claimed"),ze=Be[0],De=Be[1],Ue=Object(a.useState)(null),Ye=Ue[0],Xe=Ue[1],Ze=Object(a.useState)(""),Qe=Ze[0],$e=Ze[1],et=Object(a.useState)(""),tt=et[0],nt=et[1],at=Object(a.useState)(""),rt=at[0],ot=at[1],it=Object(a.useState)([]),ct=it[0],st=it[1],lt=Object(a.useState)(!1),ut=lt[0],dt=lt[1],ft=Object(a.useState)(""),pt=ft[0],mt=ft[1],bt=Object(a.useState)(!1),ht=bt[0],gt=bt[1],vt=Object(a.useState)(""),wt=vt[0],Ot=vt[1],jt=Object(a.useState)(!1),yt=jt[0],St=jt[1],xt=Object(a.useState)(!1),Ct=(xt[0],xt[1],Object(a.useState)(!1)),kt=Ct[0],Tt=Ct[1],Et=Object(a.useState)(!1),_t=Et[0],At=Et[1],It=Object(a.useState)(!1),Ht=It[0],Nt=It[1],Ft=Object(a.useState)(""),Gt=Ft[0],Pt=Ft[1],Vt=Object(a.useState)(!1),Lt=Vt[0],Jt=Vt[1],Kt=Object(a.useState)(!1),Wt=Kt[0],Rt=Kt[1],Mt=Object(a.useState)(null),qt=Mt[0],Bt=Mt[1],zt=Object(a.useState)(!1),Dt=zt[0],Ut=zt[1],Yt=Object(a.useState)(null),Xt=Yt[0],Zt=Yt[1],Qt=Object(G.b)(F.p.vaultHandler[i],F.p.vaultHandlerAbi,!0),$t=Object(G.b)(F.p.emblemVault[i],F.p.emblemAbi,!0),en=Object(l.a)(),tn=en.isOpen,nn=en.onOpen,an=en.onClose,rn=Object(l.a)(),on=rn.isOpen,cn=rn.onOpen,sn=rn.onClose,ln=Object(l.a)(),un=ln.isOpen,dn=ln.onToggle,fn=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return wn(),e.next=3,fetch(F.h+"/meta/"+Q+"?experimental=true",{method:"GET",headers:{"Content-Type":"application/json",service:"evmetadata"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent).name?(mn(n),vn(n),dt(!1),St(!1)):(Le({loaded:!0}),St(!0));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pn=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F.h+"/witness/"+Q,{method:"GET",headers:{"Content-Type":"application/json",service:"evmetadata",chainid:i.toString()}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(!(a=e.sent).signature){e.next=11;break}return console.log("witness",a),e.abrupt("return",t(a));case 11:return e.abrupt("return",t(!1));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),mn=function(e){X&&!e.image.includes("framed=")&&!e.image.includes("http")&&(e.image=e.image+"&framed="+X),ne(e.name),se(e.image),oe(e.description),Se(e.totalValue||0),de(ue.concat(e.values)),me(e.attributes.filter((function(e){return"key"===e.trait_type}))),oe(e.description),ge(e.addresses),ke("mainnet"==e.network?1:"rinkeby"==e.network?4:"mumbai"==e.network?80001:"matic"==e.network?137:97),De(e.status),"claimed"===ze&&Xe(e.claimedBy),Le({loaded:!0});var t=e.addresses.filter((function(e){return e.address.includes("private:")})).length>0;Oe(t),setTimeout((function(){!t&&gn(e.values,e.addresses.filter((function(e){return"ETH"===e.coin}))[0].address,(function(e){de(e)}))}),5)},bn=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F.h+"/eth/balance/"+t,{method:"GET",headers:{"Content-Type":"application/json",service:"evmetadata"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,Se(Number(ye)+Number(r.totalValue)),e.abrupt("return",n(r.values));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),hn=function(){var e=Object(s.a)(c.a.mark((function e(t,n,a){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F.h+"/btc/balance/"+n,{method:"GET",headers:{"Content-Type":"application/json",service:"evmetadata"}});case 2:return r=e.sent,e.next=5,r.json();case 5:return o=e.sent,e.abrupt("return",a(t.concat(o.values)));case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),gn=function(){var e=Object(s.a)(c.a.mark((function e(t,n,a){var r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F.h+"/eth/nft/"+n,{method:"GET",headers:{"Content-Type":"application/json",service:"evmetadata"}});case 2:return r=e.sent,e.next=5,r.json();case 5:if(!((o=e.sent).length>0)){e.next=10;break}return e.abrupt("return",a(t.concat(o)));case 10:return e.abrupt("return",a(t));case 11:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),vn=function(e){localStorage.setItem(n+"_"+i+"_"+Q+"_vault",JSON.stringify(e))},wn=function(){var e=JSON.parse(localStorage.getItem(n+"_"+i+"_"+Q+"_vault"));e&&(Le({loaded:!0}),mn(e),dt(!0))},On=function(){var e=localStorage.getItem(n+"_"+i+"_"+Q+"_mintPassword");e&&Ht&&M(e)},jn=function(){var e=Object(s.a)(c.a.mark((function e(t,n,a){var r,o,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new Headers).append("chainId",i.toString()),r.append("service","evmetadata"),r.append("Content-Type","application/json"),o=JSON.stringify({signature:t}),e.next=7,fetch(F.h+"/claim/"+n,{method:"POST",headers:r,body:o,redirect:"follow"});case 7:return s=e.sent,e.next=10,s.json();case 10:return l=e.sent,e.abrupt("return",a(l));case 12:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),yn=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return!1,e.prev=1,e.next=4,$t.ownerOf(Q);case 4:return t=e.sent,e.next=7,Qt.getPreTransfer(Q);case 7:return a=e.sent,e.next=10,$t.isApprovedForAll(n,F.p.vaultHandler[i]);case 10:r=e.sent,P(r),Nt("0x0000000000000000000000000000000000000000"!==a._from),Zt(t),We(t===n),On(),e.next=20;break;case 18:e.prev=18,e.t0=e.catch(1);case 20:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){}));var Sn=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.getSigner(n).signMessage("Claim: "+Q).then((function(e){jn(e,Q,(function(e){$e(e.decrypted.phrase),nt(e.decrypted.keys.filter((function(e){return"btc"===e.coin}))[0].privkey),ot(e.decrypted.keys.filter((function(e){return"eth"===e.coin}))[0].privkey),st(e.decrypted.values),cn()}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xn=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$t.transferFrom(n,F.c,Q).then((function(e){var t=e.hash;qe(!0),setTimeout((function(){_e(t)}),100)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Cn=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,a,r,o,i,s,l,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=function(e){for(var c=0;c<r-i;c++){var u=Math.floor(t.length*Math.random()),d=t.charAt(u);s+=d}o==a-1&&i++,o==a&&(l+=n.charAt(i-1),o=0),mt(l+s),s=""},!ht){e.next=3;break}return e.abrupt("return");case 3:gt(!0),t="abcdefghijklmnopqrstuvwxyz",5,r=(n="Decrypting").length,o=0,i=0,s="",l="",function e(t){setTimeout((function(){--t?e(t):gt(!1),u(t),o+=1}),5)}(r*(a=8)+1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function kn(e){return e.split("\n\n\n\n")[0].trim()}function Tn(e){wt&&(e=wt),Cn();var t=he[0].address.replace("private:","");try{var n=J.a.AES.decrypt(t,e);JSON.parse(n.toString(J.a.enc.Utf8)),Oe(!1),Ot(e),ge(function(e){return he.forEach((function(t){var n=t.address.replace("private:","");t.address=function(e,t){var n=J.a.AES.decrypt(e,t);return JSON.parse(n.toString(J.a.enc.Utf8))}(n,e)})),he}(e)),bn(he.filter((function(e){return"ETH"===e.coin}))[0].address,(function(e){hn(e,he.filter((function(e){return"BTC"===e.coin}))[0].address,(function(e){gn(e,he.filter((function(e){return"ETH"===e.coin}))[0].address,(function(e){de(e.concat(ue))}))}))}))}catch(a){}}return Object(a.useEffect)((function(){fn()}),[]),Object(a.useEffect)((function(){n&&i&&Ce&&i==Ce&&yn()})),z(r.a.Fragment,null,z(x.a,null,z("meta",{name:"twitter:card",content:"summary_large_image"}),z("meta",{name:"twitter:site",content:"Emblem.Finance"}),z("meta",{name:"twitter:title",content:te}),z("meta",{name:"twitter:description",content:kn(re)}),z("meta",{name:"twitter:image",content:ce})),z(D,{isOpen:tn,onClose:an,addrCoin:Ie,addrAddr:Fe}),z(U,{isOpen:on,onClose:sn,mnemonic:Qe,privKeyBTC:tt,privKeyETH:rt,privValues:ct}),z(_.a,{loaded:Ve.loaded},ut?z(T.a,null):"",yt?z(f.a,{align:"center"},z(y.a,{width:"md",src:"https://starwarsblog.starwars.com/wp-content/uploads/2017/06/25-star-wars-quotes-obi-wan-kenobi-identification-tall.jpg"}),z(p.a,null,"THESE ARE NOT THE VAULTS YOU ARE LOOKING FOR"," ",z(m.a,{color:"#638cd8",href:"../create"},"CREATE ONE HERE!"))):z(V.a,{className:"Tilt",options:{max:0,scale:1}},z(u.a,{width:"full",align:"center",justifyContent:"center"},z(d.a,{maxW:"sm",borderWidth:"1px",borderColor:Ce!=i?"orange.500":"claimed"==ze?"green.500":null,rounded:"lg",overflow:"hidden",alignItems:"center",minW:390},Ce!=i?z(d.a,{mt:"1",fontWeight:"semibold",as:"h3",lineHeight:"tight",p:2,textAlign:"center",textTransform:"uppercase",alignItems:"center",color:"orange.500"},"BEWARE: Vault is on a different network than you are."):null,z(d.a,{mt:"1",fontWeight:"semibold",as:"h3",lineHeight:"tight",p:2,textAlign:"center",textTransform:"uppercase",alignItems:"center"},te,we?null:": ~$"+ye),z(f.a,{align:"center"},z(B.b,{url:ce})),z(f.a,{align:"center"},z(d.a,{mt:"2",ml:"4",lineHeight:"tight"},z(f.a,null,z(p.a,{fontSize:"xs"},Ce==i?z(m.a,{href:"./vaultlist?address="+Xt},"Owner: ",Xt):null),z(p.a,{mt:2,as:"h4",ml:"4",mr:"4",fontSize:"xs",fontStyle:"italic"},z(R.a,{plugins:[q.a],children:kn(re)}))))),z(d.a,{p:"6"},z(d.a,{d:"flex",alignItems:"baseline"},z(d.a,{color:"gray.500",letterSpacing:"wide",fontSize:"sm",ml:"2"},z(p.a,{as:"h4",fontWeight:"semibold"},"Current Contents:"),we?z(r.a.Fragment,null,z(p.a,{pb:2,color:pt?"green.500":null},pt||"Contents hidden. Enter password to unlock."),z(b.a,{type:"password",id:"vault-password",onChange:function(e){return Tn(e.target.value)},"aria-describedby":"password-helper-text"})):ue.length?ue.map((function(e){return z(p.a,{key:e.name,isTruncated:!0},e.address&&"nft"!==e.type?z(h.a,{"aria-label":e.name,hasArrow:!0,label:"Add "+e.symbol+" to wallet",placement:"top"},z(m.a,{onClick:function(){Object(K.addTokenToWallet)({address:e.address,symbol:e.symbol,decimals:e.decimals,image:e.image?e.image:null})}},"+")):null,"(",e.coin.toLowerCase(),")"," ",e.name," :"," ",e.balance?e.balance:"nft"==e.type?z(m.a,{href:e.external_url,isExternal:!0},"View NFT"):null)})):null,pe.length?pe.map((function(e){return z(p.a,null,"Data: ",e.attribute_key)})):pe.length||ue.length?null:z(p.a,null,"Nothing in here! Fill 'er up!"))),we?null:z(d.a,{d:"flex",alignItems:"baseline",justifyContent:"space-between",mt:"4"},z(g.a,{justifyContent:"space-between",spacing:6},he.map((function(e){return z(v.a,{key:e.address,onClick:function(){He(e.coin),Ge(e.address),nn()}},"Put ","ETH"==e.coin?e.coin+"/ERC20":e.coin," In")})))),"claimed"===ze||1!==Ce&&4!==Ce?null:z(d.a,{d:"flex",alignItems:"baseline",justifyContent:"space-between",mt:"4"},z(v.a,Object(o.a)({width:"100%",as:"a"},{href:"https://"+(4==Ce?"rinkeby.":"")+"opensea.io/assets/"+F.p.emblemVault[Ce]+"/"+Q,target:"_blank",rel:"noopener noreferrer"}),Ke?"Sell (Opensea)":"Make an Offer (Opensea)")),"claimed"!==ze&&Ke&&!Ht?z(r.a.Fragment,null,z(d.a,{d:"flex",alignItems:"baseline",justifyContent:"space-between",mt:"4",width:"100%"},z(f.a,{direction:"column",align:"center",width:"100%"},z(v.a,{width:"100%",onClick:dn},"Transfer Vault"),z(w.a,{isOpen:un},z(d.a,{d:"flex",alignItems:"baseline",justifyContent:"space-between",mt:"2",width:"100%"},z(O.a,{htmlFor:"owner-address"},"Address"),z(b.a,{mt:1,type:"text",id:"transferAddress",value:qt||"",onChange:function(e){console.log("Transfer to",e.target.value),Bt(e.target.value)},autoComplete:"off"})),z(d.a,{d:"flex",alignItems:"baseline",justifyContent:"space-between",mt:"2",width:"100%"},z(v.a,{isDisabled:!Object(H.h)(qt),onClick:function(){dn(),Ut(!0),$t.transferFrom(n,qt,Q).then((function(e){var t=e.hash;_e(t)})).catch((function(e){}))}},"Transfer Now")))))):null,Ke&&!Ht?z(r.a.Fragment,null,z(d.a,{d:"flex",alignItems:"baseline",justifyContent:"space-between",mt:"4"},z(v.a,{width:"100%",onClick:function(){if(!I)return At(!0),void $t.setApprovalForAll(F.p.vaultHandler[i],!0).then((function(e){var t=e.hash;setTimeout((function(){_e(t)}),100)})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)?console.log("tx failed.",e):At(!1)}));var t=J.a.lib.WordArray.random(16).toString(),n=J.a.SHA256(t).toString();console.log("plain",t),console.log("sha",n),Pt(t),e=n,setTimeout((function(){console.log("transferImage","0x"+e),Rt(!0),Qt.addPreTransfer(Q,"0x"+e).then((function(e){var t=e.hash;_e(t),console.log("Set Pre Transfering True",Wt)})).catch((function(e){(null===e||void 0===e?void 0:e.code)&&(console.log("Error?"),Rt(!1),Jt(!1),Pt(""))}))}),500)}}," ",I?"Get Link (Send Vault Via Link)":"Approve Gifting"," "))):null,(Lt||W)&&Ht?z(d.a,null,z(m.a,{href:location.protocol+"//"+location.host+"/nft?id="+Q+"&key="+(Gt||W)},"Copy Gift Link"),z(p.a,null,"Password: ",Gt||W)):null,Ht&&Ye!==n?z(r.a.Fragment,null,z(v.a,{mt:2,width:"100%",onClick:function(){console.log(W),Tt(!0),pn((function(e){Qt.transferWithCode(Q,W,n,e.nonce,e.signature).then((function(e){var t=e.hash;setTimeout((function(){_e(t)}),100)})).catch((function(e){Tt(!1),4001!==(null===e||void 0===e?void 0:e.code)&&console.log("tx failed.",e)}))}))}},"Accept"),z(b.a,{mt:2,type:"password",id:"mintPassword",minLength:3,maxLength:200,value:W||"",onChange:function(e){console.log("grrr",e.target.value,W),M(e.target.value)},autoComplete:"off"})):null,"claimed"!==ze&&n&&Ce===i&&Ke?z(d.a,{d:"flex",alignItems:"baseline",justifyContent:"space-between",mt:"4"},z(v.a,{width:"100%",onClick:function(){xn()},isDisabled:Me},Me?"Claiming ...":"Claim (Crack Open Vault)")):"claimed"===ze&&Ye===n&&Ce===i?z(d.a,{d:"flex",alignItems:"baseline",justifyContent:"space-between",mt:"4"},z(v.a,{width:"100%",onClick:Sn},"Get Keys")):null),z(f.a,{direction:"column",align:"center"},"claimed"==ze?z(p.a,{color:"green.500"},"CLAIMED"):null),Ee?z(j.a,{status:"info"},z(j.b,null),kt?"Accepting Your Gift Vault":Me?"Claiming your Vault ...":_t?"Handling Approval Flow ...":Dt?"Transfering Vault ...":"Generating Gift Link ..."):null))),Ee?z(N.a,{hash:Ee,onComplete:function(){!Me||kt||Wt?Wt?(localStorage.setItem(n+"_"+i+"_"+Q+"_mintPassword",Gt),Jt(!0),Rt(!1),_e(null)):kt?(Tt(!1),fn(),_e(null)):_t?(At(!1),fn(),_e(null)):Dt?(Ut(!1),fn(),_e(null)):(console.log("claiming",Me),console.log("accepting",kt),console.log("preTransfering",Wt),console.log("approving",_t),console.log("Unknown state")):(console.log(111111),_e(null),De("claimed"),qe(!1),Xe(n),Sn())}}):null))}var X=r.a.createElement;function Z(){return X(Y,null)}}},[["CKsJ",2,1,5,7,0,3,4,6,9,8,11,12,15,13]]]);