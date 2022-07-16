const form = document.getElementById('form');
// const firstName = document.getElementById('first_name');
// const lastName = document.getElementById('last_name');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

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
        form['email'].classList.add('error_icon');
        form['email'].innerText = 'Looks like this is not an email';
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
    // function checkInputs() {
    // const firstNameErrorIcon = document.querySelector('#first_name_error_icon');
    // const firstNameErrorMessage = document.querySelector('#first_name_error_message');
    // if (form['first_name'].value.trim() === '') {
    //     firstNameErrorIcon.style.visibility = 'visible';
    //     firstNameErrorMessage.style.visibility = 'visible';
    //     inputErrorBorder();
    //     error = true;
    // }

    // const lastNameErrorIcon = document.querySelector('#last_name_error_icon');
    // const lastNameErrorMessage = document.querySelector('#last_name_error_message');
    // if (form['last_name'].value.trim() === '') {
    //     lastNameErrorIcon.style.visibility = 'visible';
    //     lastNameErrorMessage.style.visibility = 'visible';
    //     inputErrorBorder();
    //     error = true;
    // }

    // const emailErrorIcon = document.querySelector('#email_error_icon');
    // const emailErrorMessage = document.querySelector('#email_error_message');
    // const textSwap = document.querySelector('#text_swap');
    // if (form['email'].value.trim() === '') {
    //     emailErrorIcon.style.visibility = 'visible';
    //     emailErrorMessage.style.visibility = 'visible';
    //     inputErrorBorder();
    //     error = true;
    // } else if (!emailValid(form['email'].value)) {
    //     emailErrorIcon.style.visibility = 'visible';
    //     emailErrorMessage.style.visibility = 'visible';
    //     textSwap.innerText = 'Looks like this is not an email';
    //     inputErrorBorder();
    //     error = true;
    // }

    // const passwordErrorIcon = document.querySelector('#password_error_icon');
    // const passwordErrorMessage = document.querySelector('#password_error_message');
    // if (form['password'].value.trim() === '') {
    //     passwordErrorIcon.style.visibility = 'visible';
    //     passwordErrorMessage.style.visibility = 'visible';
    //     inputErrorBorder();
    //     error = true;
    // }

    // // }
    // // checkInputs();
    if (!error) {
        form.submit();
    }
});


function emailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// function inputErrorBorder() {
//     const inputErrorBorder = document.querySelectorAll('input');
//     inputErrorBorder.forEach(inputErrorBorder => {
//         inputErrorBorder.style.border = '2px solid hsl(0, 100%, 74%)';
//     });
// }



// function checkInputs() {
//     if (firstName.value === '') {
//         errorIcon.forEach(errorIcon => {
//             errorIcon.style.visibility = 'visible'
//         });
//         errorMessage.forEach(errorMessage => {
//             errorMessage.style.visibility = 'visible'
//         });
//         input.forEach(input => {
//             input.style. = '2px solid hsl(0, 100%, 74%)'
//         });
//     }
// }


// const form = document.querySelector('.form');
// const firstName = document.querySelector('first-name');
// const lastName = document.querySelector('last-name');
// const email = document.querySelector('email');
// const password = document.querySelector('password');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkInputs();
// });

// function checkInputs() {
//     const firstNameValue = firstName.value.trim(); //removes whitespace
//     const lastNameValue = lastName.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();

//     if (firstNameValue === '') {
//         //add error class
//         //show error icon
//         setError(firstName, 'First Name cannot be empty');
//     }

//     if (lastNameValue === '') {
//         //add error class
//         //show error icon
//         setError(lastName, 'Last Name cannot be empty');
//     }

//     if (emailValue === '') {
//         //add error class
//         //show error icon
//         setError(email, 'Email cannot be empty');
//     } else (!emailValid(emailValue))
//     setError(email, 'Looks like this is not an email')

//     if (passwordValue === '') {
//         //add error class
//         //show error icon
//         setError(password, 'Password cannot be empty');
//     }
// }



// function setError(input, message) {
//     const formControl = input.parentElement; //.form-control
//     const small = formControl.querySelector('small');

//     //add error message
//     small.innerText = message;

//     //add error class
//     formControl.className = 'form-control error';
// }

// // function setSuccess(input) {
// //     const formControl = input.parentElement;

// //     //add success class
// //     formControl.className = 'form-control success';
// // }

// function emailValid(email) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// } 