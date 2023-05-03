var CustomStack = function (maxSize) {
  this.stack = [];
  this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.maxSize > this.stack.length) {
    this.stack.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.stack.length === 0) return -1;
  return this.stack.pop();
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  const len = this.stack.length;

  if (len > k) {
    for (let i = 0; i < k; i++) {
      this.stack[i] += val;
    }
  } else {
    for (let i = 0; i < len; i++) {
      this.stack[i] += val;
    }
  }
};
