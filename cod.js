function changeTheme() {
    //var icon = document.querySelector("i")
    var button = document.getElementById("botao");

    if (botao.textContent === " Tema claro") {
        botao.innerHTML = "";
        botao.innerHTML = "<i class='bx bxs-moon'> </i> Tema dark";
    } else {
        botao.innerHTML = "";
        botao.innerHTML = "<i class='bx bxs-sun'></i> Tema claro";
    }

    document.body.classList.toggle("dark");
    console.log(botao.innerHTML);
}
