


document.querySelectorAll("#menu button").forEach((btn) => {
    btn.addEventListener("click", async () => {
        const rota = btn.dataset.modulo;
        console.log(rota);
        const res = await fetch(`pages/${rota}/cstXX.html`);
        // console.log(res);
        const content = await res.text(); // 👈 faltava isso
        console.log(content);
        document.querySelector("#corpo").innerHTML = content;
    });
});

