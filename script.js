let htmlinp = document.querySelector("#htmltext");
let cssinp = document.querySelector("#csstext");
let jsinp = document.querySelector("#jstext");
let outputel = document.querySelector("#output");
let outputboxel = document.querySelector(".outputbox");
let saveel = document.querySelector("#save");
let upel = document.querySelector("#up");
let copy1el = document.querySelector("#copy1");
let copy2el = document.querySelector("#copy2");
let copy3el = document.querySelector("#copy3");

saveel.addEventListener("click",() => {
    showOutput();
})
upel.addEventListener("click",() => {
    outputboxel.classList.toggle("full");
    upel.classList.toggle("rotateeffect")

})

const showOutput = () => {
    outputel.contentDocument.body.innerHTML = htmlinp.value;
    const styleElement = outputel.contentDocument.querySelector('style');
    if (styleElement) {
        styleElement.remove();
    }
    const newStyle = document.createElement('style');
    newStyle.textContent = cssinp.value;
    outputel.contentDocument.head.appendChild(newStyle);
    const scriptElement = outputel.contentDocument.querySelector('script');
    if (scriptElement) {
        scriptElement.remove();
    }
    const newScript = document.createElement('script');
    newScript.textContent = jsinp.value;
    outputel.contentDocument.body.appendChild(newScript);
}

copy1el.addEventListener("click",() => {
    navigator.clipboard.writeText(htmlinp.value);
})
copy2el.addEventListener("click",() => {
    navigator.clipboard.writeText(cssinp.value);
})
copy3el.addEventListener("click",() => {
    navigator.clipboard.writeText(jsinp.value);
})

let btn = document.querySelector("button");
btn.addEventListener("click",() => {
    btn.innerHTML = "Helooo";
})