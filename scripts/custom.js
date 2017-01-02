/* Items meniu */
$(".c1 > li").click(function () {
    var i = $(this).attr("id");console.log(i);
    var j = ("#"+i).charAt(4);
    $("#katalogas").addClass("dispn");
    $("#meniu > div").each(function(){
        var s = $(this).attr("id");
        var k =s.includes(j);
            if(k){
                $("#meniu > div").addClass("dispn");
                $("#"+s).removeClass("dispn");
                
    }
    });
});
/* Meniu */
$("#rinkis > li").click(function(){
    var i = $(this).attr("id");
    var j = ("#"+i).charAt(3);
    $("#katalogas").removeClass("dispn");
    $("#apie7, #kontaktai8,#straipsniai9, #darbai0").addClass("dispn");
    $(".body-body > ul").each(function(){
         var s = $(this).attr("id");
         var k =s.includes(j);
        if(k){
           
            $(".body-body > ul").addClass("dispn"); 
           // $("#meniu > div").hide('fast');
            $("#rinkis > li").css("text-decoration","");
            $("#"+s).removeClass("dispn");
           // $("#"+s).show(800,"linear");
            $("#"+i).css("text-decoration","underline");
        }
    });
}); 




