/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let idx = 0;

    for(let i = 0; i < pushed.length; i++) {
      let prevI = i;
      let useLoop = false;
      while(pushed[i] === popped[idx]) {
        console.log(pushed[i], popped[idx], stack)
        i--;
        ++idx;
        useLoop = true;
      }
      if(useLoop) {
        i = prevI;
        continue;
      }
      stack.push(pushed[i]);
    }

    console.log(stack, idx)

    const n = stack.length;
    for(let i = 0; i < n; i++) {
      if(stack.pop() !== popped[idx+i]) return false;
    }

    return true;
};