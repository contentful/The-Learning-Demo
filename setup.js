require('dotenv').config()
const contentful = require('contentful-management')
const spaceImport = require('contentful-import')
const exportFile = require('./contentful-exports/exports.json')
const inquirer = require('inquirer')
const chalk = require('chalk')
const path = require('path')
const { writeFileSync } = require('fs')

const argv = require('yargs-parser')(process.argv.slice(2))

console.log(`
  To set up this project you need to provide your Space ID
  and the belonging API access tokens.

  You can find all the needed information in your Contentful space under:

  ${chalk.yellow(
    `app.contentful.com ${chalk.red('->')} Space Settings ${chalk.red(
      '->'
    )} API keys`
  )}

  The ${chalk.green('Content Management API Token')}
    will be used to import and write data to your space.

  The ${chalk.green('Content Delivery API Token')}
    will be used to ship published production-ready content in your Gatsby app.

  Ready? Let's do it! 🎉
`)

const questions = [
  {
    name: 'spaceId',
    message: 'Your Space ID',
    when: !argv.spaceId && !process.env.CF_TLD_SPACE_ID,
    validate: input =>
      /^[a-z0-9]{12}$/.test(input) ||
      'Space ID must be 12 lowercase characters',
  },
  {
    name: 'accessToken',
    when: !argv.accessToken && !process.env.CF_TLD_ACCESS_TOKEN,
    message: 'Your Content Delivery API access token',
  },
  {
    name: 'managementToken',
    when: !argv.managementToken,
    message: 'Your Content Management API access token',
  },
]

inquirer
  .prompt(questions)
  .then(({ spaceId, managementToken, accessToken }) => {
    const { CF_TLD_SPACE_ID, CF_TLD_ACCESS_TOKEN } = process.env

    // env vars are given precedence followed by args provided to the setup
    // followed by input given to prompts displayed by the setup script
    spaceId = CF_TLD_SPACE_ID || argv.spaceId || spaceId
    managementToken = argv.managementToken || managementToken
    accessToken = CF_TLD_ACCESS_TOKEN || argv.accessToken || accessToken

    console.log('Writing config file...')
    const configFiles = [`config.js`].map(file =>
      path.join(__dirname, 'src', 'components', file)
    )

    const fileContents =
      [
        `// All environment variables will be sourced`,
        `// Do NOT commit this file to source control`,
        `module.exports = {`,
          `space_id: '${spaceId}',`,
          `delivery_token: '${accessToken}',`,
          `environment: 'demo'`,
        `}`,
      ].join('\n') + '\n'

    configFiles.forEach(file => {
      writeFileSync(file, fileContents, 'utf8')
      console.log(`Config file ${chalk.yellow(file)} written`)
    })
    return { spaceId, managementToken }
  })
  .then(({ spaceId, managementToken }) => {
    spaceImport({ spaceId: spaceId, managementToken: managementToken, content: exportFile })
      .then(() => {
      const client = contentful.createClient({
        accessToken: managementToken
      })
      client.getSpace(spaceId)
      .then((space) => space.createEnvironmentWithId('demo', {name: 'Demo'}))
      .then((environment) => console.log('Demo environment created'))
      .then((_, error) => {
        console.log(
          `All set! Make sure to give your API key access to your new demo environment. You can now run ${chalk.yellow(
            'npm run dev'
          )} and bring up the app in a browser ${chalk.yellow(
            'http://localhost:8080'
          )} .`
        )
      })
      .catch(console.error)
    })
  })
  .catch(error => console.error(error))
