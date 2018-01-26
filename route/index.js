const express = require("express")
const router = express.Router()

let partners = [{
    id: 0,
    firstname:"Haidar",
    lastname:"Dzaky",
    email:"haidardz@gmail.com",
    origin:"Bandung"
  },
  {
    id: 1,
    firstname:"Angeline",
    lastname:"Go",
    email:"angeline_go@hotmail.com",
    origin:"Jakarta"
  },
  {
    id: 2,
    firstname:"Fahri",
    lastname:"Hakim",
    email:"fahriabdhakim@gmail.com",
    origin:"Bandung"
  },

]

// get item by id
const getItemById = (items, id) => {
  const item = items.filter(item => {
    return item.id === Number(id)
  })
  return item
}

// save new item
const saveNewItem = (items, data) => {
  items.push(data)
}

// display partners
router.get("/", (req, res) => {
  res.send(partners)
})

//display single partner
router.get("/:id", (req, res) => {
  res.send({
    message: `get single partner`,
    partner: getItemById(partners, req.params.id)
  })
})

//save new partner
router.post("/", (req, res) => {
  const data = {
    id: partners.length,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email: req.body.email,
    origin:req.body.origin
  }
  saveNewItem(partners, data)
  res.send(partners)
})

// delete partners
router.delete("/", (req, res) => {
  partners.splice(0, partners.length)
  res.send(partners)
})

// delete single partner
router.delete("/:id", (req, res) => {
  const currentpartners = partners.filter(partner => {
    return partner.id !== Number(req.params.id)
  })
  partners = currentpartners
  res.send({
    message: `partner deleted`,
    currentpartners: partners
  })
})

//Update partner
router.put(`/:id`, (req, res) => {
  const itemId = Number(req.params.id)
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const email = req.body.email
  const origin = req.body.origin

  //find data index
  const itemIndex = partners.findIndex((item, index) => {
    return item.id === itemId
  })

  //Modify matched data
  partners[itemIndex]["firstname"] = firstname
  partners[itemIndex]["lastname"] = lastname
  partners[itemIndex]["email"] = email
  partners[itemIndex]["origin"] = origin

  // Prepare  response
  const response = {
    message: `partner data has been updated !`,
    itemId: itemId,
    itemBody: itemBody,
    itemIndex: itemIndex,
    partners: partners
  }

  //send response
  res.send(response)

})

module.exports = router;
