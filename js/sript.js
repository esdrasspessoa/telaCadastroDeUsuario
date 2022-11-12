let form = document.querySelector('#new-account')
 
form.onsubmit = function(evento) {
    evento.preventDefault();

    const inputNome = document.forms['new-account']['nome'];
   
    let error = false;
    
    if (!inputNome.value) {
        
        error = true;
        inputNome.classList.add('input-iconError')
        let span = inputNome.nextSibling.nextSibling 
        span.innerText = 'First name cannot be empty'

    } else {

        inputNome.classList.remove('input-iconError')
        let span = inputNome.nextSibling.nextSibling 
        span.innerText = ''
    }

    //======================================================//

    const inputSobrenome = document.forms['new-account']['sobrenome']

    if (!inputSobrenome.value) {

        error = true;
        inputSobrenome.classList.add('input-iconError')
        
        let span = inputSobrenome.nextSibling.nextSibling 
        span.innerText = 'Last Name cannot be empty'

    } else {
        
        inputSobrenome.classList.remove('input-iconError')
        let span = inputSobrenome.nextSibling.nextSibling 
        span.innerText = ''

    }

    //======================================================//

    const inputEmail = document.forms['new-account']['email']

    if (!inputEmail.value) {

        error = true;
        inputEmail.classList.add('input-iconError')
        
        let span = inputEmail.nextSibling.nextSibling 
        span.innerText = 'Looks like this is not an email'

    } else {
        
        inputEmail.classList.remove('input-iconError')
        let span = inputEmail.nextSibling.nextSibling 
        span.innerText = ''

    }

    //======================================================//

    const inputPassword = document.forms['new-account']['password']

    if (!inputPassword.value) {

        error = true;
        inputPassword.classList.add('input-iconError')
        
        let span = inputPassword.nextSibling.nextSibling 
        span.innerText = 'Password cannot be empty'

    } else {
        
        inputPassword.classList.remove('input-iconError')
        let span = inputPassword.nextSibling.nextSibling 
        span.innerText = ''

    }

    if (!error){
        form.submit()
    }
}