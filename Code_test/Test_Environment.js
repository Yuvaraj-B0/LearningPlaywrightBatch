/* In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement
 that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout.
  Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description. */

let envName = "staging";

const ENV_CONFIG = {
    dev: {
        baseURL: "https://dev-api.testingacademy.com", 
        apiKeyPattern: "dev_key_XXXX-XXXX",
        timeout: 3000,
        description: "Development environment for initial testing and debugging."
    },
    staging: {
        baseURL: "https://staging-api.testingacademy.com", 
        apiKeyPattern: "stg_key_xxxx-xxxx",
        timeout: 8000,
        description: "Staging - Pre-production mirror."
    },
    qa: {
        baseURL: "https://qa-api.testingacademy.com", 
        apiKeyPattern: "qa_key_XXXX-XXXX",
        timeout: 4000,
        description: "QA environment for comprehensive testing and quality assurance."
    },
    production: {
        baseURL: "https://testingacademy.com", 
        apiKeyPattern: "prod_key_XXXX-XXXX",    
        timeout: 2000,
        description: "Production environment for live application with real users."
    }
};

let config;
switch(envName){
    case "dev":
        config = ENV_CONFIG.dev;
        break;
    case "staging":
        config = ENV_CONFIG.staging;
        break;
    case "qa":
        config = ENV_CONFIG.qa;
        break;
    case "production":
    case "prod":
        config = ENV_CONFIG.production;
        break;
    default:
        console.log("UNKNOWN ENVIRONMENT - Please check the environment name");
}
if(config){
    console.log(`Environment: ${envName.toUpperCase()}`);
    console.log(`Base URL: ${config.baseURL}`);
    console.log(`API Key Pattern: ${config.apiKeyPattern}`);
    console.log(`Timeout: ${config.timeout} ms`);
    console.log(`Description: ${config.description}`);
}

