import{S as p,i as c}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(o){return fetch(`https://pixabay.com/api//?key=42637407-5960a3c72fe4db0c907723fc7&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return i.json()})}function h(o){return o.hits.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:m})=>`<li class="js-list-item"
        <a class="js-list-link" href=${i} >
	      <img 
		  class="js-list-image" 
		  src=${r} 
		  alt=${e} 
		  />
        </a>
        <div class="js-info">
        <p class="js-info-item">Likes<span>${t}</span></p>
        <p class="js-info-item">Views<span>${n}</span></p>
        <p class="js-info-item">Comments<span>${u}</span></p>
        <p class="js-info-item">Downloads<span>${m}</span></p>
        </div>
        </li>`).join("")}const f=document.querySelector(".search-form"),a=document.querySelector(".loader"),l=document.querySelector(".js-list"),g=new p(".js-list-item",{captionsData:"alt",captionDelay:250});function y(o){o.preventDefault();const s=o.target.elements.field.value;a.classList.remove("hidden"),s.trim()===""?(a.classList.add("hidden"),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#fff"})):d(s).then(r=>{a.classList.add("hidden"),r.hits.length!==0?(l.innerHTML=h(r),g.refresh()):(l.innerHTML="",c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#fff"})),f.reset()}).catch(r=>{console.log(r)})}f.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
