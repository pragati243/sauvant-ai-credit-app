import mongoose from "mongoose";

export async function mongoConnect() {
  try {
    if(mongoose.connections[0].readyState){
      return true;
    }

    mongoose.connect(process.env.MONGODB_URI!);

    return true
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}
