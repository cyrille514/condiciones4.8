
    function jugar() {
        const opciones = ["", "Piedra 👊", "Papel ✋", "Tijera ✌"];
        const input = document.getElementById('eleccionUsuario');
        const display = document.getElementById('resultado');
        
        // Elección del usuario
        let usuario = parseInt(input.value);
        
        // Validar entrada
        if (isNaN(usuario) || usuario < 1 || usuario > 3) {
            display.innerHTML = "⚠️ Por favor, introduce un número del 1 al 3.";
            return;
        }

        // Elección del ordenador (aleatorio entre 1 y 3)
        let ordenador = Math.floor(Math.random() * 3) + 1;

        let mensaje = `Elegiste: ${opciones[usuario]}<br>`;
        mensaje += `El ordenador eligió: ${opciones[ordenador]}<br><br>`;

        // Lógica del juego
        if (usuario === ordenador) {
            mensaje += "¡Es un empate! 🤝";
        } else if ((usuario === 1 && ordenador === 3)) {          
            mensaje += "Yo Piedra y tú tijera. ¡Han ganado!";
            }
            else if ((usuario === 2 && ordenador === 1)) {          
            mensaje += "Yo Papel y tú Piedra. ¡Han ganado!";
            }
            else if ((usuario === 3 && ordenador === 2)) {          
            mensaje += "Yo tijera y tú papel. ¡Han ganado!";
            } 
            else {
            mensaje += "Perdiste... 🤖 Gana el ordenador.";
        }

            

        display.innerHTML = mensaje;
        input.value = ""; 
        input.focus();
    }
        