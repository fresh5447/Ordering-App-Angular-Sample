var express = require('express'),
    app = express();

app.configure(function (){
    app.use(express.static(__dirname,'/'));
});

app.get('/customers/:id', function(req, res){
    var customersId = parseInt(req.params.id);
    var data = {};
    for (var i = 0, len=customers.length; i<len, i++){
        if (customers[i].id === customersId){
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

app.get('/customers', function(req, res){
    res.json(customers)
});

app.listen(8080);

console.log('Express listening on port 8080');


var customers = [
    {joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956, id: 1, orders: [{id: 1, product: 'shoes', price: 9.997}]},
    {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99, id: 2, orders: [{id: 7, product: 'pants', price: 91.997}]},
    {joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99, id: 3, orders: [{id: 23, product: 'hat', price: 19.997}]},
    {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50, id: 4, orders: [{id: 11, product: 'socks', price: 99.997}]}
];