import{i as n,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(s){return fetch(`https://pixabay.com/api//?key=42637407-5960a3c72fe4db0c907723fc7&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return i.json()})}function m(s){if(loaderSpan.classList.add("hidden"),s.hits.length===0)form.reset(),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#fff"});else{const r=s.hits.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:c,downloads:l})=>`<li class="js-list-item"
        <a class="js-list-link" href=${i} >
	      <img 
		  class="js-list-image" 
		  src=${o} 
		  alt=${e} 
		  />
        </a>
        <div class="js-info">
        <p class="js-info-item">Likes<span>${t}</span></p>
        <p class="js-info-item">Views<span>${a}</span></p>
        <p class="js-info-item">Comments<span>${c}</span></p>
        <p class="js-info-item">Downloads<span>${l}</span></p>
        </div>
        </li>`);return form.reset(),lightbox.refresh(),list.innerHTML=r.join("")}}const p=document.querySelector(".search-form"),d=document.querySelector(".loader");document.querySelector(".js-list");function h(s){s.preventDefault();const r=s.target.elements.field.value;d.classList.remove("hidden"),r.trim()===""?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#fff"}):u(r).then(o=>m(o)).catch(o=>{console.log(o)})}new f(".js-list-item",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
