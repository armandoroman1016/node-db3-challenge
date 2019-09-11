const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    return db('schemes')
    .then( schemes => schemes)
}

function findById(id){
    return db('schemes')
    .where({id: id})
    .first()
    .then( scheme => scheme)
}

function findSteps(id){
    return db('schemes')
    .join('steps', 'steps.scheme_id', 'schemes.id')
    .where({'scheme_id': id})
    .orderBy('steps.step_number')
    .then( steps => steps)
}

function add(newScheme){
    return db('schemes')
    .insert(newScheme)
    .then( ([id]) => findById(id) )
}

function update(updatedScheme, id){
    return db('schemes')
    .where({id: id})
    .update({
        scheme_name: updatedScheme.scheme_name
    })
    .then(() => findById(id))
}

function remove(id){
    return db('schemes')
    .where({id: id})
    .del()
    .then( deleted => deleted)
}