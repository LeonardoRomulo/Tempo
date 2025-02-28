// constante que salva a chave da api
const key = "1b5fd2813eab23c5a2e3c128680464bc";



//Aqui ao clicar no botão a função search é ativada e chmará a função search city
function search(){
    const city = document.querySelector(".input-cidade").value;
    searchCity(city);
}

    // Aqui temos uma função que pega as informações da cidade na api e chama a função que retornará os valores solicitados para a interface do usuário
    async function searchCity (city) {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json()); // integração da api
        populateScreen(data);
        console.log(data);
    }

// Função que pega as informações da cidade na api e chama a função que retornará os valores solicitados para a interface do usuário
function populateScreen(data){
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperatura").innerHTML =  (data.main.temp.toFixed(1)) +" ºC";
    document.querySelector(".temp-maxima").innerHTML =  (data.main.temp_max.toFixed(1)) +" ºC";
    document.querySelector(".temp-minima").innerHTML =  (data.main.temp_min.toFixed(1)) +" ºC";
    document.querySelector(".tempo").innerHTML = (data.weather[0].description);
    document.querySelector(".umidade").innerHTML = "Umidade: " +parseInt(data.main.humidity) + "%";
    document.querySelector(".icone-tempo").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
}