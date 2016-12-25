// tslint:disable:quotemark

import {ActionReducer, Action} from '@ngrx/store';

export const MOVE_ITEM_AVAIL_TO_CART = 'MOVE_ITEM_AVAIL_TO_CART';


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

        default:
            return state;
    }
}