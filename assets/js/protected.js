//Proteger código
	//Botão direito do mouse
	document.addEventListener('contextmenu', event => event.preventDefault());
	/*function protegercodigo() {
		if (event.button==2||event.button==3){
			alert('Codigo protegido!');
		}
	}
	document.onmousedown=protegercodigo;*/

	//Tecla F12
	$(document).ready(function(){
		$(document).keydown(function(e){
			var tecla=window.event.keyCode;
			if (tecla==123){
				event.returnValue=false;
			}
			var ctrl=window.event.ctrlKey;
			if(ctrl && e.which == 85){
				return false;
			}
		});
	});
	/*document.onkeypress = function (event){
		if(e.ctrlKey && (e.keyCode === 122)){
			//alert('Codigo protegido!');
			return false;
		}
	};*/

	//Tecla ctrl + u
	document.onkeydown = function(e){
    	if(e.ctrlKey && (e.keyCode === 85)){
			//alert('Codigo protegido!');
			return false;
        }
	};  

	//Tecla ctrl + s
	document.onkeydown = function(e){
    	if(e.ctrlKey && (e.keyCode === 83)){
			//alert('Codigo protegido!');
			return false;
        }
	};
