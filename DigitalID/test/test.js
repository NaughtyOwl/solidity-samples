import { assert } from 'chai'
import { tokens, ether, ETHER_ADDRESS } from './helpers'

const ContractName = artifacts.require('./ContractName')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('ContractName', ([acc1, acc2]) => {
	let contract

	beforeEach(async () => {
		contract = await ContractName.new()
	})

	describe('deployment', () => {
		it('deploys successfully', async () => {

			const address = await contract.address
			assert.notEqual(address, 0x0)
			assert.notEqual(address, '')
			assert.notEqual(address, null)
		})

		
	})

	
})