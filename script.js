const Days = document.getElementById('dia'); 
const Hours = document.getElementById('horas');
const Minutes = document.getElementById('minutos');
const Seconds = document.getElementById('segundos');

const targetDate = new Date("May 18 2025 00:00:00").getTime();

function timer(){
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24); 
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60; 

    Days.innerHTML = days.toString().padStart(2, '0');
    Hours.innerHTML = hours.toString().padStart(2, '0');
    Minutes.innerHTML = minutes.toString().padStart(2, '0');
    Seconds.innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0){
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);

//Seleciona os elementos popup
const popupButton = document.getElementById('popupButton');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Adiciona um evento de clique ao botão para abrir o popup
document.getElementById('popupButton').addEventListener('click', function (event) {
    event.preventDefault(); // Evita comportamento padrão
    const popup = document.getElementById('popup');
    popup.classList.remove('popup-hidden'); // Mostra o popup
});

//Fecha o Popup No X
closePopup.addEventListener('click', () => {
    popup.classList.add('popup-hidden');
}
)