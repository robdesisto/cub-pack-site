declare let ENV: any;

export const environment = {
    production: true,
    secureThing: ENV['SECURE_THING']
};
