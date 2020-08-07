const isSameTree = (p, q) => {
    const queue = [{ p, q }];    
    while (queue.length) {
      const cur = queue.shift();   
      if (cur.p == null && cur.q == null) continue;
      if (cur.p == null || cur.q == null) return false;
      if (cur.p.val != cur.q.val) return false;
      queue.push({
        p: cur.p.left,
        q: cur.q.left
      }, {
        p: cur.p.right,
        q: cur.q.right
      });
    }
    return true;
  };
  