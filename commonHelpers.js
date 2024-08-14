import{i as A,S as h}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=",p=u,f=document.querySelector(".form"),c=document.querySelector(".input");document.querySelector(".btn");const l=document.querySelector(".loader"),g=document.querySelector(".gallery");f.addEventListener("submit",d);function d(a){a.preventDefault(),a.target;const o=c.value;if(o==="")return;const i=`https://pixabay.com/api/?${new URLSearchParams({key:"45417636-6e508772373129b2f08d1fd3e",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`,t={method:"GET"};l.classList.add("visible"),fetch(i,t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const s=e.hits;if(s.length===0)A.show({iconUrl:`${p}`,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",color:"#ef4040",maxWidth:"350px"}),l.classList.remove("visible");else{const m=s.map(r=>`
            <li class='gallery-item'>
              <a class='gallery-link' href='${r.largeImageURL}'>
                <img
                class='gallery-image'
                src='${r.webformatURL}'
                alt='${r.tags}'
                width=360
                height=152/>
              </a>
              <ul class='photo-info-list'>
                <li class='photo-info-list-item'><h2>Likes</h2><p>${r.likes}</p></li>
                <li class='photo-info-list-item'><h2>Views</h2><p>${r.views}</p></li>
                <li class='photo-info-list-item'><h2>Comments</h2><p>${r.comments}</p></li>
                <li class='photo-info-list-item'><h2>Downloads</h2><p>${r.downloads}</p></li>
              </ul>
            </li>`).join("");g.innerHTML=m,new h(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}).refresh(),l.classList.remove("visible")}}).catch(e=>{console.log(e)}),c.value=""}
//# sourceMappingURL=commonHelpers.js.map
