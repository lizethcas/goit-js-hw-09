const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");let o;t.addEventListener("click",(()=>{t.disabled=!0,o=setInterval((()=>{a.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{clearInterval(o),t.disabled=!1,t.style.opacity=.7}));
//# sourceMappingURL=01-color-switcher.549b7518.js.map
