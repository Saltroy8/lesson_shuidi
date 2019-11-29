const piles = [3,6,7,11]; //描述现在在珂珂面前的香蕉情况
//console.log(piles[0]);
// author ysw
// function 判断是否能吃完
function canEatAllBananas(piles,H,mid){
 let h =0;//吃完花的时间
 for(let j=0;j<piles.length;j++){
     h=h+Math.ceil(piles[j]/mid);
 }
 return h <= H;
}
function minEatingSpeed(piles,H){
    let lo =1,
    hi=Math.max(...piles);
    //得到数组中最大值，吃法的约束
    // for(let i=0;i<piles.length; i++){
    //     if(piles[i]>lo)
    //     hi=piles[i];
    // } 
    // lo->hi 去试，最小的能吃完的是不是就是这个值
    for(let i=lo;i<=hi;i++){
        if(canEatAllBananas(piles,H,i)){
            return i;
        }
    }
    return hi;
    console.log(hi);
    return 4;    
}

