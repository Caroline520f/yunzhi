function getRolesInfo(method, url, tele, pwd, token) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(`telephone=${tele}&password=${pwd}&pageNum=003&token=${token}`);
        xhr.onload = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                const res = xhr.responseText
                const Data = JSON.parse(res)
                resolve(Data)
            } else {
                reject('请求失败', xhr.responseText)
            }



        }
    })
}


// listRoLiArr.map((item, index) => { //item是listRoLi[index] index是索引
//     item.setAttribute('id', `roleId${Data.roleinfo[index].id}`)
// })
// 链式请求
const rolename = document.querySelector("#roleNhame") //角色名
console.log(rolename)
const roleEName = document.querySelector("#roleEName") //角色英文名

const audios = document.querySelector("#audios") //语音
const roleInf = document.querySelector("#roleInf") //角色简介
const mainInnf = document.querySelector("#mainInnf") //主线剧情
const roleImgPlay = document.querySelector("#roleImgPla") //角色图片
const stafaudio = document.querySelector("#stafaudio") //角色audio
const showText = [
    'ROO1 AMIYA',
    'BOO3 KAL\'TSIT',
    'SWO1 PROJEKT RED',
    'R100 DOBERMANN',
    'FOO2 NEARL',
    'RL01 SILENCE',
    'RL03 IFRIT',
    'RL04 PTILOPSIS',
    'PL02 TEXAS',
    'PL03 EXUSIAI',
    'PL04 CROISSANT',
    'LM04 CHEN',
    'LM05 HOSHIGUMA'
]
const listAr = listRo.children
const roleList_text = document.querySelector("#roleList_text")
async function staff() {
    const data = await getRolesInfo('post', "http://8.134.165.47:8080/api/roles", tele, pwd, token)

    function render(sourc) {
        let staffSvgsTemplate = data.staffSvgsTemplate;
        rolename.innerHTML = sourc[3].name
        rolename.style = 'font-size: 4.7rem;'

        roleEName.innerHTML = sourc[3].englishNamex
        roleEName.style = 'font-size: 1.4rem;'


        stafaudio.innerHTML = '<span id=\'CV\'></span>';
        const CV = document.querySelector("#CV") //CV
        CV.innerText = `CV:${sourc[3].CV}`
        CV.style = 'font-size: 1.165rem;'

        roleInf.innerHTML = sourc[3].info

        stafaudio.innerHTML += data.audioSvg
        stafaudio.style = 'display: flex;align-items: center;'

        stafaudio.children[1].onclick = function () {
            audios.play()
        }
        audios.setAttribute('src', sourc[3].audio)

        mainInnf.style = 'color:#fff'

        listRo.innerHTML = ''
        roleList_text.innerHTML = ''
        // roleImgShow.setAttribute('src', `${sourc[0].roleImage} `)

        sourc.forEach((item, index) => {
            if (index < 12) {
                listRo.innerHTML += `
        <li>
            <span style='padding-right:0.5vw;color:#fff;' >${item.id}</span>
            ${staffSvgsTemplate}
            <span style='padding-left:0.5vw;font-size:1.9rem;color:#fff''>${item.name}</span>
            </li>
        `;
                roleImgPlay.style.backgroundImage = `url(${sourc[3].roleImage})`

                roleList_text.innerHTML = `
        <span>${showText[3]}</span>
        `;
            }

        });
        // 每点击一次li触发一次动画

        const getALi = document.querySelectorAll('#listRo li')
        const getALiArr = [...getALi]
        const staffItemCareer = document.querySelectorAll('.staffItemCareer svg')

        const changeStyle = getALiArr[3].children;
        let changeStyleArr = [...changeStyle]
        changeStyleArr.forEach((item, index) => {
            // 改变2，3项
            if (index == 2) {
                item.style = 'color:#16C8FF;font-size:1.8rem;padding: 0vh 0.575vw;'
            }
            if (index == 0) {
                item.style = 'color:#16C8FF;font-size:1rem;padding-right:1.775vw;'
            }
            if (index == 1) {
                item.children[0].style = 'fill:#16C8FF;width:3vw;padding-right:0.5vw;';
                // [...item.children].forEach(item => {
                //     item.style = 'fill:#16C8FF;width:2.5vw'
                // })
            }
        })

       
        //角色图标
        let staffIcon = document.querySelectorAll('#staffIcon')
        let starfS = [...staffIcon]
        try {
            starfS.forEach((content, index) => {
                content.setAttribute('xlink:href', sourc[index].staffHerf)
            })
        } catch (error) {
            console.log(error)
        }
        // 添加循环，每点击一次li，就播放一次
        // roleImgPlay.style.animation = 'none'
        clickLi();
    }
    let arr = data.roleinfo.splice(data.roleinfo.length - 3, 3)
    data.roleinfo = [...arr, ...data.roleinfo]

    render(data.roleinfo)

    function clickLi() {
        [...listRo.children].forEach((item, index) => {
            item.onclick = function () {
                // console.log('当前点击的编号', data.roleinfo[index].id)
                // console.log('数组第0项对象对应的编号', data.roleinfo[0].id)
                // console.log('相差', data.roleinfo[index].id - data.roleinfo[0].id)
                // console.log('移动距离', data.roleinfo[index].id - data.roleinfo[0].id - 3)
               
                // 每点击一次li触发一次动画
                console.log(roleImgPlay)
                let moveNum = data.roleinfo[index].id - data.roleinfo[0].id - 3;
                // console.log('moveNum', moveNum)
                if (moveNum < 0 && moveNum >= -12) {
                    moveNum += data.roleinfo.length;
                    // console.log(data.roleinfo.length)
                    // console.log("修正完毕的移动距离", moveNum)
                };
                let ar = data.roleinfo.splice(0, moveNum);
                // console.log('由删除的项所组成的数组', ar)
                data.roleinfo = [...data.roleinfo, ...ar];
                // console.log('修改完的数组', data.roleinfo)
                render(data.roleinfo)
            };
        });
    };

    clickLi()
    // roleImgPlay.style.backgroundImage = `url(${data.roleinfo[0].roleImage})`



}
staff()
// 角色图片