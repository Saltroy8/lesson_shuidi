# 删除有序数组中的重复项
前端容易入门

读题：
  sortedArr [1,1,2]  3
  return length  2


- 一次遍历  ？
  res [] 空间复杂度 O(n)
  for
  排好序 后面的项一定会大于或等于前面项
  等于就原地删除
  res length
  抽象 数理逻辑
- 动图
  两个指针 pre cur
  cur 一直在往前跑 一次循环的每一项遍历
  pre 后面追 
  cur跟per   arr 前一个 后一个
  不等于 pre+1
  相等的时候 pre不走 慢下来，不与cur前后相连
  如果cur pre不一样 那么 pre+1 时 值等于cur
  从头到尾都是排好序的不重复数据
  决定每个位置放什么数
  pre 指针 没有跟上cur的速度的时候有重复
  pre cur 有空位
  pre + 1 删除 , 把当前cur值交给pre

  - 快慢指针
    1. 一次循环 cur++ 一直跑
    2. cur 跟 pre arr[] 不等的话
      pre++
      相等的话 pre 不动
      3. cur再走的时候，继续比较
         新的cur跟旧pre
         不等时, pre++ 并且把 cur值赋值给pre
         把之前的重复的空出来的位置给填上
      4. cur > length 
- 数据结构 链表
  [1,1,2] 链表
  LinkedList  next
  next值相同时 next指向下一个
  把数组要维持位置指针给取消了