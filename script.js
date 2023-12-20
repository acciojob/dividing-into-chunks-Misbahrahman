const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	
  let ans = [];
  let sum = 0;
  let a = [];
  for(let i of arr){
	  
	  sum += i;
	  a.push(i);

	  if(sum > n){
		  a.pop();
		  ans.push(a);
		  a = [];
          a.push(i);
		  sum = i;
	  }
  }	

  if(a.length != 0)ans.push(a);

	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));