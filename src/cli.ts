#!/usr/bin/env node
import { program } from 'commander';
import * as scriptModule from './script';

program
    .command('getDuplicate num')
    .description('Duplicate number')
    .action((num: number) => {

        scriptModule.calculateDouble(num);

    });

program.parse(process.argv);