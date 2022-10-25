import {series} from "./data.js"
import {Serie} from "./Serie.js"

let seriesTabla: HTMLElement = document.getElementById("series")!;

informacionSeries(series);
averageTemporadas(series);


function informacionSeries(listaSeries : Serie[])
{
    let tBodyElement: HTMLElement = document.createElement("tBody");

    for(let actual of listaSeries)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML =
        `<td>${actual.id}</td>
        <td>${actual.nombre}</td>
        <td>${actual.canal}</td>  
        <td>${actual.temporadas}</td>`;
        tBodyElement.appendChild(trElement);      
    }
    seriesTabla.appendChild(tBodyElement);
}

function averageTemporadas(listaSeries: Serie[])
{
    let tBodyElement: HTMLElement = document.createElement("tBody");

    let totalTemporadas: number = 0;
    let tamanio: number = 0;

    for(let actual of listaSeries)
    {
        let numTemporadas: number = actual.temporadas;
        totalTemporadas = totalTemporadas + numTemporadas;
        tamanio = tamanio + 1;        
    }

    let averageTemporadas: number = totalTemporadas/tamanio;
    let textoAverage: string = "Numero Average Temporadas: " + averageTemporadas;

    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML =
    `<td>${textoAverage}</td>`;
    tBodyElement.appendChild(trElement);  
    seriesTabla.appendChild(tBodyElement);
} 
