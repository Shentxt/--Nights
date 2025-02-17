const getWeather = async () => {
    const res = await fetch(`https://wttr.in?format=%t`)
    const temp = await res.text()  
    return temp.replace('+', '')  
}

const conditionChecker = async() => {
    return "clear" 
}

const displayWeather = async () => {
    const temp = await getWeather()
    const weatherCondition = await conditionChecker()
    const date = new Date()
    const hours = date.getHours()

    if (hours >= 18 || hours <= 6) {
        document.getElementsByClassName("weather")[0].innerHTML = `<i class="fa-solid fa-moon"></i> <span>${temp}</span>`
        if (weatherCondition === "rainy") {
            document.getElementsByClassName("weather")[0].innerHTML = `<i class="fa-solid fa-cloud-moon-rain"></i> <span>${temp}</span>`
        }
    } else {
        document.getElementsByClassName("weather")[0].innerHTML = `<i class="fa-solid fa-sun"></i> <span>${temp}</span>`
        if (weatherCondition === "rainy") {
            document.getElementsByClassName("weather")[0].innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i> <span>${temp}</span>`
        }
    }
}

setInterval(displayWeather, 60000);

displayWeather();