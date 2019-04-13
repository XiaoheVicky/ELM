function layer_show(title,url,name,w,h,id){
    if (title == null || title == '') {
        title=false;
    };
    if (url == null || url == '') {
        url="404.html";
    };
    if (w == null || w == '') {
        w=800;
    };
    if (h == null || h == '') {
        h=($(window).height() - 50);
    };
    layer.open({
        type: 2,
        area: [w +'vw', h +'vw'],
        fix: false, //不固定
        maxmin: true,
        shade:0.4,
        title: title,
        content: url+"?id="+id,
        success:function () {
            
        }

    });
    layer.config({
        skin:'demo-class'
    })
}
/*关闭弹出框口*/
function layer_close(){
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}