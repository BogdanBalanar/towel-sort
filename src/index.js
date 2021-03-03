
// You should implement your task here.

module.exports = function towelSort (matrix) { if(matrix === undefined) return [];
  return matrix.flatMap((el,index)=>(index%2!==0)?el.reverse():el);
}
