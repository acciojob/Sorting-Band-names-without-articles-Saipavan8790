//your code here
let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let articleLessArray = [];
let mp = {};
let regexp = /\bthe\b|\ban\|\ba\b/gi;
for(let i=0; i<arr.length; i=i+1)
	{
		let temp = arr[i].replace(regexp, "").trim();
		articleLessArray.push(temp);
		mp[temp] = arr[i];
	}
// console.log(articleLessArray);
articleLessArray.sort();
// console.log(articleLessArray);
let ans = [];
for(let i of articleLessArray)
	{
		ans = push(mp[i]);
	}
console.log(ans);