/**
 * Created by yys on 2018/5/26.
 */




client.getList({}, function(json){
    //console.log(json);
    var html = init.courseObj.render({course:json});
    $(".courseLists").html(html);

    //todo
    var html = init.teacherObj.render({course:[{name: "xiaowei", summary: "区块链学院董事长", pic_url: "img/tearch.jpg"},
        {name: "zhangge", summary: "区块链学院cto", pic_url: "img/tearch.jpg"}]});
    $(".teacherLists").html(html);
});


//client.getNab({}, function(json){
//    console.log("nab");
//    console.log(json);
//});
//console.log(html);

//init.toPageUpload();
