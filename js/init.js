/**
 * Created by yys on 2018/5/26.
 */


init = {};

EJS.config( {cache: true, type: '<', ext: '.template' } );
init.courseObj = new EJS({url: "partials/course.template"});
init.pageUploadObj = new EJS({url: "partials/pageUpload.template"});
init.courseRealTimeObj = new EJS({url: "partials/course_real_time.template"});

init.toPageUpload = function(){
    var html = init.pageUploadObj.render({obj:[{}]});
    $(".container").html(html);
};