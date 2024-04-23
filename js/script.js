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
            },
            search:''
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
                    //console.log(answer);
                    this.contacts[this.curChat].messages.push(answer);
                    //console.log(this.contacts[this.curChat].messages);
                }, 1000);

            } else {
                console.log('non ci sono messaggi');
            }
        },

        finder() {

            this.contacts.forEach((element, index) => {
                const arrayName = this.contacts[index].name.split();
                let visible = this.contacts[index].visible;
                console.log(this.contacts[index].name.split());


                arrayName.forEach((element,index) => {
                    //risolvere problema upper case
                    const search = this.search;
                    console.log(search);
                    if (element[index] === search) {
                        visible = true;
                    } else {
                        visible = false;
                    }
                });
                console.log(visible);
                return visible;
            });
        }
    }
}).mount('.viewport');


