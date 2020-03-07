function send() {
    var data =
        "entry.1876625603=" +
        generateRandomString(11) +
        "&entry.1609381645=" +
        generateRandomString(11) +
        "&entry.55977027=" +
        generateRandomNumber(11) +
        "&entry.391713744_year=22&entry.391713744_month=2&entry.391713744_day=22&entry.520809860=sjadhjsagd" +
        generateRandomString(11) +
        "shgd&entry.142916906=Female&entry.403269951=General&entry.1901360952=KM&entry.1104575995=Muslims&entry.904137056=" +
        generateRandomString(11) +
        "&entry.1583760740=" +
        generateRandomNumber(11) +
        "&entry.831562336=" +
        generateRandomString(11) +
        "&entry.861580274=" +
        generateRandomNumber(11) +
        "&entry.677486557=" +
        generateRandomString(11) +
        "&entry.1361776255=" +
        generateRandomString(11) +
        "&entry.1453879830=" +
        generateRandomNumber(11) +
        "&entry.156703441=" +
        generateRandomString(11) +
        "&entry.2083954321=CSE&entry.1473367013=B.Tech.%20(Information%20Technology)&entry.451828356=Research%20Seminar&entry.1533915650=Computer%20Networks%20and%20Communication%20%2F%20Dr.%20Neeta%20Singh&entry.353414977=Eco%20Kart%20Club&entry.1785738355=Pollution%20Control%20Club&entry.285203944=Leadership%20Club&entry.1297699735=434&entry.915598870.other_option_response=&entry.915598870=2019-2023&entry.261352754=B&entry.1057640677=" +
        generateRandomString(11) +
        "&entry.428171450=" +
        generateRandomString(11) +
        "&entry.1993562625=" +
        generateRandomString(11) +
        "&entry.1148391927=NOT%20REGISTERED&entry.220243944=Not%20Promoted&entry.820901508=" +
        generateRandomNumber(11) +
        ""

    var xhr = new XMLHttpRequest()
    xhr.withCredentials = true

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            // document.body.innerHTML = this.responseText
            console.log("done")
        }
    })

    xhr.open(
        "POST",
        "https://docs.google.com/forms/d/e/1FAIpQLSdOQz1AlpbeR31QZR4RLHOoitqQx62aYNW1azGGvQP1PFfU3w/formResponse"
    )
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    xhr.setRequestHeader("cache-control", "no-cache")
    xhr.setRequestHeader(
        "postman-token",
        "a3e2ac3c-7735-5250-8223-e291a6cf8b2b"
    )

    xhr.send(data)
}

setInterval(()=> send(), 300)

function send1() {
    var data = new FormData()
    data.append("entry.1532360218", generateRandomString(11))
    data.append("entry.124264616", "9027784545293293")
    data.append("entry.432250683", generateRandomString(11))
    data.append("entry.1676074508", "345435454435")
    data.append("entry.1453622801", generateRandomString(11))

    var xhr = new XMLHttpRequest()
    xhr.withCredentials = true

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log("done")
        }
    })

    xhr.open(
        "POST",
        "https://docs.google.com/forms/d/e/1FAIpQLSeVz2X9WyMn2_SK4lezVlJIRhxijCJgFSOmeqHsTlFQAjHlyA/formResponse"
    )
    xhr.setRequestHeader("cache-control", "no-cache")
    xhr.setRequestHeader(
        "postman-token",
        "fc1f997e-b69f-79e6-51ce-b471a8745c5a"
    )

    xhr.send(data)
}


//randoms
function generateRandomString(length) {
    let v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let result = ""
    for (let i = 0; i < length; i++) {
        result += v[Math.floor(Math.random() * v.length)]
    }
    return result
}
function generateRandomNumber(length) {
    let v = "0123456789"
    let result = ""
    for (let i = 0; i < length; i++) {
        result += v[Math.floor(Math.random() * v.length)]
    }
    return result
}
