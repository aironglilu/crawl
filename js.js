
function upfile_CA_Post() {
    var xhr;
    if (window.XMLHttpRequest) { // 其他类型的浏览器
        xhr = new XMLHttpRequest();
    } else { // ie浏览器
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 2:配置请求信息
    xhr.open('post', 'index.php', true);
    //2.5 获取文件
    var fileObj = document.getElementById("Inital_CA").files[0];
    var form = new FormData(); // FormData 对象
    form.append("file", fileObj); // 文件对象
    form.append("filename", "新文件名");
    xhr.onload = function () {
        //请求完成
        alert("请求成功！");
    };
    xhr.onerror = function () {
        //请求失败
        alert("请求失败！");
    };


    // 3:发送请求
    xhr.send(form);  // 为空表示没有任何的参数

}