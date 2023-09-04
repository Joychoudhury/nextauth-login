import type { NextApiRequest, NextApiResponse } from "next";
import { ensureDbConnected } from "@/lib/db";

import { User } from "@/lib/model/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, role } = req.body;
    await ensureDbConnected();
    console.log(email)

    await User.findOneAndUpdate({ email }, { role },{ new: true });
    res.status(200).json({ msg: "role updated successfully" });
  }
}
