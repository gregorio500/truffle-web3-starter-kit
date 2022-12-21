const example = artifacts.require('Example')
const assert = require('assert');

contract('Example', accounts => {
    it('example contract', async () => {
        const instance = example.deployed();
        const data = await instance.data   
        assert(data == null)
        
    })
})

// truffle test test/tickets.js