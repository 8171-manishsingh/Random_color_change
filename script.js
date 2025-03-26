const btn = document.querySelector("#change_color");
const body = document.querySelector("body");
const code = document.querySelector("#code");
const copy_btn = document.querySelector("#copy_button");

btn.addEventListener("click",()=>{
    change_bg_color();
});

copy_btn.addEventListener("click",()=>{
    navigator.clipboard.writeText(code.innerHTML).then(()=>{
        alert("Copied: " + code.innerHTML);
    });
});

function change_bg_color()
{
    let color = Math.floor(Math.random()*16777216).toString(16);

    body.style.backgroundColor = "#" + color ;
    code.innerHTML = "#" + color;
}