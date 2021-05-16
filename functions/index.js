const functions = require("firebase-functions");
const express = require ('express');
const cors = require('cors');

const admin = require('firebase-admin');
admin.initializeApp();

const app = express();

app.get('/', async (req, res) => {
    const snapshot = await admin.firestore().collection('plants').get();
    
    let plants = [];
    snapshot.forEach(doc => {
        let id = doc.id;
        let data = doc.data();

        plants.push({id, ...data});
    })

    res.status(200).send(JSON.stringify(plants));
});

app.post('/', async (req, res) => {
    const plant = req.body;

    await admin.firestore().collection('plants').doc('/' + plant.id + '/').create(plant);

    res.status(201).send();
});

app.put("/:id", async (req, res) => {
    const body = req.body;

    await admin.firestore().collection('plants').doc(req.params.id).update(body);

    res.status(200).send()
});

app.delete("/:id", async (req, res) => {
    await admin.firestore().collection('plants').doc(req.params.id).delete();

    res.status(200).send();
})

exports.plant = functions.https.onRequest(app);


// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });
