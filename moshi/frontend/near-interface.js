/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

import { utils } from 'near-api-js';
import wallet from './near-wallet';

export class ItemsListed {

  constructor({ contractId, walletToUse }) {
    this.contractId = '';
    this.wallet = walletToUse
  }

  async getAllItems(){
    const items = await this.wallet.viewMethod({ contractId: this.contractId, method: "get_greeting" })
    console.log(items)
    return items
}

  async getItems() {
    // Check how many messages there are and ask for the last 10
    const total_items = this.wallet.viewMethod({ contractId: this.contractId, method: "last_item" })
    const from = total_items > 10 ? total_items - 10 : 0;
    const items = await this.wallet.viewMethod({ contractId: this.contractId, method: "get_items", from })
    return items
  }

  async addItems(itemName, itemPrice,itemQuantity) {
    return await this.wallet.callMethod({ contractId: this.contractId, method: "add_items", args: { item_name: itemName ,item_quantity: itemQuantity, item_price: itemPrice} });
  }

  async updateProfile(firstName, lastName, phoneNumber, email) {
    return await this.wallet.callMethod({contractId: this.contractId, method: "update_user", args: {first_name: firstName, last_name: lastName, phone_number: phoneNumber}});
  }
}