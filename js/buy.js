/**
 * Created by yys on 2018/5/26.
 */

"use strict";
var dappContactAddress = "n1omJFSoTP1Kb3YWKpVvBci7J4ZzheLYgJp";
var nebulas = require("nebulas"), Account = Account, neb = new nebulas.Neb();
neb.setRequest(new nebulas.HttpRequest("https://mainnet.nebulas.io"))

console.log("Account");
console.log(Account);

var NebPay = require("nebpay");     //https://github.com/nebulasio/nebPay
var nebPay = new NebPay();
var serialNumber;
//
//$("#search").click(function () {
//    if (!$("#search_title").val()) {
//        alter('搜索标题不能为空');
//        return;
//    }
//
//    $('#content').text("");
//    var from = dappContactAddress
//    var value = "0";
//    var nonce = "0"
//    var gas_price = "1000000"
//    var gas_limit = "2000000"
//    var callFunction = "get";
//    var callArgs = "[\"" + $("#search_title").val() + "\"]";
//    console.log(callArgs);
//    var contract = {
//        "function": callFunction,
//        "args": callArgs
//    }
//
//
//    neb.api.call(from, dappContactAddress, value, nonce, gas_price, gas_limit, contract).then(function (resp) {
//        var result = resp.result;
//
//        if (result === 'null') {
//            $('#content').text("没有发现该标题公开信，你可以立即写一篇！");
//            $('#title').text("");
//            $('#author').text("");
//            return;
//        }
//        console.log(result);
//        result = JSON.parse(result);
//        $("#title").text(result.title);
//        $('#content').text("正文:  " + result.content);
//        $('#author').text("作者：" + result.author);
//
//    }).catch(function (err) {
//        console.log("error :" + err.message);
//
//    })
//
//})


$('#list').on("click", ".order_course", function (e) {
    //if (!$("#input_title").val() || !$("#input_content").val()) {
    //    alert('标题或者文本不能为空');
    //    return;
    //}
    console.log($(this));
    var price = $($(this)[0]).attr("data-price");
    var course = $($(this)[0]).attr("data-course");
    var to = dappContactAddress;
    var value = "0";
    var callFunction = "save";
    var callArgs = "[\"" + price + "\",\"xx"  + "\"]";
    //var callArgs = "[\"" + price + "\",\"" + course  + "\"]";
    console.log(callArgs);

    serialNumber = nebPay.call(to, value, callFunction, callArgs, {    //使用nebpay的call接口去调用合约,
        listener: function (resp) {
            console.log("thecallback is " + resp)
            console.dir(resp)
        }
    });

})

function getBaseDataCB(cb){
    console.log(typeof cb);
    console.log( cb);
    //console.dir(cb);
    var result = JSON.parse(cb);
    console.dir(result);
    if (result.length==0) {
        return;
    }
    var account= result.account;
    console.log(account);
}

function getBaseData(){
    var p = Math.random() * 1000000000;
    //var callArgs = "[\"" + p + "\",\"contents" + "\"]";
    //nebPay.simulateCall(dappContactAddress, "1", "get", callArgs, {
    //    listener: getBaseDataCB
    //});

    var value = "0";
    var nonce = "0"
    var gas_price = "1000000"
    var gas_limit = "2000000"
    var callFunction = "getMe";
    var callArgs = "[\"xx\"]";
    var contract = {
        "function": callFunction,
        "args": callArgs
    }


    nebPay.simulateCall(dappContactAddress, value, callFunction, callArgs,
        {
            listener:  function (resp) {
                var result = resp.result;
                console.log(resp);
                if(result.length > 0)
                {
                    $(".user_info").html('<span class="float-right">' + result.replace(/\"/g, "") + '</span>');
                }

            }
        }
    );
}

window.addEventListener('load', function () {
    if(typeof(webExtensionWallet) === "undefined"){
        //alert ("Extension wallet is not installed, please install it first.")
        $("#noExtension").removeClass("hide");
        $(".mainPage").addClass('hide');
    }else{
        getBaseData();
    }

});



