import{u as o,r as l,j as e,L as i,B as u}from"./index-DP-ZPbjq.js";import{d}from"./data-DneGhDsG.js";import f from"./_...all_-BbppmAYT.js";function g(){const{id:r}=o(),s=l.useRef(null),[t,a]=l.useState(null);l.useEffect(()=>{const n=d.find(m=>m.id===r);a(n||null)},[r]);const c=()=>{s.current&&(document.fullscreenElement?document.exitFullscreen():s.current.requestFullscreen())};return e.jsx(e.Fragment,{children:t?e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:s,className:"aspect-video h-[36rem] relative rounded mb-2",children:[e.jsx("iframe",{src:t.embed,className:"w-full h-[calc(100%-2.5rem)] absolute top-0 left-0"}),e.jsxs("div",{className:"w-full h-[2.5rem] text-left flex items-center justify-start absolute bottom-0 left-0 bg-[#111] z-10 overflow-hidden",children:[e.jsxs("h3",{className:"ml-2 text-sm flex justify-center items-center gap-1 m-0",children:[e.jsx("img",{src:"/logo.svg",className:" h-7 aspect-square rounded-md align-middle"})," ","Cosmic City"]}),e.jsx("span",{className:"ml-2 mr-2",children:"|"}),e.jsx("p",{className:"m-0",children:t.title}),e.jsx("button",{onMouseDown:()=>c(),className:"absolute group h-full aspect-square right-0 bottom-0 border-none outline-none flex justify-center items-center bg-[#191919] hover:bg-[#222]",children:e.jsx("svg",{viewBox:"0 0 24 24",className:"h-6 group-active:scale-90",fill:"#fff",children:e.jsx("path",{d:"M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"})})})]})]}),e.jsx(i,{to:"/games",children:e.jsx(u,{look:"brand",className:"mt-2",children:"Report a Bug"})})]}):e.jsx(f,{})})}export{g as default};
