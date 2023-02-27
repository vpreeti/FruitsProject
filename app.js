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
        const fruitSchema = new Schema({ 
            name: {
                type:String,
                required:[true,"Kindly specify the name"]
            },
             rating: {
                type:Number,
                min:1,
                max:10
             }, 
             review: String });
        //create a MODEL   
        const Fruit = new model("Fruit", fruitSchema);
        //create a DOCUMENT   
        const fruit = new Fruit({ name: "Mango", rating: 7, review: "Great!" });
        const pineapple = new Fruit({ name: "Pineapple", rating: 8, review: "Pineapple is Great!" });
        //save the document 
        //await fruit.save();
        await pineapple.save();
        //**CHALLENGE: Set up a people database with one document and two fields**//  
        //create a SCHEMA   
        const personSchema1 = new Schema({ name: String, age: Number,favFood:fruitSchema });
        //create a MODEL   
        const Person = model('Person', personSchema1);
        //const Person = model('Person', personSchema1, 'persons');
        //create a DOCUMENT
        const person = new Person({ name: "Anya", age: 37,height:6 });
        const personfav = new Person({ name: "Anita", age: 37,height:6 ,favFood:pineapple});
        //Save it 
        //await person.save();
        await personfav.save();
        const kiwi = new Fruit({ name: "kiwi", rating: 7, review: "Awesome!" });
        const banana = new Fruit({ name: "banana", rating: 7, review: "best!" });
        ////////////////////////////////////////////////////////////////////////////demo of insertMany fruits in the datatabse
        // Fruit.insertMany([kiwi,banana],function(err){
        //     if(err){
        //         console.log(err);
        //     }
        //         else{
        //             console.log("Successfuuly saved to db");
        //         }
            
        // });
        // console.log("Documents saved successfully.");
//////////////////////////////////////////////////////////////////////////////////////////////////////
        Fruit.find(function(err,fruits){
            if(err){
                console.log(err);
            }
            else{
                console.log(fruits);
                mongoose.connection.close();
                fruits.forEach(function(f){
                    console.log("Fruit Name: "+f.name);
                   }) 
                // fruits.array.forEach(f => {
                //     console.log("Fruit Name: "+f.name);
                // });
              
            }
        })
////////////////////////////////////////////////////////////////////////////////////////////////////
         

        // <% blogcontents.forEach(function(blogcontent) { %>     
        //     <h1><b><%= blogcontent.title %></b></h1>
        //        <p><%= blogcontent.post.substring(0,100)+"..."%>
        //         <a href="/posts/<%=blogcontent.title%>">Read more</a>
        //        </p>
        //      <% }); %>
           



        
    } catch (error) { console.error(error); }
}
main();