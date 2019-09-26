// jquery代码
$(".search").click(function(){
    $.ajax({
        type: "post",
        url: "http://localhost:3000/search",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        data: {value:$(".searchcondition").val()},
        dataType: "json",
        success: function(data){
            console.log(data);
        },
        error:function(e){
            console.log(e);
        }
    });
});