var Heap_Sort_Info = '<h2 class="text-center"><i>Heap Sort</i></h2>' + 
 		'<p>Heap sort is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for the remaining elements.</p>' +
		'<p><span class="badge badge-dark">Space Complexity:</span> <i>O(1)</i></p>' +
		'<p>Time Complexities:</p>' +
		'<p><span class="badge badge-dark">Worst Time Complexity:</span> <i>O(n*log(n))</i></p>' +
		'<p><span class="badge badge-dark">Average Time Complexity:</span> <i>O(n*log(n))</i></p>' +
		'<p><span class="badge badge-dark">Best Time Complexity:</span> <i>O(n*log(n))</i></p>';



function heapify(n, curr_index){

	let largest_index = curr_index;
	let left_child_index = 2 * curr_index + 1;
	let right_child_index = 2 * curr_index + 2;
	

	if(left_child_index < n && array_value[left_child_index] > array_value[largest_index]){

		div_update(width_of_array_div[left_child_index], array_value[left_child_index], "red");
		div_update(width_of_array_div[largest_index], array_value[largest_index], "red");

		div_update(width_of_array_div[left_child_index], array_value[left_child_index], "lightskyblue");
		div_update(width_of_array_div[largest_index], array_value[largest_index], "lightskyblue");


		largest_index = left_child_index;


	}


	if(right_child_index < n && array_value[right_child_index] > array_value[largest_index]){

		div_update(width_of_array_div[right_child_index], array_value[right_child_index], "red");
		div_update(width_of_array_div[largest_index], array_value[largest_index], "red");

		div_update(width_of_array_div[right_child_index], array_value[right_child_index], "lightskyblue");
		div_update(width_of_array_div[largest_index], array_value[largest_index], "lightskyblue");


		largest_index = right_child_index;
	}


	if(largest_index != curr_index){

		div_update(width_of_array_div[curr_index], array_value[curr_index], "yellow");
		div_update(width_of_array_div[largest_index], array_value[largest_index], "yellow");

		let temp = array_value[curr_index];
		array_value[curr_index] = array_value[largest_index];
		array_value[largest_index] = temp;

		div_update(width_of_array_div[curr_index], array_value[curr_index], "yellow");
		div_update(width_of_array_div[largest_index], array_value[largest_index], "yellow");


		div_update(width_of_array_div[curr_index], array_value[curr_index], "lightskyblue");
		div_update(width_of_array_div[largest_index], array_value[largest_index], "lightskyblue");


		heapify(n, largest_index);
	} 
}



function heapsort(n){

	for(let i = Math.floor((n/2) - 1); i >=0; i--){
		heapify(n,i);
	}

	for(let i = n-1; i > 0; i--){

		div_update(width_of_array_div[0], array_value[0], "yellow");
		div_update(width_of_array_div[i], array_value[i], "yellow");

		let temp = array_value[0];
		array_value[0] = array_value[i];
		array_value[i] = temp;

		div_update(width_of_array_div[0], array_value[0], "yellow");
		div_update(width_of_array_div[i], array_value[i], "yellow");

		div_update(width_of_array_div[i], array_value[i], "green");

		heapify(i, 0)
	}

	div_update(width_of_array_div[0], array_value[0], "green");
}





function Heap_Sort(){
	info_element.innerHTML = Heap_Sort_Info;

	temp_delay = 0;

	disable_buttons();	
	
	heapsort(array_value.length);
	
	enable_buttons();
}