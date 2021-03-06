/*
 * Class - UserInput
 */
'use strict'
const winston = require('./winston')
const formatter = require('./messageFormatter')
const fs = require('fs')
const colors = require('colors/safe')
const yosay = require('yosay')
var PROJECT_TYPES = fs.readdirSync(`${__dirname.replace('/src', '')}/templates`)
const MEMORY = ['256M', '512M', '1024M', '2048M']
const DISK_QUOTA = ['1024M', '2048M']
const INSTANCES = ['1', '2', '3', '4']

class UserInput {
    static refineProjectTypes() {
        PROJECT_TYPES = PROJECT_TYPES.filter(function(value, index, arr) {
            if(value === '.DS_Store') {
                return false
            }
            return true
        })
    }
    static async getProjectType() {
        UserInput.refineProjectTypes()
        const prompts = [
            {
                type: 'list',
                name: 'val',
                message: colors.yellow('Enter project type: '),
                choices: PROJECT_TYPES,
                default: PROJECT_TYPES[0]
            }
        ]
        global.appData.userInputs.projectType = await UserInput.getFromUser(prompts)
    }
    static async getProjectName() {
        const prompts = [
            {
                type: 'input',
                name: 'val',
                message: colors.yellow('Enter project name: '),
                default: `${global.appData.userInputs.projectType.val}-server`
            }
        ]
        global.appData.userInputs.projectName = await UserInput.getFromUser(prompts)
    }
    static async getVersion() {
        const prompts = [
            {
                type: 'input',
                name: 'val',
                message: colors.yellow('Enter version: '),
                default: '1.0.0'
            }
        ]
        global.appData.userInputs.version = await UserInput.getFromUser(prompts)
    }
    static async getDescription() {
        const prompts = [
            {
                type: 'input',
                name: 'val',
                message: colors.yellow('Enter description: '),
                default: `Basic ${global.appData.userInputs.projectType.val} server`
            }
        ]
        global.appData.userInputs.description = await UserInput.getFromUser(prompts)
    }
    static async getAuthor() {
        const prompts = [
            {
                type: 'input',
                name: 'val',
                message: colors.yellow('Enter author: '),
                default: 'Your name'
            }
        ]
        global.appData.userInputs.author = await UserInput.getFromUser(prompts)
    }
    static async getEmail() {
        const prompts = [
            {
                type: 'input',
                name: 'val',
                message: colors.yellow('Enter email: '),
                default: 'abc@xyz.com'
            }
        ]
        global.appData.userInputs.email = await UserInput.getFromUser(prompts)
    }
    static async getNodeVersion() {
        const prompts = [
            {
                type: 'input',
                name: 'val',
                message: colors.yellow('Enter node version: '),
                default: '16.13.0'
            }
        ]
        global.appData.userInputs.node = await UserInput.getFromUser(prompts)
    }
    static async getNPMVersion() {
        const prompts = [
            {
                type: 'input',
                name: 'val',
                message: colors.yellow('Enter npm version: '),
                default: '8.1.0'
            }
        ]
        global.appData.userInputs.npm = await UserInput.getFromUser(prompts)
    }
    static async getFromUser(prompts) {
        return await global.appData.generator.prompt(prompts)
    }
    static done() {
        console.log('\n\n\n')
    }
    static async handleUserInputs() {
        try {
            formatter.greetUser()
            await UserInput.getProjectType()
            await UserInput.getProjectName()
            await UserInput.getVersion()
            await UserInput.getDescription()
            await UserInput.getAuthor()
            await UserInput.getEmail()
            await UserInput.getNodeVersion()
            await UserInput.getNPMVersion()
            UserInput.done()
        } catch(e) {
            winston.error(e)
        }
    }
}

module.exports = UserInput
