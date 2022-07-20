const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var error = false;

    if (form['first_name'].value.trim() === '') {
        form['first_name'].classList.add('error_icon');
        error = true;
    } else {
        form['first_name'].classList.remove('error_icon');
    }

    if (form['last_name'].value.trim() === '') {
        form['last_name'].classList.add('error_icon');
        error = true;
    } else {
        form['last_name'].classList.remove('error_icon');
    }

    if (form['email'].value.trim() === '') {
        form['email'].classList.add('error_icon');
        error = true;
    } else if (!emailValid(form['email'].value)) {
        let text_swap = document.getElementById('text_swap');
        form['email'].classList.add('error_icon');
        text_swap.innerText = 'Looks like this is not an email';
        error = true;
    } else {
        form['email'].classList.remove('error_icon');
    }

    if (form['password'].value.trim() === '') {
        form['password'].classList.add('error_icon');
        error = true;
    } else {
        form['password'].classList.remove('error_icon');
    }

    if (!error) {
        form.submit();
    }
});


function emailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}