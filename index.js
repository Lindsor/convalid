'use strict';

function notImplemented() {
  console.info("Not yet implemented");
};

module.exports = exports = {

  /**
   * Checks if the value passes the `required` restriction.
   * @param  {Mixed}    value   The value to check for validity.
   * @return {Boolean}          True if passes constraint, false otherwise.
   */
  passRequired: function(value) {

    /**
     * If its a boolean return true.
     * This is required because (!value) returns tru for `false`.
     */
    if (typeof value === "boolean") return true;

    /* 0 returns true for (!0) so force return true */
    if (value === 0) return true;

    /* If no value passed in return false */
    if (!value) return false;

    /* If the value is a string then make sure its not empty */
    if (this.isEmpty(value)) return false; 

    /* If all the above checks pass then its valid */
    return true;

  },

  passMin: notImplemented,
  passMax: notImplemented,
  passStep: notImplemented,

  /**
   * Checks if the value is empty.
   * This only returns true if:
   *   value === null
   *   value === undefined
   *   value === ""
   * @param  {Mixed}  value  The value to check.
   * @return {Boolean}       True if empty, false otherwise.
   */
  isEmpty: function(value) {

    /* Double equal check for null */
    if (this.isUndefined(value)) return true;

    /* Cast to string */
    value = value + "";

    return value.length === 0;
  },

  /**
   * Checks if the passed in value is a number or not.
   * @param  {Mixed}    value  The value to check if its a number.
   * @return {Boolean}         True if a number, false otherwise.
   */
  isNumber: function(value) {

    /* Booleans can be casted to numbers so catch this first */
    if (this.isBoolean(value)) return false;

    /**
     * Number([<Number>]) returns a number.
     * It returns:
     *   0   | If the array has no elements
     *   1   | If the array has 1 element
     *   NaN | If the array has more then 1 element
     */
    if (Array.isArray(value)) return false;

    /**
     * Number(null) returns a number.
     * Force a undefined check.
     */
    if (this.isUndefined(value)) return false;

    /**
     * Number("") returns a number.
     * Force an empty check.
     */
    if (this.isEmpty(value)) return false;

    /* Cast to a number */
    value = Number(value);

    /**
     * NaN can be the result of a Number() call.
     * It is the only thing in JS that returns true for:
     *   NaN !== NaN
     */
    if (value !== value) return false;

    return typeof value === "number";

  },

  /**
   * Checks if the passed in value is undefined or null.
   * @param  {Mixed}   value The value to check for undefined.
   * @return {Boolean}       True if undefined or null, false otherwise.
   */
  isUndefined: function(value) {

    /* 2 equality check for undefined */
    return (value == null);

  },

  /**
   * Checks if the passed in value is a boolean or not.
   * @param  {Mixed}  value  The value to check weather its a boolean or not.
   * @return {Boolean}       True if its a boolean, false otherwise.
   */
  isBoolean: function(value) {

    var type = typeof value;

    if (type === "boolean") return true;

    return (value instanceof Boolean);

  },

  isGreaterThan: notImplemented,
  isLessThan: notImplemented,
  isEmail: notImplemented,
  isTel: notImplemented,
  isDateTime: notImplemented,
  isDate: notImplemented,
  isMonth: notImplemented,
  isDay: notImplemented,
  isYear: notImplemented,
  isChecked: notImplemented,
  isColor: notImplemented,
  isUrl: notImplemented,
  isImage: notImplemented,
  isTime: notImplemented,
  isWeek: notImplemented

};