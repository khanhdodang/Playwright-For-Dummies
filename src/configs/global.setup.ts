import { rimrafSync } from 'rimraf';

async function globalSetup() {
    console.log('globalSetup');
    rimrafSync('./allure-results');
    rimrafSync('./test-results');
}

export default globalSetup;
