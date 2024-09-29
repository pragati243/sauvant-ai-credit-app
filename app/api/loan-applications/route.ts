import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";
import LoanRequest from "@/models/LoanRequest";
import { mongoConnect } from "@/config/mongodb";

export async function POST(request: NextRequest) {
  const reqBody = await request.json();

  if (!process.env.MONGODB_URI) {
    return res
      .status(500)
      .json({ message: "MONGODB_URI not configured in .env" });
  }

  await mongoConnect();

  const loanRequest = new LoanRequest({ ...reqBody, loanstatus: 'pending' }); // Set the status to 'pending'

  console.log('Loan Request before saving:', loanRequest);

  try {
    await loanRequest.save();
    console.log('Loan Request after saving:', loanRequest);
    return NextResponse.json({
      message: "Loan application submitted successfully!",
      id: loanRequest._id,
      loanstatus: loanRequest.loanstatus,
    });
  } catch (error) {
    console.error('Error saving loan request:', error);
    return NextResponse.error(error);
  }
}

export async function GET(request: NextRequest) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.status(500).json({ message: "MONGODB_URI not configured in .env" });
  }

  await mongoConnect();

  try {
    const loanRequests = await LoanRequest.find({});
    return NextResponse.json(loanRequests);
  } catch (error) {
    console.error("Error fetching loan requests:", error);
    return NextResponse.status(500).json({ message: "Error fetching loan requests" });
  }
  
}