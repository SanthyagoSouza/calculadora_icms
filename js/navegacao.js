
import Loading from './script.js';


document.querySelectorAll("#menu button").forEach((btn) => {
    btn.addEventListener("click", async () => {

        const rota = btn.dataset.modulo;


        const res = await fetch(`pages/${rota}/cstxx.html`);

        const content = await res.text(); // 👈 faltava isso

        document.querySelector("#corpo").innerHTML = "";
        document.querySelector("#sessao").innerHTML = "";
        document.querySelector("#corpo").innerHTML += content;
        setTimeout(() => Loading(), 1000);
    });
});

