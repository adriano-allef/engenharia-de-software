// Variável que representa a previsão do tempo
// Pode ser "rainy"(chuvoso), "sunny"(ensolarado) ou "cloudy"(nublado)

let weatherForecast = "sunny";

//  Analogia com a vida real: Decidindo se devemos levar o guarda-chuva
if (weatherForecast === "rainy") {
    console.log("Leve o guarda-chuva!");
} else if (weatherForecast === "cloudy") {
    console.log("Talvez seja bom levar o guarda-chuva, mas não é necessário.");
}else {
    console.log("Você não precisa levar o guarda-chuva.");
};
