import{_ as O,u as H,o as d,c as V,a as e,n as l,r as U,s as w,b as S,d as T,w as u,e as s,t as B,f as P,F as A,V as f,g as h,h as G}from"./index-ZSUOFxwM.js";import{u as E}from"./list-CZI7nwAb.js";import{u as L}from"./settings-CrzEtRxU.js";import{V as g,a as R}from"./VRow-DsIPsSww.js";const $={class:"digit",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"256px",height:"529px",viewBox:"0 0 256 529","enable-background":"new 0 0 256 529","xml:space":"preserve"},j={__name:"Digit",props:{data:{type:String,default(){return""}},color:{type:String,default(){return"white"}}},setup(t){return H(a=>({"2f036476":t.color})),(a,c)=>(d(),V("svg",$,[e("path",{class:l([{active:"02356789".includes(t.data)},"digit-a"]),fill:"#FF5F8D",d:`M231,13c0,6.627-5.373,12-12,12H37c-6.627,0-12-5.373-12-12v-1c0-6.627,5.373-12,12-12h182
	c6.627,0,12,5.373,12,12V13z`},null,2),e("path",{class:l([{active:"01234789".includes(t.data)},"digit-b"]),fill:"#FF5F8D",d:`M244,35c6.627,0,12,5.373,12,12v182c0,6.627-5.373,12-12,12h-1c-6.627,0-12-5.373-12-12V47
	c0-6.627,5.373-12,12-12H244z`},null,2),e("path",{class:l([{active:"013456789".includes(t.data)},"digit-c"]),fill:"#FF5F8D",d:`M244,290c6.627,0,12,5.373,12,12v182c0,6.628-5.373,12-12,12h-1c-6.627,0-12-5.372-12-12V302
	c0-6.627,5.373-12,12-12H244z`},null,2),e("path",{class:l([{active:"0456789".includes(t.data)},"digit-d"]),fill:"#FF5F8D",d:`M13,35c6.627,0,12,5.373,12,12v182c0,6.627-5.373,12-12,12h-1c-6.627,0-12-5.373-12-12V47
	c0-6.627,5.373-12,12-12H13z`},null,2),e("path",{class:l([{active:"0268".includes(t.data)},"digit-e"]),fill:"#FF5F8D",d:`M13,290c6.627,0,12,5.373,12,12v182c0,6.628-5.373,12-12,12h-1c-6.627,0-12-5.372-12-12V302
	c0-6.627,5.373-12,12-12H13z`},null,2),e("path",{class:l([{active:"2345689".includes(t.data)},"digit-f"]),fill:"#FF5F8D",d:`M231,265c0,6.627-5.373,12-12,12H37c-6.627,0-12-5.373-12-12v-1c0-6.627,5.373-12,12-12h182
	c6.627,0,12,5.373,12,12V265z`},null,2),e("path",{class:l([{active:"0235689".includes(t.data)},"digit-g"]),fill:"#FF5F8D",d:`M231,517c0,6.627-5.373,12-12,12H37c-6.627,0-12-5.373-12-12v-1c0-6.627,5.373-12,12-12h182
	c6.627,0,12,5.373,12,12V517z`},null,2),e("circle",{class:l({active:t.data===":"}),fill:"#FF5F8D",cx:"128",cy:"138",r:"32"},null,2),e("circle",{class:l({active:t.data===":"}),fill:"#FF5F8D",cx:"128",cy:"393",r:"32"},null,2)]))}},q=O(j,[["__scopeId","data-v-461c265e"]]),X={__name:"index",setup(t){const a={STOP:0,COUNTING:1,PAUSE:2},c=U(a.STOP),m=E(),{current:n,items:r,timeleft:o}=w(m),{setCurrentItem:C,countdown:k,setFinishItem:D}=m,b=L(),{selectedFile:I}=w(b),N=S(()=>n.value.length>0?n.value:r.value.length>0?"點擊開始":"沒有事項");let v=0;const F=()=>{c.value===a.STOP&&r.value.length>0&&n.value.length===0&&C(),c.value=a.COUNTING,v=setInterval(()=>{k(),o.value===0&&p()},1e3)},p=()=>{clearInterval(v),c.value=a.STOP;const i=new Audio;i.src=I.value,i.play(),D(),r.value.length>0&&F()},y=()=>{clearInterval(v),c.value=a.PAUSE},_=S(()=>{const i=Math.floor(o.value/60).toString().padStart(2,"0"),x=(o.value%60).toString().padStart(2,"0");return i+":"+x});return(i,x)=>(d(),T(G,null,{default:u(()=>[s(R,null,{default:u(()=>[s(g,{cols:"12"},{default:u(()=>[e("h1",null,"目前事項 "+B(N.value),1)]),_:1}),s(g,{cols:"12"},{default:u(()=>[(d(!0),V(A,null,P(_.value,(z,M)=>(d(),T(q,{key:M,data:z,color:"white"},null,8,["data"]))),128))]),_:1}),s(g,{cols:"12"},{default:u(()=>[s(f,{icon:"mdi-play",disabled:c.value.COUNTING||h(n).length===0&&h(r).length===0,onClick:F},null,8,["disabled"]),s(f,{icon:"mdi-pause",disabled:c.value!==a.COUNTING,onClick:y},null,8,["disabled"]),s(f,{icon:"mdi-skip-next",disabled:h(n).length===0,onClick:p},null,8,["disabled"])]),_:1})]),_:1})]),_:1}))}};export{X as default};