function findIfCircularList(list) {
  let counter2 = list;
  while(true) {
    if(list.next == null || counter2.next == null || counter2.next.next == null) {
      return false;
    }

    counter2 = counter2.next;

    if(list == counter2) {
      counter2 = null;
      return true;
    }
  }
}
