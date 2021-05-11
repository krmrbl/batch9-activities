const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]

for (i = 0; i < nightClubRegister.length; i++) {
    if(nightClubRegister[i].age < 18) {
        if(nightClubRegister[i].gender === 'female') {
            console.log('Sorry, Ms. ' + nightClubRegister[i].name + ' ' + nightClubRegister[i].lastname + '. You can not enter because you are underage.');
        }
        else if(nightClubRegister[i].gender === 'male') {
            console.log('Sorry, Mr. ' + nightClubRegister[i].name + ' ' + nightClubRegister[i].lastname + '. You can not enter because you are underage.');
        }
    }
    else {
        if(nightClubRegister[i].gender === 'female') {
            console.log('Welcome, Ms. ' + nightClubRegister[i].name + ' ' + nightClubRegister[i].lastname + '.');
        }
        else if(nightClubRegister[i].gender === 'male') {
            console.log('Welcome, Mr. ' + nightClubRegister[i].name + ' ' + nightClubRegister[i].lastname + '.');
        }
    }
}