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
    if (value == null) return true;

    /* Cast to string */
    value = value + "";

    return value.length === 0;
  },

  isNumber: notImplemented,
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