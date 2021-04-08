/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let listCopy = l;
  let prev = null;
  let curr = listCopy;

  while (listCopy.next) {
    if (curr === null) {
      break;
    }
    if (curr.value === k) {
      if (prev) {
        prev.next = curr.next;
        curr = curr.next;
      } else {
        listCopy = curr.next;
        curr = curr.next;
      }
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return listCopy;
}

module.exports = removeKFromList;
