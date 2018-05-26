/**
 * Created by YuSongYang on 2016/10/19.
 */

/**
 * 课程列表
 */
client.getList = function (reqData, callback, entityName) {
  var url = client.host + 'order/list';
  client.jsonp(url, reqData, callback, entityName);
};

/**
 * 课程详情
 */

/**
 * 教师信息
 */
