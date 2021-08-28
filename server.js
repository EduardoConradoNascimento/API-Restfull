const express = require("express");
const app = express();
const data = require("./data.json");

// verbos http
//GET (receber dados de resource)
//POST (envia dados para ser processados)
//PUT (atualiza dados de resource)
//DELETE (deleta um Resource)

app.use(express.json());

app.get("/clients", function(req, res){
 res.json(data);
  });

  app.get("/clients/:id", function(req,res){
    const{ id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    res.json(client);
});

app.post("/clients", function(req,res){

    const {name, email} = req.body;

    // salvar

    res.json({name, email});

});
app.put("/clients/:id", function(req,res){

    const{ id } = req.params;
    const client = data.find(cli => cli.id == id);
    if (!client) return res.status(204).json();

    const {name} = req.body;
    client.name = name;
    res.json(client);

})
app.delete("/clients/:id", function(req,res){

    const{ id } = req.params;
    const clientFiltered = data.filter(client => client.id != id)
    res.json(clientFiltered);
})




app.listen(3000, function() {
    console.log("Server is running")
});

