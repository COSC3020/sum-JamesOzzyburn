function sum(a) {
    var sum = 0; //Changed this from the first value in the array to zero so it wouldnt add the first value twice 
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}