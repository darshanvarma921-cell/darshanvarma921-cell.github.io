import{a as H,r as d,dY as P,j as y,dZ as U,d_ as X}from"./index-BUkhjgDF.js";import{W as q,P as D,S as j,V as I,a as M,b as Y,M as G,O as z}from"./three.module-DI0bCRwR.js";const Q=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,W=`
  uniform float uTime;
  uniform vec3 uResolution;
  uniform vec3 uBaseColor;
  uniform vec3 uVeinColor;
  uniform float uAmplitude;
  uniform float uFrequencyX;
  uniform float uFrequencyY;
  uniform vec2 uMouse;
  varying vec2 vUv;

  vec4 renderImage(vec2 uvCoord) {
      vec2 fragCoord = uvCoord * uResolution.xy;
      vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

      for (float i = 1.0; i < 10.0; i++){
          uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
          uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
      }

      vec2 diff = (uvCoord - uMouse);
      float dist = length(diff);
      float falloff = exp(-dist * 20.0);
      float ripple = sin(10.0 * dist - uTime * 2.0) * 0.03;
      uv += (diff / (dist + 0.0001)) * ripple * falloff;

      // VENDOR CHANGE 3: the published line is
      //   vec3 color = uBaseColor / abs(sin(uTime - uv.y - uv.x));
      // which is exactly what the next three lines compute when uVeinColor
      // equals uBaseColor.
      float chrome = 1.0 / max(abs(sin(uTime - uv.y - uv.x)), 0.0005);
      vec3 tinted = mix(uBaseColor, uVeinColor, clamp((chrome - 1.6) * 0.16, 0.0, 0.22));
      vec3 color = tinted * chrome;
      return vec4(color, 1.0);
  }

  void main() {
      // VENDOR CHANGE: react-bits averages a 3x3 neighbourhood here.
      gl_FragColor = renderImage(vUv);
  }
`,x=[.05,.085,.08],$=.17,K=.23,Z=.07,J=.17,ee=.21,te=.035,ne=.02,E=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,R=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,_=e=>{const t=e.replace("#",""),o=t.length===3?t.split("").map(n=>n+n).join(""):t;return[0,2,4].map(n=>parseInt(o.slice(n,n+2),16)/255)},C=([e,t,o])=>{const n=E(e),s=E(t),i=E(o),u=Math.cbrt(.4122214708*n+.5363325363*s+.0514459929*i),r=Math.cbrt(.2119034982*n+.6806995451*s+.1073969566*i),c=Math.cbrt(.0883024619*n+.2817188376*s+.6299787005*i),h=.2104542553*u+.793617785*r-.0040720468*c,l=1.9779984951*u-2.428592205*r+.4505937099*c,f=.0259040371*u+.7827717662*r-.808675766*c;return{L:h,C:Math.hypot(l,f),h:Math.atan2(f,l)}},b=({L:e,C:t,h:o})=>{const n=t*Math.cos(o),s=t*Math.sin(o),i=(e+.3963377774*n+.2158037573*s)**3,u=(e-.1055613458*n-.0638541728*s)**3,r=(e-.0894841775*n-1.291485548*s)**3;return[R(4.0767416621*i-3.3077115913*u+.2309699292*r),R(-1.2684380046*i+2.6097574011*u-.3413193965*r),R(-.0041960863*i-.7034186147*u+1.707614701*r)]},N=e=>e.every(t=>t>=-.001&&t<=1.001),oe=e=>{let t=0,o=e.C;if(N(b(e)))return b(e);for(let n=0;n<12;n++){const s=(t+o)/2;N(b({...e,C:s}))?t=s:o=s}return b({...e,C:t}).map(n=>Math.min(1,Math.max(0,n)))},O=(e,t,o,n,s,i)=>oe({L:Math.min(o,Math.max(t,s)),C:Math.min(n,i),h:e}),B=C(x),F=e=>{for(const t of e){const o=C(_(t));if(o.C>=ne)return{hue:o.h,chroma:o.C}}return{hue:B.h,chroma:B.C}},se={base:x,vein:x},re=e=>{if(!e)return se;const{palette:t}=H(e),o=F([t.primary,t.accent,t.secondary]),n=F([t.secondary,t.accent,t.primary]),s=C(_(t.primary)).L,i=C(_(t.secondary)).L;return{base:O(o.hue,$,K,Z,s,o.chroma),vein:O(n.hue,J,ee,te,i,n.chroma)}},ae=e=>`#${e.map(t=>Math.round(Math.min(1,Math.max(0,t))*255).toString(16).padStart(2,"0")).join("")}`,ie=.22,ce=.36,ue=3,le=2.4,me=1,de=1e3/30,he=({intensity:e,teamId:t})=>{const o=d.useRef(null),n=d.useRef(null),s=P(),i=d.useMemo(()=>re(t),[t]),u=s?0:e;return d.useEffect(()=>{const r=o.current;if(!r)return;let c;try{c=new q({antialias:!0})}catch{return}c.setPixelRatio(Math.min(window.devicePixelRatio||1,me)),c.domElement.className="block h-full w-full";const h=new D(2,2),l=new j({vertexShader:Q,fragmentShader:W,uniforms:{uTime:{value:0},uResolution:{value:new M(1,1,1)},uBaseColor:{value:new M(0,0,0)},uVeinColor:{value:new M(0,0,0)},uAmplitude:{value:ce},uFrequencyX:{value:ue},uFrequencyY:{value:le},uMouse:{value:new I(0,0)}}}),f=new Y;f.add(new G(h,l));const V=new z(-1,1,1,-1,0,1),v=new I,A=new ResizeObserver(()=>{const{clientWidth:a,clientHeight:S}=r;!a||!S||(c.setSize(a,S,!1),c.getDrawingBufferSize(v),l.uniforms.uResolution.value.set(v.x,v.y,v.x/v.y))});A.observe(r);let m=0,T=0,p=!1;const k=a=>{l.uniforms.uTime.value=a*.001*ie,c.render(f,V)};let w=-1/0;const L=a=>{m=requestAnimationFrame(L),!(a-w<de-2)&&(w=a,k(a))},g=()=>{const a=T>0&&!document.hidden;a&&!m&&(m=requestAnimationFrame(L)),!a&&m&&(cancelAnimationFrame(m),m=0)};return document.addEventListener("visibilitychange",g),n.current={setIntensity:a=>{T=a,a>0&&!p?(r.appendChild(c.domElement),p=!0):a<=0&&p&&(c.domElement.remove(),p=!1),g()},setTint:a=>{l.uniforms.uBaseColor.value.set(...a.base),l.uniforms.uVeinColor.value.set(...a.vein)}},()=>{n.current=null,document.removeEventListener("visibilitychange",g),m&&cancelAnimationFrame(m),A.disconnect(),c.domElement.remove(),h.dispose(),l.dispose(),c.forceContextLoss(),c.dispose()}},[]),d.useEffect(()=>{var r;(r=n.current)==null||r.setTint(i)},[i]),d.useEffect(()=>{var r;(r=n.current)==null||r.setIntensity(u)},[u]),y.jsxs("div",{"aria-hidden":"true",className:"pointer-events-none fixed inset-0 -z-10 overflow-hidden","data-testid":"title-backdrop",children:[y.jsx("div",{ref:o,className:"h-full w-full",style:{opacity:u}}),u<=0&&!s&&y.jsx("div",{className:"absolute inset-0",style:{backgroundColor:ae(i.base),backgroundImage:`url(/${X})`,backgroundSize:"cover",backgroundPosition:"center",backgroundBlendMode:"luminosity",opacity:U}}),y.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg, rgba(10, 10, 15, 0.28), rgba(10, 10, 15, 0.54) 52%, rgba(10, 10, 15, 0.96)), radial-gradient(circle at 50% 32%, transparent 0 22%, rgba(10, 10, 15, 0.44) 72%)"}})]})};export{he as AppBackdrop,he as default};
