const express = require('express');
const app = express();
const path = require('path');

//parsers here 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine' , 'ejs')

app.set(express.static(path.join(__dirname , 'public')));

app.get('/' , function(req , res){
    res.render('index')
});

app.get('/profile/:home' , function(req , res){
    res.render('index')
});

app.listen(3000, function(){
    console.log('Running...');
    
})

