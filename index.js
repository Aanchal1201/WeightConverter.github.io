var p = document.getElementById("pound");
var k = document.getElementById("kilogram");
var o = document.getElementById("ounce");
var s = document.getElementById("stone");
var g = document.getElementById("Gram");
var MG = document.getElementById("Miligram");
var mg = document.getElementById("Microgram");
var mt = document.getElementById("MetricTone");

function setEmpty() {
  p.value = "";
  k.value = "";
  o.value = "";
  s.value = "";
  g.value = "";
  MG.value = "";
  mg.value = "";
  mt.value = "";
}

function Pounds(w) {
  if (w == "") {
    setEmpty();
  } else {
    k.value = (w * 0.453592).toFixed(3);
    o.value = w * 16;
    s.value = (w * 0.071429).toFixed(3);
    g.value = (w*453.592).toFixed(3);
    MG.value = (w*453592).toFixed(2);
    mg.value = (w*4.536e+8).toFixed(4);
    mt.value = (w*0.000454).toFixed(4);
  }
}
function Kilograms(w) {
  if (w == "") {
    setEmpty();
  } else {
    p.value = (w * 2.2046).toFixed(3);
    o.value = (w * 35.274).toFixed(3);
    s.value = (w * 0.157473).toFixed(3);
    g.value = w * 1000;
    MG.value = w*1e+6;
    mg.value = w*1e+9;
    mt.value = w*0.001;
  }
}
function Ounces(w) {
  if (w == "") {
    setEmpty();
  } else {
    p.value = w * 0.0625;
    k.value = (w / 35.274).toFixed(3);
    s.value = (w * 0.0044643).toFixed(3);
    g.value = (w / 0.035274).toFixed(3);
    MG.value = (w / 0.000035274).toFixed(3);
    mg.value = (w / 0.000000035274).toFixed(3);
    mt.value = (w*2.835e-5).toFixed(3);
  }
}
function Stones(w) {
  if (w == "") {
    setEmpty();
  } else {
    p.value = w * 14;
    k.value = (w*6.35029).toFixed(3);
    o.value = w * 224;
    g.value = (w*6350.29).toFixed(3);
    MG.value = (w*6.35e+6).toFixed(3);
    mg.value = (w*6.35e+9).toFixed(3);
    mt.value = (w*6.35029e-3).toFixed(3);
  }
}
function Grams(w) {
  if (w == "") {
    setEmpty();
  } else {
    p.value = (w * 0.0022046).toFixed(3);
    k.value = w / 1000;
    o.value = (w * 0.035274).toFixed(3);
    s.value = (w * 0.00015747).toFixed(3);
    MG.value = w*1000;
    mg.value = w*1e+6;
    mt.value = w*1e-6;
  }
}
function Miligrams(w) {
  if (w == "") {
    setEmpty();
  } else {
    p.value = (w * 2.2046e-6).toFixed(3);
    k.value = w *1e-6;
    o.value = (w *3.5274e-5).toFixed(3);
    s.value = (w * 1.5747e-7).toFixed(3);
    g.value = w*0.001;
    mg.value = w*1000;
    mt.value = w*1e-9;
  }
}
function Micrograms(w) {
  if (w == "") {
    setEmpty();
  } else {
    p.value = (w * 2.2046e-9).toFixed(3);
    k.value = w*1e-9;
    o.value = (w * 3.2574e-8).toFixed(3);
    s.value = (w * 1.5747e-10).toFixed(3);
    g.value = w*1e-6;
    MG.value = w*0.001;
    mt.value = w*1e-12;
  }
}
function MetricTones(w) {
  if (w == "") {
    setEmpty();
  } else {
    p.value = (w *2204.62).toFixed(3);
    k.value = w * 1000;
    o.value = (w * 35274).toFixed(3);
    s.value = (w * 157.47).toFixed(3);
    g.value = w*1e+6;
    MG.value = w*1e+9;
    mg.value = w*1e+12;
  }
}
