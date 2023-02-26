import { mongoose,connect, Schema, model, set } from 'mongoose';
mongoose.set('strictQuery', true);
async function main() {
    try {
        mongoose.set('debug', true);
        await mongoose.connect('mongodb://127.0.0.1/fruitsTestDB');
    
        //create a SCHEMA that sets out the fields each document will have and their datatypes   
// Replace the uri string with your mongoDB deployment's connection string
console.log("Connected");

 //const client = MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });
        const fruitSchema = new Schema({ name: String, rating: Number, review: String });
        //create a MODEL   
        const Fruit = new model("Fruit", fruitSchema);
        //create a DOCUMENT   
        const fruit = new Fruit({ name: "Apple", rating: 7, review: "Great!" });
       
        //save the document 
        await fruit.save();
        //**CHALLENGE: Set up a people database with one document and two fields**//  
        //create a SCHEMA   
        const personSchema1 = new Schema({ name: String, age: Number });
        //create a MODEL   
        const Person = model('Person', personSchema1);
        //const Person = model('Person', personSchema1, 'persons');
        //create a DOCUMENT
        const person = new Person({ name: "Priyanka11111", age: 37,height:6 });
        //Save it 
        await person.save();
        const kiwi = new Fruit({ name: "kiwi", rating: 7, review: "Awesome!" });
        const banana = new Fruit({ name: "banana", rating: 7, review: "best!" });
        Fruit.insertMany([kiwi,banana],function(err){
            if(err){
                console.log(err);
            }
                else{
                    console.log("Successfuuly saved to db");
                }
            
        });
        console.log("Documents saved successfully.");
    } catch (error) { console.error(error); }
}
main();