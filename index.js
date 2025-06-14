import{a as m,S as f,i}from"./assets/vendor-1AYLTIiv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",g="50819756-11248eda55a36e78284ebe321",y=o=>{const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(h,{params:r}).then(s=>s.data).catch(s=>{throw new Error("Failed to fetch images")})},c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new f(".gallery",{captionsData:"alt",captionDelay:250}),v=o=>{const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:a,comments:u,downloads:d})=>`
    <li class="gallery-item">
    <a href="${n}">
    <img src="${s}" alt="${e}"/>
    </a>
    <div class="info">
    <p class="properties">Likes <span class="value">${t}</span></p>
    <p class="properties">Views <span class="value">${a}</span></p>
    <p class="properties">Comments <span class="value">${u}</span></p>
    <p class="properties">Downloads <span class="value">${d}</span></p>
    </div>

    </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()},w=()=>{c.innerHTML=""},b=()=>{l.classList.remove("hidden")},P=()=>{l.classList.add("hidden")},p=document.querySelector(".form"),S=p.elements["search-text"];p.addEventListener("submit",o=>{o.preventDefault();const r=S.value.trim();if(!r){i.warning({message:"Please enter a search term!",position:"topRight"});return}b(),w(),y(r).then(s=>{if(!s.hits.length){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(s.hits)}).catch(()=>{i.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{P()})});
//# sourceMappingURL=index.js.map
