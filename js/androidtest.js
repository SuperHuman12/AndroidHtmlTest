

$(document).ready(function () {
    var info=$('#info');
   // console.log('begin');
    var time=0;
$('input').on('click',function(e){
  //  console.log('click');
    time++;
    info.html('click time '+time);
});

});
