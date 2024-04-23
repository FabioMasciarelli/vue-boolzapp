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
            },
            received: {
                date: '10/01/2020 16:15:22',
                message: 'non lo so, apri un ticket',
                status: 'received'
            }
        }
    },
    methods: {
        selectedChat(index) {
            console.log(index);
            this.curChat = index;
        },

        send() {
            if (this.sent.message !== '') {
                const result = { ...this.sent };
                console.log(result);
                this.contacts[this.curChat].messages.push(result);
                // console.log(this.contacts[curChat].messages);
                this.sent.message = '';

                //risposta
                setTimeout(() => {
                    const answer = { ...this.received };
                    console.log(answer);
                    this.contacts[this.curChat].messages.push(answer);
                    console.log(this.contacts[this.curChat].messages);
                }, 1000);

            } else {
                console.log('non ci sono messaggi');
            }
        }
    }
}).mount('.viewport');


