document.addEventListener("DOMContentLoaded", function() {
    var select = document.getElementById("numero-personas");

    // Agregar opciones del 1 al 30 al selector de número de personas
    for (var i = 1; i <= 30; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.textContent = "Número de personas: " + i;
        select.appendChild(option);
    }

    // Agregar opciones de hora para los selectores de tiempo
    var timeSelectors = document.querySelectorAll(".time-selector");
    timeSelectors.forEach(function(selectTime) {
        for (var i = 0; i <= 23; i++) {
            var hour = (i % 12 || 12);
            var ampm = i < 12 ? "AM" : "PM";
            var option = document.createElement("option");
            option.text = "Hora: " + hour + ":00 " + ampm;
            option.value = i;
            selectTime.add(option);
        }
    });

    // Establecer la fecha mínima en los inputs de fecha
    var input1 = document.getElementById('start1');
    var input2 = document.getElementById('start2');
    var input3 = document.getElementById('start3');
    var input4 = document.getElementById('start4');
    var today = new Date().toISOString().split('T')[0];
    input1.min = today;
    input2.min = today;
    input3.min = today;
    input4.min = today;
});