function copyIP() {
    let ip = document.getElementById("server-ip").innerText;
    navigator.clipboard.writeText(ip).then(() => {
        alert("IP copiado: " + ip);
    });
}
