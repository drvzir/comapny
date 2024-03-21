var Quick_Sort_Info = '<h2 class="text-center"><i>Quick Sort</i></h2>' + 
 		'<p>QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.</p>' +
		'<p><span class="badge badge-dark">Space Complexity:</span> <i>O(1)</i></p>' +
		'<p>Time Complexities:</p>' +
		'<p><span class="badge badge-dark">Worst Time Complexity:</span> <i>O(n<sup>2</sup>)</i></p>' +
		'<p><span class="badge badge-dark">Average Time Complexity:</span> <i>O(n*log(n))</i></p>' +
		'<p><span class="badge badge-dark">Best Time Complexity:</span> <i>O(n*log(n))</i></p>';



function partition(left, right){
	
	let pivot = array_value[right];

	let partitionIndex = left;

	for(let i=left; i < right; i++){

		div_update(width_of_array_div[i], array_value[i], "red");
		div_update(width_of_array_div[right], array_value[right], "red");

		div_update(width_of_array_div[i], array_value[i], "lightskyblue");
		div_update(width_of_array_div[right], array_value[right], "lightskyblue");

		if(array_value[i] <= pivot){

			div_update(width_of_array_div[i], array_value[i], "yellow");
			div_update(width_of_array_div[partitionIndex], array_value[partitionIndex], "yellow");
			
			let temp = array_value[i];
			array_value[i] = array_value[partitionIndex];
			array_value[partitionIndex] = temp;

			div_update(width_of_array_div[i], array_value[i], "yellow");
			div_update(width_of_array_div[partitionIndex], array_value[partitionIndex], "yellow");

			div_update(width_of_array_div[i], array_value[i], "lightskyblue");
			div_update(width_of_array_div[partitionIndex], array_value[partitionIndex], "lightskyblue");

			partitionIndex +=1;
		}

	}

	div_update(width_of_array_div[right], array_value[right], "yellow");
	div_update(width_of_array_div[partitionIndex], array_value[partitionIndex], "yellow");

	array_value[right] = array_value[partitionIndex];
	array_value[partitionIndex] = pivot;

	div_update(width_of_array_div[right], array_value[right], "yellow");
	div_update(width_of_array_div[partitionIndex], array_value[partitionIndex], "yellow");

	div_update(width_of_array_div[right], array_value[right], "lightskyblue");

	return partitionIndex;
}


function quicksort(left, right){
	if(left == right){
		div_update(width_of_array_div[left], array_value[left], "green");
		return;
	}
	
	if(left > right){
		return;
	}

	let partitionIndex = partition(left, right);

	div_update(width_of_array_div[partitionIndex], array_value[partitionIndex], "green");

	quicksort(left, partitionIndex - 1);
	quicksort(partitionIndex + 1, right);
}

function Quick_Sort(){
	info_element.innerHTML = Quick_Sort_Info;

	temp_delay = 0;

	disable_buttons();	
	
	quicksort(0, array_value.length-1);
	
	enable_buttons();
}