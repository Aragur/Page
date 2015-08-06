$(function(){
			var inScrollAnimation = false;
			
			$(window).scrollTo($("body"), 1000, {interrupt: true});
			//$(window).scrollTo($("#newsletter"), 1000, {interrupt: true});
			
			$(".arrow.start").click(function(){
				inScrollAnimation = true;
				$(window).scrollTo($("#pre-header"), 2000, {easing: "easeOutQuad"});
				var current = $(".current");
				current.removeClass("current");
				current.next().next().addClass("current");
				setTimeout(function(){inScrollAnimation = false}, 2000);	
			});
			$(".arrow.pre-header").click(function(){
				inScrollAnimation = true;
				$(window).scrollTo($("#newsletter"), 2000, {easing: "easeOutQuad"});
				var current = $(".current");
				current.removeClass("current");
				current.next().next().addClass("current");
				setTimeout(function(){inScrollAnimation = false}, 2000);	
			});
			$("h1, h3").click(function(){
				inScrollAnimation = true;
				$(window).scrollTo($("#pre-header"), 2000, {easing: "easeOutQuad"});
				var current = $(".current");
				current.removeClass("current");
				current.next().next().addClass("current");
				setTimeout(function(){inScrollAnimation = false}, 2000);
			});

			var current;
			$("body").mousewheel(function(event){
				var $current = $(".current");
				console.log(event.deltaY + " Current: " + $current.attr("id") +  " Next: " + $current.next().next().attr("id") + " inScrollAnimation = " + inScrollAnimation);
				if(!inScrollAnimation){
					if(event.deltaY < 0){
						if($current.attr("id") == "start"){
							inScrollAnimation = true;
							$(window).scrollTo($("#pre-header"), 2000, {easing: "easeOutQuad"});
							$current.removeClass("current");
							$current.next().next().addClass("current");
							setTimeout(function(){inScrollAnimation = false}, 2000);	
						} else if($current.attr("id") == "pre-header"){
							inScrollAnimation = true;
							$(window).scrollTo($("#newsletter"), 2000, {easing: "easeOutQuad"});
							$current.removeClass("current");
							$current.next().next().addClass("current");
							setTimeout(function(){inScrollAnimation = false}, 2000);	
						}
					} else if(event.deltaY > 0){
						if($current.attr("id") == "pre-header"){
							inScrollAnimation = true;
							$(window).scrollTo($("#start"), 2000, {easing: "easeOutQuad"});
							$current.removeClass("current");
							$current.prev().prev().addClass("current");
							setTimeout(function(){inScrollAnimation = false}, 2000);
						} else if($current.attr("id") == "newsletter"){
							inScrollAnimation = true;
							$(window).scrollTo($("#pre-header"), 2000, {easing: "easeOutQuad"});
							$current.removeClass("current");
							$current.prev().prev().addClass("current");
							setTimeout(function(){inScrollAnimation = false}, 2000);
						}
							
					}
				}
				
				event.preventDefault();
					
			});		
		}); 