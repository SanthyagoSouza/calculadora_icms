

document.getElementById("cst_icms").addEventListener("input", async () => {

    let rota = await document.querySelector("#cst_icms").value;
    // console.log(cst_icms);

    if(!rota) rota = "xx";
        

    let res = await fetch(`./pages/cst${rota}.html`);

    let content = await res.text();
      console.log(content);
    document.querySelector("#sessao").innerHTML = content;
})

