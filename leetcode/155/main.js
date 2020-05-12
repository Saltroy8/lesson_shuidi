/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.list = []
    this.length = 0
    this.minList = []
  };
  
  /** 
   * @param {number} x
   * @return {void}
   */
  MinStack.prototype.push = function(x) {
    this.list[this.length] = x 
    let min = this.length > 0 ? this.minList[this.length - 1] : Infinity
    this.minList[this.length] = min > x ? x : min
    this.length++
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function() {
    this.list.length = --this.length
    this.minList.length = this.length
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function() {
    return this.list[this.length - 1] 
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function() {
    return this.minList[this.length - 1] 
  };
  
  /**
   * Your MinStack object will be instantiated and called as such:
   * var obj = new MinStack()
   * obj.push(x)
   * obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.getMin()
   */
  