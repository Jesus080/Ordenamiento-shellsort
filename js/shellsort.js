/*function shellSort() {
    // Obtener la entrada del usuario y convertirla en un array de números
    var inputElement = document.getElementById("inputArray");
    var n = inputElement.value.split(",").map(Number);
    var v = n.slice();
    
    // Obtener la dirección de ordenamiento seleccionada por el usuario
    var orderDirection = document.getElementById("orderDirection").value;
    
    // Algoritmo de ordenamiento Shell Sort
    if (orderDirection == "noSelec") {
        alert("No Seleccionó Ordenamiento");
    } else {
        var len = v.length,
            gap = Math.floor(len / 2);

        while (gap > 0) {
            for (var i = gap; i < len; i++) {
                var temp = v[i];
                var j = i;

                while (j >= gap && ((orderDirection === "asc" && v[j - gap] > temp) || (orderDirection === "desc" && v[j - gap] < temp))) {
                    v[j] = v[j - gap];
                    j -= gap;
                }

                v[j] = temp;
            }

            gap = Math.floor(gap / 2);
        }

        // Mostrar el array ordenado
        var resultElement = document.getElementById("result");
        resultElement.innerHTML = "Arreglo original: " + n.join(', ') + "<br>" +
                                  "Arreglo ordenado: " + v.join(', ');
    }
}*/
function shellSort() {
    // Obtener la entrada del usuario y convertirla en un array de números
    var inputElement = document.getElementById("inputArray");
    var n = inputElement.value.split(",").map(Number);
    var v = n.slice();

    // Obtener la dirección de ordenamiento seleccionada por el usuario
    var orderDirection = document.getElementById("orderDirection").value;

    // Algoritmo de ordenamiento Shell Sort
    if (orderDirection == "noSelec") {
        alert("No Seleccionó Ordenamiento");
    } else {
        var len = v.length;

        for (var brecha = Math.floor(len / 2); brecha > 0; brecha = Math.floor(brecha / 2)) {
            for (var i = brecha; i < len; i++) {
                var temp = v[i];
                var j;

                for (j = i; j >= brecha && ((orderDirection === "asc" && v[j - brecha] > temp) || (orderDirection === "desc" && v[j - brecha] < temp)); j -= brecha) {
                    v[j] = v[j - brecha];
                }

                v[j] = temp;
            }
        }

        // Mostrar el array ordenado
        var resultElement = document.getElementById("result");
        resultElement.innerHTML = "Arreglo original: " + n.join(', ') + "<br>" +
                                  "Arreglo ordenado: " + v.join(', ');
    }
}

