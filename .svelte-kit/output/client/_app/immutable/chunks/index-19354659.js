function N(){}const lt=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function F(){return Object.create(null)}function b(t){t.forEach(J)}function K(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Bt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ot(t){return Object.keys(t).length===0}function ut(t,...e){if(t==null)return N;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(ut(e,n))}function Rt(t,e,n,r){if(t){const s=W(t,e,n,r);return t[0](s)}}function W(t,e,n,r){return t[1]&&r?ct(n.ctx.slice(),t[1](r(e))):n.ctx}function Tt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],i=Math.max(e.dirty.length,s.length);for(let c=0;c<i;c+=1)u[c]=e.dirty[c]|s[c];return u}return e.dirty|s}return e.dirty}function Ft(t,e,n,r,s,u){if(s){const i=W(e,n,r,u);t.p(i,s)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const Q=typeof window<"u";let at=Q?()=>window.performance.now():()=>Date.now(),R=Q?t=>requestAnimationFrame(t):N;const x=new Set;function U(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&R(U)}function ft(t){let e;return x.size===0&&R(U),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let q=!1;function _t(){q=!0}function dt(){q=!1}function ht(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<e.length;o++){const _=e[o];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const o=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=o?s+1:ht(1,s,a=>e[n[a]].claim_order,o))-1;r[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const u=[],i=[];let c=e.length-1;for(let l=n[s]+1;l!=0;l=r[l-1]){for(u.push(e[l-1]);c>=l;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);u.reverse(),i.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<i.length;l++){for(;o<u.length&&i[l].claim_order>=u[o].claim_order;)o++;const _=o<u.length?u[o]:null;t.insertBefore(i[l],_)}}function pt(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=Y("style");return gt(V(t),e),e.sheet}function gt(t,e){return pt(t.head||t,e),e.sheet}function xt(t,e){if(q){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){q&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function Gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function bt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function Jt(){return T(" ")}function Kt(){return T("")}function Wt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,r,s=!1){wt(t);const u=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const l=n(c);return l===void 0?t.splice(i,1):t[i]=l,s||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const l=n(c);return l===void 0?t.splice(i,1):t[i]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function tt(t,e,n,r){return Z(t,s=>s.nodeName===e,s=>{const u=[];for(let i=0;i<s.attributes.length;i++){const c=s.attributes[i];n[c.name]||u.push(c.name)}u.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Ut(t,e,n){return tt(t,e,n,Y)}function Vt(t,e,n){return tt(t,e,n,bt)}function vt(t,e){return Z(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>T(e),!0)}function Xt(t){return vt(t," ")}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Et(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}const M=new Map;let O=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:yt(e),rules:{}};return M.set(t,n),n}function H(t,e,n,r,s,u,i,c=0){const l=16.666/r;let o=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*u(p);o+=p*100+`%{${i(g,1-g)}}
`}const _=o+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Nt(_)}_${c}`,a=V(t),{stylesheet:d,rules:h}=M.get(a)||At(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${s}ms 1 both`,O+=1,f}function St(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),O-=s,O||Ct())}function Ct(){R(()=>{O||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&X(e)}),M.clear())})}let E;function v(t){E=t}function et(){if(!E)throw new Error("Function called outside component initialization");return E}function te(t){et().$$.on_mount.push(t)}function ee(t){et().$$.after_update.push(t)}const w=[],I=[],j=[],G=[],nt=Promise.resolve();let L=!1;function it(){L||(L=!0,nt.then(rt))}function ne(){return it(),nt}function P(t){j.push(t)}const z=new Set;let C=0;function rt(){const t=E;do{for(;C<w.length;){const e=w[C];C++,v(e),jt(e.$$)}for(v(null),w.length=0,C=0;I.length;)I.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];z.has(n)||(z.add(n),n())}j.length=0}while(w.length);for(;G.length;)G.pop()();L=!1,z.clear(),v(t)}function jt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let $;function kt(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function B(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const k=new Set;let m;function ie(){m={r:0,c:[],p:m}}function re(){m.r||b(m.c),m=m.p}function Mt(t,e){t&&t.i&&(k.delete(t),t.i(e))}function se(t,e,n,r){if(t&&t.o){if(k.has(t))return;k.add(t),m.c.push(()=>{k.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Ot={duration:0};function le(t,e,n,r){let s=e(t,n),u=r?0:1,i=null,c=null,l=null;function o(){l&&St(t,l)}function _(a,d){const h=a.b-u;return d*=Math.abs(h),{a:u,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=lt,tick:p=N,css:g}=s||Ot,D={start:at()+d,b:a};a||(D.group=m,m.r+=1),i||c?c=D:(g&&(o(),l=H(t,u,a,h,d,y,g)),a&&p(0,1),i=_(D,h),P(()=>B(t,a,"start")),ft(A=>{if(c&&A>c.start&&(i=_(c,h),c=null,B(t,i.b,"start"),g&&(o(),l=H(t,u,i.b,i.duration,0,y,s.css))),i){if(A>=i.end)p(u=i.b,1-u),B(t,i.b,"end"),c||(i.b?o():--i.group.r||b(i.group.c)),i=null;else if(A>=i.start){const st=A-i.start;u=i.a+i.d*y(st/i.duration),p(u,1-u)}}return!!(i||c)}))}return{run(a){K(s)?kt().then(()=>{s=s(),f(a)}):f(a)},end(){o(),i=c=null}}}function ce(t){t&&t.c()}function oe(t,e){t&&t.l(e)}function Pt(t,e,n,r){const{fragment:s,on_mount:u,on_destroy:i,after_update:c}=t.$$;s&&s.m(e,n),r||P(()=>{const l=u.map(J).filter(K);i?i.push(...l):b(l),t.$$.on_mount=[]}),c.forEach(P)}function qt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(w.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,r,s,u,i,c=[-1]){const l=E;v(t);const o=t.$$={fragment:null,ctx:null,props:u,update:N,not_equal:s,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:F(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};i&&i(o.root);let _=!1;if(o.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return o.ctx&&s(o.ctx[f],o.ctx[f]=h)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](h),_&&Dt(t,f)),a}):[],o.update(),_=!0,b(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){_t();const f=$t(e.target);o.fragment&&o.fragment.l(f),f.forEach(X)}else o.fragment&&o.fragment.c();e.intro&&Mt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),dt(),rt()}v(l)}class ae{$destroy(){qt(this,1),this.$destroy=N}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{N as A,Rt as B,Ft as C,Ht as D,Tt as E,xt as F,Lt as G,bt as H,Vt as I,Wt as J,b as K,lt as L,Gt as M,Bt as N,P as O,le as P,ae as S,Jt as a,It as b,Xt as c,re as d,Kt as e,Mt as f,ie as g,X as h,ue as i,ee as j,Y as k,Ut as l,$t as m,Qt as n,te as o,Zt as p,T as q,vt as r,zt as s,se as t,Yt as u,ce as v,oe as w,Pt as x,qt as y,ne as z};
