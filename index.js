var list = document.querySelectorAll(".drum");
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", clickfunc);
}
document.addEventListener("keypress",keyfunc);
function clickfunc()
{
    // alert("Clicked!!");
    sound(this.innerHTML);
}
function keyfunc(event) {
    // alert("Pressed!!");
     sound(event.key);   
}
function sound(key)
{
    switch (key) {
        case 'w':
            var tone = new Audio('sounds/tom-1.mp3');
            tone.play();
            break;
        case 'a':
            var tone = new Audio('sounds/tom-2.mp3');
            tone.play();
            break;
        case 's':
            var tone = new Audio('sounds/tom-3.mp3');
            tone.play();
            break;
        case 'd':
            var tone = new Audio('sounds/tom-4.mp3');
            tone.play();
            break;
        case 'j':
            var tone = new Audio('sounds/snare.mp3');
            tone.play();
        break;
        case 'k':
            var tone = new Audio('sounds/crash.mp3');
            tone.play();
            break;
        case 'l':
            var tone = new Audio('sounds/kick-bass.mp3');
            tone.play();
            break;
    }
    var activekey=document.querySelector("."+key);
        console.log(activekey);
        activekey.classList.add("pressed");
        setTimeout(function()
        {
            activekey.classList.remove("pressed");
        },100);
}
