import mongoose from "mongoose";

let isdbConnected: Boolean = false;

export async function ensureDbConnected() {
  if (!process.env.MONGO_URL) {
    return;
  }
  if (isdbConnected) return;
  isdbConnected = true;
  await mongoose.connect(process.env.MONGO_URL, { dbName: "havan" });
}
