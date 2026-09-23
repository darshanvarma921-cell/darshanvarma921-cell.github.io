import{a as k,r as d,dY as H,j as y,dZ as P,d_ as U}from"./index-iX7TbN36.js";import{W as X,P as q,S as D,V as S,a as E,b as j,M as Y,O as G}from"./three.module-CjXvqpni.js";const z=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Q=`
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
`,R=[.05,.085,.08],W=.17,$=.23,K=.07,Z=.17,J=.21,ee=.035,te=.02,M=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,x=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,_=e=>{const t=e.replace("#",""),n=t.length===3?t.split("").map(o=>o+o).join(""):t;return[0,2,4].map(o=>parseInt(n.slice(o,o+2),16)/255)},C=([e,t,n])=>{const o=M(e),s=M(t),i=M(n),u=Math.cbrt(.4122214708*o+.5363325363*s+.0514459929*i),r=Math.cbrt(.2119034982*o+.6806995451*s+.1073969566*i),c=Math.cbrt(.0883024619*o+.2817188376*s+.6299787005*i),h=.2104542553*u+.793617785*r-.0040720468*c,l=1.9779984951*u-2.428592205*r+.4505937099*c,f=.0259040371*u+.7827717662*r-.808675766*c;return{L:h,C:Math.hypot(l,f),h:Math.atan2(f,l)}},b=({L:e,C:t,h:n})=>{const o=t*Math.cos(n),s=t*Math.sin(n),i=(e+.3963377774*o+.2158037573*s)**3,u=(e-.1055613458*o-.0638541728*s)**3,r=(e-.0894841775*o-1.291485548*s)**3;return[x(4.0767416621*i-3.3077115913*u+.2309699292*r),x(-1.2684380046*i+2.6097574011*u-.3413193965*r),x(-.0041960863*i-.7034186147*u+1.707614701*r)]},I=e=>e.every(t=>t>=-.001&&t<=1.001),oe=e=>{let t=0,n=e.C;if(I(b(e)))return b(e);for(let o=0;o<12;o++){const s=(t+n)/2;I(b({...e,C:s}))?t=s:n=s}return b({...e,C:t}).map(o=>Math.min(1,Math.max(0,o)))},N=(e,t,n,o,s,i)=>oe({L:Math.min(n,Math.max(t,s)),C:Math.min(o,i),h:e}),O=C(R),B=e=>{for(const t of e){const n=C(_(t));if(n.C>=te)return{hue:n.h,chroma:n.C}}return{hue:O.h,chroma:O.C}},ne={base:R,vein:R},se=e=>{if(!e)return ne;const{palette:t}=k(e),n=B([t.primary,t.accent,t.secondary]),o=B([t.secondary,t.accent,t.primary]),s=C(_(t.primary)).L,i=C(_(t.secondary)).L;return{base:N(n.hue,W,$,K,s,n.chroma),vein:N(o.hue,Z,J,ee,i,o.chroma)}},re=e=>`#${e.map(t=>Math.round(Math.min(1,Math.max(0,t))*255).toString(16).padStart(2,"0")).join("")}`,ae=.22,ie=.36,ce=3,ue=2.4,le=2,fe=({intensity:e,teamId:t})=>{const n=d.useRef(null),o=d.useRef(null),s=H(),i=d.useMemo(()=>se(t),[t]),u=s?0:e;return d.useEffect(()=>{const r=n.current;if(!r)return;let c;try{c=new X({antialias:!0})}catch{return}c.setPixelRatio(Math.min(window.devicePixelRatio||1,le)),c.domElement.className="block h-full w-full";const h=new q(2,2),l=new D({vertexShader:z,fragmentShader:Q,uniforms:{uTime:{value:0},uResolution:{value:new E(1,1,1)},uBaseColor:{value:new E(0,0,0)},uVeinColor:{value:new E(0,0,0)},uAmplitude:{value:ie},uFrequencyX:{value:ce},uFrequencyY:{value:ue},uMouse:{value:new S(0,0)}}}),f=new j;f.add(new Y(h,l));const F=new G(-1,1,1,-1,0,1),v=new S,A=new ResizeObserver(()=>{const{clientWidth:a,clientHeight:L}=r;!a||!L||(c.setSize(a,L,!1),c.getDrawingBufferSize(v),l.uniforms.uResolution.value.set(v.x,v.y,v.x/v.y))});A.observe(r);let m=0,T=0,p=!1;const V=a=>{l.uniforms.uTime.value=a*.001*ae,c.render(f,F)},w=a=>{m=requestAnimationFrame(w),V(a)},g=()=>{const a=T>0&&!document.hidden;a&&!m&&(m=requestAnimationFrame(w)),!a&&m&&(cancelAnimationFrame(m),m=0)};return document.addEventListener("visibilitychange",g),o.current={setIntensity:a=>{T=a,a>0&&!p?(r.appendChild(c.domElement),p=!0):a<=0&&p&&(c.domElement.remove(),p=!1),g()},setTint:a=>{l.uniforms.uBaseColor.value.set(...a.base),l.uniforms.uVeinColor.value.set(...a.vein)}},()=>{o.current=null,document.removeEventListener("visibilitychange",g),m&&cancelAnimationFrame(m),A.disconnect(),c.domElement.remove(),h.dispose(),l.dispose(),c.forceContextLoss(),c.dispose()}},[]),d.useEffect(()=>{var r;(r=o.current)==null||r.setTint(i)},[i]),d.useEffect(()=>{var r;(r=o.current)==null||r.setIntensity(u)},[u]),y.jsxs("div",{"aria-hidden":"true",className:"pointer-events-none fixed inset-0 -z-10 overflow-hidden","data-testid":"title-backdrop",children:[y.jsx("div",{ref:n,className:"h-full w-full",style:{opacity:u}}),u<=0&&!s&&y.jsx("div",{className:"absolute inset-0",style:{backgroundColor:re(i.base),backgroundImage:`url(/${U})`,backgroundSize:"cover",backgroundPosition:"center",backgroundBlendMode:"luminosity",opacity:P}}),y.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg, rgba(10, 10, 15, 0.28), rgba(10, 10, 15, 0.54) 52%, rgba(10, 10, 15, 0.96)), radial-gradient(circle at 50% 32%, transparent 0 22%, rgba(10, 10, 15, 0.44) 72%)"}})]})};export{fe as AppBackdrop,fe as default};
