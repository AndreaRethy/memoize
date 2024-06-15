#!/usr/bin/env node
import { program } from 'commander';
import * as scriptModule from './script';

program
    .command('getDuplicate num1 num2')
    .description('Duplicate number')
    .action((num1: number, num2: number) => {

        scriptModule.calculateDouble(num1);
        scriptModule.calculateDouble(num2);

    });

program.parse(process.argv);