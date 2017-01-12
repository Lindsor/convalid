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
    if (typeof value === "string") {

      return value.length > 0;

    }

    /* If all the above checks pass then its valid */
    return true;

  },

  passMin: notImplemented,
  passMax: notImplemented,
  passStep: notImplemented,

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