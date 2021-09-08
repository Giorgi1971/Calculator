console.log("Hello in Giorgi's Calculator!")

document.getElementsByTagName("td").innerHTML = "Hello World!";


// ცვლადების შემოტანა ოპერაციების სამართავად:
var scr = document.getElementById("capscreen");

// f ცვლადი - პირველი სიმბოლოს ასაკრებად გამოვიყენებთ
var f = 1;
// a, b, და c ცვლედები a+b=c 
var a = b = c ='';
// operation არითმეტიკული ოპერაციების აღმნიშვნელი
var operation = ''

// რიცხვებზე დაჭერისას ეშვება ეს ფუნქცია. თუ ნულია ახლიდან წერს, თუ სხვა ამატებს მარჯვენა მხრიდან
// გასასწორებელია, რომ გამოთვლის შესრულების შემდეგ, მარჯვნიდან კი არ ამატებდეს, არამედ ახლიდან იწყებდეს ციფრის აკრებას
function clickNum(th){
    if (document.getElementById("capscreen").textContent == 0){
        sc1 = th.textContent
    }else{
        var sc1 = document.getElementById("capscreen").textContent;
        sc1 += th.textContent;
    }
    document.getElementById("capscreen").innerHTML = sc1;
}

// = დაჭერისას როცა გვინდა რომ ეკრანზე მყოფი წარწერა დაიანგარიშოს და გამოგვიტანოს
// გასასწორებელია თუ ეკრანზე წარწერა არასწორია არ ან მთავდრება ციფრზე, მოქმედება არ შეასრულოს (ლოგ-ში შეცდომას აგდებს)
function clickSum(th) {
    total = eval(document.getElementById("capscreen").textContent);
    console.log(total);
    document.getElementById("capscreen").innerHTML = total;
}

// C -ზე დაჭერისას როდესაც გვინდა რომ ეკრანზე განულდეს მნიშვნელობა 
function click0(th) {
    document.getElementById("capscreen").innerHTML = 0;
}

//  <- ღილაკზე დაჭერისას ბოლო სიმბოლოს წაშლა
document.getElementById("delLast").addEventListener("click", function() {
    scr3 = document.getElementById("capscreen").textContent;
    scr3.pop()
    
  });