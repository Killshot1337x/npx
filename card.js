#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                name: `Toss an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:Killshot1337@gmailsucks.wtf");
                    console.log("\nLooking forward to getting a message from you\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                     Killshot"),
    handle: chalk.white("@Killshot1337x"),
    fact: chalk.hex('#B10000')('I am a wannabe full stack dev'),
    twitter: chalk.hex('#00A1D9')("Private"),
    github: chalk.hex('#787878')("https://github.com/Killshot1337x"),
    steam: chalk.hex('#330093')("https://steamcommunity.com/id/MrKillshot"),
    discord: chalk.hex('#AB009C')("https://discords.com/bio/p/killshot"),
    website: chalk.hex('#00AB9E')("https://www.urmomma.ga"),
    npx: chalk.hex('#A1AB00')("npx killshot"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelTwitter: chalk.hex('#629DFF').bold("        Twitter:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelSteam: chalk.hex('#A959FF').bold("           Steam:"),
    labelDiscord: chalk.hex('#F259FF').bold("       Discord:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelSteam}  ${data.steam}`,
        `${data.labelDiscord}  ${data.discord}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Henlo, I'm Killshot, a random guy you found on the internet. " 
        )}`,
        `${chalk.bold("I develop stuff when I'm not busy lazing around.")}`,
        `${chalk.bold(
            "I like dogs. Dogs>cats.Period."
        )}`,
        `${chalk.bold(
            "Toss me an email or contact me on discord.Cya"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

console.log(me);
const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above to open them in your broswer.`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());