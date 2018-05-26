/**
 * Created by yys on 2017/6/7.
 */


//targetList = {};

//$('.multiDroppableContainer').droppable({
//    selector: '.btn-droppable', // 定义允许拖放的元素
//    target: '.droppable-target',
//    start: function() {
//        $('.multiDroppableContainer .droppable-target').removeClass('panel-warning').removeClass('panel-success').find('.panel-heading').text('拖动到这里吗？');
//    },
//    drop: function(event) {
//        var msg = '真棒！';
//        $('.multiDroppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
//        if(event.target) {
//            var elementId = event.element.find('.btn-droppable-id').text();
//            if(!targetList[elementId])
//            {
//
//                targetList[elementId] = elementId;
//                var eles = _.toArray(targetList);
//
//                event.target.addClass('panel-success').find('.panel-heading').text('成功将【按钮#' + eles.join(",") + '】拖到目的地。');
//                msg += '成功拖动【按钮#' + elementId + '】到区域 ' + event.target.find('.area-name').text();
//            }
//        }
//        $.zui.messager.show(msg);
//    },
//    drag: function(event) {
//        $('.multiDroppableContainer .droppable-target').removeClass('panel-success').removeClass('panel-warning');
//        if(event.target) event.target.addClass('panel-warning');
//    }
//});


