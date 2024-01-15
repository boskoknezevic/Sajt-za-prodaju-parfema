const name2=document.getElementById('name2');
const email=document.getElementById('email');
const theme=document.getElementById('theme');
const message=document.getElementById('message');
const btn=document.getElementById('posaljidugme');

btn.addEventListener('click', e=> {
    e.preventDefault();
    checkInputs();
});


function checkInputs(){

    const nameValue=name2.value.trim();
    const emailValue=email.value.trim();
    const themeValue=theme.value.trim();
    const messageValue=message.value.trim();

    if(nameValue===''){
        setErrorFor(name2,'Ime i prezime ne moze biti prazno!');
    }
    else{
        setSuccessFor(name2);
    }

    if(email.value===''){
        setErrorFor(email,'E-mail ne moze biti prazan!');
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'E-mail nije validan!')
    }else{
        setSuccessFor(email);
    }

    if(themeValue===''){
        setErrorFor(theme,'Naslov ne moze biti prazan!');
    }else{
        setSuccessFor(theme);
    }

    if(messageValue===''){
        setErrorFor(message,'Poruka ne moze biti prazna!')
    }else{
        setSuccessFor(message);
    }

    if(isAllGood()){
        alert("Poruka je poslata!");
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'forma error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'forma success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isAllGood(){
    if(name2.parentElement.className==='forma success'
        && email.parentElement.className=='forma success'
        && theme.parentElement.className=='forma success'
        && message.parentElement.className=='forma success'){
            return true;
        }
        else return false;
    }

 
