var express=require('express'); 
var app=express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products',{ useMongoClient: true });
var Product = mongoose.model('Product',mongoose.Schema({
     productname:String,
     category:String,
     description:String,
     price:Number,
     size:String,
     stock:Number
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

//Get all products
app.get('/api/products/',function(req,res){
    Product.find(function(err,products){
    if (err){
        console.log("Inside get all product error function");
        res.send(err);
    }
    else{
        console.log("Inside get all product success function");
        res.send(products);
    }
  });
});

//Get product by id
app.get('/api/products/:id', function(req, res){
	Product.findOne({_id:req.params.id}, function(err, product){
		if(err){
            console.log("Inside get product by id error function");
            res.send(err);
        }
        else{
            console.log("Inside get product by id success function");
            res.json(product);
        }
		
	});
});

//Add new product
app.post('/api/products', function(req, res){
	Product.create( req.body, function(err, products){
		if(err){
            console.log("Inside add new product error function");
            res.send(err);
        }
        else{
            console.log("Inside add new product success funtion");
            res.json(products);
        }
		
	});
});

//Delete selected product
app.delete('/api/products/:id', function(req, res){
	Product.findOneAndRemove({_id:req.params.id}, function(err, product){
		if(err){
            console.log("Inside delete product error function");
            res.send(err);
        }
        else{
            console.log("Inside delete product success function");
            res.json(product);
        }
	});
});

//Update selected product
app.put('/api/products/:id',function(req,res){
    var query = {
       productname:req.body.productname,
       category:req.body.category,
       description:req.body.description,
       price:req.body.price,
       size:req.body.size,
       stock:req.body.stock
    };
    Product.findOneAndUpdate({_id:req.params.id},query,function(err,product){
        if(err){
            console.log("Inside update product error function");
            res.send(err);
        }
        else{
            console.log("Inside update product success function");
            res.json(product);
        }
    });
});

app.listen(3000, function(){
	console.log('server is running on port 3000..');
});