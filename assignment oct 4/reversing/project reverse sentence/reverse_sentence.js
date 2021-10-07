function reverseString(string){
    const arr = string.split(" "); // split string into idividual words
    const outPut = arr.reverse().join(" ")
    console.log(outPut); // get array of words pass reverse function then join output to become one string
}

reverseString("Caleb like dogs and cats");