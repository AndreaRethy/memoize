#!/usr/bin/env node
import { program } from 'commander';
import * as scriptModule from './script';

program
    .command('getDuplicate num1 num2')
    .description('Duplicate number')
    .action((num1: number, num2: number) => {
        const memoizedCalculate = scriptModule.memoize(scriptModule.calculateDouble);

        memoizedCalculate(num1);
        memoizedCalculate(num2);

    });

program.parse(process.argv);