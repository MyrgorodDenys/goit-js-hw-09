import"./assets/styles-1559adcc.js";const m="feedback-form-state",o=document.querySelector(".feedback-form"),r=JSON.parse(localStorage.getItem(m))??{email:"",message:""};s(r);o.addEventListener("input",a);function a(e){r[e.target.name]=e.target.value.trim(),localStorage.setItem(m,JSON.stringify(r))}o.addEventListener("submit",l);function l(e){e.preventDefault();const t=o.elements.email.value.trim(),n=o.elements.message.value.trim();t&&n&&(localStorage.removeItem(m),e.currentTarget.reset(),console.log({eml:t,msg:n}))}function s(e){Object.keys(e).forEach(t=>{e[t]&&(o.elements[t].value=e[t])})}
//# sourceMappingURL=commonHelpers2.js.map
