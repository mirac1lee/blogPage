const btn = document.querySelectorAll(".nav-link")

btn.addEventListener("click" ,(e)=>{
    e.preventDefault()
    btn.style.color = 'red'
})
