const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                {
                    name:"Michele",
                    profilePhoto:"./img/avatar_1.jpg",
                    preview: "lorem ipsum sit amet",
                },
                {
                    name:"Fabio",
                    profilePhoto:"./img/avatar_2.jpg",
                    preview: "lorem ipsum sit amet",
                },
                {
                    name:"Samuele",
                    profilePhoto:"./img/avatar_3.jpg",
                    preview: "lorem ipsum sit amet",
                },
                {
                    name:"Alessandro B",
                    profilePhoto:"./img/avatar_4.jpg",
                    preview: "lorem ipsum sit amet",
                },
                {
                    name:"Loris Barbiero",
                    profilePhoto:"./img/avatar_5.jpg",
                    preview: "lorem ipsum sit amet",
                },
                {
                    name:"Simone Bonvecchio",
                    profilePhoto:"./img/avatar_6.jpg",
                    preview: "lorem ipsum sit amet",
                },
                {
                    name:"Federico",
                    profilePhoto:"./img/avatar_7.jpg",
                    preview: "lorem ipsum sit amet",
                },
                {
                    name:"Davide",
                    profilePhoto:"./img/avatar_8.jpg",
                    preview: "lorem ipsum sit amet",
                }
            ]

            
        }
    },
    methods: {

    }
}).mount(".viewport")