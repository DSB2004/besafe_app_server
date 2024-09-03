import { GET_CONNECTION, QUERY } from "../../database/util";
import DATABASE_INSTANCE from "../../database";
import { Request, Response } from "express";
import { PoolConnection } from "mysql";
import { v4 } from 'uuid';

const USER_QUERY = "INSERT INTO USER VALUES (ID,NAME,EMAIL,PHONE,DOB,ABOUT) VALUES (?,?);";
const MEDICAL_RECORD_QUERY = "INSERT INTO MEDICAL_RECORDS VALUES (USER_ID,BLOOD_GROUP,BIRTH_MARK);"

const CREATE_USER = async (req: Request, res: Response) => {
    const body = req.body;
    let connection: PoolConnection | undefined;
    const user_id = v4();
    const name = body.name;
    const email = body.email;
    const about = body.about;
    const dob = body.dob;
    const phone = body.phone;
    const blood_group = body.blood_group;
    const birth_mark = body.birth_mark;


    if (!email || !phone || !name || !dob || !blood_group || !birth_mark) {
        return res.status(400).send({ msg: "Fields missing" });
    }

    try {
        connection = await GET_CONNECTION(DATABASE_INSTANCE);

        connection.beginTransaction();
        await QUERY(connection, USER_QUERY, [user_id, name, email, phone, dob, about]);
        await QUERY(connection, MEDICAL_RECORD_QUERY, [user_id, blood_group, birth_mark]);
        connection.commit();
        return res.status(201).send({ msg: "User account created", user_id: user_id })
    }
    catch (err) {

        if (!connection) {
            return res.status(500).send({ msg: "database connection error" });
        }
        else {
            return res.status(500).send({ msg: "server side error" });
        }

    }
    finally {
        if (connection) {
            connection.release();
        }
    }



}

export default CREATE_USER;