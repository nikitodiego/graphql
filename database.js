import mongoose from "mongoose"

export async function connect() {
    try {
        mongoose.connect("mongodb+srv://nicojapaz:Spirit01@cluster0.guz7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        console.log("DB is connected")
    } catch (e) {
        console.log(e)
    }
}