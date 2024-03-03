let requestUrl = "https://api.badlion.top/cyol";

window.onload = requestData;

async function requestData() {
    appendLogText("向", requestUrl, "请求数据中");

    try {
        const response = await axios.get(requestUrl);
        appendLogText("获取数据成功");
        updateView(response.data);
    } catch (error) {
        appendLogText("请求出现错误", error);
    }
}

const imgUrlPattern = "https://h5.cyol.com/special/daxuexi/{}/images/end.jpg";

function updateView(data) {
    appendLogText("获取图片链接");

    // 取最后一个
    let key = Object.keys(data).pop();
    
    appendLogText("最新一期大学习 key:", key);

    let imgUrl = imgUrlPattern.replace(/{}/, key);
    
    appendLogText("已获取图片url:", imgUrl);
    
    setTimeout(() => {
        setDisplayImg(imgUrl);
    }, 3000);
}

function appendLogText(...textList) {
    const elem = document.getElementById("log_text");
    elem.innerText += textList.join(" ") + "\n";
}

function setDisplayImg(imgUrl) {
    const logTextElem = document.getElementById("log_text");
    logTextElem.innerText = "";
    const imgElem = document.getElementById("end_img");
    imgElem.src = imgUrl;
    imgElem.classList.add("fullScreenImg");
}
