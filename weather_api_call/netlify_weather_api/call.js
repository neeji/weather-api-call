(function () {
    var available_cities = ['Delhi', '']
    var inp_city = document.getElementById('city');
    var go = document.getElementById('go');
    var image = document.getElementById("image");
    var small_box3 = document.getElementById("small_box3");

    function all_calls(id) {
        if (id == '800') {
            // clear sky image (clear_sky.png)
            image.src = "clear_sky.png";
        } else if (id == '721' || id == '701' || id == '781' || id == '762' || id == '711' || id == '731' || id == '741' || id == '751' || id == '761' || id == '771') {
            //haze image (haze.jpg)
            image.src = "haze.jpg";
        } else if (id == '200' || id == '210' || id == '230') {
            //thunder + light rain i.e thunder_lr.jpg
            image.src = "thunder_lr.jpg";
        } else if (id == '201' || id == '211' || id == '231') {
            // thunder + rain i.e thunder_r.jpg
            image.src = "thunder_r.jpg";
        } else if (id == '202' || id == '212' || id == '221' || id == '232') {
            // thunder + heavy rain i.e thunder_hr.jpg
            image.src = "thunder_hr.jpg";
        } else if (id == '300' || id == '310' || id == '313') {
            //light drizzle i.e. ld.jpg
            image.src = "ld.jpg";
        } else if (id == '301' || id == '311' || id == '314') {
            // drizzle i.e d.jpg
            image.src = "d.jpg";
        } else if (id == '302' || id == '312' || id == '321') {
            // heavy drizzle i.e hd.JPG
            image.src = "hd.JPG";
        } else if (id == '500' || id == '511' || id == '520') {
            // light rain i.e r.jpg
            image.src = "r.jpg";
        } else if (id == '501' || id == '503' || id == '521') {
            // rain i.e r.jpg
            image.src = "r.jpg";
        } else if (id == '502' || id == '504' || id == '522' || id == '531') {
            //heavy rain i.e hr.jpg
            image.src = "hr.jpg";
        } else if (id == '801' || id == '802') {
            // clouds i.e c.jpg
            image.src = "c.jpg";
        } else if (id == '803' || id == '804') {
            //heavy clouds i.e hc.jpg
            image.src = "hc.jpg";
        } else if (id == '600' || id == '602' || id == '603' || id == '611' || id == '612' || id == '613' || id == '615' || id == '616' || id == '620' || id == '621' || id == '622') {
            //snow i.e. snow.jpg
            image.src = "snow.jpg";
        } else {
            //one of the following
            image.src = "one.jpg";
            alert("error in fetching the weather check the city entered or wait for some time.");
        }

    }

    function networkRequest() {
        // console.log("Running");
        var api_first_half = "https://api.openweathermap.org/data/2.5/";
        var api_choice = "weather?";    //forecast? can be used for more data
        var api_second_half = "q=" + inp_city.value;
        var api_id = "&APPID=3e0c903be4bda4ffe7ed1611ebc23631";
        //console.log(api_first_half + api_choice + api_second_half + api_id)
        //console.log(inp_city.value);
        fetch(api_first_half + api_choice + api_second_half + api_id)
            .then(function (data) {
                // console.log(data);
                data.json()
                    .then(function (d) {
                        if (d.cod == 200) {
                            small_box3.style.opacity = 1;
                            console.log(d);
                            console.log(d.weather[0].id)
                            all_calls(d.weather[0].id);
                            document.querySelector("#avg").textContent = (d.main.temp - 273.1).toFixed(2) + String.fromCharCode(8451);
                            document.querySelector("#max").textContent = (d.main.temp_max - 273.15).toFixed(2) + String.fromCharCode(8451);
                            document.querySelector("#min").textContent = (d.main.temp_min - 273.15).toFixed(2) + String.fromCharCode(8451);
                        } else {
                            all_calls(0);
                            console.log("error in fetching the weather check the city entered or wait for some time.");
                        }
                    })

            })
    }
    go.onclick = function () {
        networkRequest();
    }
})();
