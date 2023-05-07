const data = require('../data/users.json');
const { connect, ObjectId } = require('./mongo');
const jwt = require('jsonwebtoken');
const { env } = require('process');


const COLLECTION_NAME = 'users';

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getAll(page = 1, pageSize = 30) {
    const col = await collection();
    const items = await col.find().skip((page-1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments();
    return { items, total };
}

async function getById(id) {
    const col = await collection();
    const item = await col.findOne({ id: new ObjectId(id) });
    return item;
}

async function add(item) {
    const col = await collection();


    if (!item.email || item.email === '' || item.email.contains('@') === false) {
        console.log(' Valid Email is required');
        throw new Error(' Valid Email is required');
    }
    if(!item.password) {
        console.log('Password is required');
        throw new Error('Password is required');
    
    }

    const takenUser = col.findOne({ email: item.email });
    if (takenUser) {
        console.log('Email is already taken');
        throw new Error('Email is already taken');
    }

    if (!checkPassworkStrength(item.password)) {
        console.log('Password is not strong enough');
        throw new Error('Password is not strong enough');
    }

    
    
  

    const result = await col.insertOne(item);

    item._id = result.insertedId;
    return item;
}

async function update(item) {

    console.log({item});
    const col = await collection();
    const id = item._id;
    delete item._id;
    const result = await col.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: item},
        { returnDocument: 'after' }
    );
    console.log(result.value);
    return result.value;
}

async function deleteItem(id) {
    const col = await collection();
    const result = await col.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
}

async function search(searchTerm, page = 1, pageSize = 30) {
    const col = await collection();
    const query = {
        $or: [
            { title: { $regex: searchTerm, $options: 'i' } },
            { description: { $regex: searchTerm, $options: 'i' } },
            { brand: { $regex: searchTerm, $options: 'i' } }
        ]
    };

    const items = await col.find(query).skip((page - 1) * pageSize).limit(pageSize).toArray();
    const total = await col.countDocuments(query);
    return { items, total };
}

async function seed() {
    const col = await collection();
    const result = await col.insertMany(data.users);
    return result.insertedCount;
}

async function login(email, password) {
    const col = await collection();
    const user = await col.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    if (user.password !== password) {
        throw new Error('Invalid password');
    }

    const cleanUser = { ...user, password: undefined };
    const token = await generateTokenAsync(cleanUser,'1d');

    return { user: cleanUser, token };
}

async function oAuthLogin(provider, accessToken) {
    // validate the access token
    // if valid, return the user
    // if not, create a new user
    // return the user
}

function generateTokenAsync(user, expiresIn) {
    return new Promise( (resolve, reject) => {
        jwt.sign(user, process.env.JWT_SECRET ?? "", { expiresIn }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

function verifyTokenAsync(token) {
    return new Promise( (resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET ?? "", (err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}

function checkPassworkStrength(password) {
    // check if password is strong enough
    // return true or false
    let strength = 0;
    if (password.length > 5) {
        strength++;
    }
    if (password.length > 8) {
        strength++;
    }
    if (password.match(/[a-z]/)) {
        strength++;
    }
    if (password.match(/[A-Z]/)) {
        strength++;
    }
    if (password.match(/[0-9]/)) {
        strength++;
    }
    if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
        strength++;
    }
    if(strength < 3) {
        return false;
    }
    return true;


}


module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteItem,
    search,
    seed,
    login,
    oAuthLogin,
    generateTokenAsync,
    verifyTokenAsync
};