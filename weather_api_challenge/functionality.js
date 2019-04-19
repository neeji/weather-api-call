(function () {

    var cc = document.getElementById("inp");
    var btn = document.getElementById("btn");
    var icon = document.getElementById("icon");
    var image = document.getElementById("image");
    var data_box = document.getElementById("data_box");


    function get_data() {
        var url_weather = `https://api.openweathermap.org/data/2.5/weather?q=${cc.value}&APPID=3e0c903be4bda4ffe7ed1611ebc23631`;
        var url_forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cc.value}&APPID=3e0c903be4bda4ffe7ed1611ebc23631`;
        // console.log(url_weather);
        // console.log(url_forecast);
        var cc_value = cc.value;
        // to fetch the data from openweathermap using the api provided.
        fetch(url_weather)
            .then(function (data) {
                // the data returned by the server is in json format so we need to parse it using json.
                data.json()//as .json() returns a promise we need to use another function to get the data from it.
                    .then(function (data) {
                        console.log(data);
                        // to set the image url according to the weather conditions.
                        set_image(cc_value);
                        set_icon(data.weather[0].id);
                        append_spans(data);
                    })
            })
    }

    function set_icon(id) {
        icon.style.opacity = 1;
        //icon 11d
        if (id == 200 || id == 201 || id == 202 || id == 210 ||
            id == 211 || id == 212 || id == 221 || id == 230 ||
            id == 231 || id == 232) {
            // console.log("image 11.png");
            icon.src = "./11.png";
        }
        //icon 09d or 10d
        else if (id == 300 || id == 301 || id == 302
            || id == 310 || id == 311 || id == 312 ||
            id == 313 || id == 314 || id == 321 ||
            id == 500 || id == 501 || id == 502 ||
            id == 503 || id == 504 || id == 520 || id == 521 ||
            id == 522 || id == 531) {
            // console.log("image 0910.png");
            icon.src = "./0910.png";
        }
        //icon 13d
        else if (id == 511 || id == 600 || id == 601 ||
            id == 602 || id == 611 || id == 612 || id == 613 ||
            id == 615 || id == 616 || id == 620 || id == 621 ||
            id == 622) {
            // console.log("image 13.png");
            icon.src = "./13.png";
        }
        // icon 50d
        else if (id == 701 || id == 711 || id == 721 ||
            id == 731 || id == 741 || id == 751 || id == 761 ||
            id == 762 || id == 771 || id == 781) {
            // console.log("image 50.png");
            icon.src = "./50.png";

        }
        //clear sky variable images start here
        else if (id == 800) {
            // console.log("image icon 01d or 01n");
            icon.src = "./01d.png";
        }
        //image icon 2d 2n
        else if (id == 801) {
            // console.log("image icon 02d 02n");
            icon.src = "./02d.png";
        }
        //image icon 3d 3n 4d 4n
        else if (id == 802 || id == 803 || id == 804) {
            // console.log("image 0304");
            icon.src = "0304.png";
        }
    }

    function append_spans(data) {
        data_box.innerHTML = "";
        var p, text;
        // average temperature
        p = document.createElement('span');
        text = document.createTextNode("Avg. : " + (data.main.temp - 273.15).toFixed(2) + String.fromCharCode(8451));
        p.appendChild(text);
        data_box.appendChild(p);
        // minimum temperature:
        p = document.createElement('span');
        text = document.createTextNode("MIN : " + (data.main.temp_min - 273.15).toFixed(2) + String.fromCharCode(8451));
        p.appendChild(text);
        data_box.appendChild(p);
        //maximum temperature
        p = document.createElement('span');
        text = document.createTextNode("MAX : " + (data.main.temp - 273.15).toFixed(2) + String.fromCharCode(8451));
        p.appendChild(text);
        data_box.appendChild(p);
        //pressure
        p = document.createElement('span');
        text = document.createTextNode("Pressure : " + data.main.pressure);
        p.appendChild(text);
        data_box.appendChild(p);
        //humidity
        p = document.createElement('span');
        text = document.createTextNode("Humidity : " + data.main.humidity);
        p.appendChild(text);
        data_box.appendChild(p);
        //longitude
        p = document.createElement('span');
        text = document.createTextNode("lon : " + data.coord.lon);
        p.appendChild(text);
        data_box.appendChild(p);
        //latitude
        p = document.createElement('span');
        text = document.createTextNode("lat : " + data.coord.lat);
        p.appendChild(text);
        data_box.appendChild(p);
    }

    function set_image(cc_val) {
        // console.log(cc.value);
        var data = String(cc_val).toUpperCase();
        console.log(data);
        if (data == 'DELHI') {
            image.src = "./delhi.jpeg";
        } else if (data == 'AGRA') {
            image.src = "./agra.jpg";
        } else if (data == "LONDON") {
            image.src = "./London.jpg";
        } else if (data == "NEW YORK") {
            image.src = "./NewYork.jpg";
        } else {
            image.src = "./all_purpose.jpg";
        }
    }












    btn.onclick = function () {
        get_data();
        // for clearing the text field on every buutton click.
        cc.value = "";
    }

})();