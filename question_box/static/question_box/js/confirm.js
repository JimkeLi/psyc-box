document.addEventListener('DOMContentLoaded', function() {
    Array.from(document.querySelectorAll('button')).forEach(button => {
        button.onclick = () => {
            var content = button.innerHTML
            let answer_id = button.id.slice(7);
            let username = document.querySelector('h2').id
            var url = '/confirm/' + username + '/fetch'
            if (content === "Confirm") {

                //PUT the confirmation
                fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify({
                        answer_id: answer_id,
                        confirmed: true
                    })
                })
                .then(result => {
                    location.href = window.location.href
                })
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
                .then(result => {
                    location.href = window.location.href
                })
            }
        }
    })
})
