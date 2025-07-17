function calcularIcms() {

    let cst_icms = document.querySelector("#cst_icms").value;





    switch (cst_icms) {
        case '00':
            let aliquota = document.querySelector("#aliquota").value;
            let base_calculo = document.querySelector("#base_calculo").value;
            cst_icms = document.querySelector("#cst_icms").value;
            let aliquotaValor = Number(aliquota);
            let baseCalculoValor = Number(base_calculo);


            if (isNaN(aliquotaValor) || isNaN(baseCalculoValor)) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;

            }
            valor_icms = (aliquotaValor / 100) * baseCalculoValor;
            document.querySelector("#valor_icms").innerHTML = valor_icms.toFixed(2);
            break;


        case '10':
            let aliquota10 = document.querySelector("#aliquota10").value;
            let base_calculo10 = document.querySelector("#base_calculo10").value;
            let aliquotaSub10 = document.querySelector("#aliquota_sub10").value;
            let baseCalculoSub = document.querySelector("#base_calculo_sub10").value;
            cst_icms = document.querySelector("#cst_icms").value;
            let aliquotaValor10 = Number(aliquota10);
            let baseCalculoValor10 = Number(base_calculo10);
            let aliquotaSubvalor10 = Number(aliquotaSub10);
            let baseSubvalor10 = Number(baseCalculoSub);

            if (isNaN(aliquotaValor10) || isNaN(baseCalculoValor10)) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;

            }
            valor_icms10 = (aliquotaValor10 / 100) * baseCalculoValor10;
            document.querySelector("#valor_icms10").innerHTML = valor_icms10.toFixed(2);

            valor_icms_sub10 = (aliquotaSubvalor10 / 100) * baseSubvalor10;
            document.querySelector("#valor_sub_icms10").innerHTML = valor_icms_sub10.toFixed(2);



            break;






        case '20':
            let aliquota20 = document.querySelector("#aliquota20").value;
            let base_calculo20 = document.querySelector("#base_calculo20").value;
            let reducao20 = document.querySelector("#reducao20").value;
            let aliquotaValor20 = Number(aliquota20);
            let baseCalculoValor20 = Number(base_calculo20);
            let aliquotaReducao20 = Number(reducao20);

            if (isNaN(aliquotaValor20) || isNaN(baseCalculoValor20) || isNaN(aliquotaReducao20)) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;

            }
            let baseReduzida20 = baseCalculoValor20 * (1 - (aliquotaReducao20 / 100));
            valor_icms20 = (aliquotaValor20 / 100) * baseReduzida20;
            document.querySelector("#valor_icms20").innerHTML = valor_icms20.toFixed(2);
            break;







        default:
            break;
    }

}




function mostrarCst() {
    let cst = document.querySelector("#cst_icms").value;
    let cstxx = document.querySelector("#cst_xx");
    let cst00 = document.querySelector("#cst_00");
    let cst10 = document.querySelector("#cst_10");
    let cst20 = document.querySelector("#cst_20");
    let botao = document.querySelector("#calcular-cst-00");
    if (cst === 'XX') {
        cstxx.style.display = "block";
        cst00.style.display = "none";
        cst20.style.display = "none";
        botao.style.display = "none";
    }

    else if (cst === '00') {
        cst00.style.display = "block";
        cst10.style.display = "none";
        cst20.style.display = "none";
        cstxx.style.display = "none";
        botao.style.display = "block";

    } else if (cst === '10') {
        cst00.style.display = "none";
        cst10.style.display = "block";
        cst20.style.display = "none";
        cstxx.style.display = "none";
        botao.style.display = "block";
    } else if (cst === '20') {
        cst20.style.display = "block";
        cst00.style.display = "none";
        cst10.style.display = "none";
        cstxx.style.display = "none";
        botao.style.display = "block";
    } else {
        cst00.style.display = "none";
        cst10.style.display = "none";
        cst20.style.display = "none";
        botao.style.display = "none";
    }
}