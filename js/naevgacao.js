<<<<<<< HEAD

import Loading from './script.js';
=======
import Loading from "./script.js";
>>>>>>> 1a184466209865aa05ab95af970743324c34f103


document.querySelectorAll("#menu button").forEach((btn) => {
    btn.addEventListener("click", async () => {

        const rota = btn.dataset.modulo;


        const res = await fetch(`pages/${rota}/cstXX.html`);

        const content = await res.text(); // 👈 faltava isso

        document.querySelector("#corpo").innerHTML = "";
        document.querySelector("#sessao").innerHTML = "";
        document.querySelector("#corpo").innerHTML += content;
        setTimeout(() => Loading(), 1000);
    });
});

