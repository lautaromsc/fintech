import { Pool } from 'pg';


// Digital Ocean SLL Public network
export const pool = new Pool({
    user : 'doadmin',
    password : 'k350kvmo73eoh205',
    host : 'db-postgresql-nyc1-12798-do-user-7533047-0.a.db.ondigitalocean.com',
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
    password : 'k350kvmo73eoh205',
    host : 'private-db-postgresql-nyc1-12798-do-user-7533047-0.a.db.ondigitalocean.com',
    port : 25060,
    database : 'defaultdb',
    ssl: {
        rejectUnauthorized: false,
       // ca: readFileSync('C:/Users/Lautaro/Documents/keys/DO/ca-certificate.crt').toString(),
       // key: fs.readFileSync('/path/to/client-key/postgresql.key').toString(),
       // cert: readFileSync('C:/Users/Lautaro/Documents/keys/DO/ca-certificate.crt').toString(),
      },
})

