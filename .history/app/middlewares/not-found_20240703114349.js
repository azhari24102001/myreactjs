const notFound  = (res, req) =>
    res.status(404).send({msg: 'Route does not exist'});

 module.exports