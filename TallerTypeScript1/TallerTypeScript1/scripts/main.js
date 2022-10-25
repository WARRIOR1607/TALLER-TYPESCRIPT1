import { series } from "./data.js";

var seriesTabla = document.getElementById("series");

informacionSeries(series);
averageTemporadas(series);
function informacionSeries(listaSeries) {
    var tBodyElement = document.createElement("tBody");
    for (var _i = 0, listaSeries_1 = listaSeries; _i < listaSeries_1.length; _i++) {
        var actual = listaSeries_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            "<td>".concat(actual.id, "</td>\n        <td>").concat(actual.nombre, "</td>\n        <td>").concat(actual.canal, "</td>  \n        <td>").concat(actual.temporadas, "</td>");
        tBodyElement.appendChild(trElement);
    }
    seriesTabla.appendChild(tBodyElement);
}
function averageTemporadas(listaSeries) {
    var tBodyElement = document.createElement("tBody");
    var totalTemporadas = 0;
    var tamanio = 0;
    for (var _i = 0, listaSeries_2 = listaSeries; _i < listaSeries_2.length; _i++) {
        var actual = listaSeries_2[_i];
        var numTemporadas = actual.temporadas;
        totalTemporadas = totalTemporadas + numTemporadas;
        tamanio = tamanio + 1;
    }
    var averageTemporadas = totalTemporadas / tamanio;
    var textoAverage = " numero Average Temporadas: " + averageTemporadas;
    var trElement = document.createElement("tr");
    trElement.innerHTML =
        "<td>".concat(textoAverage, "</td>");
    tBodyElement.appendChild(trElement);
    seriesTabla.appendChild(tBodyElement);
}
