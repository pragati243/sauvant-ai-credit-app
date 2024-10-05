import { NextRequest, NextResponse } from "next/server";
import LoanRequest from "@/models/LoanRequest";
import { mongoConnect } from "@/config/mongodb";

export async function POST(request: NextRequest) {
  const reqBody = await request.json();

  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      { message: "MONGODB_URI not configured in .env" },
      { status: 500 }
    );
  }

  await mongoConnect();

  const loanRequest = new LoanRequest({ ...reqBody, loanstatus: "pending" });

  console.log("Loan Request before saving:", loanRequest);

  try {
    await loanRequest.save();
    console.log("Loan Request after saving:", loanRequest);
    return NextResponse.json(
      {
        message: "Loan application submitted successfully!",
        id: loanRequest._id,
        loanstatus: loanRequest.loanstatus,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving loan request:", error);
    return NextResponse.json(
      { message: "Error saving loan request" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      { message: "MONGODB_URI not configured in .env" },
      { status: 500 }
    );
  }

  await mongoConnect();

  try {
    const loanRequests = await LoanRequest.find({});
    return NextResponse.json(loanRequests);
  } catch (error) {
    console.error("Error fetching loan requests:", error);
    return NextResponse.json(
      { message: "Error fetching loan requests" },
      { status: 500 }
    );
  }
}
