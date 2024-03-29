// Clases
class Tier {
  constructor() {}

  calcSueldo(
    cantidadInd,
    precioIndividual,
    cantidadPacks,
    precioPacks,
    cantidadGx2,
    precioGx2,
    cantidadGx3,
    precioGx3,
    cantidadGx4,
    precioGx4
  ) {
    const ingresos = [
      precioIndividual * cantidadInd,
      precioPacks * cantidadPacks,
      cantidadGx2 * precioGx2,
      cantidadGx3 * precioGx3,
      cantidadGx4 * precioGx4,
    ];

    const sueldoTier = ingresos.reduce((ingresoAcumulado, ingresoActual) => {
      return ingresoAcumulado + ingresoActual;
    }, 0);

    return sueldoTier;
  }
}

class Tier1Class extends Tier {
  #individual = 877.5;
  #packs = 812;
  #gx2 = 714.5;
  #gx3 = 650;
  #gx4 = 584.5;

  constructor(cantInd, cantPacks, cantidadGx2, cantidadGx3, cantidadGx4) {
    super();
    this.cantInd = cantInd;
    this.cantPacks = cantPacks;
    this.cantidadGx2 = cantidadGx2;
    this.cantidadGx3 = cantidadGx3;
    this.cantidadGx4 = cantidadGx4;
  }

  get getterSueldo() {
    return this.calcSueldo(
      this.cantInd,
      this.#individual,
      this.cantPacks,
      this.#packs,
      this.#gx2,
      this.cantidadGx2,
      this.#gx3,
      this.cantidadGx3,
      this.#gx4,
      this.cantidadGx4
    );
  }
}

class Tier2Class extends Tier {
  #individual = 935.5;
  #packs = 871;
  #gx2 = 773.5;
  #gx3 = 708;
  #gx4 = 643.5;

  constructor(cantInd, cantPacks, cantidadGx2, cantidadGx3, cantidadGx4) {
    super();
    this.cantInd = cantInd;
    this.cantPacks = cantPacks;
    this.cantidadGx2 = cantidadGx2;
    this.cantidadGx3 = cantidadGx3;
    this.cantidadGx4 = cantidadGx4;
  }

  get getterSueldo() {
    return this.calcSueldo(
      this.cantInd,
      this.#individual,
      this.cantPacks,
      this.#packs,
      this.#gx2,
      this.cantidadGx2,
      this.#gx3,
      this.cantidadGx3,
      this.#gx4,
      this.cantidadGx4
    );
  }
}

class Tier3Class extends Tier {
  #individual = 1001;
  #packs = 936.5;
  #gx2 = 838;
  #gx3 = 773.5;
  #gx4 = 708;

  constructor(cantInd, cantPacks, cantidadGx2, cantidadGx3, cantidadGx4) {
    super();
    this.cantInd = cantInd;
    this.cantPacks = cantPacks;
    this.cantidadGx2 = cantidadGx2;
    this.cantidadGx3 = cantidadGx3;
    this.cantidadGx4 = cantidadGx4;
  }

  get getterSueldo() {
    return this.calcSueldo(
      this.cantInd,
      this.#individual,
      this.cantPacks,
      this.#packs,
      this.#gx2,
      this.cantidadGx2,
      this.#gx3,
      this.cantidadGx3,
      this.#gx4,
      this.cantidadGx4
    );
  }
}

class Tier4Class extends Tier {
  #individual = 1059;
  #packs = 994.5;
  #gx2 = 897;
  #gx3 = 831.5;
  #gx4 = 767;

  constructor(cantInd, cantPacks, cantidadGx2, cantidadGx3, cantidadGx4) {
    super();
    this.cantInd = cantInd;
    this.cantPacks = cantPacks;
    this.cantidadGx2 = cantidadGx2;
    this.cantidadGx3 = cantidadGx3;
    this.cantidadGx4 = cantidadGx4;
  }

  get getterSueldo() {
    return this.calcSueldo(
      this.cantInd,
      this.#individual,
      this.cantPacks,
      this.#packs,
      this.#gx2,
      this.cantidadGx2,
      this.#gx3,
      this.cantidadGx3,
      this.#gx4,
      this.cantidadGx4
    );
  }
}

class Tier5Class extends Tier {
  #individual = 1124.5;
  #packs = 1060;
  #gx2 = 961.5;
  #gx3 = 897;
  #gx4 = 831.5;

  constructor(cantInd, cantPacks, cantidadGx2, cantidadGx3, cantidadGx4) {
    super();
    this.cantInd = cantInd;
    this.cantPacks = cantPacks;
    this.cantidadGx2 = cantidadGx2;
    this.cantidadGx3 = cantidadGx3;
    this.cantidadGx4 = cantidadGx4;
  }

  get getterSueldo() {
    return this.calcSueldo(
      this.cantInd,
      this.#individual,
      this.cantPacks,
      this.#packs,
      this.#gx2,
      this.cantidadGx2,
      this.#gx3,
      this.cantidadGx3,
      this.#gx4,
      this.cantidadGx4
    );
  }
}

class Tier6Class extends Tier {
  #individual = 1182.5;
  #packs = 1118;
  #gx2 = 1020.5;
  #gx3 = 955;
  #gx4 = 890.5;

  constructor(cantInd, cantPacks, cantidadGx2, cantidadGx3, cantidadGx4) {
    super();
    this.cantInd = cantInd;
    this.cantPacks = cantPacks;
    this.cantidadGx2 = cantidadGx2;
    this.cantidadGx3 = cantidadGx3;
    this.cantidadGx4 = cantidadGx4;
  }

