let string = "";
const input = document.querySelector("input");
const buttons = document.querySelectorAll(".button");

// Function to handle every key/button
function handleInput(value) {

    if (value === "=") {
        try {
            string = eval(string).toString();
        } catch {
            string = "Error";
        }
    }

    else if (value === "AC") {
        string = "";
    }

    else if (value === "BACK") {
        string = string.slice(0, -1);
    }

    else if (value === "%") {
        try {
            string = (eval(string) / 100).toString();
        } catch {
            string = "";
        }
    }

    else {
        string += value;
    }

    input.value = string;
}

// Mouse Click
buttons.forEach(button => {

    button.addEventListener("click", function () {

        // If your back button contains an icon
        if (this.innerHTML.includes("BACK")) {
            handleInput("BACK");
        }
        else {
            handleInput(this.textContent.trim());
        }

    });

});

// Keyboard
document.addEventListener("keydown", function (e) {

    if (/^[0-9]$/.test(e.key)) {
        handleInput(e.key);
    }

    else if (["+", "-", "*", "/", "."].includes(e.key)) {
        handleInput(e.key);
    }

    else if (e.key === "Enter") {
        e.preventDefault();
        handleInput("=");
    }

    else if (e.key === "Backspace") {
        handleInput("BACK");
    }

    else if (e.key === "Escape") {
        handleInput("AC");
    }

    else if (e.key === "%") {
        handleInput("%");
    }

});