let movezero;
movezero = (nums) =>{
    let notZeroArr = [],
    ZeroArr = [];
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i]==0){
            ZeroArr.push(0);  
        }
        else{
            notZeroArr.push(nums[i]);
        }
    }
    return notZeroArr.concat(ZeroArr);

}
console.log(movezero([0,1,0,3,12]));