/* ---------- DATOS: edita aquí los destinos ---------- */
const AUTOPLAY_MS = 6500;
const destinations = [
 {id:1,place:"Management of artist",title:["DJ","SKORTDAN"],short:"DJ Skortdan",sub:"Management of artist",
  desc:"SKORTDAN es un <b>DJ de música Urban Funk</b>, reconocido por fusionar distintos sonidos para crear una <b>propuesta fresca y auténtica</b>.\nCon el objetivo de fortalecer su carrera y posicionar su proyecto artístico, Skortdan entra en contacto con <b>GRUPO SKY</b> para recibir <b>manejo y acompañamiento profesional</b> en el desarrollo de su <b>marca, imagen y presencia</b> dentro de la industria musical.",
  scene:{sky:["#8fb0c6","#e9e3cf"],sun:null,seed:3,layers:[["#8097a8",330,150,1.0],["#587a66",470,110,.8],["#3d6038",600,70,.6],["#244023",730,40,.4]]}},
 {id:2,place:"Packaging Design",title:["ABUNGA"],short:"ABUNGA",sub:"Packaging Design",
  desc:"ABUNGA es una empresa dedicada a la elaboración de <b>snacks de frutas deshidratadas</b>, enfocada en ofrecer productos <b>naturales, prácticos y atractivos</b>.\nLa marca contactó a <b>GRUPO SKY</b> para desarrollar su identidad visual a través de la creación de una <b>mascota en 3D</b> y el <b>diseño del embalaje</b> para su <b>MIX DE FRUTAS</b>, buscando una presentación moderna, llamativa y alineada con la personalidad de la marca.",
  scene:{sky:["#5b7d92","#b3c4cb"],sun:[1180,260,70,"#f3efe6"],seed:8,layers:[["#7a97a6",360,140,.9],["#5d7b89",470,120,.8],["#3e5662",600,80,.7],["#1f2f35",740,50,.5]]}},
 {id:3,place:"Social Media Management",title:["URSULA","TABOADA"],short:"Ursula Taboada",sub:"Social Media Management",
  desc:"Úrsula Taboada es una <b>asesora inmobiliaria</b> enfocada en brindar <b>atención y asesoramiento profesional</b> a sus clientes en el sector inmobiliario.\nCon el objetivo de fortalecer su <b>marca personal</b> y potenciar su <b>presencia digital</b>, Úrsula Taboada contactó a <b>GRUPO SKY</b> para mejorar la <b>imagen de sus redes sociales</b>, desarrollar una <b>comunicación más profesional</b> y generar una presencia digital sólida y atractiva.",
  scene:{sky:["#e7a98a","#f6d9b4"],sun:[420,380,90,"#fff3d6"],seed:21,layers:[["#dca071",520,60,.25],["#c98655",620,55,.25],["#b06f43",720,50,.22],["#8f5733",810,35,.2]]}},
 {id:4,place:"Influencer oficial",title:["RANA","INSANA"],short:"Rana Insana",sub:"Influencer oficial",dim:1,
  desc:"<b>RANA INSANA</b> es una <b>influencer</b> reconocida por su <b>identidad visual distintiva</b>, representada por su icónico personaje de rana, que le otorga una imagen auténtica y memorable dentro del entorno digital.\nCon el objetivo de <b>fortalecer su presencia en redes sociales</b>, ampliar su alcance y consolidar su marca personal, Rana Insana entra en contacto con <b>GRUPO SKY</b> para establecer una colaboración estratégica y convertirse en <b>influenciadora oficial de Grupo Sky</b>, uniendo su creatividad, personalidad y comunidad con la visión de la marca.",
  scene:{sky:["#0b2a1c","#3fae6a"],sun:[1150,300,90,"#d8ff5a"],seed:61,layers:[["#1d5a3a",420,130,.9],["#134a2e",560,100,.8],["#0c3320",690,70,.6],["#06200f",800,40,.4]]}},
 {id:5,place:"Evento musical",title:["20 AÑOS","DE PELÍCULA"],short:"20 años de película",sub:"Evento musical",dim:.6,
  desc:"<b>20 AÑOS DE PELÍCULA</b> fue un <b>evento musical</b> que propone una experiencia diferente al llevar la energía de un concierto a las <b>salas de cine de CINEPLANET</b>, en Paseo Central.\nCon el objetivo de ampliar su alcance, generar expectativa y conectar con una audiencia más amplia a través de los medios digitales, los organizadores del evento contactan a <b>GRUPO SKY</b> para <b>impulsar su presencia virtual</b>, fortalecer su comunicación en redes sociales y desarrollar una <b>estrategia digital</b> que permita llevar el conocimiento de este evento en la ciudad de <b>AREQUIPA</b>.",
  scene:{sky:["#2a1018","#e08a3c"],sun:[420,330,70,"#ffe2a8"],seed:77,layers:[["#6b2a2a",430,120,.7],["#4a1c24",570,90,.6],["#2f1219",700,60,.5],["#1a0a10",800,40,.4]]}}
];

