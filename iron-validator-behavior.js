/**
@license
Copyright 2017 Mulesoft.
All rights reserved.
*/
import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';
import {IronMeta} from '@polymer/iron-meta/iron-meta.js';

/**
 * ** Anypoint version of the component **
 *
 * This element is to be private and used as a replacemenet to any PolymerElements
 *
 * Use `Polymer.IronValidatorBehavior` to implement a custom input/form validator.
 * Element instances implementing this behavior will be registered for use
 * in elements that implement  `Polymer.IronValidatableBehavior`.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
export const IronValidatorBehavior = {
  properties: {
    /**
     * Error message to display when the form control did not passed the validation.
     */
    message: String
  },
  ready: function() {
    new IronMeta({
      type: 'validator',
      key: this.is,
      value: this
    });
  },
  /**
   * Implement custom validation logic in this function.
   * @param {Object} values The value to validate. May be any type depending
   * on the validation logic.
   * @return {Boolean} true if `values` is valid.
   */
  validate: function(values) {}
};

/**
 * ** Anypoint version of the component **
 *
 * Polymer 2.0 Mixin class.
 *
 * This element is to be private and used as a replacemenet to any PolymerElements
 *
 * Use `Polymer.IronValidatorBehavior` to implement a custom input/form validator.
 * Element instances implementing this behavior will be registered for use
 * in elements that implement  `Polymer.IronValidatableBehavior`.
 *
 * @polymer
 * @mixinFunction
 */
export const IronValidatorMixin = dedupingMixin((base) => {
  /**
   * @polymer
   * @mixinClass
   */
  class Hmixin extends base {
    static get properties() {
      return {
        /**
         * Error message to display when the form control did not passed the validation.
         */
        message: String
      };
    }
    constructor() {
      super();
      new IronMeta({
        type: 'validator',
        key: this.is || this.constructor.is,
        value: this
      });
    }
    /**
     * Implement custom validation logic in this function.
     * @param {Object|String} values The value to validate. May be any type depending
     * on the validation logic.
     * @return {Boolean} true if `values` is valid.
     */
    validate(values) {}
  }
return Hmixin;
});
