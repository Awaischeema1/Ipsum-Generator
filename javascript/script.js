const form = document.querySelector('form'),
 input = document.querySelector('form input'),
articalTag = document.querySelector('.ipsum-text'),
copyBtn = document.querySelector('.copy-btn');

form.addEventListener('submit', e =>{
e.preventDefault();
const value = parseInt(input.value);
let temptext = text.slice(0,value);
temptext=temptext.map((item)=>{
    return `<p class="result">${item}</p>`
}).join('')
articalTag.innerHTML=temptext
copyBtn.removeAttribute('disabled')
copyBtn.addEventListener('click',()=>{
    let text = articalTag.innerText;
    navigator.clipboard.writeText(text)
    alert('text has been copied');
})
})


