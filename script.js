document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-quiz");

    if (submitButton) {
        submitButton.addEventListener("click", function (e) {
            e.preventDefault();

            const answers = document.querySelectorAll("input[type='radio']:checked");
            if (answers.length < 3) {
                alert("Please answer all questions before submitting.");
                return;
            }

            const styleScore = { heritage: 0, urban: 0, classic: 0 };

            answers.forEach(answer => {
                styleScore[answer.value]++;
            });

            const maxScore = Math.max(styleScore.heritage, styleScore.urban, styleScore.classic);
            let resultText = "";

            if (styleScore.heritage === maxScore) {
                resultText = "🌿 You're Heritage Chic – rooted in culture, bold prints, and timeless elegance.";
            } else if (styleScore.urban === maxScore) {
                resultText = "🔥 You're a Street Style Star – edgy, expressive, and always on trend.";
            } else {
                resultText = "✨ You're Modern Classic – clean lines, luxury details, and effortless grace.";
            }

            // Create and show full-page overlay
            const overlay = document.createElement("div");
            overlay.className = "quiz-overlay";
            overlay.innerHTML = `
                <div class="quiz-result">
                    <h1>${resultText}</h1>
                    <button class="cta-button" onclick="window.location.href='contact.html'">Get Your Personalised Style Now!</button>
                </div>
            `;
            document.body.appendChild(overlay);

            // Load and run confetti
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
            script.onload = () => {
                confetti({
                    particleCount: 150,
                    spread: 100,
                    origin: { y: 0.6 },
                });
            };
            document.body.appendChild(script);
        });
    }
});