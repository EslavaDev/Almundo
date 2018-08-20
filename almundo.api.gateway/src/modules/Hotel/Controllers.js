async function save(req, reply) {
  console.log('payload', req.payload)
  let payload = req.payload
  return reply.act({
    role: "Hotel",
    cmd: "save",
    payload
  })
}

async function fetchAll(req, reply){
  return reply.act({
    role: "Hotel",
    cmd: "fetchAll",
    payload: null
  })
}

async function update(req, reply){
  console.log(req.params)
  let payload={
    id:req.params.id,
    data:req.payload
  }
  return reply.act({
    role: "Hotel",
    cmd: "update",
    payload: payload
  })
}

module.exports = {
  save,
  update,
  fetchAll
}