/* ---------- Escenas ilustradas (SVG generado) ---------- */
function rng(s){return()=>(s=s*16807%2147483647)/2147483647}
function ridge(seed,base,amp,rough,color){
  const r=rng(seed*97+base),ph=[r()*6,r()*6,r()*6];let d="M0 900";
  for(let x=0;x<=1600;x+=20){
    const n=Math.sin(x/260+ph[0])*.55+Math.sin(x/110+ph[1])*.3*rough+Math.sin(x/37+ph[2])*.15*rough+(r()-.5)*.08*rough;
    d+=`L${x} ${(base+n*amp).toFixed(1)}`;
  }
  return `<path d="${d}L1600 900Z" fill="${color}"/>`;
}
function scene({sky,sun,seed,layers}){
  let s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient><radialGradient id="h"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect width="1600" height="900" fill="url(#g)"/>`;
  if(sun)s+=`<circle cx="${sun[0]}" cy="${sun[1]}" r="${sun[2]*4}" fill="url(#h)" opacity=".5"/><circle cx="${sun[0]}" cy="${sun[1]}" r="${sun[2]}" fill="${sun[3]}"/>`;
  layers.forEach((l,i)=>{s+=ridge(seed+i,l[1],l[2],l[3],l[0]);
    s+=`<rect y="${l[1]-20}" width="1600" height="220" fill="url(#h)" opacity="${.07+i*.02}"/>`});
  return "data:image/svg+xml;utf8,"+encodeURIComponent(s+"</svg>");
}
/* Fotos reales: la clave es el id del destino */
const PHOTOS = {
  1: { bg: "assets/img/destinations/dest-1-bg.jpg", thumb: "assets/img/destinations/dest-1-thumb.jpg" },
  2: { bg: "assets/img/destinations/dest-2-bg.jpg", thumb: "assets/img/destinations/dest-2-thumb.jpg" },
  3: { bg: "assets/img/destinations/dest-3-bg.jpg", thumb: "assets/img/destinations/dest-3-thumb.jpg" },
  4: { bg: "assets/img/destinations/dest-4-bg.jpg", thumb: "assets/img/destinations/dest-4-thumb.jpg" },
  5: { bg: "assets/img/destinations/dest-5-bg.jpg", thumb: "assets/img/destinations/dest-5-thumb.jpg" }
};
destinations.forEach(d=>{const p=PHOTOS[d.id];d.image=p?p.bg:scene(d.scene);d.thumb=p?p.thumb:d.image});

/* ---------- Estado ---------- */
const KB=[["-1%","0%"],["1%","-.8%"],["-1%","1%"],["0%","-1%"],["1%","0.6%"]],OV=[1,.55,.6,.95,.7];
destinations.forEach((d,i)=>{d.kb=KB[i];d.ov=OV[i];d.pos={1:"76% 50%",2:"74% 50%",3:"74% 50%",4:"70% 50%",5:"85% 50%"}[d.id]||"50% 50%"});
const $=id=>document.getElementById(id), N=destinations.length;
const bgs=[$("bgA"),$("bgB")], track=$("track"), info=$("info"), numEl=$("num").firstElementChild, prog=$("prog"), timer=$("timer"), hero=$("hero"), dock=$("dock"), shade=document.querySelector(".shade"),shade2=document.querySelector(".shade2");
const el={place:$("place"),title:$("title"),desc:$("desc"),cta:$("cta")};
const pad=n=>String(n).padStart(2,"0");
let cur=0, front=0, vp=N, busy=false, hover=false, apTimer=null, anims=[];

function setImg(bg,d){const im=bg.querySelector("img");im.src=d.image;im.style.objectPosition=d.pos;im.style.setProperty("--kx",d.kb[0]);im.style.setProperty("--ky",d.kb[1])}
function fillText(d){el.place.textContent=d.place;el.title.innerHTML=d.title.map(t=>`<span>${t}</span>`).join("");el.desc.innerHTML=d.desc}

/* Carrusel: una pista física con 3 copias; solo se desplaza con translateX */
const stepPx=()=>track.children[1].offsetLeft-track.children[0].offsetLeft;
function place(anim){
  [...track.children].forEach((c,k)=>c.classList.toggle("active",k===vp));
  if(!anim)track.classList.add("nt");
  track.style.transform=`translateX(${-vp*stepPx()}px)`;
  if(!anim){void track.offsetWidth;track.classList.remove("nt")}
}
function buildTrack(){
  dock.style.setProperty("--vis",N<4?N:4.35);dock.style.setProperty("--gaps",N<4?N-1:3);
  for(let k=0;k<N*3;k++){
    const i=k%N,d=destinations[i],c=document.createElement("button");
    c.className="card";c.setAttribute("aria-label","Ir a "+d.short);
    c.innerHTML=`<img alt="" src="${d.thumb}"><b>${d.short}<small>${d.sub}</small></b>`;
    c.onclick=()=>go(k-vp);track.appendChild(c);
  }
  place(false);
}

/* Timeline de contenido: salida 0-400ms, entrada 650-1050ms, con stagger */
const an=(e,kf,o)=>{const a=e.animate(kf,{fill:"both",easing:"cubic-bezier(.4,0,.2,1)",...o});anims.push(a);return a};
const clear=()=>{anims.forEach(a=>a.cancel());anims=[]};
function swapContent(d){
  clear();
  an(el.title,[{opacity:1,transform:"none"},{opacity:.7,transform:"none",offset:.375},{opacity:0,transform:"translate(-35px,-10px)"}],{duration:400});
  const out=(e,delay)=>an(e,[{opacity:1,transform:"none"},{opacity:0,transform:"translate(-30px,-8px)"}],{duration:250,delay});
  out(el.place,120);out(el.desc,205);out(el.cta,240);
  an(numEl,[{opacity:1,transform:"none"},{opacity:0,transform:"translateY(-100%)"}],{duration:300,delay:100});
  setTimeout(()=>{fillText(d);numEl.textContent=pad(cur+1)},500);
  setTimeout(()=>{
    clear();
    const inn=(e,y,dur,delay,ease)=>an(e,[{opacity:0,transform:`translateY(${y}px)`},{opacity:1,transform:"none"}],{duration:dur,delay,easing:ease||"cubic-bezier(.22,1,.36,1)"});
    inn(el.place,15,300,0);
    inn(el.title,45,600,60,"cubic-bezier(.16,1,.3,1)");
    inn(el.desc,15,420,150);
    inn(el.cta,10,350,230);
    an(numEl,[{opacity:0,transform:"translateY(100%)"},{opacity:1,transform:"none"}],{duration:450});
  },650);
}

function restartTimer(){
  clearTimeout(apTimer);timer.classList.remove("run");void timer.offsetWidth;
  timer.style.setProperty("--ap",AUTOPLAY_MS+"ms");
  if(hover||aboutOpen)return;timer.classList.add("run");
  apTimer=setTimeout(()=>go(1),AUTOPLAY_MS);
}
function go(delta){
  if(busy||!delta||aboutOpen)return;busy=true;
  const dir=delta>0?1:-1;cur=(cur+delta+N)%N;vp+=delta;
  const d=destinations[cur],out=bgs[front],inc=bgs[1-front];
  setImg(inc,d);inc.style.setProperty("--dir",dir);out.style.setProperty("--dir",dir);
  inc.className="bg nx";void inc.offsetWidth;
  out.className="bg out";inc.className="bg active";
  setTimeout(()=>{shade.style.opacity=d.ov;shade2.style.opacity=d.dim||0},400);
  swapContent(d);place(true);
  prog.style.width=(cur+1)/N*100+"%";
  front=1-front;restartTimer();
  setTimeout(()=>{out.className="bg nx";vp=N+cur;place(false);busy=false},1250);
}
$("next").onclick=()=>go(1);$("prev").onclick=()=>go(-1);
addEventListener("keydown",e=>{if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1)});
addEventListener("resize",()=>place(false));
let tx=null;
hero.addEventListener("touchstart",e=>tx=e.touches[0].clientX,{passive:true});
hero.addEventListener("touchend",e=>{if(tx===null)return;const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>50)go(dx<0?1:-1);tx=null});
hero.addEventListener("mouseenter",()=>{hover=true;restartTimer()});
hero.addEventListener("mouseleave",()=>{hover=false;restartTimer()});

/* Parallax por capas: fondo ±8/5px, contenido ±2px, tarjetas ±3px */
const cursor=$("cur");
addEventListener("mousemove",e=>{
  cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px";
  const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
  $("bgs").style.translate=`${-x*16}px ${-y*10}px`;
  info.style.translate=`${-x*4}px ${-y*4}px`;
  dock.style.translate=`${-x*6}px ${-y*6}px`;
  cursor.classList.toggle("big",!!e.target.closest("button,a"));
});

/* ---------- EQUIPO: edita aquí a cada miembro ----------
   name, role (función), bio (opcional) y photo (opcional, imagen incrustada).
   Mejor con PNG sin fondo: así se ven juntos como en una sola foto. */
/* Foto de grupo: x = tramo horizontal (0 a 1) donde está cada persona */
const TEAM_PHOTO = "assets/img/team.webp";
const team=[
 {name:"ADRIA",role:"Gestora de Eventos",bio:"Planifica y coordina cada evento para que todo salga a la perfección, desde la idea hasta el último detalle.",color:"#2F7CFF",x:[0,.385]},
 {name:"ALESS",role:"Director Creativo",bio:"Lidera la visión creativa de cada proyecto y convierte las ideas en marcas con personalidad.",color:"#ED1C24",x:[.385,.515]},
 {name:"ROBERT",role:"Diseñador y Editor",bio:"Da forma visual a cada idea con un diseño y una edición que cuentan historias con impacto.",color:"#E6199B",x:[.515,.65]},
 {name:"GUSTAVO",role:"Programador y Piloto de Dron",bio:"Desarrolla soluciones digitales y captura tomas aéreas con dron para cada proyecto.",color:"#D4AF37",x:[.65,1]}
];
const about=$("about"),wipe=$("wipe"),teamEl=$("team");
const initials=n=>n.split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase();
function avatar(m,i){
  const t=m.color||"#ED1C24";
  return "data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600' preserveAspectRatio='xMidYMid slice'><defs><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#555a62'/><stop offset='1' stop-color='#23262b'/></linearGradient><radialGradient id='r'><stop offset='0' stop-color='${t}' stop-opacity='.4'/><stop offset='1' stop-color='${t}' stop-opacity='0'/></radialGradient></defs><circle cx='200' cy='300' r='290' fill='url(#r)'/><circle cx='200' cy='215' r='62' fill='url(#s)'/><path d='M40 600c0-130 70-210 160-210s160 80 160 210z' fill='url(#s)'/><text x='200' y='540' font-family='Impact,sans-serif' font-size='110' fill='#fff' fill-opacity='.1' text-anchor='middle'>${initials(m.name)}</text></svg>`);
}
/* Fotos añadidas desde la propia página (se guardan solo en este navegador) */
const saved=(()=>{try{return JSON.parse(localStorage.getItem("skyTeamPhotos")||"{}")}catch(e){return{}}})();
let editing=location.hash==="#sobre-editar",pickName="",pickKind="team";
const fileIn=document.createElement("input");fileIn.type="file";fileIn.accept="image/*";fileIn.hidden=true;document.body.appendChild(fileIn);
fileIn.onchange=()=>{
  const f=fileIn.files[0];if(!f)return;
  const png=/png|webp/.test(f.type),u=URL.createObjectURL(f),img=new Image();
  img.onload=()=>{
    const k=Math.min(1,1100/img.height),c=document.createElement("canvas");
    c.width=img.width*k;c.height=img.height*k;c.getContext("2d").drawImage(img,0,0,c.width,c.height);
    const d=c.toDataURL(png?"image/png":"image/jpeg",.88);URL.revokeObjectURL(u);
    if(pickKind==="pack"){savedPack[pickName]=d;try{localStorage.setItem("skyPackPhotos",JSON.stringify(savedPack))}catch(e){}renderChoices();}
    else{saved[pickName]=d;try{localStorage.setItem("skyTeamPhotos",JSON.stringify(saved))}catch(e){}renderTeam();}
  };
  img.src=u;fileIn.value="";
};
function renderTeam(){
  const N=team.length,sty=m=>`--x0:${m.x[0]};--x1:${m.x[1]};--c:${m.color}`;
  teamEl.innerHTML=`<div class="gp" id="gp"><img class="gbase" src="${TEAM_PHOTO}" alt="Equipo de Grupo Sky">`
   +team.map((m,i)=>`<img class="glit" data-i="${i}" src="${TEAM_PHOTO}" alt="" style="${sty(m)}"><span class="gglow" data-i="${i}" style="${sty(m)}"></span>`).join("")
   +team.map((m,i)=>`<div class="gz" data-i="${i}" tabindex="0" aria-label="${m.name}" style="left:${m.x[0]*100}%;width:${(m.x[1]-m.x[0])*100}%"></div>`).join("")
   +team.map((m,i)=>`<div class="minfo l" data-i="${i}" style="--c:${m.color}"><span class="mnum">${pad(i+1)}</span><span class="mn">${m.name}</span><span class="mr">${m.role}</span>${m.bio?`<span class="mb">${m.bio}</span>`:""}</div>`).join("")
   +`</div>`;
  const gp=$("gp"),on=i=>{gp.classList.add("hov");gp.querySelectorAll("[data-i]").forEach(e=>e.classList.toggle("act",e.dataset.i===String(i)))};
  gp.querySelectorAll(".gz").forEach(z=>{z.onpointerenter=z.onfocus=z.onclick=()=>on(z.dataset.i)});
  gp.onpointerleave=e=>{if(e.pointerType==="mouse"){gp.classList.remove("hov");gp.querySelectorAll(".act").forEach(x=>x.classList.remove("act"))}};
}
renderTeam();
document.querySelectorAll(".logo-img:not([src])").forEach(i=>i.src=document.querySelector(".logo-img").src);

