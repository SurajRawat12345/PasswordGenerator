let password_field = document.getElementById("password");
let easy_password = document.getElementById("easy");
let strong_password = document.getElementById("strong");
let funny_password = document.getElementById("funny");
let reset = document.getElementById("reset");
let click_sound = new Audio("Audio/click audio.wav");
let click_reset = new Audio("Audio/click sound.wav");

// CLASS START FROM HERE 
class Password{
    static up(){
        let uparr = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
        return uparr;
    }
    static down(){
        let doarr = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
        return doarr;
    }
    static num(){
        let numarr = [1,2,3,4,5,6,7,8,9,0];
        return numarr;
    }
    static symbol(){
        let syarr = ['!','@','#','$','%','&'];
        return syarr;
    }
    static fun(){
        let fun_pass = ['Incorrect','Password','Correct','Google.com','doubleClick','12345678','newPassword','I_am_single','Nothing','Corona2.0','Corona_is_back','chale_ja_**'];
        return fun_pass;
    }
    static oneUpper(){
        let upper = Password.up();
        let pass = "";
        for(let i = 0; i < 1 ; i++){
            pass = upper[Math.floor(Math.random() * upper.length)];
        }
        return pass;
    }
    static oneLower(){
        let lower = Password.down();
        let pass = "";
        for(let i = 0; i < 1 ; i++){
            pass = lower[Math.floor(Math.random() * lower.length)];
        }
        return pass;
    }
    static oneNumber(){
        let numb = Password.num();
        let pass = "";
        for(let i = 0; i < 1 ; i++){
            pass = numb[Math.floor(Math.random() * numb.length)];
        }
        return pass;
    }
    static oneSymbol(){
        let sym = Password.symbol();
        let pass = "";
        for(let i = 0; i < 1 ; i++){
            pass = sym[Math.floor(Math.random() * sym.length)];
        }
        return pass;
    }
    weak(){
        let abc = Password.oneUpper();
        let def = Password.oneLower(); 
        let ghi = Password.oneNumber();
        let jkl = Password.oneUpper();
        let mno = Password.oneLower(); 
        let pqr = Password.oneNumber();
        password_field.innerHTML = abc + def + ghi + jkl + mno + pqr;
    }
    strong(){
        let abc = Password.oneUpper();
        let def = Password.oneNumber(); 
        let ghi = Password.oneLower();
        let jkl = Password.oneNumber();
        let mno = Password.oneSymbol(); 
        let pqr = Password.oneNumber();
        let stu = Password.oneLower();
        let vwx = Password.oneSymbol();
        let yza = Password.oneUpper();
        password_field.innerHTML = abc + def +ghi + jkl + mno + pqr + stu + vwx + yza     
    }
    funny(){
        let ff = Password.fun();
        let fun_pass = "";
        for(let i = 0; i < 1 ; i++){
            fun_pass = ff[Math.floor(Math.random() * ff.length)];
        }
        password_field.innerHTML = fun_pass;
    }
}
// CLASS ENDS
// Object Creation
let b = new Password();

// For Easy Password Button
easy_password.addEventListener('click',()=>{
    click_sound.play();
    b.weak();
})

// For Strong Password Button
strong_password.addEventListener('click',()=>{
    click_sound.play();
    b.strong();
})

// For Funny Password Button
funny_password.addEventListener('click',() => {
    click_sound.play();
    b.funny();
})

// For Reset Button
reset.addEventListener('click',() => {
    click_reset.play();
    password_field.innerHTML = "PassWord Generates Here..."
})