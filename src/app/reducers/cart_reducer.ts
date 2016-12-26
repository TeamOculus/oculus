import { cart } from './cart_reducer';
// tslint:disable:quotemark

import {ActionReducer, Action} from '@ngrx/store';

export const MOVE_ITEM_AVAIL_TO_CART = 'MOVE_ITEM_AVAIL_TO_CART';
export const MOVE_ITEM_CART_TO_AVAIL = 'MOVE_ITEM_CART_TO_AVAIL';
export const LOAD_SAVED_CART = 'LOAD_SAVED_CART';


export const cart: ActionReducer<any> = (state = {cart: [], available: [
    {
        img: "https://s3-us-west-1.amazonaws.com/devmtn-oculus/Cart+Component/rift.png",
        name: "Oculus Rift",
        included: "Includes: headset, sensor, remote, cables, Xbox One controller, and Lucky's Tale.",
        ships: "Usually ships in 2 business days",
        price: 599
    },
    {
        img: "https://s3-us-west-1.amazonaws.com/devmtn-oculus/Cart+Component/touch.png",
        name: "Oculus Touch",
        included: "Includes: Touch controllers, sensor, batteries, Rock Band VR connector. Requires Rift, sold separately.",
        ships: "Usually ships in 2 business days",
        price: 199
    },
    {
        img: "https://s3-us-west-1.amazonaws.com/devmtn-oculus/Cart+Component/earphones.png",
        name: "Oculus Rift Earphones",
        included: "In-ear audio designed for your Rift headset. Requires Rift, sold separately.",
        ships: "Usually ships in 2 business days",
        price: 49
    },
    {
        img: "https://s3-us-west-1.amazonaws.com/devmtn-oculus/Cart+Component/sensor.png",
        name: "Sensor",
        included: "Includes: Sensor with cable and 5 meter extension cable. Requires Rift, sold separately. When used as a third sensor, requires an additional USB 2.0 or higher port. Please note: 360° and Room Scale tracking are experimental features—not all experiences may work as expected.",
        ships: "Usually ships in 2 business days",
        price: 79
    }
], totalprice: 0}, action: Action) => {
    switch(action.type){
        case MOVE_ITEM_AVAIL_TO_CART:
            let newState = Object.assign({}, state);
            // console.log(action.payload);
            // console.log(newState);
            for (let i = newState.available.length - 1; i >= 0; i--) {
                if (newState.available[i].name === action.payload.name) {
                    newState.cart.push(newState.available[i]);
                    newState.totalprice += newState.available[i].price;
                    newState.available.splice(i, 1);
                }
            }
            return newState;

        case MOVE_ITEM_CART_TO_AVAIL:
            let newState = Object.assign({}, state);
            // console.log(action.payload);
            // console.log(newState);
            for (let i = newState.cart.length - 1; i >= 0; i--) {
                if (newState.cart[i].name === action.payload.name) {
                    newState.available.push(newState.cart[i]);
                    newState.totalprice -= newState.cart[i].price;
                    newState.cart.splice(i, 1);
                }
            }
            return newState;
        case LOAD_SAVED_CART:
            let newState = Object.assign({}, state);
            console.log(action.payload);
            if (action.payload[0].savedcart.length === 0){
                console.log("no items in saved cart")
                return state;
            } else {
                console.log("there are items in saved cart")
                newState.cart = action.payload[0].savedcart;
                for (let i = newState.cart.length - 1; i >= 0; i--) {
                    for (let j = newState.available.length - 1; j >= 0; j--) {
                        if (newState.available[j].name === newState.cart[i].name) {
                            newState.available.splice(j, 1);
                        }
                    }
                }
                let newPrice = 0;
                for (let k = newState.cart.length - 1; k >= 0; k--) {
                    newPrice += newState.cart[k].price;
                }
                newState.totalprice = newPrice;
                return newState;
            }

        default:
            return state;
    }
}