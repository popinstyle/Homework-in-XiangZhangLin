$(document).ready(function(){
	var i = 0;
	var curText;
	//清除高亮效果
	function clearSelection(){
		$('p').each(function(){//找到所有highlight属性的元素
			$(this).find('.highlight').each(function(){
				$(this).replaceWith($(this).html());//去除属性
			})
		})
	}
	$(".search-box").delegate('#img','click',function(){
		clearSelection();
		if($getValue == " "){
			return false;
		}else{
			var flag = 0;
			var start = true;
			//查找匹配
			var $getValue = $('#input').val();
			$('#tip').text('');
			$('#tip').hide();
			var regExp = new RegExp($getValue,'g');
			var content = $('.content').text();
			if(!regExp.test(content)){
				return;	
			}else{
				if (curText != $getValue){
					i = 0;
					curText = $getValue;
				}
			}
			$("p").each(function(){
				var html = $(this).html();//找到关键字并替换，加上hightlight属性
				var newHtml = html.replace(regExp, '<span class="highlight">'+ $getValue +'</span>');
				$(this).html(newHtml);//更新
				flag = 1;
			})
			if(flag == 1){
				if($(".highlight").size() > 1){
					var _tip = $(".highlight").eq(i).parent().find("strong").text();
					if(_tip == ""){
						_tip = $(".highlight").eq(i).parent().parent().find("strong").text();
					}
					$("#tip").html(_tip).show();
				}else{
					var _tip = $(".highlight").parent().find("strong").text();
					$("#tip").show();
				}
				if(i > $(".highlight").size() - 1){
					i = 0;
				}
			}
		}	
	})
	$(".content-list").delegate('#favorite','click',function(){
		$(".song").remove();
		$(".content-content").append("<div class='song'><p>stop stop it</p><p>got7</p><p>3:16</p></div><div class='song'><p>暗涌</p><p>王菲</p><p>4:23</p></div><div class='song'><p>奇妙的约会</p><p>洪钟</p><p>3:18</p></div>")
	})
	$(".content-list").delegate('#local','click',function(){
		$(".song").remove();
		$(".content-content").append('<div class="song"><p>if you do</p><p>got7</p><p>3:28</p></div><div class="song"><p>stop stop it</p><p>got7</p><p>3:16</p></div><div class="song"><p>暗涌</p><p>王菲</p><p>4:23</p></div><div class="song"><p>奇妙的约会</p><p>洪钟</p><p>3:18</p></div><div class="song"><div><p>冻结的时间</p><p>宣美</p><p>4:38</p></div></div>');
	})
})