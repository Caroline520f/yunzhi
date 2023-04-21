let token = localStorage.getItem("token")
let usr = localStorage.getItem("telephone")
let pwd = localStorage.getItem("password")
function personalCenter(data) {
    // logo
    var topLogo = document.querySelector('#topLogo')
    topLogo.setAttribute('src', data.titleImg)

    // custom
    var customImg = document.querySelector('#customLine')
    customImg.setAttribute('src', data.toCustomImg)

    // 背景图片
    var bg = document.querySelector('#bgImg')
    bg.style.backgroundImage = `url(${data.bgImg})`
    // input animation

    // 个人中心
    var loginBtn = document.querySelector('#loginBtn')
    var registerBtn = document.querySelector('#registerBtn')

    function Log_Reg(bt1, bt2, content, user, height, bts, btEle, deg) {
        bt1.onclick = BtClick;
        function BtClick() {
            bt1.style = `
            color:#158FC5;
            font-size: 1.25rem;
            font-weight: bold;
            `;
            // localStorage.clear()
            var title = document.querySelector('#title')
            title.innerHTML = content

            var users = document.querySelector('#users')
            users.innerHTML = user

            var loginAre = document.querySelector('#loginAre')
            loginAre.style.height = height

            var btns = document.querySelector("#btns");
            btns.style = bts;
            btns.innerHTML = btEle;

            loginAre.style.transform = `rotateY(${deg})`

            bt2.style = `
            font-size: 1.15rem;
            font-weight: bold;
            color:#000;
            `;

            firstChec();


            var usrs = document.querySelector('#users')
            var usrP = usrs.children;
            for (var i = 0; i < usrP.length; i++) {
                if (i % 2 == 1) {
                    usrP[i].style.visibility = "visible";
                } else if (i % 2 == 0) {
                    usrP[i].children[0].style.backgroundColor = "#FFDCDB";
                }
            }
            //  users登录框账号逻辑

            var telZZ = /^1{1}[3-9]{1}\d{9}$/
            var telephon1e = document.querySelector("#telephone")
            telephon1e.onkeydown = function () {
                if (telZZ.test(telephon1e.value)) {
                    console.log("111")
                    // 当手机号码格式正确时，隐藏p标签
                    usrP[1].style = "visibility:hidden;"
                    usrP[0].children[0].style = "background-color:rgba(255,255,255,0);"
                } else {
                    // 当手机号码格式不正确时，显示手机号码格式不正确
                    usrP[1].innerText = "*手机号格式不正确"
                    usrP[0].children[0].style.backgroundColor = "#FFDCDB";
                    usrP[1].style = 'color:#ff0000;'
                    usrP[1].style.visibility = "visible";
                }
            }

            var passwordZZ = /^\w{8,16}$/
            var password = document.querySelector("#password")
            password.onkeydown = function () {
                if (passwordZZ.test(password.value)) {
                    // 当手机密码格式正确时，隐藏p标签
                    usrP[3].style = "visibility:hidden !important;"
                    usrP[2].children[0].style = "background-color:rgba(255,255,255,0) !important;"
                } else {
                    // 当手机密码格式不正确时，显示手机号码格式不正确
                    usrP[3].innerText = "*密码格式不正确"
                    usrP[3].style = 'color:#ff0000;'
                }
            }


            // judeg the password is same
            if (bt1 == registerBtn) {
                var confirm = document.querySelector("#confirm")
                confirm.onkeydown = function () {
                    if (password.value == confirm.value) {
                        confirm.style = "background-color:rgba(255,255,255,0) !important;"
                        usrP[5].style = "visibility:hidden !important;"
                    } else {
                        usrP[5].innerText = "*两次输入的密码不一致"
                        confirm.style = "background-color:#ff0000 !important;"
                        usrP[5].style = "visibility:visible !important;"
                        usrP[5].style = "color:red !important;"
                    }
                }


                var regCheck = document.querySelector("#regCheck");
                var code = document.querySelector("#getCode");
                code.onclick = getcode;
                function getcode() {
                    var xhr = new XMLHttpRequest();
                    xhr.open("get", "http://8.134.165.47:8080/api/user/code");
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhr.send();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState == 4 && xhr.status == 200) {
                            var Data = JSON.parse(xhr.responseText);
                            sessionStorage.setItem("code", Data.codes);
                        }
                    }
                }
                var getCod = sessionStorage.getItem("code");
                var selectBox = document.querySelector("#selectBox");
                var checkcode = document.querySelector("#code");
                var codeZZ = /^\d{6}$/
                checkcode.onkeydown = function () {
                    if (checkcode != '' && codeZZ.test(checkcode.value)) {
                        checkcode.style = "background-color:rgba(255,255,255,0) !important;"
                        usrP[7].style = "visibility:hidden !important;"
                        console.log("111")
                    } else {
                        usrP[7].style = "visibility:visible !important;"
                        usrP[7].innerText = "*验证码格式不正确"
                        usrP[7].style = "color:red !important;"
                    }
                }


                regCheck.onclick = function () {
                    // is checked
                    register()
                    // if (selectBox.checked && getCod == checkcode.value && password.value == confirm.value && telZZ.test(telephon1e.value)) {
                    //     register()
                    // }else{
                    //     alert("请检查是否有未填写的信息")
                    // }
                }
                // 注册
                var register = function () {
                    var xhr = new XMLHttpRequest();
                    xhr.open("post", "http://8.134.165.47:8080/api/user/register")
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhr.send(`telephone=${telephon1e.value}&password=${password.value}&code=${checkcode.value}`);
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState == 4 && xhr.status == 200) {
                            var Data = JSON.parse(xhr.responseText);
                            if (Data.status == 0) {
                                alert("注册成功")
                                console.log(Data)
                            } else {
                                alert("注册失败")
                                console.log(Data)
                            }
                        }
                    }
                }

            }


            if (bt1 == loginBtn) {
                svaeUsrPwd()
            }
        }
    }

    firstChec()
    var loginTest = document.querySelector("#logia");
    var telephon1e = document.querySelector("#telephone")
    var password = document.querySelector("#password")
    function loginCheck(method, url, tel, pwd) {
        return new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(`telephone=${tel}&password=${pwd}`);
            xhr.onload = () => {
                if (xhr.status == 200 && xhr.readyState == 4) {
                    const res = JSON.parse(xhr.responseText);
                    resolve(res);
                } else {
                    reject(xhr.status);
                }
            }
        })
    }

    async function UsrPwdgin() {
        loginCheck("post", "http://8.134.165.47:8080/api/user/login", telephon1e.value, password.value)
            .then(
                function (res) {
                    loginTest.onclick = async function () {
                        const res = await loginCheck("post", "http://8.134.165.47:8080/api/user/login", telephon1e.value, password.value);
                        console.log(res);
                        window.open("index.html")
                        localStorage.setItem("token", res.token);
                        localStorage.setItem("telephone", res.telephone);
                        localStorage.setItem("password", res.password);
                    }
                }
            )
            .then(
                
            )
    }
    UsrPwdgin()
    var loginUsers = `
    <p><input type="tel" placeholder="请输入手机号" id='telephone' required></p>
    <p style="color:red;visibility:hidden;font-size: 12px;">*账号格式不正确</p>
    <p><input type="password" id='password' placeholder="请输入密码" required></p>
    <p style="color:red;visibility:hidden;font-size: 12px;">*密码格式不正确</p>
    `;
    // 登录按钮时的按钮框style样式
    var loginBtns = `
    display: grid;
    `;
    //  style= "display:grid"
    // 登录按钮时btns的元素内容/结构
    var loginElments = `
    <section id="sms">
    <span>使用短信验证码登录</span>
    </section>
    <section id="logia" style=" cursor: pointer;">登录</section>
    <section id="Bili">
    <span>使用BiliBili账号</span>
    </section>
    `;
    Log_Reg(loginBtn, registerBtn, "登录", loginUsers, "45vh", loginBtns, loginElments, "0deg");

    var registerUsers = `
<p><input id="telephone" type="tel" placeholder="手机号" required></p>
<p 
style="
color:red;
visibility:hidden;
font-size: 12px;
">*手机号不能为空</p>
<p><input id="password" type="password" placeholder="8-16位数字、字母、常用字符" required></p>
<p style="color:red;
visibility:hidden;
font-size: 12px;
">*密码不能为空</p>
<p><input id="confirm" type="password" placeholder="确认密码" required></p>
<p style="color:red;
visibility:hidden;
font-size: 12px;
">*两次输入的密码不一致</p>
<p style="display:flex;">
<input id="code" type="text" placeholder="输入验证码" required>
    <button 
    style="
    background-color: #797979;
    color: #fff;
    font-size: 1.05rem;
    border-radius: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15vw;
    height: 4vh;
    border: none;
    " id="getCode">获取验证码</button>
</p>
<p style="color:red;visibility:hidden;font-size: 12px;">*验证码不能为空</p>
`;
    // 注册按钮时的按钮框style样式
    var registerBtns = `
display: flex;
flex-direction:column;
justify-content: space-around;
`;
    // 注册按钮时 btns下的元素内容/结构
    var registerElment = `
<section style="font-size:12px" >
    <input type="checkbox" id='selectBox'>
    已阅读并同意
    <span style="color:#158FC5;">《鹰角网络用户注册协议》</span>
    及
    <span style="color:#158FC5;">《鹰角网络游戏个人信息保护政策》</span>
</section>
<section style="
       background-color: #158FC5;
       color:#fff;
       border-radius:5vw;
       display: flex;
       justify-content: center;
       align-items: center;
       height: 4vh;
       width: 100%;
       cursor: pointer;
" id="regCheck">注册</section>`;
    Log_Reg(registerBtn, loginBtn, "注册", registerUsers, "55vh", registerBtns, registerElment, "-360deg");

}



