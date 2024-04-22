const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                {
                    name:"Waltere",
                    profilePhoto:"./img/avatar_1.jpg",
                    message: "Apri un ticket, oppure studia per battere Loris a scacchi"
                },
                {
                    name:"Luca Giardina",
                    profilePhoto:"./img/avatar_2.jpg",
                    message: "Apri un ticket, oppure studia per battere Loris a scacchi"
                },
                {
                    name:"Simone Bonvecchio",
                    profilePhoto:"./img/avatar_3.jpg",
                    message: "Apri un ticket, oppure studia per battere Loris a scacchi"
                },
                {
                    name:"Berlusconi",
                    profilePhoto:"./img/avatar_4.jpg",
                    message: "Apri un ticket, oppure studia per battere Loris a scacchi"
                },
                {
                    name:"Loris Barbiero",
                    profilePhoto:"./img/avatar_5.jpg",
                    message: "Apri un ticket, oppure studia per battere Loris a scacchi"
                },
                {
                    name:"Olga Demina",
                    profilePhoto:"./img/avatar_6.jpg",
                    message: "Apri un ticket, oppure studia per battere Loris a scacchi"
                },
                {
                    name:"Vittorio Sgarbi",
                    profilePhoto:"./img/avatar_7.jpg",
                    message: "Apri un ticket, oppure studia per battere Loris a scacchi"
                },
                {
                    name:"Balotelli",
                    profilePhoto:"./img/avatar_8.jpg",
                    message: "Apri un ticket, oppure studia per battere Loris a scacchi"
                }
            ]
        }
    },
    methods: {
        selectedChat(index) {
            
        }
    }
}).mount(".viewport")