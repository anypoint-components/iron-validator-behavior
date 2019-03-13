/**
@license
Copyright 2017 Mulesoft.

All rights reserved.
*/
import {PolymerElement} from '@polymer/polymer/polymer-element.js';

import {IronValidatorMixin} from '../iron-validator-behavior.js';
class SimpleValidator extends IronValidatorMixin(PolymerElement) {
  static get is() {
    return 'simple-validator';
  }
}
window.customElements.define(SimpleValidator.is, SimpleValidator);
