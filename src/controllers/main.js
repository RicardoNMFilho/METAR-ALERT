const index = (req,res) => {
    res.send("Bom dia");
}

const about = (req,res) => {
    res.send("Página sobre o sistema");
}

module.exports ={index, about}