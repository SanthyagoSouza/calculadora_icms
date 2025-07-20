document.getElementById("cst_icms").addEventListener("input", async () => {

    let rota = await document.querySelector("#cst_icms").value;
    // console.log(cst_icms);

    if (!rota) rota = "xx";


    let res = await fetch(`./pages/icms/cst${rota}.html`);

    let content = await res.text();

    document.querySelector("#sessao").innerHTML = content;
})
