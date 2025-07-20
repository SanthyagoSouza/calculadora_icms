
document.getElementById("cst_icms").addEventListener("input", async () => {

  let rota = await document.querySelector("#cst_icms").value;
  // console.log(cst_icms);

  if (!rota) rota = "xx";


  let res = await fetch(`./pages/cst${rota}.html`);

  let content = await res.text();
  // console.log(content);
  document.querySelector("#sessao").innerHTML = content;
})



function calcularIcms() {

  const cst = document.querySelector("#cst_icms").value;

  let baseIcms = parseFloat(document.getElementById("base_calculo_icms").value);
  let aliquotaIcms = document.getElementById("aliquota_icms").value;
  let valor_icms = 0;

  let baseIcmsSub = document.querySelector('#base_calculo_sub').value;
  let aliquotaSubIcms = document.querySelector('#aliquota_sub').value;
  let valorIcmsSub = 0;







  switch (cst) {
    case "00":
      valor_icms = (baseIcms * (aliquotaIcms / 100)).toFixed(2);
      console.log(valor_icms);
      document.getElementById("valor_icms").innerHTML = valor_icms;

      break;
    case "10":
      valor_icms = (baseIcms * (aliquotaIcms / 100)).toFixed(2);
      console.log(valor_icms);
      document.getElementById("valor_icms").innerHTML = valor_icms;

      valorIcmsSub = (baseIcmsSub * (aliquotaSubIcms / 100)).toFixed(2);
      console.log(valor_icms);
      document.getElementById("valor_sub_icms").innerHTML = valorIcmsSub;
      break;

    case "20":
      let reducaoIcms = document.querySelector("#reducao").value;
      console.log(reducaoIcms)

      break;

    default:
      alert("Esse CST não existe ou não foi implementado ainda.");
      return;
  }
}