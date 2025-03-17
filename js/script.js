function copyIP() {
    let ip = document.getElementById("server-ip").innerText;

    let cip = document.getElementById("cip");


    navigator.clipboard.writeText(ip).then(() => {
        cip.innerHTML = "Copiado";
        setTimeout(() => {
            cip.innerHTML = "Copiar IP";
        }, 2000);
    });
}
