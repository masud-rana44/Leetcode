var MinStack = function () {
  this.data = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.data.push({
    value: val,
    min: this.data.length === 0 ? val : Math.min(val, this.getMin()),
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[this.data.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.data[this.data.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