/* ---------- Navegación a "Sobre" con transición de cortina roja ---------- */
/* ---------- PAQUETES: edita aquí las opciones (photo opcional) ---------- */
const options=[
 {key:"EMPRESA",tag:"Para marcas y negocios",color:"#ED1C24",photo:"assets/img/packs/empresa.jpg"},
 {key:"ARTISTA",tag:"Para músicos y creadores",color:"#E6199B",photo:"assets/img/packs/artista.jpg"}
];
const savedPack=(()=>{try{return JSON.parse(localStorage.getItem("skyPackPhotos")||"{}")}catch(e){return{}}})();
const choicesEl=$("choices");
function renderChoices(){
  choicesEl.innerHTML="";$("pack").classList.toggle("editing",editing);
  options.forEach((o,i)=>{
    const has=savedPack[o.key]||o.photo,b=document.createElement("div");
    b.className="opt"+(i%2?" rt":"");b.tabIndex=0;b.style.setProperty("--i",i);b.style.setProperty("--c",o.color);
    b.innerHTML=`<span class="spot"></span><img class="oimg" alt="${o.key}" src="${has||avatar({name:o.key,color:o.color},i)}"><span class="oin"><span class="onum">${pad(i+1)}</span><span class="oword">${o.key}</span><span class="otag">${o.tag}</span></span><button class="padd">＋ ${has?"Cambiar":"Añadir"} foto</button>`;
    b.onkeydown=e=>{if(e.key==="Enter")b.click()};
    b.onpointermove=e=>{const r=b.getBoundingClientRect();b.style.setProperty("--mx",(e.clientX-r.left)+"px");b.style.setProperty("--my",(e.clientY-r.top)+"px")};
    b.onclick=e=>{
      if(e.target.closest(".padd")){pickName=o.key;pickKind="pack";fileIn.click();return}
      showView(o.key.toLowerCase());
    };
    choicesEl.appendChild(b);
  });
}
renderChoices();

