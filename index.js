'use strict';

module.exports = exports = {

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

  }

};