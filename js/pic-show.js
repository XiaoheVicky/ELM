function picShow(picArray){
	// if(picArray.length===1){

	// 	$("#pic-upload").css("background-image","url("+picArray[0]+")");
	// }else if(picArray.length == 2){

	// console.log(picArray[0]);
	// 	$("#pic-upload").css("background",null);
		
		
	// }

        console.log(picArray.length)
		var addString='';
		if(picArray.length==1){
            for(var i=0;i<picArray.length;i++){
                addString=addString+'<li style="background:url('+picArray[i]+') no-repeat; background-size:100% 100%; width: 100%"> &nbsp;</li>';
                // addString=addString+'<li style="background:url('+picArray[i]+') no-repeat; background-size:100% 100%; "> &nbsp;</li>';
            }
		}else if (picArray.length>1 && picArray.length<5){
            for(var i=0;i<picArray.length;i++){
                debugger;
                addString=addString+'<li style="background:'+picArray[i]+'no-repeat; background-size:100% 100%; width: 49%"> &nbsp;</li>';
                // addString=addString+'<li style="background:url('+picArray[i]+') no-repeat; background-size:100% 100%; "> &nbsp;</li>';
            }
		}else{
            for(var i=0;i<picArray.length;i++){
                addString=addString+'<li style="background:url('+picArray[i]+') no-repeat; background-size:100% 100%; width: 33%"> &nbsp;</li>';
                // addString=addString+'<li style="background:url('+picArray[i]+') no-repeat; background-size:100% 100%; "> &nbsp;</li>';
            }
		}
        $(".pic-show-list").empty();
		$(".pic-show-list").append(addString);

}