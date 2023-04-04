describe('Test isWeekday function' , function(){
    it("should return true when the weekday starts with 'Mon' or 'Tue' or 'Wen' or 'Thu' or 'Fri' ", function(){
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
})
    it("should return false when the weekday starts with 'Sat' or 'Sun'", function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false)
    });

    it("should return 'not a day' , when enterted a day that is not a weekday", function(){
        assert.equal(isWeekday('January'), 'not a day');
    });

});