let Mensajeros = {};

$( document ).ready(function() {
	Mensajeros.initializer = function(){
		$('.mensajero').click(Mensajeros.popUp);
		$('#addMensajero').click(Mensajeros.popUpAdd);
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
});

$(function(){
	Mensajeros.initializer();
});