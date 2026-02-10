let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let line = document.getElementById("change");
let count = 0;
button1.addEventListener("click", function() {
    if (count === 0) {
        count = count + 1;
        line.innerText = `You have clicked the Button 1 time.`
    } else {
        count = count + 1;
        line.innerText = `You have clicked the Button ${count} times.`
    }
});
button2.addEventListener("click", function() {
    line.innerText = "You have clicked the Button 0 time."
    count = 0;
});
