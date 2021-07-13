// https://leetcode.com/problems/merge-two-sorted-lists/

const l1 = [1, 2, 4];
const l2 = [1, 3, 4];

const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) return l1 || l2;
  if (l1.val > l2.val) [l1, l2] = [l2, l1];

  l1.next = mergeTwoLists(l1.next, l2);
  return l1;
};

// const mergeTwoLists = (l1, l2) => {
//   if (!l1 || !l2) return l1 || l2;
//   if (l1.val > l2.val) {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   } else {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   }
// };

mergeTwoLists(l1, l2);
