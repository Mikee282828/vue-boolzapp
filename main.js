const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'prova',
                    avatar: './img/avatar_8.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'No',
                            status: 'received'
                        }
                    ],
                }
            ],
            target:
            {
                name: '',
                avatar: '',
                visible: true,
                messages: [
                ]
            },
            tempMessage: null,
            tempSearch: ""
        }
    },
    methods: {
        selected(contact) {
            this.target = contact;
        },
        addTargetClass(contact) {
            if (contact == this.target) {
                return "my_target";
            }
        },
        startOrEnd(status) {
            if (status == "sent") {
                return "justify-content-end";
            } else {
                return "justify-content-start"
            }
        },
        mineOrTheir(status) {
            if (status == "sent") {
                return "my_message_box";
            } else {
                return "my_contact_message_box"
            }
        },
        sendMessage() {
            if (this.target.name != '') {
                this.target.messages.push(
                    {
                        message: this.tempMessage,
                        status: "sent",
                        date: this.nowString()
                        // inserire anche il date
                    });
                this.tempMessage = null;
                setTimeout(() => {
                    this.target.messages.push(
                        {
                            message: "ok",
                            status: "received",
                            date: this.nowString()
                            // inserire anche il date
                        });
                }, 1000);
            }
        },
        searchContain(contact) {
            if (contact.visible == true || (contact.visible == false && this.tempSearch != "")) {
                return contact.name.toLowerCase().includes(this.tempSearch.toLowerCase());
            }
        },
        convertUktoUs(dateString) {
            let tempMonth = '';
            let tempDate = '';
            let fullDate = '';
            for (let i = 0; i<5;i++) {
                if(i<2){
                    tempDate += dateString[i];
                }else if(i>2 && i<5){
                    tempMonth += dateString[i];
                }
            }
            fullDate = tempMonth + "/" + tempDate;
            for (let i = 5; i<dateString.length;i++) {
                fullDate+=dateString[i];
            }
            return fullDate;
        },
        getTime(dateString){
            let data = new Date(this.convertUktoUs(dateString));
            let time = [data.getHours(),data.getMinutes()];
            for(let i = 0; i<2; i++){
                if(time[i]<10){
                    time[i] = "0" + time[i];
                }
            }
            return time[0] + ':' + time[1];
        },
        // date: '10/01/2020 15:51:00'
        nowString(){
            let data = new Date(Date.now());
            let time = [data.getDate(),data.getMonth()+1,data.getFullYear(),data.getHours(), data.getMinutes(),data.getSeconds()];
            for(let i = 0; i<6; i++){
                if(time[i]<10){
                    time[i] = "0" + time[i];
                }
            }
            console.log(time[0] + "/" + time[1] + "/" + time[2] + " " + time[3] + ":" + time[4] + ":" + time[5]);
            return time[0] + "/" + time[1] + "/" + time[2] + " " + time[3] + ":" + time[4] + ":" + time[5];
        },
        deleteMsg(index){
            this.target.messages.splice(index,1);
        }
    },
    mounted(){
    }
}).mount('#app');