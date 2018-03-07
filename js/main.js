let Mensajeros = {};

$( document ).ready(function() {
	Mensajeros.initializer = function(){
		$('.mensajero').click(Mensajeros.popUp);
		$('#addMensajero').click(Mensajeros.popUpAdd);
		$('#eliminarMesajero').click(Mensajeros.popUpDelate);
		$('#actuMensajero').click(Mensajeros.popUpDate);
		$('#buscarMensajero').click(Mensajeros.popUpSearch);
		
	}

	Mensajeros.allowDrop = function(ev) {
    	ev.preventDefault();
	}

	Mensajeros.drag = function(ev) {
	    ev.dataTransfer.setData("text", ev.target.id);
	}

	Mensajeros.drop = function (ev) {
	    ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    ev.target.appendChild(document.getElementById(data));
	}

	Mensajeros.popUp = function(){
		$('#popUp').bPopup({
            speed: 650,
            transition: 'slideIn',
	    	transitionClose: 'slideBack'
        });
	}

	Mensajeros.popUpAdd = function(){
		$('#popUpAdd').bPopup({
            speed: 650,
            transition: 'slideIn',
	    	transitionClose: 'slideBack'
        });
	}
	
	Mensajeros.popUpDelate = function(){
		$('#popUpDelate').bPopup({
            speed: 650,
            transition: 'slideIn',
	    	transitionClose: 'slideBack'
        });
	}
	
	Mensajeros.popUpDate = function(){
		$('#popUpDate').bPopup({
            speed: 650,
            transition: 'slideIn',
	    	transitionClose: 'slideBack'
        });
	}
	Mensajeros.popUpSearch = function(){
		$('#popUpSearch').bPopup({
            speed: 650,
            transition: 'slideIn',
	    	transitionClose: 'slideBack'
        });
	}
	
	jQuery(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })
});
});

$(function(){
	Mensajeros.initializer();
});