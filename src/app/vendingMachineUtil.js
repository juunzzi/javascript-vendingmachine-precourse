import { COINS_KEY, DOM, ERROR_MESSAGE } from '../lib/constants.js';
import {
  hasSomeEmptyString,
  isNumberStringIsNegative,
  isNumberStringNotDivideBy10,
} from '../lib/utils.js';
import Coin from '../modules/coin.js';

/** Util */
class VendingMachineUtil {
  static isValidProduct(inputsValue) {
    if (hasSomeEmptyString(Object.values(inputsValue))) {
      throw new Error(ERROR_MESSAGE.PRODUCT_ADD_ERROR_HAS_EMPTY_VALUE);
    }
    if (isNumberStringIsNegative(inputsValue[DOM.PRODUCT_PRICE_INPUT])) {
      throw new Error(ERROR_MESSAGE.PRODUCT_ADD_ERROR_PRICE_IS_NEGATIVE_NUMBER);
    }
    if (isNumberStringIsNegative(inputsValue[DOM.PRODUCT_QUANTITY_INPUT])) {
      throw new Error(ERROR_MESSAGE.PRODUCT_ADD_ERROR_QUANTITY_IS_NEGATIVE_NUMBER);
    }
    if (isNumberStringNotDivideBy10(inputsValue[DOM.PRODUCT_PRICE_INPUT])) {
      throw new Error(ERROR_MESSAGE.PRODUCT_ADD_ERROR_PRICE_DIVIDE_BY_10);
    }

    return true;
  }

  static isValidCharge(inputsValue) {
    if (isNumberStringIsNegative(inputsValue[DOM.VENDING_MACHINE_CHARGE_INPUT])) {
      throw new Error(ERROR_MESSAGE.VENDING_MACHINE_ERROR_CHARGE_IS_NEGATIVE_NUMBER);
    }
    if (isNumberStringNotDivideBy10(inputsValue[DOM.VENDING_MACHINE_CHARGE_INPUT])) {
      throw new Error(ERROR_MESSAGE.VENDING_MACHINE_ERROR_CHARGE_DEVIDE_BY_10);
    }

    return true;
  }

  static getNewCoins(charge) {
    return Coin.getRandomCoins(charge);
  }

  static combineCurrentCoinsAndNewCoins(currentCoins, newCoins) {
    const combinedCoins = {};
    Object.values(COINS_KEY).forEach((key) => {
      combinedCoins[key] = currentCoins[key] + newCoins[key];
    });

    return combinedCoins;
  }
}
export default VendingMachineUtil;
