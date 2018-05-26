/**
 * Created by yys on 2018/5/26.
 */



client.getList({}, function(json){
    //console.log(json);
    var html = init.courseObj.render({course:json});
    $(".courseLists").html(html);
});
client.getNab({}, function(json){
    console.log("nab");
    console.log(json);
});
//console.log(html);

//init.toPageUpload();
