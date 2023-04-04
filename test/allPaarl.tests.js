describe('Test allPaarl function' , function(){
    it("should return  how many registration number  from paarl are on the string", function(){
        //var regNumbersForPaarl = allPaarl(regNumbers);
        var regNumber = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        //allPaarl(regNumber)
        assert.deepEqual(["CJ 678 543","CJ 67890"],allPaarl(regNumber));
    });
    it("should return empty database when the registration number is not from paarl", function(){
        var regNumber = '';
        //allPaarl(regNumber)
        assert.equal("empty dataset", allPaarl(regNumber))
    });

   it("should return not from paarl when the registration number does not starts with 'CJ'", function(){
        var regNumber = [];
        //assert.deepEqual(["CL 900", "CJ 678 543", "CA 34567", "CJ 67890", "CN 7864"], allPaarl(regNumber));
      });



});
