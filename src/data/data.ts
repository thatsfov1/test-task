import {faker} from "@faker-js/faker";

const companies = [...Array(30)].map(()=>({
    id:faker.string.uuid(),
    name:faker.company.name(),
    city:faker.location.city(),
    streetAddress:faker.location.streetAddress(),
    country:faker.location.country(),
    zip_code:faker.location.zipCode(),
    reg_date:faker.date.birthdate({ min:1, max:5, mode:'age'}),
    employees_num:faker.number.int({ min: 10, max: 200 }),
    capital:faker.finance.amount({ min: 5000, max: 50000, symbol: '$' }),
    turnover:faker.finance.amount({ min: 200000, max: 1000000, symbol: '$' }),
    net_profit:faker.finance.amount({ min: 20000, max: 100000, symbol: '$' }),
    contact_num:faker.phone.number(),
    contact_email:faker.internet.email({ provider:'gmail.com'}),
    website:faker.internet.domainName(),
    loan_amount:faker.commerce.price({ min: 100, max: 200000, dec: 0 }),
    loan_interest:faker.finance.amount({min:2, max:5, symbol:'%'}),
    acc_status:faker.datatype.boolean({ probability: 0.8 })
}))

export default companies