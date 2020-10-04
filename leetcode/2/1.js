// 链表节点
const ListNode = function(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  };
  
  // 两数相加（字符串）
  const addStr = (str1, str2) => {
    // 需要计算的最少次数
    let time = Math.max(str1.length, str2.length);
  
    // 填平 l1Str 和 l2Str 的差距
    if (time === str1.length) {
      str2 = '0'.repeat(time - str2.length) + str2;
    } else if (time === str2.length) {
      str1 = '0'.repeat(time - str1.length) + str1;
    }
  
    // 计算结果
    let str3 = '';
  
    // 是否需要进位
    let add = 0;
  
    // 从 length - 1 开始
    time--;
  
    // 字符串相加：如果还需要继续计算或者进位还存在
    while (time >= 0 || add) {
      // 计算当前和
      const nowSum = Number(str1[time] || 0) + Number(str2[time] || 0) + add;
  
      // 添加进 str3
      str3 = nowSum % 10 + str3;
  
      // 满 10 进 1，否则清零
      if (nowSum >= 10) {
        add = 1;
      } else {
        add = 0;
      }
  
      // 次数减一
      time--;
    }
  
    // 返回结果
    return str3;
  };
  
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  const addTwoNumbers = (l1, l2) => {
    // 1. 设置递归函数，获取该条链表对应的数字
    const recursion = (list, str) => {
      if (!list) {
        return str;
      }
      return recursion(list.next, list.val + str);
    };
  
    // 2. 获取 l1 和 l2 对应的字符串数字
    let l1Str = recursion(l1, '');
    let l2Str = recursion(l2, '');
  
    // 3. 获取相加之和的 l3 对应的字符串数字
    // 第 1565 / 1568 个通过测试用例中，出现了
    // [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
    // 这种 31 位长度的，JavaScript 无能为力，需要变成字符串相加
    let l3Str = addStr(l1Str, l2Str);
  
    // 4. 设置 l3
    const l3 = new ListNode();
  
    // 5. 设置一个临时 l3 去探路
    let tempL3 = l3;
  
    // 6. 遍历字符串 l3，不断生成下一个节点
    for (let i = l3Str.length - 1; i >= 0; i--) {
      tempL3.next = new ListNode(Number(l3Str[i]));
      tempL3 = tempL3.next;
    }
  
    // 7. 返回 l3.next，因为第一个节点是虚假的！
    return l3.next;
  };
  
  const list1 = { // 99
    val: 9,
    next: {
      val: 9,
      next: null
    },
  };
  
  const list2 = { // 999
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: null,
      },
    },
  };
