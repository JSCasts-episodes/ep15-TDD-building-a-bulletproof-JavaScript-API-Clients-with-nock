const { expect } = require('chai')
const nock = require('nock')
const { getIssues: stubGetIssues } = require('../spec/nocks')

const Client = require('./client')
const REPO_NAME = 'JSCasts-episodes/ep1-jsdoc'

nock.disableNetConnect()

describe('Client', function () {
  describe('#constructor', function () {
    it('initializes axios instance', function () {
      const client = new Client({ repoName: REPO_NAME })
      expect(client.api).itself.respondTo('get')
      expect(client.repoName).to.equal(REPO_NAME)
    })
  })

  describe('#getIssues', function () {
    beforeEach(function () {
      this.stubResponse = stubGetIssues({ repoName: REPO_NAME })
      this.client = new Client({ repoName: REPO_NAME })
    })

    it('returns one issue', async function () {
      expect(await this.client.getIssues()).to.have.lengthOf(1)
    })

    it('returns issues with correct title', async function() {
      const issues = await this.client.getIssues()

      expect(issues[0].title).to.equal('example issue no.1')
    })
  })
})