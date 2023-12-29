// http://h5.cyol.com/special/weixin/sign.json
// 但是没办法直接填上边的链接，因为跨域问题
// 这里直接保存下来
//let requestUrl = "./dxxdata.json";

let requestUrl = "https://api.badlion.top/cyol";

window.onload = function onWindowLoad(){
   //没有太大的意义，只不过明晰了步骤
   requestData();
}

function requestData(){

   appendLogText("向", requestUrl, "请求数据中");

   //创建新的xhr对象
   let xhr = new XMLHttpRequest();
   
   // 监听xhr状态
   xhr.onreadystatechange = function(){
       if (xhr.readyState === 4 /* 下载操作已完成 https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState */){
       
          appendLogText("已下载", requestUrl, "状态", xhr.status);

          //判断本次下载的状态码都是多少
          if (xhr.status === 200){
             const data = JSON.parse(xhr.responseText);
             updateView(data);
          } else {
             appendLogText("获取失败");
          }
       }
   }
   
   //发送请求
   xhr.open("get", requestUrl, true);
   xhr.send();
}

const mUrlPattern = "https://h5.cyol.com/special/daxuexi/{}/m.html"
const imgUrlPattern = "https://h5.cyol.com/special/daxuexi/{}/images/end.jpg"
function updateView(data){
   appendLogText("获取图片链接");

   // 取最后一个
   let key = Object.keys(data).slice(-1);
   
   appendLogText("最新一期大学习 key:", key);

   //let mUrl = mUrlPattern.replace(/{}/, key);
   let imgUrl = imgUrlPattern.replace(/{}/, key);
   
   appendLogText("已获取图片url:", imgUrl);
   
   setTimeout (() => {
      setDisplayImg(imgUrl);
   }, 3000);
}

function appendLogText(...textList){
   const elem = document.getElementById("log_text");
   let text = elem.innerText ?? "";
   text += textList.join(" ") + "\n";
   elem.innerText = text;
}

function setDisplayImg(imgUrl){
   const logTextElem = document.getElementById("log_text");
   logTextElem.innerText = "";
   const elem = document.getElementById("end_img");
   elem.setAttribute("src", imgUrl);
   elem.classList.add("fullScreenImg");
}

function setTitle(text){
   if (text != null){
      document.title = text;
   } else {
      document.title = '"青年大学习"';
   }
}
