module.exports = function towelSort (matrix = []) {
    let newArr = [];
        for(i = 0; i < matrix.length; i++){
          if(i % 2){
            matrix[i].reverse();
          }
          for(j = 0; j < matrix[i].length; j++){
             newArr.push(matrix[i][j]);
          }
        }
    return newArr;
}
