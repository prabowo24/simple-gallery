(function($){
	$.fn.rataGambar = function(options){
		var elem = this;
		var settings = $.extend({
			height:300,
			margin:0,
			column:4
		},options);
		
		elem.children('a').css({
			'float':'left',
			display:'blocks',
			'margin':settings.margin+'px',
			border:'1px solid #000',
			'textDecoration':'none',
			backgroundPosition:'center',
			backgroundRepeat : 'no-repeat no-repeat'
		});
		elem.find('img').css({
			'display':'none'
		});
		var width = dapat_width(elem,settings.column);
		
		$(window).load(function(){
			elem.find('a').each(function(){
				var anakImg = $(this).children('img'); 
		
				
				$(this).width(width);	
				
				$(this).height(settings.height);
				
				$(this).css({
					backgroundImage:'url("'+anakImg.attr('src')+'")'
				});
				
				
				if(anakImg.height() < settings.height){
					if(anakImg.height() < anakImg.width()){
						$(this).css('backgroundSize','auto '+settings.height);
					}else{
						$(this).css('backgroundSize',settings.height+' auto');
					}
				}else if(anakImg.width() < width){
					if(anakImg.height() > anakImg.width()){
						$(this).css('backgroundSize',width+' auto');
					}else{
						$(this).css('backgroundSize',width+' auto');
					}
				}
				
				console.log(anakImg.width());
				
				
				$(this).prepend('<div>'+$(this).attr('data-title')+'</div>');
				$(this).children('div').css({
					color:'#fff',
					padding:'10px',
					'word-wrap':'break',
					'text-transform':'uppercase',
					'font-weight':'bold',
					'font-family':'"Trebuchet MS", Helvetica, sans-serif',
					'background':'rgba(0,0,0,0.7)',
					'text-shadow':'0px 1px 3px #777'
				});
				
				
			});
		
			
		});
		
		
		function dapat_width(elemen,limit)
		{
			var hasil = elem.width()/limit-20;
			return hasil;
		}
		
		$(window).bind('resize',function(){
			return elem;
		});
		
		return elem;
	
	//console.log(settings.height);
	};

}(jQuery));