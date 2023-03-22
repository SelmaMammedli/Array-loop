//task1
var num=[3,7,1,8,9];
num.sort((a,b)=>a-b)
console.log(num)

//task2
var arr1=[2,5,6,7,8,9];
var arr2=[2,7,9,1,3];
for (let i = 0; i < arr1.length; i++) {
   for (let j= 0; j < arr2.length; j++) {
    if (arr1[i]==arr2[j]) {
           break;
    }
    
   }
    
}
console.log(true);
//task3
var nums=[1,4,22,43,12,45,90];
let n=1;
for (let i = 0; i < nums.length; i++) {
   if (n<nums[i/2]) {
    for (let j= 0; j < nums.length/2; j++) {
       if (n==nums[j]) {
        console.log(j);
        break;
       }
        
    }
   }
    else if (n==nums[i/2]) {
        console.log(i/2);
        break;
    }
    else{
        if (n>nums[i/2]) {
            for (let k= 0; k < nums.length; k++) {
                if (nums[k]==n) {
                    console.log(k);
                    break;
                }
                
            }
        }
    }
}
