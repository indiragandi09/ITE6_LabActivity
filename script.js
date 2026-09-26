document.addEventListener("DOMContentLoaded", function () {

    // ================= LANDING =================
    const startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", function () {
        document.getElementById("week1")
            .scrollIntoView({ behavior: "smooth" });
    });


    // ================= WEEK 1 =================

    function activity1() {
        console.clear();
        alert("Welcome to JavaScript!");
        console.log("This is my first JavaScript program.");
    }

    function activity2() {
        console.clear();
        let name = "Indira Gandi";
        let age = 21;
        let isStudent = true;

        console.log("Name:", name);
        console.log("Age:", age);
        console.log("Is Student:", isStudent);
        console.log(`My name is ${name}, I am ${age} years old.`);
    }

    function activity3() {
        console.clear();
        let num1 = 58;
        let num2 = 12;

        console.log("num1 = 58");
        console.log("num2 = 12");
        console.log("Sum:", num1 + num2);
        console.log("Difference:", num1 - num2);
        console.log("Product:", num1 * num2);
        console.log("Quotient:", num1 / num2);
    }

    function activity4() {
        console.clear();

        let userName = prompt("Enter your name:");
        if (!userName) {
            alert("You did not enter a name.");
            return;
        }

        let favNumber = prompt("Enter your favorite number:");
        if (!favNumber) {
            alert("You did not enter a number.");
            return;
        }

        alert(`Hello ${userName}! Your favorite number is ${favNumber}.`);
    }

    function activity5() {
        console.clear();

        let age = prompt("Enter your age:");
        if (!age) {
            alert("Please enter a valid age.");
            return;
        }

        age = parseInt(age);

        if (isNaN(age)) {
            alert("That is not a number.");
        } else if (age >= 18) {
            alert("You are eligible.");
        } else {
            alert("You are not eligible.");
        }
    }

    function activity6() {
        console.clear();

        console.log("For Loop (1 to 10):");
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }

        console.log("While Loop (10 to 1):");
        let j = 10;
        while (j >= 1) {
            console.log(j);
            j--;
        }
    }

    function activity7() {
        console.clear();
        alert("Button Clicked!");
    }

    document.getElementById("act1").addEventListener("click", activity1);
    document.getElementById("act2").addEventListener("click", activity2);
    document.getElementById("act3").addEventListener("click", activity3);
    document.getElementById("act4").addEventListener("click", activity4);
    document.getElementById("act5").addEventListener("click", activity5);
    document.getElementById("act6").addEventListener("click", activity6);
    document.getElementById("act7").addEventListener("click", activity7);


    // ================= WEEK 2 =================

    const colors = ["#a2dcfdff", "#7de697ff", "#e5c786ff"];
    let colorIndex = 0;

    function changeBackground() {
        document.body.classList.remove("dark-mode");
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    function toggleDarkMode() {
        document.body.style.backgroundColor = "";
        document.body.classList.toggle("dark-mode");
    }

    function addListItem() {
        let li = document.createElement("li");
        li.textContent = "New Item " +
            (document.getElementById("itemList").children.length + 1);
        document.getElementById("itemList").appendChild(li);
    }

    function removeParagraph() {
        let p = document.getElementById("removeMe");
        if (p) p.remove();
    }

    function characterCounter() {
        document.getElementById("charCount").textContent =
            this.value.length;
    }

    function calculateSum() {
        let n1 = parseFloat(document.getElementById("num1").value) || 0;
        let n2 = parseFloat(document.getElementById("num2").value) || 0;
        document.getElementById("result").textContent = n1 + n2;
    }

    let imgIndex=0;
    const images=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];
    
    function changeImage() {
        console.clear();
        const img = document.getElementById("myImage");
        imgIndex=(imgIndex+1)%images.length;
        img.src=images[imgIndex];
    }

    function addTodo() {
        let input = document.getElementById("todoInput");
        if (input.value.trim() !== "") {
            let li = document.createElement("li");
            li.textContent = input.value;
            document.getElementById("todoList").appendChild(li);
            input.value = "";
        }
    }

    document.getElementById("w2act1").addEventListener("click", changeBackground);
    document.getElementById("w2act2").addEventListener("click", toggleDarkMode);
    document.getElementById("w2act3").addEventListener("click", addListItem);
    document.getElementById("w2act4").addEventListener("click", removeParagraph);
    document.getElementById("textInput").addEventListener("input", characterCounter);
    document.getElementById("w2act6").addEventListener("click", calculateSum);
    document.getElementById("w2act7").addEventListener("click", changeImage);
    document.getElementById("addTodo").addEventListener("click", addTodo);

});

// ================= WEEK 3 =================

document.addEventListener("DOMContentLoaded", function () {

    function getAverage(s1, t1, s2, t2) {
        s1 = parseFloat(s1) || 0;
        t1 = parseFloat(t1) || 1;
        s2 = parseFloat(s2) || 0;
        t2 = parseFloat(t2) || 1;

        return ((s1/t1 + s2/t2) / 2) * 100;
    }

    const quizAvg = document.getElementById("quizAvg");
    const examAvg = document.getElementById("examAvg");
    const mcoAvg = document.getElementById("mcoAvg");
    const finalGrade = document.getElementById("finalGrade");

    document.getElementById("computeQuiz")?.addEventListener("click", function () {
        quizAvg.textContent = getAverage(
            quiz1.value, quiz1Total.value,
            quiz2.value, quiz2Total.value
        ).toFixed(2);
    });

    document.getElementById("computeExam")?.addEventListener("click", function () {
        examAvg.textContent = getAverage(
            exam1.value, exam1Total.value,
            exam2.value, exam2Total.value
        ).toFixed(2);
    });

    document.getElementById("computeMCO")?.addEventListener("click", function () {
        mcoAvg.textContent = getAverage(
            mco1.value, mco1Total.value,
            mco2.value, mco2Total.value
        ).toFixed(2);
    });

    document.getElementById("finalGradeBtn")?.addEventListener("click", function () {
        let final =
            (parseFloat(quizAvg.textContent) * 0.2) +
            (parseFloat(examAvg.textContent) * 0.3) +
            (parseFloat(mcoAvg.textContent) * 0.5);

        finalGrade.textContent = final.toFixed(2);
    });

});

    // RESET BUTTON
    document.getElementById("resetGradeBtn")?.addEventListener("click", function () {

        // Clear inputs
        document.querySelectorAll("#week3 input").forEach(input => input.value = "");

        // Reset averages
        document.getElementById("quizAvg").textContent = "0";
        document.getElementById("examAvg").textContent = "0";
        document.getElementById("mcoAvg").textContent = "0";

        // Reset final grade
        document.getElementById("finalGrade").textContent = "0";

    });