import{c as n,_ as m,d as y,u as t,e as s,f as o,g as l,j as r,t as u,p as k,F as T,z as F,J as I,A as v,H as p}from"./plugin-vue_export-helper.147b70e9.js";import{u as B,a as L,N as H}from"./app.12949a32.js";function x(){const i=B();return n(()=>i.value.frontmatter)}const C={key:0,class:"home-hero"},N={key:0,class:"figure"},D=["src","alt"],w={key:1,id:"main-title",class:"title"},S={key:2,class:"description"},V=y({setup(i){const a=L(),e=x(),_=n(()=>e.value.heroImage||f.value||c.value||g.value),f=n(()=>e.value.heroText!==null),$=n(()=>e.value.heroText||a.value.title),c=n(()=>e.value.tagline!==null),h=n(()=>e.value.tagline||a.value.description),g=n(()=>e.value.actionLink&&e.value.actionText),A=n(()=>e.value.altActionLink&&e.value.altActionText);return(d,ee)=>t(_)?(s(),o("header",C,[d.$frontmatter.heroImage?(s(),o("figure",N,[l("img",{class:"image",src:d.$withBase(d.$frontmatter.heroImage),alt:d.$frontmatter.heroAlt},null,8,D)])):r("v-if",!0),t(f)?(s(),o("h1",w,u(t($)),1)):r("v-if",!0),t(c)?(s(),o("p",S,u(t(h)),1)):r("v-if",!0),t(g)?(s(),k(H,{key:3,item:{link:t(e).actionLink,text:t(e).actionText},class:"action"},null,8,["item"])):r("v-if",!0),t(A)?(s(),k(H,{key:4,item:{link:t(e).altActionLink,text:t(e).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)}});var b=m(V,[["__scopeId","data-v-e065f044"]]);const j={key:0,class:"home-features"},z={class:"wrapper"},E={class:"container"},J={class:"features"},P={key:0,class:"title"},R={key:1,class:"details"},q=y({setup(i){const a=x(),e=n(()=>a.value.features&&a.value.features.length>0),_=n(()=>a.value.features?a.value.features:[]);return(f,$)=>t(e)?(s(),o("div",j,[l("div",z,[l("div",E,[l("div",J,[(s(!0),o(T,null,F(t(_),(c,h)=>(s(),o("section",{key:h,class:"feature"},[c.title?(s(),o("h2",P,u(c.title),1)):r("v-if",!0),c.details?(s(),o("p",R,u(c.details),1)):r("v-if",!0)]))),128))])])])])):r("v-if",!0)}});var G=m(q,[["__scopeId","data-v-9c9c2344"]]);const K={},M={key:0,class:"footer"},O={class:"container"},Q={class:"text"};function U(i,a){return i.$frontmatter.footer?(s(),o("footer",M,[l("div",O,[l("p",Q,u(i.$frontmatter.footer),1)])])):r("v-if",!0)}var W=m(K,[["render",U],["__scopeId","data-v-44324124"]]);const X={class:"home","aria-labelledby":"main-title"},Y={class:"home-content"},Z=y({setup(i){return(a,e)=>{const _=I("Content");return s(),o("main",X,[v(b),p(a.$slots,"hero",{},void 0,!0),v(G),l("div",Y,[v(_)]),p(a.$slots,"features",{},void 0,!0),v(W),p(a.$slots,"footer",{},void 0,!0)])}}});var ae=m(Z,[["__scopeId","data-v-1fd43058"]]);export{ae as default};
