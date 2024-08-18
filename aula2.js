function Clicar() {
    if (document.body.style.background === "white" || document.body.style.background === "") {
        document.body.style.background = "#111111";
        document.body.style.color = "white"; 
        
    } else {
        document.body.style.background = "white"; 
        document.body.style.color = "black";
    }
}