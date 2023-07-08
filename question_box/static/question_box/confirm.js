document.addEventListener('DOMContentLoaded', function() {
    Array.from(document.querySelectorAll('button')).forEach(button => {
        button.onclick = () => {
            var content = button.innerHTML
            let answer_id = button.id.slice(7);
            let username = document.querySelector('h2').id
            var url = '/' + username + '/confirm/fetch'
            if (content === "Confirm") {

                //PUT the confirmation
                fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify({
                        answer_id: answer_id,
                        confirmed: true
                    })
                })
                button.innerHTML = "Unconfirm";
            }
            else {

                //PUT the confirmation
                fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify({
                        answer_id: answer_id,
                        confirmed: false
                    })
                })
                button.innerHTML = "Confirm";
            }
        }
    })
})
