const format_1 = {
    "d": 1435708800000,
    "cat": "Cat 1",
    "value": 832.803815816826
}
const format_2 = {
    "myDate": "2015-06-02",
    "categ": "CAT 1",
    "val": 46.300059172697175
}
const format_3 = {
    "raw": "9OHbc9 O1 WHTxiBPa auwZIVD6 j8jMWWVH UdB6hy 2015-06-18 XF 5xhcx15DDsbYFRPn dyoH1OOIF 6meHw pANknwa2h T imhs24gR5 #cat1#",
    "val": 39.38690127513058
}

const dateRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
const catRegex = /#(cat)([A-Za-z0-9]+)#/;

function checkAdult(age) {
    return age >= document.getElementById("ageToCheck").value;
}

function normalize_entry(procesadas, entrada) {
    var date;
    var category;
    var value;
    if ("cat" in entrada) {
        date = entrada.d;
        category = entrada.cat.toUpperCase();
        value = entrada.value;
    } else if ("categ" in entrada) {
        date = new Date(entrada.myDate).getTime();
        category = entrada.categ.toUpperCase();
        value = entrada.val;
    } else if ("raw" in entrada) {
        const raw = entrada.raw;
        date = new Date(dateRegex.exec(raw)[0]).getTime();
        const result = catRegex.exec(raw);
        category = result[1] + ' ' + result[2];
        value = entrada.val;
    }
    const coincidencia = procesadas.filter(procesada => procesada.date == date && procesada.category == category)
    if (coincidencia.length === 1){
        coincidencia[0].value += value;
    } else if (coincidencia.length > 1) {
        throw "Deberia haber una o cero coincidencias, hay algo malo"
    } else {
        procesadas.push({
            date:date,
            category:category,
            value:value
        })
    }
    return procesadas;
}

function normalize_series(data) {
    var resultado = data.reduce(normalize_entry, []);
    console.log("resultado: ", resultado)
}

normalize_series([
    format_1,
    format_2,
    format_3
])