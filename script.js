if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

function ready(){
    let heartButton = document.getElementsByClassName('heart-button')[0];
    heartButton.addEventListener('click', heartRedirect);

    let loginButton = document.getElementsByClassName('login')[0];
    loginButton.addEventListener('click', loginRedirect);

    let followButton = document.getElementsByClassName('followButton')[0];
    followButton.addEventListener('click', followRedirect)
}

function heartRedirect(){
    window.open('https://codepen.io/login?type=love', '_self');
}

function loginRedirect(){
    window.open('https://codepen.io/login', '_self');
}

function followRedirect(){
    window.open('https://codepen.io/login?type=follow', '_self')
}