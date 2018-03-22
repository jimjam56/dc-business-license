define('faq-list',[], function (require) {
	var module = function($el) {
		console.log('init - faq-list');
	}
	return module;
});

define('hero',[], function (require) {
	var module = function($el) {
		console.log('init - hero');
	}
	return module;
});

define('hero-image',[], function (require) {
	var module = function($el) {
		console.log('init - hero-image');
		$el.click(function(){
			console.log("HERO CLICK!");
		})
	}

	return module;
});

define('list-title',[], function (require) {
	var module = function($el) {
		console.log('init - list-title');
	}
	return module;
});

define('list-wrap',[], function (require) {
	var module = function($el) {
		var $question = $el.find('.question');
		var $answer = $el.find('.answer');
		console.log('init - list-wrap');

		
		$question.on('click', function(){
			var $clicked = $(this);

			if($clicked.next().hasClass('show')){
				$answer.removeClass('show');
				$question.find('.fa-chevron-right').removeClass('open');
			} else {
				$answer.removeClass('show');
				$question.find('.fa-chevron-right').removeClass('open');
				$clicked.next().addClass('show');
				$clicked.find('.fa-chevron-right').addClass('open');
				console.log('hey!');
			}

		})
		
	}
	return module;
});

define('nav', [], function(require) {
    var module = function($el) {
        console.log('init - nav');
        var $tog = $el.find('.nav-toggle');
        var $dropDown = $el.find('.dropdown');
        var $ddMenu = $el.find('.dropdown-menu');

        $tog.on('click', function() {
            if ($el.hasClass('open')) {
                $el.removeClass('open');
                $('body').removeClass('freeze');
            } else {
                $el.addClass('open');
                $('body').addClass('freeze');
            }
        });

        $dropDown.on('click', function(e){
        	e.preventDefault();
        	if($ddMenu.hasClass('open')) {
        		$ddMenu.removeClass('open');
        		$dropDown.removeClass('open');
        	} else {
        		$ddMenu.addClass('open');
        		$dropDown.addClass('open');
        	}
        	
        })

    }
    return module;
});
define('qa-item',[], function (require) {
	var module = function($el) {
		console.log('init - qa-item');
	}
	return module;
});
