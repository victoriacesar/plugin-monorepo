import { Plugin } from './plugin';

const apiUrl = process.env.API_URL;
const token = process.env.API_TOKEN;

new Plugin(apiUrl as string, token as string);
