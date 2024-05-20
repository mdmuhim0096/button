// all varable 
var sound = document.getElementById("sound");
var main = document.getElementById("container");
var btn = document.querySelectorAll("#navlink");
var navbar = document.getElementById("navbar");
var voiceIcon = document.getElementById("voiceIcon");
var sTatus = document.getElementById("status");
// voice controle section 
voiceIcon.addEventListener("click", ()=>{
    recognition.start();
});

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.onresult = (e)=>{
    var index = e.resultIndex;
    var trans = e.results[index][0].transcript;
    var loweCase = trans.toLowerCase();
    console.log(loweCase);
    output(loweCase);
}

function speak(val){
    var voice = new SpeechSynthesisUtterance(val);
    window.speechSynthesis.speak(voice);
}

function output(command){
    if(command.includes("home")){
            sTatus.innerText = "home";
            speak("here is your home page")
            main.innerHTML = home;
    }
    else if(command.includes("about")){
        sTatus.innerText = "about";
        speak("here is your about page")
        main.innerHTML = "<section id='page'>\
        <h1>this is About page</h1>\
      </section>"
    }
    else if(command.includes("contact")){
        sTatus.innerText = "contact";
        speak("here is your Contact page");
        main.innerHTML = " <section id='page'>\
        <h1>this is Contact page</h1>\
      </section>"
    }
    else if(command.includes("thanks")){
        speak("your welcome");
    }else if(command.includes("good")){
        speak("thanks for your response");
    }else if(command.includes("open chat")){
        speak("here is your chat box");
        message_box.style.display = "block";
    }else if(command.includes("close chat")){
        speak("close has been done");
        message_box.style.display = "none";
    }
    else{
        speak("i can't understand");
    }
}

// clickable component section
// home
btn[0].addEventListener("click", ()=>{
    sTatus.innerText = "home";
    main.innerHTML = home;
});

// about
btn[1].addEventListener("click", ()=>{
    sTatus.innerText = "about";
    main.innerHTML = about;
});

// contact
btn[2].addEventListener("click", ()=>{
    sTatus.innerText = "contact";
    main.style.marginTop = "0px";
    main.innerHTML = contact;
});

// page componnent section 

var home = "<section class='home' id='page'>\
<div class='aside'>\
    <img src='img/img_1.jpg'>\
    <img src='img/img_2.jpg'>\
</div>\
<br><br><br><br>\
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, tenetur voluptatibus eaque pariatur ratione recusandae rem quos dolorum perspiciatis nemo dolore corporis distinctio fugit provident qui incidunt. Sed tempora laborum quos quia excepturi nisi eaque, atque praesentium magnam amet ipsa consequatur officia culpa officiis modi eos eveniet minima ipsum ab dolore similique mollitia quis aspernatur ipsam. Dolorum atque, quam assumenda quaerat deleniti sed id ullam ducimus ex sit accusantium exercitationem voluptatum fuga distinctio unde! Molestias unde necessitatibus veritatis animi dicta, magni fuga! Facere quasi aperiam pariatur saepe tempora optio tempore amet animi non fugit quia nisi ratione cupiditate aut rerum consequatur, sint officia. Accusamus itaque labore officiis commodi enim neque dolorum eaque eveniet. Excepturi placeat, reprehenderit nulla animi eaque harum delectus quas est temporibus voluptatibus voluptas voluptate, quia asperiores. Illo mollitia iure deleniti, quas repellendus similique eveniet corporis voluptatem cupiditate, voluptate sequi dolores iusto fugiat distinctio error natus sed sit, nihil aliquam necessitatibus quam quasi. Obcaecati ratione, ea explicabo quia nisi maiores in repudiandae molestias natus aspernatur id saepe quaerat sint, accusamus tempora voluptas, facere minima minus dolore quae deleniti sapiente architecto impedit rem. Fuga, magni earum natus delectus nisi asperiores excepturi, perspiciatis, iste repellendus est iure illo vero suscipit culpa corrupti. Repudiandae sint ratione quisquam quidem ipsam inventore velit eveniet aliquam deserunt tempore nisi, cupiditate consectetur dicta minima iusto? Consequatur molestiae consectetur amet facere quis assumenda deleniti cupiditate, iusto labore nobis! Obcaecati esse provident unde perferendis doloremque, nulla beatae assumenda ex porro dicta repellendus! Nesciunt debitis facere vel aliquam distinctio sequi quo sed dicta blanditiis eos culpa dolorem doloribus ab, nulla labore ad facilis temporibus fugiat provident voluptas perspiciatis quae, eum eaque nemo. Aliquam ad totam provident eius animi, voluptates quia corrupti laborum culpa vel, assumenda mollitia, officia facere? Nemo, aut. At minus corporis aliquid. Expedita explicabo officiis atque! Ipsum dolor nisi, eius esse modi delectus, minima quia quo deleniti quasi ex ab. Veniam voluptates illo, corrupti mollitia iusto exercitationem dolorem, soluta quo laborum ad eaque alias temporibus animi explicabo facilis. Alias tempore pariatur inventore nihil quis asperiores, commodi eos ratione aperiam porro laboriosam. Cupiditate, doloremque? Dolore quisquam recusandae maxime minus sequi quibusdam facilis quidem dolores esse? Nihil nobis illo doloremque mollitia corrupti distinctio quia, nostrum porro iusto qui atque facilis molestias suscipit voluptates reiciendis non fugit id! Perferendis ipsa voluptatem distinctio autem suscipit cum accusamus vero repellendus. Cum accusantium sunt perspiciatis a corrupti explicabo ex aspernatur vitae expedita nobis eligendi ullam blanditiis iure asperiores voluptates sint aut ipsa dolores suscipit, at itaque? Vitae eveniet id vero, impedit provident sapiente nulla repudiandae minus aperiam dolore iure distinctio ratione fugit vel debitis eos quos et eligendi obcaecati ipsum eius libero, consequuntur suscipit. Aliquid doloribus possimus quas ratione dolores quo voluptatibus obcaecati accusantium, laudantium quam quasi iste voluptates eveniet esse quia iusto, ullam voluptas accusamus officia maxime neque laboriosam repellendus! Ratione consequatur, asperiores a sequi deleniti dolorem obcaecati repellat dicta beatae qui. Quia nostrum voluptatem aspernatur ratione? Autem, necessitatibus dicta aliquid ducimus vero voluptatibus ipsam, dolorem qui, soluta veritatis magni eaque!</p>\
<br><br><br><br><br><br><br><br>\
</section>";

