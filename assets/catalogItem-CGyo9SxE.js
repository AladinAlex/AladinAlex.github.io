import{_ as s,o as l,c,e,t as o}from"./index-BGWAQOyx.js";const d={components:{},props:{item:{type:Object,required:!0}},setup(a){let t=Telegram.WebApp;return t.expand(),t.MainButton.textColor="#FFFFFF",t.MainButton.text="Выберите каталог",{catalogHandler:i=>{t.MainButton.isVisible?t.MainButton.hide():(t.MainButton.setText(a.item.name),t.MainButton.show())}}}},r={class:"item-start"},m={class:"catalog-item__name"},u={class:"catalog-item__count"},_=e("div",{class:"item-end"},[e("div",{class:"icon"},[e("svg",{width:"9",height:"16",viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.46967 15.5303C0.176777 15.2374 0.176777 14.7626 0.46967 14.4697L6.93934 8L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967C0.762564 0.176777 1.23744 0.176777 1.53033 0.46967L8.53033 7.46967C8.82322 7.76256 8.82322 8.23744 8.53033 8.53033L1.53033 15.5303C1.23744 15.8232 0.762564 15.8232 0.46967 15.5303Z",fill:"white"})])])],-1);function p(a,t,n,i,g,v){return l(),c("div",{class:"catalog-item",onClick:t[0]||(t[0]=h=>i.catalogHandler(n.item.id))},[e("div",r,[e("div",m,[e("span",null,o(n.item.name),1)]),e("div",u,[e("span",null,o(n.item.itemCount),1)])]),_])}const B=s(d,[["render",p]]);export{B as default};