/* ---------- PÁGINAS DE PAQUETES: edita aquí nombres, textos e ítems ---------- */
const CONTACT_URL="https://wa.me/message/Z4SDXKA5MMTBK1";   /* enlace de contacto (WhatsApp) */
const packages={
 empresa:{label:"Empresa",color:"#ED1C24",sub:"Elige el paquete que mejor impulse tu marca.",list:[
  {name:"GOLD",color:"#D4AF37",items:["4 Posts","2 Reels","Diseño gráfico profesional","Calendario de publicaciones","Gestión básica de redes sociales"],
   ideal:"Ideal para marcas que buscan mantener presencia constante y fortalecer su imagen digital."},
  {name:"PLATINUM",color:"#8FA3FF",items:["8 Posts","4 Reels","Consultoría estratégica mensual","Planificación y asesoría para eventos","Diseño gráfico profesional","Calendario de publicaciones personalizado","Gestión y optimización de redes sociales"],
   ideal:"Ideal para negocios que buscan crecimiento constante, mayor alcance y una estrategia digital más sólida."},
  {name:"BLACK",color:"#FFFFFF",items:["12 Posts","6 Reels","Consultoría estratégica prioritaria","Planificación y cobertura de eventos","Sesión de creación de contenido mensual","Monitoreo y análisis de resultados","Reunión estratégica mensual de crecimiento","Historias diarias bajo los días"],
   ideal:"Ideal para marcas que buscan acelerar su posicionamiento, mantenerse activas todos los días y maximizar su presencia digital con un acompañamiento estratégico integral."}]},
 artista:{label:"Artista",color:"#E6199B",sub:"Elige el acompañamiento que impulse tu carrera.",list:[
  {name:"GOLD",color:"#D4AF37",items:["Estrategia y planificación de contenido","Gestión y organización de perfiles digitales","Asesoría audiovisual","Supervisión de publicaciones","Calendario editorial mensual"]},
  {name:"PLATINUM",color:"#8FA3FF",items:["Todo lo incluido en GOLD +","Producción y dirección audiovisual","Gestión de publicaciones multiplataforma","Asesoría para transmisiones en vivo (Streaming)","Búsqueda y gestión de oportunidades en eventos","Optimización de marca personal"]},
  {name:"BLACK",color:"#FFFFFF",items:["Todo lo incluido en GOLD +","Representación y gestión artística (Manager)","Dirección estratégica de contenido","Planificación diaria de Stories","Gestión de colaboraciones con marcas","Negociación y coordinación de eventos","Desarrollo de marca personal","Seguimiento de crecimiento y rendimiento"]}]}
};
const pkgs=$("pkgs"),pkEl=$("pkcols");
function renderPkgs(k){
  const d=packages[k];if(!d)return;
  pkgs.style.setProperty("--c",d.color);
  $("pkTitle").textContent=d.label;$("pkSub").textContent=d.sub;$("pkBg").textContent=d.label.toUpperCase();
  pkEl.innerHTML=d.list.map((p,i)=>`<div class="pk" tabindex="0" style="--i:${i};--c:${p.color||d.color}"><span class="spot"></span><span class="pnum">${pad(i+1)}</span><span class="pname">${p.name}</span>${p.tag?`<span class="ptag">${p.tag}</span>`:""}<ul>${p.items.map(t=>`<li>${t}</li>`).join("")}</ul>${p.ideal?`<p class="pideal">${p.ideal}</p>`:""}<a class="pbtn" href="${CONTACT_URL}" target="_blank" rel="noopener noreferrer">Solicitar</a></div>`).join("");
  pkEl.querySelectorAll(".pk").forEach(b=>b.onpointermove=e=>{const r=b.getBoundingClientRect();b.style.setProperty("--mx",(e.clientX-r.left)+"px");b.style.setProperty("--my",(e.clientY-r.top)+"px")});
  pkEl.scrollTop=0;
}

