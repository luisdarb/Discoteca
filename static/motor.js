
const texto = document.getElementById("textohover")

const asigntext = (event) => {
    const textshow = {
        1: "Ullamco qui excepteur laborum qui aute consequat nostrud sunt laborum qui irure sit consectetur. Amet ipsum eu id ex pariatur in enim do. Deserunt officia mollit tempor voluptate sint ipsum in nisi nulla ad minim. Fugiat nulla pariatur ullamco do cupidatat voluptate commodo pariatur ut reprehenderit et.",
        2: "Laboris sit mollit cupidatat pa Eu esse labore aliquip eiusmod. Anim nostrud adipisicing sit ea cillum eiusmod do laboris ullamco sint.",
        3: "In do consectetur ut eu elit sint elit id veniam enim ea. Reprehenderit irure nulla aute occaecat deserunt esse laboris qui. Nulla culpa veniam non aliquip amet deserunt enim aliqua cillum. Ut ut ex aute labore exercitation pariatur exercitation officia elit ex et proident elit. Cupidatat et cillum do mollit cupidatat in sint elit anim id."
    }
    const p = document.createElement("p")
    p.style.display = 'inline'
    p.textContent += textshow[event]
    texto.appendChild(p)
}

const removetext = () => {
    texto.innerHTML = ""
}

removetext()