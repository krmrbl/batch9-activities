var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

var ul = document.getElementById('league');

for(i = 0; i < justiceLeague.length; i++) {
    var l = document.createElement('li');
    l.textContent = 'Name: ' + justiceLeague[i].name + '; Superpower: ' + justiceLeague[i].superpower;
    ul.appendChild(l);
}