/* ---------- SERVICIOS: agrega, quita o edita aquí ---------- */
const services=[
 {name:"Cobertura Mobile",desc:"Cobertura de eventos y contenido en tiempo real desde el celular, ágil y listo para publicar."},
 {name:"Grabación y edición de videos",desc:"Producción y edición profesional de videos para marcas, artistas y eventos."},
 {name:"Edición de artes gráficas",desc:"Piezas gráficas editadas con cuidado para cada red y cada campaña."},
 {name:"Modelado 3D",desc:"Creación de modelos y personajes 3D con detalle y personalidad."},
 {name:"Diseño de producto",desc:"Diseño de productos y de su presentación, pensados para destacar."},
 {name:"WebDesign UI",desc:"Diseño de interfaces y sitios web claros, modernos y fáciles de usar."},
 {name:"Grabación por dron",desc:"Tomas aéreas en alta calidad que dan una perspectiva única."},
 {name:"Gestión de eventos",desc:"Planificación, coordinación y cobertura de eventos de principio a fin."},
 {name:"Creación de aplicaciones móviles",desc:"Desarrollo de aplicaciones móviles a la medida de tu marca y de tus clientes."},
 {name:"Gestión de leads",desc:"Captación y seguimiento de clientes potenciales para convertir contactos en oportunidades."},
 {name:"Creación de páginas web",desc:"Sitios web modernos y rápidos que presentan tu marca y generan contactos."},
 {name:"Proyectos de domótica",desc:"Soluciones de automatización para hogares y espacios inteligentes, de la idea a la instalación."}
];
const svColors=["#ED1C24","#2F7CFF","#E6199B","#D4AF37"];
$("svgrid").innerHTML=services.map((s,i)=>`<div class="sv" tabindex="0" style="--i:${i};--c:${svColors[i%4]}"><span class="spot"></span><span class="snum">${pad(i+1)}</span><span class="sname">${s.name}</span><p class="sdesc">${s.desc}</p></div>`).join("");
$("svgrid").querySelectorAll(".sv").forEach(b=>b.onpointermove=e=>{const r=b.getBoundingClientRect();b.style.setProperty("--mx",(e.clientX-r.left)+"px");b.style.setProperty("--my",(e.clientY-r.top)+"px")});

