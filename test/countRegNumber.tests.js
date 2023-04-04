describe('Test countRegNumber function' , function(){
    it("should return the number of registration number in that string", function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });
    it("should return one if the there is one registation number", function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
    it("should return zero when there is no registation number enterted", function(){
        var regCount = countRegNumber("");
        assert.equal(regCount,1);
    });

});