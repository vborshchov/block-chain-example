let Block = require('./Block')
let Transaction = require('./Transaction')
let Chain = require('./Chain')

// create genesis block
let genesisBlock = new Block()
let chain = new Chain(genesisBlock)

// create a transaction
chain.addBlock(chain.mineBlock([new Transaction('Ivah','Lera',87377), new Transaction('Crawford','Nathanael',13992)]))
chain.addBlock(chain.mineBlock([new Transaction('Hassie','Earnest',31373)]))
chain.addBlock(chain.mineBlock([new Transaction('Wilma','Vidal',88783)]))
chain.addBlock(chain.mineBlock([new Transaction('Stone','Eliseo',4677)]))
chain.addBlock(chain.mineBlock([new Transaction('Pearline','Paul',83107)]))
chain.addBlock(chain.mineBlock([new Transaction('Ervin','Jayne',31442)]))
// chain.addBlock(chain.mineBlock([new Transaction('Harmony','Mariam',33166)]))
// chain.addBlock(chain.mineBlock([new Transaction('Willie','Virgie',37920)]))
// chain.addBlock(chain.mineBlock([new Transaction('Rylee','Daryl',79672)]))
// chain.addBlock(chain.mineBlock([new Transaction('Manuela','Belle',34088)]))
// chain.addBlock(chain.mineBlock([new Transaction('Ada','Vito',63691)]))
console.log('isOrderValid', chain.isOrderValid())

let transaction = new Transaction('Ada','Vito',63691)
let block = chain.mineBlock([transaction])
console.log('validateBlockHash', chain.validateBlockHash(block))

console.log('validateFullChainHash', chain.validateFullChainHash())