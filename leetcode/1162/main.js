/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    var res=[];
    for(var i = 0; i < grid.length; ++i){
        for(var j = 0; j < grid[0].length; ++j){
            if(grid[i][j] == 1){
                res.push([i,j]);
            }
        }
    }
    var min=2*grid.length;
    var max=-1;
    for(var i=0;i<grid.length;++i){
        for(var j=0;j<grid[0].length;++j){
            if(grid[i][j]==0&&res.length){
                for(var k=0;k<res.length;++k){
                    var dis=Math.abs(i-res[k][0])+Math.abs(j-res[k][1]);
                    if(dis<min){
                        min=dis;
                    }
                }
                if(min>max){
                    max=min;
                }
                min=2*grid.length;
            }
        }
    }
    return max;
};