var sortArrayByParityII = function (A) {
    let len = A.length,
      i = 0,
      j = 1
    for (i = 0; i < len; i += 2) {
      if (A[i] % 2) {
        while (A[j] % 2) j += 2;
        //  交换两个不满足要求的数据
        [A[i], A[j]] = [A[j], A[i]]
      }
    }
    return A
  };
