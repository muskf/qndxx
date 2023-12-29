// http://h5.cyol.com/special/weixin/sign.json
// 但是没办法直接填上边的链接，因为跨域问题
// 这里直接保存下来
let requestUrl = "./dxxdata.json";

window.onload = function onWindowLoad(){
   //没有太大的意义，只不过明晰了步骤
   requestData();
}

function requestData(){
   //创建新的xhr对象
   let xhr = new XMLHttpRequest();
   
   // 监听xhr状态
   xhr.onreadystatechange = function(){
       if (xhr.readyState === 4 /* 下载操作已完成 https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState */){
       
          //判断本次下载的状态码都是多少
          if (xhr.status === 200){
             updateView(JSON.parse(xhr.responseText));
          } else {
             alert("获取失败:" + xhr.status);
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
   alert("updateView: " + JSON.stringify(data));
   
   // 取最后一个
   let key = Object.keys(data).slice(-1);
   
   //let mUrl = mUrlPattern.replace(/{}/, key);
   let imgUrl = imgUrlPattern.replace(/{}/, key);
   
   setDisplayImg(imgUrl);
   //document.getElementById("mUrl").innerHTML = mUrl;
}

function setDisplayImg(imgUrl){
   document.getElementById("end_img").setAttribute("src", imgUrl);
}

function setTitle(text){
   if (text != null){
      document.title = text;
   } else {
      document.title = '"青年大学习"';
   }
}

/* unknown code

       document.title = "青年大学习"2022年第20期; //标题同步暂时没写
   document.setTitle = function(t) {
       var i = document.createElement('iframe');
       i.src = '/wechat/images/nopng.png';
       i.style.display = 'none';
       i.onload = function() {
          setTimeout(function(){
             i.remove();
          }, 9);
       }
       document.body.appendChild(i);
   }
*/