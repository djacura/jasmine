describe ("the fizzBuzz function", function() {
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    }) // create new fizzBuzz function each time otherwise would add together
})

describe ("returns number, fizz, buzz, or fizzbuzz", function() { //here create the function of what is expected
    it("should exist", function() {
        expect(fizzBuzz).toBeDefined();
    });

    it("should return FizzBuzz when called fizzBuzz(15)", function() { //here checks whether can be divided by 3 and  5
        var result = fizzBuzz(15)
        expect(result).toBe("FizzBuzz"); 
    });

    it("should return Fizz when called fizzBuzz(9)", function() { //here checks whether can be divided by 3
        var result = fizzBuzz(9)
        expect(result).toBe("Fizz");
    });

    it("should return Buzz when called fizzBuzz(10)", function() { //here checks whether can be divided by 5
        var result = fizzBuzz(10)
        expect(result).toBe("Buzz");
    });

    it("should return 14 when called fizzBuzz(14)", function() { //here checks whether can be divided by 3 and 5 if not then just returns number back.
        var result = fizzBuzz(14)
        expect(result).toBe(14);
    });

})