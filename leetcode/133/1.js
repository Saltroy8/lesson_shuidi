const cloneGraph = (startNode) => {
    if (startNode == null) return null;
    const visited = new Map();
    const queue = [];
    queue.push(startNode);
  
    const clonedStartNode = new Node(startNode.val, []);
    visited.set(startNode.val, clonedStartNode);
  
    while (queue.length) {
      const curNode = queue.shift();               
      for (const neighborNode of curNode.neighbors) {
        if (!visited.has(neighborNode.val)) {      
          queue.push(neighborNode);                
          const clonedNeighborNode = new Node(neighborNode.val, []); 
          visited.set(neighborNode.val, clonedNeighborNode); 
        }
        const curClonedNode = visited.get(curNode.val);      
        const clonedNeighborNode = visited.get(neighborNode.val); 
        curClonedNode.neighbors.push(clonedNeighborNode);   
      }
    }
    return clonedStartNode;
  };
