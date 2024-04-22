const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts,
            curChat: 0,
            sent:"",
        }
    },
    methods: {
        selectedChat(index) {
            console.log(index);
            this.curChat = index;
        },
        
        send(index) {
            
        }
    }
}).mount(".viewport")


