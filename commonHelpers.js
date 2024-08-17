import{i as c,S as h}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=",g=t=>`
  <li class='gallery-item'>
    <a class='gallery-link' href='${t.largeImageURL}'>
      <img
        class='gallery-image'
        src='${t.webformatURL}'
        alt='${t.tags}'
        width=360
        height=152/>
    </a>
    <ul class='photo-info-list'>
      <li class='photo-info-list-item'><h2>Likes</h2><p>${t.likes}</p></li>
      <li class='photo-info-list-item'><h2>Views</h2><p>${t.views}</p></li>
      <li class='photo-info-list-item'><h2>Comments</h2><p>${t.comments}</p></li>
      <li class='photo-info-list-item'><h2>Downloads</h2><p>${t.downloads}</p></li>
    </ul>
  </li>`,u="https://pixabay.com/api/",p=t=>{const s=new URLSearchParams({key:"45417636-6e508772373129b2f08d1fd3e",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${u}?${s}`;return fetch(i).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},d=A,l=document.querySelector(".form"),n=document.querySelector(".loader"),m=document.querySelector(".gallery"),f=t=>{t.preventDefault();const s=l.elements.search_img.value.trim();if(!s){c.warning({title:"Warning",message:"Please fill the search field first.",position:"topRight"}),l.elements.search_img.value="";return}n.classList.add("visible"),p(s).then(i=>{i.hits.length===0&&(c.error({iconUrl:`${d}`,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",color:"#ef4040",maxWidth:"350px"}),n.classList.remove("visible"),m.innerHTML="",l.reset());const e=i.hits.map(a=>g(a)).join("");m.innerHTML=e,new h(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}).refresh(),n.classList.remove("visible"),l.reset()}).catch(i=>{console.log(i)})};l.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
