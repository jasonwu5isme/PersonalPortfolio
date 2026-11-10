let language='zh';
try { language=sessionStorage.getItem('tp-language')==='en'?'en':'zh'; } catch {}
function renderLanguage(){document.documentElement.lang=language==='zh'?'zh-CN':'en';document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset[language]);const b=document.querySelector('#lang');b.textContent=language==='zh'?'English':'中文';b.setAttribute('aria-label',language==='zh'?'切换为英文':'Switch to Chinese');document.title=language==='zh'?'Together Pass · 项目介绍':'Together Pass · About the project';}
document.querySelector('#lang').addEventListener('click',()=>{language=language==='zh'?'en':'zh';try{sessionStorage.setItem('tp-language',language)}catch{}renderLanguage();});renderLanguage();

