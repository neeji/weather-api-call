(function () {

    var cc = document.getElementById("inp");
    var btn = document.getElementById("btn");


    function get_data() {
        var url_weather = `https://api.openweathermap.org/data/2.5/weather?q=${cc.value}&APPID=3e0c903be4bda4ffe7ed1611ebc23631`;
        var url_forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cc.value}&APPID=3e0c903be4bda4ffe7ed1611ebc23631`;
        // console.log(url_weather);
        // console.log(url_forecast);

        // to fetch the data from openweathermap using the api provided.
        fetch(url_weather)
            .then(function (data) {
                // the data returned by the server is in json format so we need to parse it using json.
                data.json()//as .json() returns a promise we need to use another function to get the data from it.
                    .then(function (data) {
                        console.log(data);
                    })
            })


    }













    btn.onclick = function () {
        get_data();
        // for clearing the text field on every buutton click.
        cc.value = "";
    }

})();