var Insertion_Sort_Info = '<h2 class="text-center"><i>Insertion Sort</i></h2>' + 
 		'<p>Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.</p>' +
		'<p><span class="badge badge-dark">Space Complexity:</span> <i>O(1)</i></p>' +
		'<p>Time Complexities:</p>' +
		'<p><span class="badge badge-dark">Worst Time Complexity:</span> <i>O(n<sup>2</sup>)</i></p>' +
		'<p><span class="badge badge-dark">Average Time Complexity:</span> <i>O(n<sup>2</sup>)</i></p>' +
		'<p><span class="badge badge-dark">Best Time Complexity:</span> <i>O(n)</i></p>';



function Insertion_Sort(){
	console.log('IN Insertion Sort');
	info_element.innerHTML = Insertion_Sort_Info;

	temp_delay = 0;

	disable_buttons();

	for(let i=1; i < no_of_ele_in_array; i++){

		let j = i-1;

		div_update(width_of_array_div[j], array_value[j], "red");
		div_update(width_of_array_div[j+1], array_value[j+1], "red");

		while(j >= 0 && array_value[j] > array_value[j+1]){
			
			div_update(width_of_array_div[j], array_value[j], "red");
			div_update(width_of_array_div[j+1], array_value[j+1], "red");

			div_update(width_of_array_div[j], array_value[j], "yellow");
			div_update(width_of_array_div[j+1], array_value[j+1], "yellow");


			let temp = array_value[j];
			
			array_value[j] = array_value[j+1];

			array_value[j+1] = temp;

			div_update(width_of_array_div[j], array_value[j], "yellow");
			div_update(width_of_array_div[j+1], array_value[j+1], "yellow");

			div_update(width_of_array_div[j], array_value[j], "lightskyblue");
			div_update(width_of_array_div[j+1], array_value[j+1], "green");

			j = j - 1; 
		}
		
		div_update(width_of_array_div[j], array_value[j], "green");
		div_update(width_of_array_div[j+1], array_value[j+1], "green");

	}
	
	div_update(width_of_array_div[no_of_ele_in_array-1], array_value[no_of_ele_in_array-1], "green");	

	enable_buttons();
}