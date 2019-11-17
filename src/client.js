const axios = require('axios')

const GITHUB_API = 'https://api.github.com/'

class Client {
  constructor({ repoName }) {
    this.api = axios.create({
      baseURL: GITHUB_API
    })

    this.repoName = repoName
  }

  async getIssues() {
    const response = await this.api.get(`repos/${this.repoName}/issues`)

    return response.data
  }
}

module.exports = Client