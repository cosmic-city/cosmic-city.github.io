import{r,j as e,L as l,B as m}from"./index-BxHnmgYp.js";import{d as c}from"./data-53EIagG4.js";function d(){const[n,i]=r.useState(null),s=({src:t})=>e.jsx("img",{src:t,className:"h-8 w-8 inline-block"}),o=()=>{const t=[e.jsx(e.Fragment,{children:"idk what x² equals"}),e.jsx(e.Fragment,{children:"your cooked."}),e.jsx(e.Fragment,{children:"Is that a teacher behind you?"}),e.jsx(e.Fragment,{children:"Erm, What the sigma?"}),e.jsx(e.Fragment,{children:"Hi Luca and Izzy"}),e.jsx(e.Fragment,{children:"Where is Slovakia? respond in issues"}),e.jsxs(e.Fragment,{children:["This UI is very similar to something..."," ",e.jsx(s,{src:"/image/emojis/sus.png"})]}),e.jsxs(e.Fragment,{children:["never gona give u up ",e.jsx(s,{src:"/image/emojis/rickroll.gif"})]}),e.jsx(e.Fragment,{children:"gta6 = irl"}),e.jsxs(e.Fragment,{children:["off+reload gives you free v-bucks"," ",e.jsx(s,{src:"/image/emojis/mewing.gif"})]}),e.jsx(e.Fragment,{children:"alt+tab to switch windows"}),e.jsxs(e.Fragment,{children:["For the one kid in spain that uses this",e.jsx(s,{src:"/image/emojis/dignified-winnie.png"})]}),e.jsxs(e.Fragment,{children:["ik where u live... ",e.jsx(s,{src:"/image/emojis/duo.png"})]}),e.jsxs(e.Fragment,{children:["shh dont say anything ",e.jsx(s,{src:"/image/emojis/shhmewing.gif"})]}),e.jsx(e.Fragment,{children:"are you a mewing king?"}),e.jsx(e.Fragment,{children:"sigma ohio rizzler"})],a=Math.floor(Math.random()*t.length);i(t[a])};return r.useEffect(()=>{o()},[]),e.jsx(e.Fragment,{children:e.jsx("p",{className:"h-8 flex justify-center items-center",children:n})})}function x({id:n}){const[i,s]=r.useState(null);r.useEffect(()=>{const t=c.find(a=>a.id===n);t&&s(t)},[]);const o=()=>e.jsx("div",{className:"animation-pulse bg-[#121212] bg-center bg-cover bg-no-repeat inline-block h-36 w-36 rounded-xl"});return e.jsx(e.Fragment,{children:i?e.jsx(l,{to:`/game/${n}`,children:e.jsxs("div",{className:"group relative overflow-hidden inline-flex justify-center items-center bg-[#111] h-36 w-36 rounded-xl transition active:scale-90",children:[e.jsx("img",{src:i.image,className:"w-full h-full absolute object-cover group-hover:opacity-75"}),e.jsx("span",{className:"opacity-0 px-0 mx-0 -bottom-2 max-w-28 mb-2 transition-all duration-200 absolute group-hover:bottom-0 group-hover:opacity-100 font-bold text-sm text-white [text-shadow:0px_0px_0.2rem_#000]",children:i.title})]})}):e.jsx(o,{})})}function u(){const[n,i]=r.useState(c),[s,o]=r.useState("");return r.useEffect(()=>{if(s.length>0){const t=c.filter(a=>s.toLowerCase()===""?a:a.title.toLowerCase().includes(s.toLowerCase()));i(t)}else i(c)},[s]),e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-2xl",children:"Games"}),e.jsxs("div",{className:"flex flex-col gap-2 justify-center items-center",children:["  ",e.jsx(d,{}),e.jsx("input",{type:"text",className:"bg-[#111] rounded-xl text-sm outline-none px-6 py-2 my-2 transition duration-75 border-b-[1.75px] border-b-black focus:border-b-[#83c9e5]",placeholder:"Search games..",onChange:t=>o(t.target.value.toLowerCase())}),e.jsx(l,{to:"https://github.com/cosmic-city/cosmic-city.github.io/issues",children:e.jsx(m,{look:"brand",className:"mt-2",children:"Request a game"})})]}),e.jsx("div",{className:"flex  justify-center",children:e.jsx("div",{className:"flex flex-wrap max-w-[80vw] my-2 gap-4",children:n.map(t=>e.jsx(x,{id:t.id}))})})]})}export{u as default};
