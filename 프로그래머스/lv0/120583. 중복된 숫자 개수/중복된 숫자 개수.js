function solution(array, n) {
    let answer = 0;
    // for ( let i = 0; i < array.length; i++ ) {
    //     if (array[i] === n) answer += 1;
    // }
    // return answer;
    return array.filter((arr) => arr === n).length;
}