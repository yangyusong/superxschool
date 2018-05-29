/**
 * Created by yys on 2018/5/26.
 */


init = {};

EJS.config( {cache: true, type: '<', ext: '.template' } );
init.courseObj = new EJS({url: "partials/course.template"});
init.teacherObj = new EJS({url: "partials/teacher.template"});
init.personObj = new EJS({url: "partials/person.template"});
init.showObj = new EJS({url: "partials/show.template"});
init.pageUploadObj = new EJS({url: "partials/pageUpload.template?v=1"});
init.courseRealTimeObj = new EJS({url: "partials/course_real_time.template"});

init.toPageUpload = function(){
    var html = init.pageUploadObj.render({obj:[{}]});
    $(".container").html(html);
};

init.toPagePerson = function(){
    var html = init.personObj.render({obj:[{}]});
    $(".container").html(html);
};

init.toPageShow = function(){
    var html = init.showObj.render({obj:[{}]});
    console.log(html);
    $(".container").html(html);
};