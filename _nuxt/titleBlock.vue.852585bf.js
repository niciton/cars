import{B as U,r as S,C as z,D as j,E as K,G as C,H as N,u as x,m as E,v as R,a as L,o as T,b as I,e as D,t as W,I as J}from"./entry.d601c08b.js";const O=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function V(s,n){n?n={...O,...n}:n=O;const r=F(n);return r.dispatch(s),r.toString()}const $=Object.freeze(["prototype","__proto__","constructor"]);function F(s){let n="",r=new Map;const e=t=>{n+=t};return{toString(){return n},getContext(){return r},dispatch(t){return s.replacer&&(t=s.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let o="";const f=a.length;f<10?o="unknown:["+a+"]":o=a.slice(8,f-1),o=o.toLowerCase();let i=null;if((i=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+i+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):s.ignoreUnknown||this.unkown(t,o);else{let u=Object.keys(t);s.unorderedObjects&&(u=u.sort());let h=[];s.respectType!==!1&&!P(t)&&(h=$),s.excludeKeys&&(u=u.filter(c=>!s.excludeKeys(c)),h=h.filter(c=>!s.excludeKeys(c))),e("object:"+(u.length+h.length)+":");const y=c=>{this.dispatch(c),e(":"),s.excludeValues||this.dispatch(t[c]),e(",")};for(const c of u)y(c);for(const c of h)y(c)}},array(t,a){if(a=a===void 0?s.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const i of t)this.dispatch(i);return}const o=new Map,f=t.map(i=>{const u=F(s);u.dispatch(i);for(const[h,y]of u.getContext())o.set(h,y);return u.toString()});return r=o,f.sort(),this.array(f,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),P(t)?this.dispatch("[native]"):this.dispatch(t.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),s.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,s.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,s.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(s.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const M="[native code] }",G=M.length;function P(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-G)===M}class w{constructor(n,r){n=this.words=n||[],this.sigBytes=r===void 0?n.length*4:r}toString(n){return(n||q).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const q={stringify(s){const n=[];for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},Q={stringify(s){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<s.sigBytes;e+=3){const t=s.words[e>>>2]>>>24-e%4*8&255,a=s.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=s.words[e+2>>>2]>>>24-(e+2)%4*8&255,f=t<<16|a<<8|o;for(let i=0;i<4&&e*8+i*6<s.sigBytes*8;i++)r.push(n.charAt(f>>>6*(3-i)&63))}return r.join("")}},X={parse(s){const n=s.length,r=[];for(let e=0;e<n;e++)r[e>>>2]|=(s.charCodeAt(e)&255)<<24-e%4*8;return new w(r,n)}},Y={parse(s){return X.parse(unescape(encodeURIComponent(s)))}};class Z{constructor(){this._data=new w,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new w,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=Y.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,t),this._data.sigBytes-=a}return new w(r,a)}}class tt extends Z{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const A=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],et=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],B=[];class rt extends tt{constructor(){super(...arguments),this._hash=new w([...A])}reset(){super.reset(),this._hash=new w([...A])}_doProcessBlock(n,r){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],f=e[3],i=e[4],u=e[5],h=e[6],y=e[7];for(let c=0;c<64;c++){if(c<16)B[c]=n[r+c]|0;else{const k=B[c-15],m=(k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3,v=B[c-2],H=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;B[c]=m+B[c-7]+H+B[c-16]}const d=i&u^~i&h,g=t&a^t&o^a&o,l=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),p=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),b=y+p+d+et[c]+B[c],_=l+g;y=h,h=u,u=i,i=f+b|0,f=o,o=a,a=t,t=b+_|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+f|0,e[4]=e[4]+i|0,e[5]=e[5]+u|0,e[6]=e[6]+h|0,e[7]=e[7]+y|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function st(s){return new rt().finalize(s).toString(Q)}function nt(s,n={}){const r=typeof s=="string"?s:V(s,n);return st(r).slice(0,10)}const at=()=>null;function it(...s){var c;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[r,e,t={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??at,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const a=U(),o=()=>a.isHydrating?a.payload.data[r]:a.static.data[r],f=()=>o()!==void 0;a._asyncData[r]||(a._asyncData[r]={data:S(o()??((c=t.default)==null?void 0:c.call(t))??null),pending:S(!f()),error:S(a.payload._errors[r]?z(a.payload._errors[r]):null)});const i={...a._asyncData[r]};i.refresh=i.execute=(d={})=>{if(a._asyncDataPromises[r]){if(d.dedupe===!1)return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if(d._initial&&f())return o();i.pending.value=!0;const g=new Promise((l,p)=>{try{l(e(a))}catch(b){p(b)}}).then(l=>{if(g.cancelled)return a._asyncDataPromises[r];t.transform&&(l=t.transform(l)),t.pick&&(l=ot(l,t.pick)),i.data.value=l,i.error.value=null}).catch(l=>{var p;if(g.cancelled)return a._asyncDataPromises[r];i.error.value=l,i.data.value=x(((p=t.default)==null?void 0:p.call(t))??null)}).finally(()=>{g.cancelled||(i.pending.value=!1,a.payload.data[r]=i.data.value,i.error.value&&(a.payload._errors[r]=z(i.error.value)),delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=g,a._asyncDataPromises[r]};const u=()=>i.refresh({_initial:!0}),h=t.server!==!1&&a.payload.serverRendered;{const d=j();if(d&&!d._nuxtOnBeforeMountCbs){d._nuxtOnBeforeMountCbs=[];const l=d._nuxtOnBeforeMountCbs;d&&(K(()=>{l.forEach(p=>{p()}),l.splice(0,l.length)}),C(()=>l.splice(0,l.length)))}h&&a.isHydrating&&f()?i.pending.value=!1:d&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?d._nuxtOnBeforeMountCbs.push(u):t.immediate&&u(),t.watch&&N(t.watch,()=>i.refresh());const g=a.hook("app:data:refresh",l=>{if(!l||l.includes(r))return i.refresh()});d&&C(g)}const y=Promise.resolve(a._asyncDataPromises[r]).then(()=>i);return Object.assign(y,i),y}function ot(s,n){const r={};for(const e of n)r[e]=s[e];return r}function ht(s,n,r){const[e={},t]=typeof n=="string"?[{},n]:[n,r],a=e.key||nt([t,x(e.baseURL),typeof s=="string"?s:"",x(e.params||e.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const o=a===t?"$f"+a:a,f=E(()=>{let m=s;return typeof m=="function"&&(m=m()),x(m)}),{server:i,lazy:u,default:h,transform:y,pick:c,watch:d,immediate:g,...l}=e,p=R({...l,cache:typeof e.cache=="boolean"?void 0:e.cache}),b={server:i,lazy:u,default:h,transform:y,pick:c,immediate:g,watch:[p,f,...d||[]]};let _;return it(o,()=>{var m;return(m=_==null?void 0:_.abort)==null||m.call(_),_=typeof AbortController<"u"?new AbortController:{},$fetch(f.value,{signal:_.signal,...p})},b)}const ct={class:"title-blocck__wrap"},lt={class:"title-blocck container"},ut={class:"title-blocck__inner"},dt=L({__name:"titleBlock",props:{title:{}},setup(s){return(n,r)=>(T(),I("div",ct,[D("div",lt,[D("div",ut,[D("h1",null,W(n.title),1),J(n.$slots,"default")])])]))}});export{dt as _,ht as u};
