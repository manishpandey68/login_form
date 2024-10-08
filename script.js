const loginButton = document.getElementById('login');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const errm = document.getElementById('pp');

loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    const elen = email.value.trim().length;
    const plen = pass.value.trim().length;

    if (elen === 0 && plen === 0) {
        errm.innerHTML = 'Email and Password missing';
    } else if (elen === 0) {
        errm.innerHTML = 'Email missing';
    } else if (plen === 0) {
        errm.innerHTML = 'Password missing';
    } else {
        errm.innerHTML = 'You are logged in';
        errm.style.color = 'green';
        setTimeout(() => {
            document.getElementById('sarir').innerHTML = 'Backend work is going on.....';
        }, 1050);
    }

    if (elen === 0 || plen === 0) {
        errm.style.color = 'red';
    } else {
        errm.style.color = 'green';
    }
});
