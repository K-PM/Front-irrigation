import io from "socket.io-client";

const socket = io("http://3.133.107.127:4000");




const sendLogin = (socketRec, form) => {
    socketRec.emit('login',form);
    
};

const sendRegister = (socketRec, form) => {
    socketRec.emit('regUser', form);
};

const sendIdSystemtoIrrigation = (socketRec, id) => {
    socketRec.emit('irrigationAsk', id);
    
};

const sendIdUserToSystem = (socketRec, id) => {
    socketRec.emit('systemAsk', id);

};

/*
const receivedLogin = (socketRec, fuction) => {
    
};


const receivedRegister = (socketRec, fuction) => {

};
const receivedResponseSystem = (socketRec, fuction) => {
    
};

const receivedResponseIrrigation = (socketRec, fuction) => {
};
*/


export default socket;
export {
    sendLogin,
    sendRegister,
    sendIdSystemtoIrrigation,
    sendIdUserToSystem,
};
