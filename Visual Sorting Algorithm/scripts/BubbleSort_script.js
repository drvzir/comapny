var Bubble_Sort_Info = '<h2 class="text-center"><i>Bubble Sort</i></h2>' + 
 		'<p>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.</p>' +
		'<p><span class="badge badge-dark">Space Complexity:</span> <i>O(1)</i></p>' +
		'<p>Time Complexities:</p>' +
		'<p><span class="badge badge-dark">Worst Time Complexity:</span> <i>O(n<sup>2</sup>)</i></p>' +
		'<p><span class="badge badge-dark">Average Time Complexity:</span> <i>O(n<sup>2</sup>)</i></p>' +
		'<p><span class="badge badge-dark">Best Time Complexity:</span> <i>O(n)</i></p>';



function Bubble_Sort(){
	info_element.innerHTML = Bubble_Sort_Info;

	temp_delay = 0;

	disable_buttons();

	for(let i = 0; i < no_of_ele_in_array-1; ++i){

		for(let j = 0; j < no_of_ele_in_array - i - 1; ++j){

			div_update(width_of_array_div[j], array_value[j], "red");
			div_update(width_of_array_div[j+1], array_value[j+1], "red");

			if(array_value[j] > array_value[j+1]){

				div_update(width_of_array_div[j], array_value[j] , "yellow");
				div_update(width_of_array_div[j+1], array_value[j+1], "yellow");

				let temp = array_value[j];
				array_value[j] = array_value[j+1];
				array_value[j+1] = temp;

				div_update(width_of_array_div[j], array_value[j] , "yellow");
				div_update(width_of_array_div[j+1], array_value[j+1], "yellow");
			}
			div_update(width_of_array_div[j], array_value[j], "lightskyblue");
		}

		div_update(width_of_array_div[no_of_ele_in_array- i -1], array_value[no_of_ele_in_array - i - 1], "green");
	}
	div_update(width_of_array_div[0], array_value[0], "green");

	enable_buttons();
}