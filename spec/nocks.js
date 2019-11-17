const nock = require('nock')

const getIssuesResponse = require('./get-issues-response.json')

module.exports.getIssues = ({ repoName }) => {
  return nock('https://api.github.com:443', {"encodedQueryParams":true})
  .get(`/repos/${repoName}/issues`)
  .reply(200, getIssuesResponse);
}