class TestClass {

    constructor(word) {
        this.word = word;
    }

    greet(word){
        console.log("I say: " + this.word);
    }
}

export default TestClass;