/**
 * Created by yys on 2018/5/26.
 * b0a46e2933d086e67c5b459f9225ede2d86f0b5e49e8186df57775efbc54e347
 */

"use strict";
var dappContactAddress = "n1mjzzrXQYM6tAWoRZ3gs73c5KnMi3kPDEE";
var nebulas = require("nebulas"), neb = new nebulas.Neb();
neb.setRequest(new nebulas.HttpRequest("https://mainnet.nebulas.io"))


var NebPay = require("nebpay");     //https://github.com/nebulasio/nebPay
var nebPay = new NebPay();
var serialNumber;
//
$("#search").click(function () {
    if (!$("#search_title").val()) {
        alert('搜索标题不能为空');
        return;
    }

    $('#content').text("");
    var from = dappContactAddress
    var value = "0";
    var nonce = "0"
    var gas_price = "1000000"
    var gas_limit = "2000000"
    var callFunction = "get";
    var callArgs = "[\"" + $("#search_title").val() + "\"]";
    console.log(callArgs);
    var contract = {
        "function": callFunction,
        "args": callArgs
    }


    neb.api.call(from, dappContactAddress, value, nonce, gas_price, gas_limit, contract).then(function (resp) {
        var result = resp.result;

        if (result === 'null') {
            $('#content').text("该课程未购买");
            return;
        }
        console.log("search");
        console.log(result);
        result = JSON.parse(result);
        $('#content').text("你已完成课程《" + result.course + "》的购买");//Nebulas Nebula Chain Project Training System
        setTimeout(function(){
            $('#content').text("");
        }, 6000);

    }).catch(function (err) {
        console.log("error :" + err.message);

    })

})


$('#list').on("click", ".order_course", function (e) {
    //if (!$("#input_title").val() || !$("#input_content").val()) {
    //    alert('标题或者文本不能为空');
    //    return;
    //}
    console.log($(this));
    var price = $($(this)[0]).attr("data-price");
    var course = $($(this)[0]).attr("data-course");
    var to = dappContactAddress;
    var value = "0.001";
    var callFunction = "save";
    //var callArgs = "[\"" + price + "\",\"xx"  + "\"]";
    var callArgs = "[\"" + price + "\",\"" + course  + "\"]";
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



