/**
 * Created by YuSongYang on 2016/10/19.
 */

/**
 * 课程列表
 */
client.getList = function (reqData, callback) {
  var url = client.host + '/courses';
  client.jsonp(url, reqData, callback);
};

//test
client.getNab = function(reqData, callback){
  var url = "https://mainnet.nebulas.io/v1/user/nebstate";
  client.get(url, reqData, callback);
}

/**
 * 课程详情
 */

/**
 * 教师信息
 */
