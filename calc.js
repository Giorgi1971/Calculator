console.log("Hello in Giorgi's Calculator!")

// ცვლადების შემოტანა ოპერაციების სამართავად:
var scr = document.querySelector('#capscreen');

// f ცვლადი - პირველი სიმბოლოს ასაკრებად გამოვიყენებთ
var f = 1;
// a, b, და c ცვლედები a+b=c 
var a = b = c ='';
// operation არითმეტიკული ოპერაციების აღმნიშვნელი
var operation = ''

// რიცხვებზე დაჭერისას ეშვება ეს ფუნქცია. თუ ნულია ახლიდან წერს, თუ სხვა ამატებს მარჯვენა მხრიდან
// გასასწორებელია, რომ გამოთვლის შესრულების შემდეგ, მარჯვნიდან კი არ ამატებდეს, არამედ ახლიდან იწყებდეს ციფრის აკრებას
function clickNum(num){
    if (f){
        console.log(scr);
        console.log('f = 1 and then f = 0 ...');
        scr.textContent = num;
        f = 0;
    }else{
        scr.textContent += num;
    }
}

// = დაჭერისას როცა გვინდა რომ ეკრანზე მყოფი წარწერა დაიანგარიშოს და გამოგვიტანოს
// გასასწორებელია თუ ეკრანზე წარწერა არასწორია არ ან მთავდრება ციფრზე, მოქმედება არ შეასრულოს (ლოგ-ში შეცდომას აგდებს)
function clickOper(oper) {
    f = 1;
    if (!a && !operation){
        a = scr.textContent;
        console.log(a);
        operation = oper;
        console.log(operation);
    }else{
        b = scr.textContent;
        c = eval((a+operation+b));
        a = scr.innerHTML = eval((a+operation+b));
        operation = oper;
    }
}

// C -ზე დაჭერისას როდესაც გვინდა რომ ეკრანზე განულდეს მნიშვნელობა 
function click0(th) {
    document.getElementById("capscreen").innerHTML = 0;
}

//  <- ღილაკზე დაჭერისას ბოლო სიმბოლოს წაშლა
// document.getElementById("delLast").addEventListener("click", function() {
//     scr3 = document.getElementById("capscreen").textContent;
//     scr3.pop()
    
//   });