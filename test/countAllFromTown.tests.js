describe('Test countAllFromTown function' , function(){
    it("should return  how many registration number   from Stellies are on the string", function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3)
    });
    it("should return empty database when the registration number is not from town", function(){
        var fromStellies = '';
        //allPaarl(regNumber)
        assert.equal(0, countAllFromTown(fromStellies))
    });

   it("should return the registration number from Kuilsriver that strats with 'CF'", function(){
        //var fromStellies = [];
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        assert.equal(fromKuilsriver, 1)
      });

});  