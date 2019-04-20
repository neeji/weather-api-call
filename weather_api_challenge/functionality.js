(function () {

    var codes = {
        "A1": "--",
        "A2": "--",
        "AD": "EU",
        "AE": "AS",
        "AF": "AS",
        "AG": "NA",
        "AI": "NA",
        "AL": "EU",
        "AM": "AS",
        "AN": "NA",
        "AO": "AF",
        "AP": "AS",
        "AQ": "AN",
        "AR": "SA",
        "AS": "OC",
        "AT": "EU",
        "AU": "OC",
        "AW": "NA",
        "AX": "EU",
        "AZ": "AS",
        "BA": "EU",
        "BB": "NA",
        "BD": "AS",
        "BE": "EU",
        "BF": "AF",
        "BG": "EU",
        "BH": "AS",
        "BI": "AF",
        "BJ": "AF",
        "BL": "NA",
        "BM": "NA",
        "BN": "AS",
        "BO": "SA",
        "BR": "SA",
        "BS": "NA",
        "BT": "AS",
        "BV": "AN",
        "BW": "AF",
        "BY": "EU",
        "BZ": "NA",
        "CA": "NA",
        "CC": "AS",
        "CD": "AF",
        "CF": "AF",
        "CG": "AF",
        "CH": "EU",
        "CI": "AF",
        "CK": "OC",
        "CL": "SA",
        "CM": "AF",
        "CN": "AS",
        "CO": "SA",
        "CR": "NA",
        "CU": "NA",
        "CV": "AF",
        "CX": "AS",
        "CY": "AS",
        "CZ": "EU",
        "DE": "EU",
        "DJ": "AF",
        "DK": "EU",
        "DM": "NA",
        "DO": "NA",
        "DZ": "AF",
        "EC": "SA",
        "EE": "EU",
        "EG": "AF",
        "EH": "AF",
        "ER": "AF",
        "ES": "EU",
        "ET": "AF",
        "EU": "EU",
        "FI": "EU",
        "FJ": "OC",
        "FK": "SA",
        "FM": "OC",
        "FO": "EU",
        "FR": "EU",
        "FX": "EU",
        "GA": "AF",
        "GB": "EU",
        "GD": "NA",
        "GE": "AS",
        "GF": "SA",
        "GG": "EU",
        "GH": "AF",
        "GI": "EU",
        "GL": "NA",
        "GM": "AF",
        "GN": "AF",
        "GP": "NA",
        "GQ": "AF",
        "GR": "EU",
        "GS": "AN",
        "GT": "NA",
        "GU": "OC",
        "GW": "AF",
        "GY": "SA",
        "HK": "AS",
        "HM": "AN",
        "HN": "NA",
        "HR": "EU",
        "HT": "NA",
        "HU": "EU",
        "ID": "AS",
        "IE": "EU",
        "IL": "AS",
        "IM": "EU",
        "IN": "AS",
        "IO": "AS",
        "IQ": "AS",
        "IR": "AS",
        "IS": "EU",
        "IT": "EU",
        "JE": "EU",
        "JM": "NA",
        "JO": "AS",
        "JP": "AS",
        "KE": "AF",
        "KG": "AS",
        "KH": "AS",
        "KI": "OC",
        "KM": "AF",
        "KN": "NA",
        "KP": "AS",
        "KR": "AS",
        "KW": "AS",
        "KY": "NA",
        "KZ": "AS",
        "LA": "AS",
        "LB": "AS",
        "LC": "NA",
        "LI": "EU",
        "LK": "AS",
        "LR": "AF",
        "LS": "AF",
        "LT": "EU",
        "LU": "EU",
        "LV": "EU",
        "LY": "AF",
        "MA": "AF",
        "MC": "EU",
        "MD": "EU",
        "ME": "EU",
        "MF": "NA",
        "MG": "AF",
        "MH": "OC",
        "MK": "EU",
        "ML": "AF",
        "MM": "AS",
        "MN": "AS",
        "MO": "AS",
        "MP": "OC",
        "MQ": "NA",
        "MR": "AF",
        "MS": "NA",
        "MT": "EU",
        "MU": "AF",
        "MV": "AS",
        "MW": "AF",
        "MX": "NA",
        "MY": "AS",
        "MZ": "AF",
        "NA": "AF",
        "NC": "OC",
        "NE": "AF",
        "NF": "OC",
        "NG": "AF",
        "NI": "NA",
        "NL": "EU",
        "NO": "EU",
        "NP": "AS",
        "NR": "OC",
        "NU": "OC",
        "NZ": "OC",
        "O1": "--",
        "OM": "AS",
        "PA": "NA",
        "PE": "SA",
        "PF": "OC",
        "PG": "OC",
        "PH": "AS",
        "PK": "AS",
        "PL": "EU",
        "PM": "NA",
        "PN": "OC",
        "PR": "NA",
        "PS": "AS",
        "PT": "EU",
        "PW": "OC",
        "PY": "SA",
        "QA": "AS",
        "RE": "AF",
        "RO": "EU",
        "RS": "EU",
        "RU": "EU",
        "RW": "AF",
        "SA": "AS",
        "SB": "OC",
        "SC": "AF",
        "SD": "AF",
        "SE": "EU",
        "SG": "AS",
        "SH": "AF",
        "SI": "EU",
        "SJ": "EU",
        "SK": "EU",
        "SL": "AF",
        "SM": "EU",
        "SN": "AF",
        "SO": "AF",
        "SR": "SA",
        "ST": "AF",
        "SV": "NA",
        "SY": "AS",
        "SZ": "AF",
        "TC": "NA",
        "TD": "AF",
        "TF": "AN",
        "TG": "AF",
        "TH": "AS",
        "TJ": "AS",
        "TK": "OC",
        "TL": "AS",
        "TM": "AS",
        "TN": "AF",
        "TO": "OC",
        "TR": "EU",
        "TT": "NA",
        "TV": "OC",
        "TW": "AS",
        "TZ": "AF",
        "UA": "EU",
        "UG": "AF",
        "UM": "OC",
        "US": "NA",
        "UY": "SA",
        "UZ": "AS",
        "VA": "EU",
        "VC": "NA",
        "VE": "SA",
        "VG": "NA",
        "VI": "NA",
        "VN": "AS",
        "VU": "OC",
        "WF": "OC",
        "WS": "OC",
        "YE": "AS",
        "YT": "AF",
        "ZA": "AF",
        "ZM": "AF",
        "ZW": "AF"
    };
    var cc = document.getElementById("inp");
    var btn = document.getElementById("btn");
    var icon = document.getElementById("icon");
    var image = document.getElementById("image");
    var half_main = document.getElementById("half_main");
    var data_box = document.getElementById("data_box");
    var sunrise = document.getElementById("sunrise");
    var sunset = document.getElementById("sunset");
    var wind_speed = document.getElementById("wind_speed");
    var wind_degree = document.getElementById("wind_degree");

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
                        set_city_name(data);
                        set_image(data);
                        set_icon(data);
                        append_spans(data);
                        set_sun_times(data);
                        set_wind(data);
                        console.log(codes[data.sys.country]);
                    })
            })
    }

    function set_icon(data) {
        var id = data.weather[0].id;
        var sun_On = 0;
        var current_time_stamp = new Date();
        var sr = data.sys.sunrise;
        var ss = data.sys.sunset;
        console.log(sr);
        console.log(ss);
        var checking_sun_On = parseInt(current_time_stamp.getTime() / 1000);
        console.log(`current time stamp is ${current_time_stamp.getTime() / 1000}`);
        if (sr <= checking_sun_On && checking_sun_On <= ss) {
            console.log("sunrise");
            sun_On = 1;
        } else {
            console.log("sunset");
            sun_On = 0;
        }
        var srd = new Date(sr * 1000).toLocaleDateString("en-US");
        var srt = new Date(sr * 1000).toLocaleTimeString("en-US");
        var ssd = new Date(ss * 1000).toLocaleDateString("en-US");
        var sst = new Date(ss * 1000).toLocaleTimeString("en-US");
        console.log(sr);
        console.log(ss);
        console.log(srd);
        console.log(srt);
        console.log(ssd);
        console.log(sst);
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
            if (sun_On == 1) {
                icon.src = "./01d.png";
            } else {
                icon.src = "./01n.png";
            }
        }
        //image icon 2d 2n
        else if (id == 801) {
            // console.log("image icon 02d 02n");
            if (sun_On == 1) {
                icon.src = "./02d.png";
            } else {
                icon.src = "./02n.png";
            }
        }
        //image icon 3d 3n 4d 4n
        else if (id == 802 || id == 803 || id == 804) {
            // console.log("image 0304");
            icon.src = "0304.png";
        }
    }

    function append_spans(data) {
        data_box.innerHTML = "";
        var span, text;
        // average temperature
        span = document.createElement('span');
        text = document.createTextNode("Avg. : " + (data.main.temp - 273.15).toFixed(2) + String.fromCharCode(8451));
        span.appendChild(text);
        data_box.appendChild(span);
        // minimum temperature:
        span = document.createElement('span');
        text = document.createTextNode("MIN : " + (data.main.temp_min - 273.15).toFixed(2) + String.fromCharCode(8451));
        span.appendChild(text);
        data_box.appendChild(span);
        //maximum temperature
        span = document.createElement('span');
        text = document.createTextNode("MAX : " + (data.main.temp - 273.15).toFixed(2) + String.fromCharCode(8451));
        span.appendChild(text);
        data_box.appendChild(span);
        //pressure
        span = document.createElement('span');
        text = document.createTextNode("Pressure : " + data.main.pressure);
        span.appendChild(text);
        data_box.appendChild(span);
        //humidity
        span = document.createElement('span');
        text = document.createTextNode("Humidity : " + data.main.humidity);
        span.appendChild(text);
        data_box.appendChild(span);
        //longitude
        span = document.createElement('span');
        text = document.createTextNode("lon : " + data.coord.lon);
        span.appendChild(text);
        data_box.appendChild(span);
        //latitude
        span = document.createElement('span');
        text = document.createTextNode("lat : " + data.coord.lat);
        span.appendChild(text);
        data_box.appendChild(span);
        //Weather Description
        span = document.createElement('span');
        text = document.createTextNode("Descr : " + data.weather[0].description);
        span.appendChild(text);
        data_box.appendChild(span);
    }

    function set_image(data) {
        // example LONDON
        var name = String(data.name).toUpperCase();
        // example GB.
        var country = data.sys.country;
        // example EU.
        var continent = codes[country];
        // console.log(name);
        // name = String(name).toUpperCase();
        console.log(name);
        if (name == 'DELHI') {
            image.src = "./delhi.jpeg";
        } else if (name == 'AGRA') {
            image.src = "./agra.jpg";
        } else if (name == "LONDON") {
            image.src = "./London.jpg";
        } else if (name == "NEW YORK") {
            image.src = "./NewYork.jpg";
        } else {
            // image.src = "./australia.png";
            if (continent == 'EU') {
                image.src = "./EU.png";
            } else if (continent == 'AS') {
                image.src = "./AS.png";
            } else if (continent == 'NA') {
                image.src = "./NA.png";
            } else if (continent == 'SA') {
                image.src = "./SA.png";
            } else if (continent == 'AF') {
                image.src = "./AF.png";
            } else if (continent == 'AN') {
                image.src = "./AN.png";
            } else if (continent == "OC") {
                image.src = "./OC.png";
            } else {
                image.src = "./all_purpose.jpg";
            }

        }
    }

    function set_city_name(data) {
        half_main.innerHTML = "";
        var name = String(data.name).toUpperCase();
        var country = data.sys.country;
        var continent = codes[country];
        var p = document.createElement('p');
        // divide in three paras
        var text = document.createTextNode(`${name}`);
        p.appendChild(text);
        half_main.appendChild(p);
        p = document.createElement('p');
        text = document.createTextNode(`${country},${continent}`);
        p.appendChild(text);
        half_main.append(p);
    }

    function set_sun_times(data) {
        sunrise.innerHTML = "";
        sunset.innerHTML = "";
        var sunrise_time = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        var sunset_time = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        var p = document.createElement('p');
        var text = document.createTextNode(`${sunrise_time}`);
        p.appendChild(text);
        var im = document.createElement('img');
        im.setAttribute("src", "./sunrise_64.png");
        sunrise.appendChild(im);
        sunrise.appendChild(p);
        p = document.createElement('p');
        text = document.createTextNode(`${sunset_time}`);
        p.appendChild(text);
        im = document.createElement('img');
        im.setAttribute("src", "./sunset_64.png");
        sunset.appendChild(im);
        sunset.appendChild(p);
    }

    function set_wind(data) {
        wind_speed.innerHTML = "";
        wind_degree.innerHTML = "";
        var speed = data.wind.speed;
        var degree = data.wind.deg;
        var p = document.createElement('p');
        var im = document.createElement('img');
        var text = document.createTextNode(`${speed} m/s`);
        p.appendChild(text);
        im.setAttribute("src", "./wind_speed.png");
        wind_speed.appendChild(im);
        wind_speed.appendChild(p);
        p = document.createElement('p');
        text = document.createTextNode(`${degree}${String.fromCharCode(176)}`);
        p.append(text);
        im = document.createElement('img');
        im.setAttribute("src", "./wind_degree.png");
        wind_degree.appendChild(im);
        wind_degree.appendChild(p);
    }








    btn.onclick = function () {
        get_data();
        // for clearing the text field on every buutton click.
        cc.value = "";
    }

})();