const PING = "PING";

const initalState = {
    ping: "ping"
};

export const ping = (state = initalState, action) =>{
    switch(action.type){
        case PING:
            return {
                ping: "pong"
            };
        default:
            return state;
    }
};

