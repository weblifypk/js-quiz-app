/*-----------------------------------*\
$ The Login System...
\*-----------------------------------*/
var login = false; // not logged in
var theForm = document.getElementById('theForm');
var theQuiz = document.getElementById('theQuiz');
var pass = document.getElementById('pass');
var submitBtn = document.getElementById('submit');
var err = document.getElementById('err');
var errH = document.getElementById('errH');
var i;

function typing() { // enable 'verify identity btn' as user starts typing
    if(pass.value != '') {
        submitBtn.removeAttribute('disabled');
        document.getElementsByClassName('finger-print')[0].style.opacity = '1';
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
        document.getElementsByClassName('finger-print')[0].style.opacity = '.6';
    }
}

function chkPass(btn) { // checking password
    if(pass.value == 11223344) {
        pass.setAttribute('disabled', 'disabled');
        submitBtn.setAttribute('disabled', 'disabled');

        submitBtn.innerHTML = '<i class="material-icons loading" style="font-size: 1.8em;">cached</i>';

        login = true;

        setTimeout(function(){

            document.getElementsByClassName('finger-print')[0].style.display = 'none';
            document.getElementsByClassName('success')[0].style.display = 'block';
            document.getElementsByClassName('success')[0].style.opacity = '1';
            
            document.getElementsByClassName('passBox')[0].style.display = 'none';

            errH.innerHTML = 'Bingo!';

            err.style.color = '#28a745';
            err.innerHTML = 'The password was <br> Correct!';
            
            btn.innerHTML = 'Start Quiz &gt;';
            btn.removeAttribute('disabled');

            btn.classList.add('btn-success');
            btn.setAttribute('onclick', 'startQuiz();');

        }, 2000);
        
    } else if(pass.value == '') { // if in case someone puts empty pass

        document.getElementsByClassName('finger-print')[0].style.display = 'none';
        document.getElementsByClassName('warning')[0].style.display = 'block';
        document.getElementsByClassName('warning')[0].style.opacity = '1';

        errH.innerHTML = 'Errrr!';

        document.getElementsByClassName('passBox')[0].style.display = 'none';

        err.style.color = '#dc3545';
        err.innerHTML = 'Password Can\'t Be Empty!';

        btn.innerHTML = 'Reload';
        btn.removeAttribute('disabled');

        btn.classList.add('btn-danger');
        btn.setAttribute('onclick', 'window.location.reload()');
        
    } else { // if wrong password
        pass.setAttribute('disabled', 'disabled');
        btn.setAttribute('disabled', 'disabled');

        btn.innerHTML = '<i class="material-icons loading" style="font-size: 1.8em;">cached</i>';

        setTimeout(function(){

            document.getElementsByClassName('finger-print')[0].style.display = 'none';
            document.getElementsByClassName('warning')[0].style.display = 'block';
            document.getElementsByClassName('warning')[0].style.opacity = '1';
            
            document.getElementsByClassName('passBox')[0].style.display = 'none';

            errH.innerHTML = 'Errrr!';

            err.style.color = '#dc3545';
            err.innerHTML = 'The password was <br> NOT Correct!';
            
            btn.innerHTML = 'Dismiss';
            btn.removeAttribute('disabled');

            btn.classList.add('btn-danger');
            btn.setAttribute('onclick', 'window.location.reload();');

            pass.removeAttribute('disabled');
            btn.removeAttribute('disabled');

            errH.classList.add("shake");
            err.classList.add("shake");

        }, 2000);
    }   
}

function resetErr() { // reset all error to default (This is triggered when user focus on pass input box)
    pass.style.borderColor = '#007bff';
    pass.value = '';
    err.innerHTML = '';

    err.classList.remove("shake");
    pass.classList.remove("shake");

    document.getElementsByClassName('warning')[0].style.display = 'none';
    document.getElementsByClassName('finger-print')[0].style.display = 'block';
    document.getElementsByClassName('finger-print')[0].style.opacity = '.6';

    submitBtn.innerHTML = 'Confirm Identity';
    submitBtn.classList.remove("btn-danger");
    submitBtn.classList.add('btn-primary');
}

function startQuiz() {
    theForm.style.display = 'none';
    theQuiz.style.display = 'block';
}