var about = "<section id='page'>\
<h1>this is About page</h1>\
</section>" ;

var contact = "<section id='page'>\
<h1>this is Contact page</h1>\
</section>" ;


var message = document.getElementById("message");
var message_box = document.getElementById("message_box");

message.addEventListener("click", ()=>{
    message_box.style.display = "block";
})

var close = document.getElementById("close");
close.addEventListener("click", ()=>{
    message_box.style.display = "none";
});

// auto response section 

var box = document.querySelectorAll("#box");
var send = document.getElementById("send");
var chatInput = document.getElementById("chat");

send.addEventListener("click", ()=>{
    var ques = document.createElement("h4");
    var res = document.createElement("h4");
    var input_val = chatInput.value;
    if(input_val == "hello"){
        ques.innerText = input_val;
        box[1].appendChild(ques);
        res.innerText = "hii. how can i help you";
        setTimeout(()=>{
            box[0].appendChild(res);
        },500);
    }else if(input_val == "hi"){
        ques.innerText = input_val;
        box[1].appendChild(ques);
        res.innerText = "hello. how can i help you";
        setTimeout(()=>{
            box[0].appendChild(res);
        },500);
    }else if(input_val == "how are you"){
        ques.innerText = input_val;
        box[1].appendChild(ques);
        res.innerText = "i am fine & you";
        setTimeout(()=>{
            box[0].appendChild(res);
        },500)
    }
    else if(input_val == "i am fine" || input_val == "i am well" || input_val == "i am good"){
        ques.innerText = input_val;
        box[1].appendChild(ques);
        res.innerText = "woow. this is too good";
        setTimeout(()=>{
            box[0].appendChild(res);
        },500);
    }
    else if(input_val == "email"){
        ques.innerText = input_val;
        box[1].appendChild(ques);
        res.innerText = "example@gmail.com";
        setTimeout(()=>{
            box[0].appendChild(res);
        },500);
    }
    else if(input_val == "phone" || input_val == "phone number"){
        ques.innerText = input_val;
        box[1].appendChild(ques);
        res.innerText = "+880 123 456 789";
        setTimeout(()=>{
            box[0].appendChild(res);
        },500);
    }
    chatInput.value = null;
});

window.addEventListener("load", ()=>{
    sTatus.innerText = "home";
    main.innerHTML = home;
    setTimeout(()=>{
        speak(" You can control this page with voice");
    },1000);
});