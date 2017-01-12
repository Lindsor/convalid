'use strict';


const mocha = require("mocha");
const chai = require("chai");

const assert = chai.assert;

const convalid = require("../")

describe("convalid", function() {

  it("should be an object", function() {
    assert.isObject(convalid);
  });

  describe("#passRequired", function() {

    const pass = [
      "hello",
      1,
      0,
      false,
      true,
      {
        hello: "what"
      },
      -1,
      [1],
      Infinity,
      new Number(2)
    ];

    const fail = [
      "",
      undefined,
      NaN,
      null
    ];

    it("should be a function", function() {
      assert.isFunction(convalid.passRequired);
    });

    it("should return a boolean", function() {
      assert.isBoolean(convalid.passRequired("hello"));
    });

    pass.forEach(pass => {
      it(`should return true for '${pass}'`, function() {
        assert.equal(convalid.passRequired(pass), true);
      });
    });

    fail.forEach(fail => {
      it(`should return false for '${fail}'`, function() {
        assert.equal(convalid.passRequired(fail), false);
      });
    });

  });

});
