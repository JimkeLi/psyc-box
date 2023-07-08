document.addEventListener('DOMContentLoaded', function() {
    button = document.querySelector('#but');

    button.disabled = true;

    textarea = document.querySelector('textarea');

    //Disable the submit button when the textarea is empty
    textarea.addEventListener('input', () => {
        if (textarea.value.trim() === '') {
            button.disabled = true;
        }

        else {
            button.disabled = false;
        }
    });

    document.querySelector('form').onsubmit = () => {
        alert( "Thank you for contacting us! We will Contact you soon!" );
    }
})
