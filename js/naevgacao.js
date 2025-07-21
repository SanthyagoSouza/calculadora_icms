import Loading from "./script.js";


document.querySelectorAll("#menu button").forEach((btn) => {
    btn.addEventListener("click", async () => {

        const rota = btn.dataset.modulo;


        const res = await fetch(`pages/${rota}/cstXX.html`);

        const content = await res.text(); // 👈 faltava isso

        document.querySelector("#corpo").innerHTML += content;
        Loading();
    });
});

