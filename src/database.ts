import mongoose from "mongoose";
import "dotenv/config";

const URL = process.env.MONGO_URI;

export async function connectDatabase() {
  try {
    if (!URL) {
      throw new Error("La URL no está definida");
    }

    await mongoose.connect(URL);
  } catch (error) {
    throw new Error("Ha ocurrido un error al conectarse a la base de datos", {
      cause: error,
    });
  }
}
