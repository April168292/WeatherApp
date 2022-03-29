console.log("hello Weather App")




let weather = {
    fetchWeather: function (){
        console.log("about to fetch weather")
        let city = document.getElementById("city").value
        console.log(city)
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=0769ed3c99c175dda77a80e5fb330bcb"
        )   
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                weather.displayWeather (data)});
           

    },
    displayWeather: function(data) {
        console.log("about to display weather")
        const { name } = data;
        const {description} = data.weather[0];
        const { temp }= data.main;
        const {humidity} = data.main;
        const {temp_max} = data.main;
        const {temp_min} = data.main;
        document.querySelector(".city").innerHTML = name;
        document.querySelector(".description").innerHTML = description;
        document. querySelector(".temp").innerHTML = temp + "°F";
        document.querySelector(".humidity").innerHTML = " Humidity: " + humidity + "%";
        document.querySelector(".temp_max").innerHTML = temp_max + "HIGH"
        document.querySelector(".temp_min").innerHTML = temp_min + "LOW"
        console.log(name,description,temp,humidity,temp_min,temp_max)


    },

}
document.querySelector(".search button"). addEventListener("click", weather.fetchWeather)