/* ---------- Navegación entre vistas con cortina roja ---------- */
const views={sobre:about,paquetes:$("pack"),servicios:$("svcs"),empresa:pkgs,artista:pkgs};
const HASH={servicios:"#servicios",sobre:"#sobre",paquetes:"#paquetes",empresa:"#paquetes-empresa",artista:"#paquetes-artista"};
let aboutOpen=false,navBusy=false,view="";
const hashView=()=>{const h=location.hash;return h.startsWith("#servicios")?"servicios":h.startsWith("#sobre")?"sobre":h.startsWith("#paquetes-empresa")?"empresa":h.startsWith("#paquetes-artista")?"artista":h.startsWith("#paquetes")?"paquetes":""};
function showView(v,push=true){
  if(navBusy||v===view)return;navBusy=true;
  if(push){try{history.pushState(null,"",v?HASH[v]:location.pathname+location.search)}catch(e){}}
  wipe.className="wipe in";
  setTimeout(()=>{
    new Set(Object.values(views)).forEach(el=>el.classList.remove("open"));void document.body.offsetWidth;
    if(v==="empresa"||v==="artista")renderPkgs(v);
    if(views[v])views[v].classList.add("open");
    if(v==="sobre"){renderTeam();abMore.classList.remove("in");about.scrollTop=0}
    view=v;aboutOpen=!!v;
    if(v){clearTimeout(apTimer);timer.classList.remove("run")}else restartTimer();
    wipe.className="wipe out";
  },650);
  setTimeout(()=>{wipe.className="wipe";navBusy=false},1400);
}
document.querySelectorAll("[data-v]").forEach(a=>a.onclick=e=>{e.preventDefault();showView(a.dataset.v)});
$("goAbout").onclick=e=>{e.preventDefault();showView("sobre")};
$("goPack").onclick=e=>{e.preventDefault();showView("paquetes")};
$("goProj").onclick=e=>e.preventDefault();
$("goServ").onclick=e=>{e.preventDefault();showView("servicios")};
$("svLogo").onclick=$("abLogo").onclick=$("pkLogo").onclick=$("pgLogo").onclick=()=>showView("");
addEventListener("keydown",e=>{
  if(e.key==="Escape")showView("");
  if(view==="paquetes"&&e.key.toLowerCase()==="e"&&!e.metaKey&&!e.ctrlKey){editing=!editing;renderChoices()}
});
addEventListener("popstate",()=>showView(hashView(),false));


/* ---------- Sobre: bloque "Quiénes somos" al hacer scroll ---------- */
const abMore=$("abMore");
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)abMore.classList.add("in")}),{root:about,threshold:.2}).observe(abMore);
$("abScroll").onclick=()=>about.scrollTo({top:$("abHero").offsetHeight,behavior:"smooth"});
about.addEventListener("scroll",()=>{const gp=$("gp");if(gp){gp.classList.remove("hov");gp.querySelectorAll(".act").forEach(x=>x.classList.remove("act"))}},{passive:true});

/* Arranque */
fillText(destinations[0]);setImg(bgs[0],destinations[0]);
numEl.textContent=pad(1);prog.style.width=100/N+"%";shade.style.opacity=destinations[0].ov;buildTrack();
Promise.all(destinations.map(d=>new Promise(r=>{const im=new Image();im.onload=im.onerror=r;im.src=d.image}))).then(()=>
  setTimeout(()=>{document.body.classList.add("ready");const hv=hashView();if(hv){if(hv==="empresa"||hv==="artista")renderPkgs(hv);views[hv].classList.add("open");view=hv;aboutOpen=true}restartTimer()},1300));
