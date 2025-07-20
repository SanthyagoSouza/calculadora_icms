document.getElementById("cst_icms").addEventListener("input", async () => {

    let rota = await document.querySelector("#cst_icms").value;
    // console.log(cst_icms);

    if (!rota) rota = "xx";


    let res = await fetch(`./pages/icms/cst${rota}.html`);

    let content = await res.text();

    document.querySelector("#sessao").innerHTML = content;
})


document.querySelectorAll("#menu button").forEach((btn) => {
    btn.addEventListener("click", async () => {
        const rota = btn.dataset.modulo;
        const res = await fetch(`pages/${rota}/${rota}.html`);
        const content = await res.text(); // 👈 faltava isso
        document.querySelector("#corpo").innerHTML = content;
    });
});