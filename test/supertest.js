const chai = require('chai')
const supertest = require('supertest')

const should = chai.should()
const api = supertest('http://pokeapi.co/api/v2/')

describe('canary test', ()=> {
  it('should work', ()=> {
    const five = 5

    five.should.equal(5)
  })
})

describe('pokemon api call',() =>{
  it('should get 4th pokemon',(next) =>{
    api.get('pokemon/4/')
    .expect(200)
    .end((err, result) =>{
      if(err) return next(err)

      result.body.name.should.equal('charmander'),
      next()
    })
  })
})
