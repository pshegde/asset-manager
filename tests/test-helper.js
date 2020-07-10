process.env.NODE_ENV = process.env.NODE_ENV || 'test'
// const props = require('../config/props.json')
// const config = props.test
const nock = require('nock')
const models = require('../server/models')
//const assert =  require('chai').assert;
const assert = require('assert')
const expect = require('chai').expect
const should = require('chai').should()
const moment = require('moment')
const Promise = require('bluebird')
const execAsync = Promise.promisify(require('child_process').exec)
const sinon = require('sinon')
const mockfs = require('mock-fs')
//require('babel-core/register');
const request = require('supertest')
const { app, server } = require('../server/index.js')


after(async () => {
  models.sequelize.close()
  server.close()
})

module.exports = { nock, models, assert, expect, moment, sinon, mockfs, execAsync, Promise, request, app, should, server }