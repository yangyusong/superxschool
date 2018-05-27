/**
 * Created by yys on 2018/5/26.
 */

if($('#uploaderImg'))
{
    $('#uploaderImg').uploader({
        autoUpload: true,            // 当选择文件后立即自动进行上传操作
        url: 'your/file/upload/url'  // 文件上传提交地址
    });
}

if($('#uploaderMp4'))
{
    $('#uploaderMp4').uploader({
        autoUpload: true,            // 当选择文件后立即自动进行上传操作
        url: 'your/file/upload/url'  // 文件上传提交地址
    });
}

var realTimeShow = init.courseRealTimeObj.render({course:[{}]});
$(".real_time_show").html(realTimeShow);

$(".next_step").click(function(){
    //提交 判断上传后台成功，且上链成功 todo
    /**
     * courseId, price, teacherName, time
     */

    "use strict";
    var dappContactAddress = "n1rrE3wRVNFeeBRurzwwZRoZBpS5mXMQ2QZ";
    var nebulas = require("nebulas");
    var Account = nebulas.Account;
    var neb = new nebulas.Neb();
    neb.setRequest(new nebulas.HttpRequest("https://testnet.nebulas.io"));
    var NebPay = require("nebpay");     //https://github.com/nebulasio/nebPay
    var nebPay = new NebPay();
    var serialNumber = 0;

    var from = Account.NewAccount().getAddressString();
    var value = "0";
    var nonce = "0"
    var gas_price = "1000000"
    var gas_limit = "2000000"
    var callFunction = "uploadCourse";

    var to = dappContactAddress;

    /**
     * 成功参数
     uploadCourseId  ["10002", "0.001", "liyongle", "20180321"]
     getUploadIds    ["liyongle"]
     getCourseInfo   ["10002"]
     subscribeCourse ["jige","10002"]
     getSubsribeCourse   ["jige"]
     * @type {string}
     */

    var callArgs = '[\"10003\", \"0.001\", \"liyongle\", \"20180321\"]';
    console.log(callArgs);
    serialNumber = nebPay.call(to, value, callFunction, callArgs, {    //使用nebpay的call接口去调用合约,
        listener: function (resp) {
            console.log("thecallback is " + resp)
        }
    });
    //var msg = new $.zui.Messager("提交成功", {placement: 'top'});
    //// 显示消息
    //msg.show();
    //跳转
    //setTimeout(function(){
    //    location.reload();
    //}, 2000);
});

var realTimeShow = init.courseRealTimeObj.render({course:[{title: "请输入标题", content: "请输入内容"}]});
$(".real_time_show").html(realTimeShow);

function syncCourse(){
    var realTimeShow = init.courseRealTimeObj.render({course:[{title: $(".course_title").val(), content: $(".course_intro").val()}]});
    $(".real_time_show").html(realTimeShow);
}

$(".course_title").keyup(function(){
    syncCourse();
});

$(".course_img").keyup(function(){
    syncCourse();
});

$(".course_mp4").keyup(function(){
    syncCourse();
});

$(".course_intro").keyup(function(){
    syncCourse();
});


