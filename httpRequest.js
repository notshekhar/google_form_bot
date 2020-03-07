import request from "request"


//gbu
// let url = "d/e/1FAIpQLSdOQz1AlpbeR31QZR4RLHOoitqQx62aYNW1azGGvQP1PFfU3w"

//mine
let url = "d/e/1FAIpQLSeVz2X9WyMn2_SK4lezVlJIRhxijCJgFSOmeqHsTlFQAjHlyA"
let api = "https://docs.google.com/forms/" + url + "/formResponse"

// let form_data = {
//     "entry.1876625603": "adsadasdasdasdasd",
//     "entry.1609381645": "dfdgdfgdfgdfgdf",
//     "entry.55977027": 1213123213213,
//     "entry.391713744_year": 1111,
//     "entry.391713744_month": 11,
//     "entry.391713744_day": 11,
//     "entry.520809860": "sadasdasdasd",
//     "entry.142916906": "Female",
//     "entry.403269951": "OBC (UP)",
//     "entry.1901360952": "PH",
//     "entry.1104575995": "Muslims",
//     "entry.904137056": "Asdasdasdasd",
//     "entry.1583760740": 23123123123,
//     "entry.831562336": "dasjdkajsdkjsa",
//     "entry.861580274": 123123123123,
//     "entry.677486557": "sadhjasdhasd",
//     "entry.1361776255": "sdaskjdksajdkajsd",
//     "entry.1453879830": 123123123123,
//     "entry.156703441": "adkjaksdashdjsa",
//     "entry.2083954321": "CSE",
//     "entry.1473367013": "B.Tech. (Artificial Intelligence)",
//     "entry.451828356": "Seminar",
//     "entry.1533915650": "Big Data and Analytics / Dr. Anurag Singh Baghel",
//     "entry.353414977": "Photography Club",
//     "entry.1785738355": "Pollution Control Club",
//     "entry.285203944": "Success Story Club",
//     "entry.1297699735": 3,
//     "entry.915598870.other_option_response": "",
//     "entry.915598870": "2017-2021",
//     "entry.261352754": "A",
//     "entry.1057640677": "dksadhsajdhjasd",
//     "entry.428171450": "jhasjdhjasd",
//     "entry.1993562625": "djasmdmsadmsad",
//     "entry.1148391927": "NOT REGISTERED",
//     "entry.220243944": "Not Promoted",
//     "entry.820901508": 12312312312
// }

let form_data = {
    "entry.1532360218": "sjhdfkdsjfjashd",
    "entry.124264616": 9027784545293293,
    "entry.432250683": "xxvxdjkajsdcvxcv",
    "entry.1676074508": 345435454435,
    "entry.1453622801": "zxcxkajskdzcxczxcxc"
}

function send() {
    var options = {
        method: "POST",
        url:
            "https://docs.google.com/forms/d/e/1FAIpQLSdOQz1AlpbeR31QZR4RLHOoitqQx62aYNW1azGGvQP1PFfU3w/formResponse",
        headers: {
            "postman-token": "8af5d5c3-7aac-c2ef-f47d-99e2b7d676ec",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded"
        },
        form: form_data
    }

    request(options, function(error, response, body) {
        if (error) throw new Error(error)

        console.log(body)
    })
}
send()
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

// entry.1876625603:fsdfsdf
// entry.1609381645:asdasdasd`
// entry.55977027:121212
// entry.391713744_year:22
// entry.391713744_month:2
// entry.391713744_day:22
// entry.520809860:sjadhjsagdshgd
// entry.142916906:Female
// entry.403269951:General
// entry.1901360952:KM
// entry.1104575995:Muslims
// entry.904137056:zxczxczxcxzc
// entry.1583760740:242346523623
// entry.831562336:gdhasgdhasghd
// entry.861580274:123123123
// entry.677486557:jhsjhsdjfh
// entry.1361776255:hjfshdjfhsdjf
// entry.1453879830:2316237637
// entry.156703441:jdhfjhsdfhskdf
// entry.2083954321:CSE
// entry.1473367013:B.Tech. (Information Technology)
// entry.451828356:Research Seminar
// entry.1533915650:Computer Networks and Communication / Dr. Neeta Singh
// entry.353414977:Eco Kart Club
// entry.1785738355:Pollution Control Club
// entry.285203944:Leadership Club
// entry.1297699735:434
// entry.915598870.other_option_response:
// entry.915598870:2019-2023
// entry.261352754:B
// entry.1057640677:dsfdfsdfs
// entry.428171450:sdfsdfs
// entry.1993562625:sdfsdfsdf
// entry.1148391927:NOT REGISTERED
// entry.220243944:Not Promoted
// entry.820901508:234234
