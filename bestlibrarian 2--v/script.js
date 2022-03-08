const email = document.querySelector('.email');
const password = document.querySelector('.password');
const button = document.querySelector('.btn');
const error = document.querySelector('.alert.alert-danger.d-flex.align-items-center.d-none');
const write = document.querySelector('.alert.alert-success.d-flex.align-items-center.d-none');

error.onclick = () =>{
    error.classList.add('d-none')
}

write.onclick = () =>{
    write.classList.add('d-none')
}

button.onclick = () => {
    if (email.value == "" && password.value == ""){
        error.classList.remove('d-none')
        error.innerText = "Sorry you didn't fill out the form!!"
    }
    else if (email.value == ""){
        error.classList.remove('d-none')
        error.innerText = "Sorry you didn't fill out the email!!"
    }

    else if (password.value == ""){
        error.classList.remove('d-none')
        error.innerText = "Sorry you didn't fill out the password!!"
    }
    else if (email.value.length <= 4 && password.value.length <= 4) {
        error.classList.remove('d-none')
        error.innerText = "Sorry: max 4 letters with numbers!!"
    }
    else{
        write.classList.remove('d-none')
        write.innerText = "Well done !!!"
    }
}