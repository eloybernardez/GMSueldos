/**
 * @jest-environment jsdom
 */

const calculadora = require("../script.js");

describe("Probar calculadora de sueldos", () => {
  test("El sueldo de un profesor con 4hr Ind(Tier4) es $4236", () => {
    expect(calculadora(4, 1059, 0, 0, 0, 0, 0, 0, 0, 0)).toBe(4236);
  });
  test("El sueldo de un profesor con 6hr Ind(Tier4) es $6354", () => {
    expect(calculadora(6, 1059, 0, 0, 0, 0, 0, 0, 0, 0)).toBe(6354);
  });
  test("El sueldo de un profesor con 6hr Ind(Tier4), 3hr Pack(Tier 4) y 10hr Grupalx2(Tier 4) es $18307.5", () => {
    expect(calculadora(6, 1059, 3, 994.5, 10, 897, 0, 0, 0, 0)).toBe(18307.5);
  });
});
