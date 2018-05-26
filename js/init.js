/**
 * Created by yys on 2018/5/26.
 */


init = {};

EJS.config( {cache: true, type: '<', ext: '.template' } );
init.courseObj = new EJS({url: "partials/course.template"});
