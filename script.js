// script.js

window.addEventListener("load", function(){

    var btn_submit = document.getElementById("submit-quiz")

    if(btn_submit){
        btn_submit.addEventListener("click", function(e){
            e.preventDefault()

            var q1 = document.querySelector("input[name='q1']:checked")
            var q2 = document.querySelector("input[name='q2']:checked")
            var q3 = document.querySelector("input[name='q3']:checked")

            if(!q1 || !q2 || !q3){
                alert("You forgot to answer something!")
                return
            }

            var heritage = 0
            var urban = 0
            var classic = 0

            // counting manually
            if(q1.value == "heritage"){
                heritage = heritage + 1
            } else {
                if(q1.value == "urban"){
                    urban += 1
                } else {
                    classic = classic + 1
                }
            }

            if(q2.value == "heritage"){
                heritage += 1
            } else {
                if(q2.value == "urban"){
                    urban = urban + 1
                } else {
                    classic++
                }
            }

            if(q3.value == "heritage"){
                heritage++
            } else {
                if(q3.value == "urban"){
                    urban++
                } else {
                    classic = classic + 1
                }
            }

            // show result
            var finalResult = ""

            if(heritage > urban && heritage > classic){
                finalResult = "You are Heritage Chic!"
            }
            else {
                if(urban > classic){
                    finalResult = "You are a Street Style Star!"
                } else {
                    finalResult = "You are Modern Classic!"
                }
            }

            var quiz_result = document.getElementById("quizResult")
            quiz_result.innerText = finalResult
            quiz_result.style.display = "block"
            quiz_result.style.backgroundColor = "#fff0f0"
            quiz_result.style.padding = "20px"
            quiz_result.style.marginTop = "20px"
        })
    }

})