  get getterSueldo() {
    return this.calcSueldo(
      this.cantInd,
      this.#individual,
      this.cantPacks,
      this.#packs,
      this.#gx2,
      this.cantidadGx2,
      this.#gx3,
      this.cantidadGx3,
      this.#gx4,
      this.cantidadGx4
    );
  }
}

// const tier1 = new Tier1Class(3, 8, 0, 0, 0);
// const tier2 = new Tier2Class(2, 3, 0, 0, 0);
// const tier3 = new Tier3Class(0, 0, 0, 0, 0);
// const tier4 = new Tier4Class(5, 14, 0, 0, 0);
// const tier5 = new Tier5Class(3, 0, 0, 0, 0);
// const tier6 = new Tier6Class(2, 10, 0, 0, 0);

// Funciones
function tiersCreation() {
  let cantTier1Ind = Number(document.getElementById("tier1Ind")?.value);
  let cantTier2Ind = Number(document.getElementById("tier2Ind")?.value);
  let cantTier3Ind = Number(document.getElementById("tier3Ind")?.value);
  let cantTier4Ind = Number(document.getElementById("tier4Ind")?.value);
  let cantTier5Ind = Number(document.getElementById("tier5Ind")?.value);
  let cantTier6Ind = Number(document.getElementById("tier6Ind")?.value);

  let cantTier1Packs = Number(document.getElementById("tier1Pack")?.value);
  let cantTier2Packs = Number(document.getElementById("tier2Pack")?.value);
  let cantTier3Packs = Number(document.getElementById("tier3Pack")?.value);
  let cantTier4Packs = Number(document.getElementById("tier4Pack")?.value);
  let cantTier5Packs = Number(document.getElementById("tier5Pack")?.value);
  let cantTier6Packs = Number(document.getElementById("tier6Pack")?.value);

  let cantTier1Gx2 = Number(document.getElementById("tier1Gx2")?.value);
  let cantTier2Gx2 = Number(document.getElementById("tier2Gx2")?.value);
  let cantTier3Gx2 = Number(document.getElementById("tier3Gx2")?.value);
  let cantTier4Gx2 = Number(document.getElementById("tier4Gx2")?.value);
  let cantTier5Gx2 = Number(document.getElementById("tier5Gx2")?.value);
  let cantTier6Gx2 = Number(document.getElementById("tier6Gx2")?.value);

  let cantTier1Gx3 = Number(document.getElementById("tier1Gx3")?.value);
  let cantTier2Gx3 = Number(document.getElementById("tier2Gx3")?.value);
  let cantTier3Gx3 = Number(document.getElementById("tier3Gx3")?.value);
  let cantTier4Gx3 = Number(document.getElementById("tier4Gx3")?.value);
  let cantTier5Gx3 = Number(document.getElementById("tier5Gx3")?.value);
  let cantTier6Gx3 = Number(document.getElementById("tier6Gx3")?.value);

  let cantTier1Gx4 = Number(document.getElementById("tier1Gx4")?.value);
  let cantTier2Gx4 = Number(document.getElementById("tier2Gx4")?.value);
  let cantTier3Gx4 = Number(document.getElementById("tier3Gx4")?.value);
  let cantTier4Gx4 = Number(document.getElementById("tier4Gx4")?.value);
  let cantTier5Gx4 = Number(document.getElementById("tier5Gx4")?.value);
  let cantTier6Gx4 = Number(document.getElementById("tier6Gx4")?.value);

  const tier1 = new Tier1Class(
    cantTier1Ind,
    cantTier1Packs,
    cantTier1Gx2,
    cantTier1Gx3,
    cantTier1Gx4
  );
  const tier2 = new Tier2Class(
    cantTier2Ind,
    cantTier2Packs,
    cantTier2Gx2,
    cantTier2Gx3,
    cantTier2Gx4
  );
  const tier3 = new Tier3Class(
    cantTier3Ind,
    cantTier3Packs,
    cantTier3Gx2,
    cantTier3Gx3,
    cantTier3Gx4
  );
  const tier4 = new Tier4Class(
    cantTier4Ind,
    cantTier4Packs,
    cantTier4Gx2,
    cantTier4Gx3,
    cantTier4Gx4
  );
  const tier5 = new Tier5Class(
    cantTier5Ind,
    cantTier5Packs,
    cantTier5Gx2,
    cantTier5Gx3,
    cantTier5Gx4
  );
  const tier6 = new Tier6Class(
    cantTier6Ind,
    cantTier6Packs,
    cantTier6Gx2,
    cantTier6Gx3,
    cantTier6Gx4
  );

  return [tier1, tier2, tier3, tier4, tier5, tier6];
}

function calculadoraSueldo() {
  function listaSueldosBuilder() {
    const listaSueldos = [];

    tiersCreation().forEach((tier) => {
      listaSueldos.push(tier.getterSueldo);
    });

    return listaSueldos;
  }

  const sueldoProfesor = (listaSueldos) =>
    listaSueldos.reduce((sueldoAcumulado, sueldoActual) => {
      return sueldoAcumulado + sueldoActual;
    }, 0);

  const resultText = document.getElementById("result");
  resultText.innerText = `El sueldo del profesor es $ ${sueldoProfesor(
    listaSueldosBuilder()
  )} 💰`;
}

const calcButton = document.getElementById("calcBtn");

calcButton?.addEventListener("click", calculadoraSueldo);

// For testing:
const tier = new Tier();
const calculadora = tier.calcSueldo;

module.exports = calculadora;