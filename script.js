const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_s78m74g",
        "template_ejvwgie",
        this
    ).then(function () {
        alert("✅ Inspection request sent successfully!");
        form.reset();
    }).catch(function (error) {
        alert("❌ Failed to send request.");
        console.log(error);
    });
});

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {
    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
            button.querySelector("span").textContent = "+";
        }else{
            answer.style.display = "block";
            button.querySelector("span").textContent = "−";
        }

    });
});