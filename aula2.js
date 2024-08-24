function Clicar() {
    if (document.body.style.background === "white" || document.body.style.background === "") {
        document.body.style.background = "#111111";
        document.body.style.color = "white"; 
        
    } else {
        document.body.style.background = "white"; 
        document.body.style.color = "black";
    }
}

function Clicar() {
    const mudar = getComputedStyle(document.body).background;

    if (mudar.includes("linear-gradient")) {
        // Muda para cor sólida
        document.body.style.background = "#111111";
        document.body.style.color = "white";
    } else {
        // Muda para o gradiente
        document.body.style.background = "linear-gradient(to bottom, #b9b9b9, #d4e9e8, #d4e9e8, #d4e9e8, #d69074)";
        document.body.style.color = "black";
    }
}
