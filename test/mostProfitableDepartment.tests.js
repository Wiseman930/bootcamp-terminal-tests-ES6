
import assert from "assert";
import mostProfitableDepartment from "../mostProfitableDepartment.js";
describe ("mostProfitableDepartment function", function(){
    it("returns the deparment with the most profit comparing to the others", function(){
        assert.deepEqual('outdoor', mostProfitableDepartment([
            {department : 'hardware', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'hardware', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'outdoor', sales : 18007, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'outdoor', sales : 12006, day : 'Friday'},
            {department : 'carpentry', sales : 16109, day : 'Friday'},
        ]))
    });
    it("returns the deparment with the most profit comparing to the others", function(){
        assert.deepEqual('electronics', mostProfitableDepartment([
            {department : 'electronics', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'electronics', sales : 12006, day : 'Friday'},
            {department : 'electronics', sales : 16109, day : 'Saturday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'steelwork', sales : 1500, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
        ]))
    });
    it("returns the deparment with the most profit comparing to the others", function(){

        assert.deepEqual("carpentry", mostProfitableDepartment([
            {department : 'electronics', sales : 500, day : 'Monday'},
            {department : 'outdoor', sales : 500, day : 'Monday'},
            {department : 'carpentry', sales : 500, day : 'Monday'},
            {department : 'steelwork', sales : 600, day : 'Tuesday'},
            {department : 'outdoor', sales : 500, day : 'Tuesday'},
            {department : 'carpentry', sales : 500, day : 'Tuesday'},
            {department : 'hardware', sales : 500, day : 'Wednesday'},
            {department : 'outdoor', sales : 500, day : 'Wednesday'},
            {department : 'carpentry', sales : 500, day : 'Wednesday'},
            {department : 'hardware', sales : 500, day : 'Thursday'},
            {department : 'carpentry', sales : 500, day : 'Thursday'},
            {department : 'hardware', sales : 500, day : 'Friday'},
            {department : 'electronics', sales : 500, day : 'Friday'},
            {department : 'electronics', sales : 500, day : 'Saturday'},
            {department : 'steelwork', sales : 500, day : 'Tuesday'},
            {department : 'outdoor', sales : 500, day : 'Tuesday'},
            {department : 'carpentry', sales : 500, day : 'Tuesday'},
            {department : 'steelwork', sales : 500, day : 'Wednesday'},
            {department : 'carpentry', sales : 500, day : 'Wednesday'},
        ]))
    });

})