function firstChec() {
    var usrs = document.querySelector('#users')
    var usrP = usrs.children;
    for (var i = 0; i < usrP.length; i++) {
        if (i % 2 == 1) {
            usrP[i].style.visibility = "hidden";
            // usrP[i].style.backgroundColor = "#fff";
        } else if (i % 2 == 0) {
            usrP[i].children[0].style.backgroundColor = "#fff";
        }
    }

    var telZZ = /^1{1}[3-9]{1}\d{9}$/
    var tele = document.querySelector("#telephone")
    tele.onkeydown = function () {
        if (telZZ.test(tele.value)) {
            // 当手机号码格式正确时，隐藏p标签
            usrP[1].style = "visibility:hidden;"
            usrP[0].children[0].style = "background-color:rgba(255,255,255,0);"
        } else {
            // 当手机号码格式不正确时，显示手机号码格式不正确
            usrP[1].innerText = "*手机号格式不正确"
            usrP[0].children[0].style.backgroundColor = "#FFDCDB";
            usrP[1].style = 'color:#ff0000;'
            usrP[1].style.visibility = "visible";
        }
    }

    var passwordZZ = /^\w{8,16}$/
    var password = document.querySelector("#password")
    password.onkeydown = function () {
        if (passwordZZ.test(password.value)) {
            // 当手机密码格式正确时，隐藏p标签
            usrP[3].style = "visibility:hidden !important;"
            usrP[2].children[0].style = "background-color:rgba(255,255,255,0) !important;"
        } else {
            // 当手机密码格式不正确时，显示手机号码格式不正确
            usrP[3].innerText = "*密码格式不正确"
            usrP[2].children[0].style.backgroundColor = "#FFDCDB";
            usrP[3].style.visibility = "visible";
        }
    }

}



function svaeUsrPwd() {
    // 保存用户信息

    // 获取输入框
    let telephone = document.querySelector("#telephone")
    let password = document.querySelector("#password")

    if (token != null) {
        telephone.setAttribute("value", usr)
        password.setAttribute("value", pwd)
        console.log(telephone.value);
    } else {
        return false;
    }
}
svaeUsrPwd()  