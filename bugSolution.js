```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{ "counter": 1 }})
//Alternative: Handle non-numeric values
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{ "counter": parseInt('10',10) }})
```