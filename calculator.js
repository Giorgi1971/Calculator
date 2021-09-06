console.log("Hello in Giorgi's Calculator!")

document.getElementsByTagName("td").innerHTML = "Hello World!";

function clickNum(th){
    if (document.getElementById("capscreen").textContent == 0){
        sc1 = th.textContent
    }else{
        var sc1 = document.getElementById("capscreen").textContent;
        sc1 += th.textContent;
    }
    document.getElementById("capscreen").innerHTML = sc1;
}

function clickSum(th) {
    total = eval(document.getElementById("capscreen").textContent);
    console.log(total);
    document.getElementById("capscreen").innerHTML = total;
}

function click0(th) {
    document.getElementById("capscreen").innerHTML = 0;
}