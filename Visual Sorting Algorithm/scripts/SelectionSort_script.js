var Selection_Sort_Info = '<h2 class="text-center"><i>Selection Sort</i></h2>' + 
 		'<p>The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.</p>' +
		'<p><span class="badge badge-dark">Space Complexity:</span> <i>O(1)</i></p>' +
		'<p>Time Complexities:</p>' +
		'<p><span class="badge badge-dark">Worst Time Complexity:</span> <i>O(n<sup>2</sup>)</i></p>' +
		'<p><span class="badge badge-dark">Average Time Complexity:</span> <i>O(n<sup>2</sup>)</i></p>' +
		'<p><span class="badge badge-dark">Best Time Complexity:</span> <i>O(n<sup>2</sup>)</i></p>';



function Selection_Sort(){
	info_element.innerHTML = Selection_Sort_Info;

	temp_delay = 0;

	disable_buttons();

	for(let i=0; i < no_of_ele_in_array - 1; i++){
		
		let min_index = i;

		for(let j = i+1; j < no_of_ele_in_array; j++){
			
			div_update(width_of_array_div[j], array_value[j], "red");
			div_update(width_of_array_div[min_index], array_value[min_index], "red");

			if(array_value[j] < array_value[min_index]){

				div_update(width_of_array_div[min_index], array_value[min_index], "lightskyblue");

				min_index = j;
				
			}

			div_update(width_of_array_div[j], array_value[j], "lightskyblue");
			div_update(width_of_array_div[min_index], array_value[min_index], "lightskyblue");

		}

		div_update(width_of_array_div[i], array_value[i], "yellow");
		div_update(width_of_array_div[min_index], array_value[min_index], "yellow");
		
		let temp = array_value[i];
		array_value[i] = array_value[min_index];
		array_value[min_index] = temp;

		div_update(width_of_array_div[i], array_value[i], "yellow");
		div_update(width_of_array_div[min_index], array_value[min_index], "yellow");
		div_update(width_of_array_div[i], array_value[i], "green");

		if( i != min_index){
			div_update(width_of_array_div[min_index], array_value[min_index], "lightskyblue");
		}

	}

	div_update(width_of_array_div[no_of_ele_in_array-1], array_value[no_of_ele_in_array-1], "green");

	enable_buttons();
}