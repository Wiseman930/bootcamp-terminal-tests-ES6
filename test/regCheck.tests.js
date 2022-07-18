import assert from "assert";
import regCheck from "../regCheck.js";

describe ("the regCheck function", function(){
    it("should return true if a registration number taken in is from Gauteng or Eastern Cape or Limpopo or Mpumalanga with 'true'", function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });
    it("should return true if a registration number taken in is from Gauteng or Eastern Cape or Limpopo or Mpumalanga with 'true'", function(){
        assert.equal(true, regCheck('DC 55 YU L', 'L'));
    });
    it("should return true if a registration number taken in is from Gauteng or Eastern Cape or Limpopo or Mpumalanga with 'true'", function(){
        assert.equal(true, regCheck('DC 55 YU MP', 'MP'));
    });
    it("should return =true if a registration number taken in is not from Gauteng or Eastern Cape or Limpopo or Mpumalanga with 'false'", function(){
        assert.equal(false, regCheck('CJ 123 908', 'CJ'));
    });
})
