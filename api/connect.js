import mysql, { createConnection } from "mysql";

export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ravi20141407",
    database:"spotify"
})

//  reating a database in workbench and store the details of email,username, password(with help of hashing)

// we will later use JWT token for authorization and all