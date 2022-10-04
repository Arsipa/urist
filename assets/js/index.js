window.onload = () => {
    // faq

    const questions = document.getElementsByClassName("faq__question");

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", function () {
            this.classList.toggle("question_open");
            let answer = this.querySelector(".question__main");
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    }

    // calc
    const aside = document.querySelector(".calc__aside");
    const btn = document.querySelector(".info__btn");

    btn.onclick = () => {
        if (!aside.classList.contains("active")) aside.classList.add("active");
    };

    const finalPrice = document.querySelector("#price");
    const RANGE = document.querySelector("#range");
    const IP = document.querySelector("#opf1");
    const OOO = document.querySelector("#opf2");
    const YCH6 = document.querySelector("#rno1");
    const YCH15 = document.querySelector("#rno2");
    const OCH = document.querySelector("#rno3");
    const WORKERS = document.querySelector("#workers");

    function calculate() {
        let price = 0;
        let operations = RANGE.value;

        // IP
        if (IP.checked && YCH6.checked) {
            price = 1900 + WORKERS.value * 600;
        }
        if (IP.checked && YCH15.checked) {
            if (operations <= 10) {
                price = 6700 + WORKERS.value * 600;
            }
            if (operations > 10 && operations <= 20) {
                price = 11000 + WORKERS.value * 600;
            }
            if (operations > 20 && operations <= 50) {
                price = 20000 + WORKERS.value * 600;
            }
            if (operations > 50) {
                price = 25800;
                price += WORKERS.value > 10 ? (WORKERS.value - 9) * 600 : 600;
            }
        }
        if (IP.checked && OCH.checked) {
            if (operations <= 10) {
                price = 9100 + WORKERS.value * 600;
            }
            if (operations > 10 && operations <= 20) {
                price = 15800 + WORKERS.value * 600;
            }
            if (operations > 20 && operations <= 50) {
                price = 23600 + WORKERS.value * 600;
            }
            if (operations > 50) {
                price = 32400;
                price += WORKERS.value > 10 ? (WORKERS.value - 9) * 600 : 600;
            }
        }

        // OOO
        if (OOO.checked && YCH6.checked) {
            if (operations <= 10) {
                price = 6700 + WORKERS.value * 600;
            }
            if (operations > 10 && operations <= 20) {
                price = 11000 + WORKERS.value * 600;
            }
            if (operations > 20 && operations <= 50) {
                price = 20000 + WORKERS.value * 600;
            }
            if (operations > 50) {
                price = 25800;
                price += WORKERS.value > 10 ? (WORKERS.value - 9) * 600 : 600;
            }
        }
        if (OOO.checked && YCH15.checked) {
            if (operations <= 10) {
                price = 6700 + WORKERS.value * 600;
            }
            if (operations > 10 && operations <= 20) {
                price = 11000 + WORKERS.value * 600;
            }
            if (operations > 20 && operations <= 50) {
                price = 20000 + WORKERS.value * 600;
            }
            if (operations > 50) {
                price = 25800;
                price += WORKERS.value > 10 ? (WORKERS.value - 9) * 600 : 600;
            }
        }
        if (OOO.checked && OCH.checked) {
            if (operations <= 10) {
                price = 9100 + WORKERS.value * 600;
            }
            if (operations > 10 && operations <= 20) {
                price = 15800 + WORKERS.value * 600;
            }
            if (operations > 20 && operations <= 50) {
                price = 23600 + WORKERS.value * 600;
            }
            if (operations > 50) {
                price = 32400;
                price += WORKERS.value > 10 ? (WORKERS.value - 9) * 600 : 600;
            }
        }

        document.querySelector(".range-value").innerText = operations;

        finalPrice.innerText = price
            .toString()
            .split("")
            .reverse()
            .join("")
            .replace(/\d{3}(?=.)/g, "$& ")
            .split("")
            .reverse()
            .join("");
    }

    RANGE.oninput = () => {
        calculate();
    };
    WORKERS.oninput = () => {
        calculate();
    };
    IP.onclick = () => {
        calculate();
    };
    OOO.onclick = () => {
        calculate();
    };
    YCH6.onclick = () => {
        calculate();
    };
    YCH15.onclick = () => {
        calculate();
    };
    OCH.onclick = () => {
        calculate();
    };
};
