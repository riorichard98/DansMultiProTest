function triangle(num) {
    num++
    for (let i = 0; i < num; i++) {
        let temp = ''
        for(let j = 0 ; j < 2*(num-1 - i) ; j++){
            temp += ' '
        }
        for (let j = 0; j < i; j++) {
            temp += Math.pow(2,j) + ' '
        }
        for(let j = i-2 ; j >= 0 ; j--){
            temp += Math.pow(2,j) + ' '
        }
        console.log(temp);
    }
}
//    console.log(Math.pow(2,i));
triangle(4)
/**
            1
        1   2   1
    1   2   4   2   1
1   2   4   8   4   2   1
 */


