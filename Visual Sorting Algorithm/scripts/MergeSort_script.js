var Merge_Sort_Info = '<h2 class="text-center"><i>Merge Sort</i></h2>' + 
 		'<p>Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.</p>' +
		'<p><span class="badge badge-dark">Space Complexity:</span> <i>O(n)</i></p>' +
		'<p>Time Complexities:</p>' +
		'<p><span class="badge badge-dark">Worst Time Complexity:</span> <i>O(n*log(n))</i></p>' +
		'<p><span class="badge badge-dark">Average Time Complexity:</span> <i>O(n*log(n))</i></p>' +
		'<p><span class="badge badge-dark">Best Time Complexity:</span> <i>O(n*log(n))</i></p>';


function merge(arr, l, m, r){
	let i, j, k;
	let n1 = m - l + 1;
	let n2 = r - m;

	let left_a = new Array(n1);
	let right_a = new Array(n2);

	for(i=0; i < n1; i++){
		left_a[i] = arr[l+i];
	}
	for(j=0; j < n2; j++){
		right_a[j] = arr[m + 1 + j];
	}

	i = 0;
	j = 0;
	k = l;

	for(let v=0; v < left_a.length; v++){
		div_update(width_of_array_div[l+v], left_a[v], "red");
	}

	for(let v=0; v < right_a.length; v++){
		div_update(width_of_array_div[m+1+v], right_a[v], "red");
	}

	while(i < n1 && j < n2){		

		if(left_a[i] <= right_a[j]){
			array_value[k] = left_a[i];
			div_update(width_of_array_div[k], array_value[k], "green");
			i +=1;			
		}else{
			array_value[k] = right_a[j];
			div_update(width_of_array_div[k], array_value[k], "green");
			j +=1;
		}

		k +=1;
	}

	while(i < n1){
		array_value[k] = left_a[i];
		div_update(width_of_array_div[k], array_value[k], "green");
		i +=1;
		k +=1;
	}

	while(j < n2){
		array_value[k] = right_a[j];
		div_update(width_of_array_div[k], array_value[k], "green");
		j +=1;
		k +=1;
	}
}


function mergesort(arr, l, r){
	if(l < r){
		let m = l + Math.floor((r-l)/2);

		mergesort(arr, l , m);
		mergesort(arr, m+1, r);

		merge(arr, l, m, r);
	}
}






function Merge_Sort(){
	info_element.innerHTML = Merge_Sort_Info;

	temp_delay = 0;

	disable_buttons();	
	
	mergesort(array_value, 0, array_value.length - 1);
	
	enable_buttons();
}