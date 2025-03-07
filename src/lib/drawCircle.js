const Drawing = require("dxf-writer");
const fs = require("fs");

const drawCircle = (data) => {
  const a = data.x;
  const b = data.y;
  let d = new Drawing();
  d.setUnits("Decimeters");

  // Definiujemy warstwę dla prostokąta
  d.addLayer("l_red", Drawing.ACI.RED, "CONTINUOUS").setActiveLayer("l_red");

  // Współrzędne narożników prostokąta (zakładamy, że zaczyna się w punkcie (0,0))
  let x1 = 0,
    y1 = 0;
  let x2 = a,
    y2 = 0;
  let x3 = a,
    y3 = b;
  let x4 = 0,
    y4 = b;

  // Rysowanie boków prostokąta jako linie
  d.drawLine(x1, y1, x2, y2); // Dolna krawędź
  d.drawLine(x2, y2, x3, y3); // Prawa krawędź
  d.drawLine(x3, y3, x4, y4); // Górna krawędź
  d.drawLine(x4, y4, x1, y1); // Lewa krawędź

  // Zapis do pliku
  const fileName = "rectangle.dxf";
  // fs.writeFileSync(fileName, d.toDxfString());
  fs.writeFileSync(__filename + ".dxf", d.toDxfString());
  console.log(`Plik DXF zapisany jako: ${fileName}`);
};

module.exports = drawCircle;
