class TattooClient{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    describe(){
        return `${this.name} is a tattoo client, they are ${this.age} years old.`
    }
}

class TattooSchedule{
    constructor (day){
        this.day = day;
        this.clients = [];
    }

    addTattooClient(client){
        if(client instanceof TattooClient){
            this.clients.push(client);
        } else {
            throw new Error(`You can only use an instance of TattooClient.`);
        }
    } 

    describe(){
        return (`There are ${this.clients.length} appointments on ${this.day}.`);
    }
}

class Menu{
    constructor(){
        this.appointments = [];
        this.selectedAppointment = null;
    }
    
    start(){
        let selection = this.showMainMenuOptions();

        while (selection != 0){
            switch (selection){
                case '1':
                    this.createAppt();
                    break;
                case '2':
                    this.deleteAppt();
                    break;
                case '3':
                    this.showAppt();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Thank you for your interest!');
    }

    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Create a new appointment
        2) Cancel an appointment
        3) Show all appointments
        `);
    }

    showApptMenuOptions(appointmentInfo){
        return prompt(`
        0) Exit
        1) Create new client
        2) Remove client

        ${appointmentInfo}
        `);
    }

    showAppt(){
        let index = prompt (`Enter index of the appoinment you would like to view.`);
        if (index > -1 && index < this.appointments.length){
            this.selectedAppointment = this.appointments[index];
            let description = 'Appointment info: ' + this.selectedAppointment.name + '\n';

            for  (let i = 0; i < this.selectedAppointment.clients.length ; i++){
                description += i + ') ' + this.selectedAppointment.clients[i].name + '-' + 
                this.selectedAppointment.clients[i].age + '\n';
            }
            let selection = this.showApptMenuOptions(description);
            switch(selection){
                case '1': 
                    this.createClient;
                break;
                case'2': 
                    this.deleteClient;
            }
        }
    }

    createAppt(){
        let date = prompt ('Enter date of appoinment');
        this.appointments.push(new TattooSchedule(date));
    }

    deleteAppt(){
        let index = prompt (`Enter the index of the appointment you would like to delete.`);
        if (index > -1 && index < this.appointments.length){
            this.teams.splice(index, 1);
        }
    }

    createClient(){
        let name = prompt(`Enter the name of the new client`);
        let age = prompt (`Enter the age of the new client`);
        this.selectedAppointment.clients.push(new TattooClient(name, age));
    }


    deleteClient(){
        let index = prompt (`Enter the index of the client you want to delete.`);
        if (index > -1 && index < this.selectedAppointment.clients.length){
            this.selectedAppointment.clients.splice(index,1);
        }
    }
}

let menu = new Menu();
menu.start();