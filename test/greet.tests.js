//console.log(greet("Ebby"))
describe('Test my greet function' , function(){
    it("it should return 'Hello,Ebby' when called with 'Ebby' " , function(){

        assert.equal("Hello, Ebby", greet("Ebby"));

       // assert.deepEqual([2,2],[2,2]);
    });
    it("it should return 'Hello,Hlelo' when called with 'Hlelo' " , function(){

        assert.equal("Hello, Hlelo", greet("Hlelo"));

       // assert.deepEqual([2,2],[2,2]);
    });
    it("it should return 'Hello, when the name is not entered'" , function(){

        assert.equal('Hello, ' ,greet(""));

       // assert.deepEqual([2,2],[2,2]);
    });


});