import { Pool } from 'pg';


// Digital Ocean SLL Public network
export const pool = new Pool({
    user : 'doadmin',
    password : 'y8piMEodkZHLE3Y8',
    host : 'db-postgresql-nyc3-33965-do-user-10148225-0.b.db.ondigitalocean.com',
    port : 25060,
    database : 'defaultdb',
    ssl: {
        rejectUnauthorized: false,
       // ca: readFileSync('C:/Users/Lautaro/Documents/keys/DO/ca-certificate.crt').toString(),
       // key: fs.readFileSync('/path/to/client-key/postgresql.key').toString(),
       // cert: readFileSync('C:/Users/Lautaro/Documents/keys/DO/ca-certificate.crt').toString(),
      },
})


// Digital Ocean SLL Private network
export const poolPrivate = new Pool({
    user : 'doadmin',
    password : 'y8piMEodkZHLE3Y8',
    host : 'private-db-postgresql-nyc3-33965-do-user-10148225-0.b.db.ondigitalocean.com',
    port : 25060,
    database : 'defaultdb',
    ssl: {
        rejectUnauthorized: false,
       // ca: readFileSync('C:/Users/Lautaro/Documents/keys/DO/ca-certificate.crt').toString(),
       // key: fs.readFileSync('/path/to/client-key/postgresql.key').toString(),
       // cert: readFileSync('C:/Users/Lautaro/Documents/keys/DO/ca-certificate.crt').toString(),
      },
})

