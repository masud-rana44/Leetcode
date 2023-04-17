var countStudents = function (students, sandwiches) {
  const m = sandwiches.length;
  for (let i = 0; i < m; i++) {
    const n = students.length;
    let take = false;
    for (let j = 0; j < n; j++) {
      if (students[j] === sandwiches[i]) {
        students.splice(j, 1);
        take = true;
        break;
      }
    }
    if (!take) break;
  }
  return students.length;
};
