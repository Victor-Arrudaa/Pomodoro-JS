const timeTag = document.querySelector("#time");
const btn = document.querySelector(".btn");
const alarmSound = document.getElementById("alarm-sound");

let interval;
let timeForYou = prompt("Digite o tempo que você deseja!");
timeTag.innerHTML = timeForYou + ":00";

btn.addEventListener("click", () => {
    const duracao = timeForYou * 60 * 1000;
    const dataTermino = new Date().getTime() + duracao;

    // Atualiza a contagem regressiva a cada segundo
    interval = setInterval(() => {
        const agora = new Date().getTime();
        const tempoRestante = dataTermino - agora;

        // Calcula os minutos e segundos restantes
        const minutos = Math.floor(
            (tempoRestante % (1000 * 60 * 60)) / (1000 * 60)
        );
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
        // Exibe o tempo restante na página
        timeTag.innerHTML = `${minutos.toString().padStart(2, "0")}:${segundos
            .toString()
            .padStart(2, "0")}`;

        // Verifica se o tempo acabou
        if (tempoRestante <= 0) {
            clearInterval(interval); // Para a contagem regressiva
            timeTag.innerHTML = "Descanse 5 minutos!";
            alarmSound.play(); // Toca o alarme
        }
    }, 1000); // Atualiza a cada segundo
});
