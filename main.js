let display = document.getElementById("display-text");


let operate = (number) => {
    display.value += number;
}

let result = () => {
    try {
        display.value = eval(display.value)
    }
    catch (err) {
        alert("enter a valid input")
    }
}

function clr() {
    display.value = "0";
};

function del () {
    display.value = display.value.slice(0, -1);
};

