public class Solution {
    public ListNode detectCycle(ListNode head) {
        if (null == head || null == head.next) {
            return null;
        }
        if (head.next == head) {
            return head;
        }
        //步长 1 2 1 2 。。。
        ListNode node1 = head;
        //步长 2
        ListNode node2 = head;
        //指针移动次数
        int moveCnt = 0;
        //上一次node1和node2相遇时的指针移动次数
        int lastEqCnt = 0;
        while (true) {
            node1 = node1.next;
            if (node1 == null) {
                break;
            }
            if (moveCnt % 2 != 0) {
                node1 = node1.next;
                if (node1 == null) {
                    break;
                }
            }
            moveCnt++;
            node2 = node2.next;
            if (node2 == null) {
                break;
            }
            node2 = node2.next;
            if (node2 == null) {
                break;
            }
            if (node1 == node2) {
                if (moveCnt - lastEqCnt == 1) {
                    int offset = moveCnt / 2;
                    while (offset-- > 0) {
                        node1 = node1.next;
                    }
                    node2 = head;
                    while (node1 != node2) {
                        node1 = node1.next;
                        node2 = node2.next;
                    }
                    return node1;
                }
                lastEqCnt = moveCnt;
            }
        }
        return null;
    }
}
