import"./style.7f2dd081.js";import{S as g,F as b,k as u,a as w,b as l,e as x,V as p,W as S,f,g as y}from"./vendor.fcee6200.js";import{i as z}from"./Inconsolata_Regular.e59c2e0b.js";const h=document.querySelector("canvas.webgl"),s=new g,k=new b;let a=null,r=null;const m=new u({wireframe:!0});k.load(z,n=>{const c=new w("Under Construction",{font:n,size:1,height:.1,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5}),d=new w("Please come back later",{font:n,size:.7,height:.1,curveSegments:12,bevelEnabled:!0,bevelThickness:.015,bevelSize:.01,bevelOffset:0,bevelSegments:3});c.center(),a=new l(c,m),a.position.y=1,d.center(),r=new l(d,m),r.position.y=-1,s.add(a,r)});const e={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,t.aspect=e.width/e.height,t.updateProjectionMatrix(),i.setSize(e.width,e.height),i.setPixelRatio(Math.min(window.devicePixelRatio,2))});const t=new x(75,e.width/e.height,.1,100);t.position.z=4;s.add(t);const o=new f;h.addEventListener("mousemove",n=>{o.x=n.clientX/window.innerWidth*2-1,o.y=-(n.clientY/window.innerHeight)*2+1,t.position.x=o.x*2,t.position.y=o.y*6,t.lookAt(new p(0,0,0))});const i=new S({canvas:h});i.setSize(e.width,e.height);i.setPixelRatio(Math.min(window.devicePixelRatio,2));const P=new y,v=()=>{P.getElapsedTime(),i.render(s,t),window.requestAnimationFrame(v)};v();
