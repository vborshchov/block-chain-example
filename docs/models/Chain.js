import Block from "./Block.js";

const CHAIN_TIME = 1000; // miliseconds

class Chain {
    constructor(genesisBlock) {
        this.blocks = [];
        this.difficulty = 3;
        this.addBlock(genesisBlock);
    }

    addBlock(block) {
        if (this.blocks.length == 0) {
            block.previousHash = "0000000000000000";
            block.hash = this.generateHash(block);
        }

        this.blocks.push(block);
    }

    mineBlock(transactions) {
        const begin = performance.now();
        let block = new Block();
        transactions.forEach(function(transaction) {
            block.addTransaction(transaction);
        });
        let previousBlock = this.getPreviousBlock();
        block.index = this.blocks.length;
        block.previousHash = previousBlock.hash;
        block.hash = this.generateHash(block);
        const end = performance.now();
        const diff = end - begin;

        console.log({ time: diff, difficulty: this.difficulty });
        if (diff < CHAIN_TIME) {
            console.log("increase difficulty");
            this.difficulty += 1;
        } else {
            console.log("decrease difficulty");
            this.difficulty -= 1;
        }
        return block;
    }

    isOrderValid() {
        let isValid = true;
        for (var index = 0; index < this.blocks.length; index++) {
            if (index === 0) {
                if (this.blocks[index].previousHash !== "0000000000000000") {
                    isValid = false;
                    break;
                }
            } else {
                if (
                    this.blocks[index].previousHash !==
                    this.blocks[index - 1].hash
                ) {
                    isValid = false;
                    break;
                }
            }
        }
        return isValid;
    }

    generateHash(block) {
        let hash = sha3_256(block.key);

        while (!hash.startsWith("0".repeat(this.difficulty))) {
            block.nonce += BigInt(1);
            hash = sha3_256(block.key);
        }

        return hash;
    }

    getPreviousBlock() {
        return this.blocks[this.blocks.length - 1];
    }

    validateBlockHash(block) {
        return block.hash === sha3_256(block.key);
    }

    validateFullChainHash() {
        return this.blocks.every(block => this.validateBlockHash(block));
    }
}

export default Chain;
