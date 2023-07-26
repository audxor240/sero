const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});
signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});


$("#joinBtn").click(function() {
    /*if(!user_up_validation()){
        return false;
    }*/
    $("#userJoin").submit();
});

$("#loginBtn").click(function() {
    /*if(!user_in_validation()){
        return false;
    }*/
    $("#userLogin").submit();
});

function user_up_validation(){
    let user_id = $("#user_id_up").val();
    let email = $("#email_up").val();
    let password = $("#password_up").val();

    if(user_id == ""){
        alert("아이디를 입력해주세요.");
        return false;
    }

    if(email == ""){
        alert("이메일을 입력해주세요.");
        return false;
    }

    if(email) {
        var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if (!regEmail.test(email)) {
            alert('이메일 형식에 맞춰주세요.');
            return false;
        }
    }

    if(password == ""){
        alert("비밀번호를 입력해주세요.");
        return false;
    }
    return true;

}

function user_in_validation(){
    let user_id = $("#user_id_in").val();
    let email = $("#email_in").val();
    let password = $("#password_in").val();

    if(user_id == ""){
        alert("아이디를 입력해주세요.");
        return false;
    }

    if(email == ""){
        alert("이메일을 입력해주세요.");
        return false;
    }

    if(email) {
        var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if (!regEmail.test(email)) {
            alert('이메일 형식에 맞춰주세요.');
            return false;
        }
    }

    if(password == ""){
        alert("비밀번호를 입력해주세요.");
        return false;
    }
    return true;

}
