var delay = 200; 
var temp_delay = 0; 


function div_update(html_div, height_val, color){
	window.setTimeout(function(){
		html_div.style = " margin: 0% 0.1%; background: "+ color+"; width: " + (100/no_of_ele_in_array - (0.2)) +"%; height: " + height_val + "%;";
	}, temp_delay+=delay);
}


function disable_buttons(){
	array_size_element.disabled = true;
	generate_element.disabled = true;
	speed_element.disabled = true;
	sort_button.disabled = true;
	for(let i=0; i < algo_buttons.length; i++){
		algo_buttons[i].disabled = true;
		algo_buttons[i].classList.add("btn_disable");
	}	
}

function enable_buttons(){
	setTimeout(function (){ 
		array_size_element.disabled = false;
		generate_element.disabled = false;
		speed_element.disabled = false;
		for(let i=0; i < algo_buttons.length; i++){
			algo_buttons[i].disabled = false;
			algo_buttons[i].classList.remove('btn_disable');
			algo_buttons[i].classList.remove('selected');
		}
	},temp_delay);	
}