'use strict';


const mocha = require("mocha");
const chai = require("chai");

const assert = chai.assert;

const convalid = require("../")

describe("convalid", function() {

  it("should be an object", function() {
    assert.isObject(convalid);
  });

  describe("#isEmpty", function() {

    const pass = [
      "",
      undefined,
      null
    ];

    const fail = [
      NaN,
      "hello",
      1,
      0,
      false,
      true, {
        hello: "what"
      }, -1, [1],
      Infinity,
      new Number(2),
      new Boolean(true)
    ];

    it("should be a function", function() {
      assert.isFunction(convalid.isEmpty);
    });

    it("should return a boolean", function() {
      assert.isBoolean(convalid.isEmpty("hello"));
    });

    pass.forEach(pass => {
      it(`should return true for '${pass}'`, function() {
        assert.equal(convalid.isEmpty(pass), true);
      });
    });

    fail.forEach(fail => {
      it(`should return false for '${fail}'`, function() {
        assert.equal(convalid.isEmpty(fail), false);
      });
    });

  });

  describe("#isNumber", function() {

    const pass = [
      1,
      0, -1,
      2.3, -56.7,
      Infinity,
      new Number(2)
    ];

    const fail = [
      NaN,
      "hello",
      false,
      new Boolean(true),
      true, {
        hello: "what"
      },
      [1],
      "",
      undefined,
      null
    ];

    it("should be a function", function() {
      assert.isFunction(convalid.isNumber);
    });

    it("should return a boolean", function() {
      assert.isBoolean(convalid.isNumber("hello"));
    });

    pass.forEach(pass => {
      it(`should return true for '${pass}'`, function() {
        assert.equal(convalid.isNumber(pass), true);
      });
    });

    fail.forEach(fail => {
      it(`should return false for '${fail}'`, function() {
        assert.equal(convalid.isNumber(fail), false);
      });
    });

  });

  describe("#isUndefined", function() {

    const pass = [
      undefined,
      null
    ];

    const fail = [
      NaN,
      1,
      0, -1,
      2.3, -56.7,
      Infinity,
      new Number(2),
      "hello",
      false,
      new Boolean(true),
      true, {
        hello: "what"
      },
      [1],
      ""
    ];

    it("should be a function", function() {
      assert.isFunction(convalid.isUndefined);
    });

    it("should return a boolean", function() {
      assert.isBoolean(convalid.isUndefined("hello"));
    });

    pass.forEach(pass => {
      it(`should return true for '${pass}'`, function() {
        assert.equal(convalid.isUndefined(pass), true);
      });
    });

    fail.forEach(fail => {
      it(`should return false for '${fail}'`, function() {
        assert.equal(convalid.isUndefined(fail), false);
      });
    });

  });

  describe("#isBoolean", function() {

    const pass = [
      false,
      new Boolean(true),
      true
    ];

    const fail = [
      NaN,
      undefined,
      null,
      1,
      0, -1,
      2.3, -56.7,
      Infinity,
      new Number(2),
      "hello", {
        hello: "what"
      },
      [1],
      ""
    ];

    it("should be a function", function() {
      assert.isFunction(convalid.isBoolean);
    });

    it("should return a boolean", function() {
      assert.isBoolean(convalid.isBoolean("hello"));
    });

    pass.forEach(pass => {
      it(`should return true for '${pass}'`, function() {
        assert.equal(convalid.isBoolean(pass), true);
      });
    });

    fail.forEach(fail => {
      it(`should return false for '${fail}'`, function() {
        assert.equal(convalid.isBoolean(fail), false);
      });
    });

  });

  describe("#passRequired", function() {

    const pass = [
      "hello",
      1,
      0,
      false,
      new Boolean(true),
      true, {
        hello: "what"
      }, -1, [1],
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
