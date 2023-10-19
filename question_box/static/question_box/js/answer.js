document.addEventListener('DOMContentLoaded', function() {
    let username = document.querySelector('h2').id

    var url = '/' + username + '/answer/fetch'
    Array.from(document.querySelectorAll('form')).forEach(form => {
        form.onsubmit = () => {
            let box_id = form.id.slice(4);

            //Get the id of the thera assigned to answer
            let answered_html_id = "answer" + box_id;
            let answer = document.querySelector(`#${answered_html_id}`).value;

            console.log(`answer: ${answer}`)

            alert("Answer Recieved")
            
            //POST the answer of the thera
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    answer: answer,
                    box_id: box_id,
                })
            })
                .then(result => {
                    if(document.querySelector('#flag_answered').innerHTML === 'Unanswered')
                    {
                        location.href = '/' + username + '/answer/unanswered'
                    }
                    else
                    {
                        location.href = '/' + username + '/answer/answered'
                    }
            })
        }
    });

    Array.from(document.getElementsByClassName('edit')).forEach(button => {
        button.onclick = () => {
            let answer_id = button.id.slice(4);
            
            let div_answer_box_id = 'answer_box' + answer_id;
            let div_answer_id = 'old_answer' + answer_id;

            //Get the div of the answer and the box that contains the answer 
            let div_answer_box = document.querySelector(`#${div_answer_box_id}`)
            let div_answer = document.querySelector(`#${div_answer_id}`)

            //Get the content of the previous answer
            var content = div_answer.innerText.slice(3);

            //The div_answer will be invisible after being clicked
            div_answer.innerText = "A: ";
            button.style.display = 'none';

            //Create the textarea to the answer_box div
            let textarea = document.createElement('textarea');
            textarea.value = content;

            //Add some style to the textarea
            addClasses(textarea, ["form-control", "textarea-small"]);

            div_answer_box.append(textarea);

            //Append the save button to the question_box div
            let save = document.createElement('button');
            save.innerHTML = "Save";
            
            //Add some styles to the save button
            addClasses(save, ["btn", "btn-primary", "but", "inline-block"]);

            save.onclick = () => {
                let answer = textarea.value;
                // div_answer.innerHTML = "A: " + answer;

                // textarea.style.display = "none";
                // save.style.display = "none";
                // button.style.display = "block";
                // cancel.style.display = "none";

                console.log(answer);

                if(answer !== content) {
                    let confirm_id = "confirm" + answer_id;
                    document.querySelector(`#${confirm_id}`).innerText = "Unconfirmed";

                    console.log(`answer:${answer}`)

                    fetch(url, {
                        method: "PUT",
                        body: JSON.stringify({
                            answer_id: answer_id,
                            answer: answer
                        })
                    })
                        .then(result => {
                            if(document.querySelector('#flag_answered').innerHTML === 'Unanswered')
                            {
                                location.href = '/' + username + '/answer/unanswered'
                            }
                            else
                            {
                                location.href = '/' + username + '/answer/answered'
                            }
                    })
                }
            }

            save.disabled = true;

            //Diable the save button when the answer is empty or unchanged
            textarea.addEventListener('input', () => {
                if (textarea.value.trim() === '' || textarea.value === content) {
                    save.disabled = true;
                }
        
                else {
                    save.disabled = false;
                }
            });

            //Create the cancel button
            const cancel = document.createElement('button');
            cancel.innerHTML = "cancel";
            cancel.type = "button";

            //Add some styles to the submit button
            addClasses(cancel, ["btn", "btn-outline-secondary", "but", "inline-block"]);
            
            cancel.onclick = () => {

                //The dic shows the original question asked
                div_answer.innerText = "A: " + content;
                button.style.display = "block";
                textarea.style.display = "none";
                save.style.display = "none";
                cancel.style.display = "none";
            }
                
            div_answer_box.append(save);
            div_answer_box.append(cancel);
        }
    });

    Array.from(document.getElementsByClassName('omit')).forEach(button => {
        button.onclick = () => {
            var question_id = button.id.slice(4);
            var content = button.innerHTML;
            if(content === "Omit"){
                button.innerHTML = "Not Omit";

                console.log('edited: false')
                
                fetch(url, {
                    method: "PUT",
                    body: JSON.stringify({
                        question_id: question_id,
                        edited: false
                    })
                })
            }

            if(content === "Not Omit"){
                button.innerHTML = "Omit";

                console.log('edited: true')

                fetch(url, {
                    method: "PUT",
                    body: JSON.stringify({
                        question_id: question_id,
                        edited: true
                    })
                })
            }
        }
    })
});

//Add classes to element objects
function addClasses(element, classes) {
    classes.forEach(css_class => {
      element.classList.add(css_class);
    }) 
}