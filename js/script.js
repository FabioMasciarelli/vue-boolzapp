const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts,
            curChat: 0,
            sent: {
                date: '10/01/2020 16:15:22',
                message: '',
                status: 'sent'
            }
        }
    },
    methods: {
        selectedChat(index) {
            console.log(index);
            this.curChat = index;
        },
        
        send() {
            if(this.sent.message !== "") {
                console.log(this.sent);
                const result = {...this.sent}
                console.log(result);
                this.messages.push(result);
                console.log(this.messages);
                this.sent.messages = "";
            } else {
                console.log("non ci sono messaggi");
            }
        }
    }
}).mount(".viewport")


