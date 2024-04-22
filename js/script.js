const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts,
            curChat: 0
        }
    },
    methods: {
        selectedChat(index) {
            console.log(index);
            this.curChat = index;
        }
    }
}).mount(".viewport")


