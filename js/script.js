

document.getElementById("cst_icms").addEventListener("input", async () => {


  let rota = await document.querySelector("#cst_icms").value;
  // console.log(cst_icms);

  if (!rota) rota = "xx";


  let res = await fetch(`./pages/icms/cst${rota}.html`);
  console.log(res);
  let content = await res.text();

  document.querySelector("#sessao").innerHTML = content;
})




function calcularIcms() {

  const cst = document.querySelector("#cst_icms").value;
  const baseIcmsEl = document.getElementById("base_calculo_icms");
  const aliquotaIcmsEl = document.getElementById("aliquota_icms");

  let aliquotaSubIcmsEl = document.querySelector('#aliquota_sub');
  let freteEl = document.querySelector('#valor_frete');
  let mvaEl = document.querySelector('#valor_mva');
  let reducaoIcmsEl = document.querySelector('#reducao');
  let diferimentoEl = document.querySelector('#percentual_diferimento');
  let aliquotaIcmsSub = 0;
  let frete = 0;
  let mva = 0;
  let baseIcms = 0;
  let aliquotaIcms = 0;
  let diferimento = 0;


  if (baseIcmsEl) {
    baseIcms = parseFloat(baseIcmsEl.value || 0);
  }
  if (aliquotaIcmsEl) {
    aliquotaIcms = parseFloat(aliquotaIcmsEl.value || 0);
  }
  if (aliquotaSubIcmsEl) {
    aliquotaIcmsSub = parseFloat(aliquotaSubIcmsEl.value || 0);
  }
  if (freteEl) {
    frete = parseFloat(freteEl.value || 0);
  }

  if (mvaEl) {
    mva = parseFloat(mvaEl.value || 0);
  }
  if (reducaoIcmsEl) {
    reducao = parseFloat(reducaoIcmsEl.value || 0);
  }
  if (diferimentoEl) {
    diferimento = parseFloat(diferimentoEl.value || 0);
  }

  switch (cst) {
    case "00":
      calcularIcmsProprio(baseIcms, aliquotaIcms);

      break;
    case "10":
      calcularIcmsProprio(baseIcms, aliquotaIcms);
      calcularIcmsSubstituto(baseIcms, aliquotaIcmsSub, frete, mva)
      break;

    case "20":
      calcularReducaoBaseIcms(baseIcms, aliquotaIcms, reducao)

      break;
    case "30":
      calcularIcmsSubstituto(baseIcms, aliquotaIcmsSub, frete, mva)

      break;
    case "51":
      calcularDiferimentoIcms(baseIcms, aliquotaIcms, diferimento)
      break;
    case "70":
      calcularReducaoBaseIcms(baseIcms, aliquotaIcms, reducao)
      calcularIcmsSubstituto(baseIcms, aliquotaIcmsSub, frete, mva)
      break;

    case "90":
      calcularReducaoBaseIcms(baseIcms, aliquotaIcms, reducao);
      calcularIcmsSubstituto(baseIcms, aliquotaIcmsSub, frete, mva);
      calcularDiferimentoIcms(baseIcms, aliquotaIcms, diferimento);
      break;
    default:
      alert("Esse CST não existe ou não foi implementado ainda.");
      return;
  }
}

function calcularIcmsProprio(baseIcms, aliquotaIcms) {
  let valor_icms = (baseIcms * (aliquotaIcms / 100));

  document.getElementById("valor_icms").innerHTML = valor_icms.toFixed(2);
  return valor_icms;
}

function calcularIcmsSubstituto(baseIcms, aliquotaIcmsSub, frete, mva) {

  let baseIcmsSub = (baseIcms + frete) * (1 + (mva / 100));
  console.log(baseIcmsSub);
  document.getElementById("valor_base_icms_sub").innerHTML = baseIcmsSub.toFixed(2);
  let valorIcmsSub = (baseIcmsSub * (aliquotaIcmsSub / 100));

  document.getElementById("valor_sub_icms").innerHTML = valorIcmsSub.toFixed(2);
  return { valorIcmsSub, baseIcmsSub };
}

function calcularReducaoBaseIcms(baseIcms, aliquotaIcms, reducao) {
  const baseReduzida = (baseIcms * (1 - (reducao / 100)));
  let valor_icms = (baseReduzida * (aliquotaIcms / 100));
  console.log("Base Reduzida:", baseReduzida);
  console.log("ICMS com redução:", valor_icms);

  document.getElementById("valor_base_reduzida").innerHTML = baseReduzida.toFixed(2);
  document.getElementById("valor_icms").innerHTML = valor_icms.toFixed(2);


  return valor_icms;
}

function calcularDiferimentoIcms(baseIcms, aliquotaIcms, diferimento) {
  let valor_icms = (baseIcms * (aliquotaIcms / 100));
  document.getElementById("valor_icms").innerHTML = valor_icms.toFixed(2);
  let icmsDiferido = (valor_icms * (diferimento / 100));
  document.getElementById("valor_diferimento_icms").innerHTML = icmsDiferido.toFixed(2);
  let icmsRecolher = (valor_icms - icmsDiferido);
  document.getElementById("valor_icms_recolher").innerHTML = icmsRecolher.toFixed(2);
}

