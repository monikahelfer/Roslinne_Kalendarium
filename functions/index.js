const functions = require("firebase-functions");
const express = require ('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));
const admin = require('firebase-admin');

var serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-api-9a206..firebaseio.com"
});
const db = admin.firestore();

app.get('/', (req, res) => {
    (async () => {
        try {
            let query = db.collection('plants');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                const selectedItem = {
                    id: doc.id,
                    species: doc.data().species,
                    watering: doc.data().watering,
                    waterType: doc.data().waterType,
                    fertilizing: doc.data().fertilizing,
                    lastRepoting: doc.data().lastRepoting
                }
                response.push(selectedItem);
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

app.post('/', (req, res) => {
    (async () => {
        try {
          await db.collection('plants').doc('/' + req.body.id + '/')
              .create(req.body);
          return res.status(200).send();
        } catch (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      })();
  });

app.put('/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('plants').doc(req.params.id);
            await document.update(req.body);
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

app.delete('/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('plants').doc(req.params.id);
            await document.delete();
            return res.status(200).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
    });

exports.plant = functions.https.onRequest(app);