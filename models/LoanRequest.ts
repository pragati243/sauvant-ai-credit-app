// /models/LoanRequest.ts

import mongoose from 'mongoose';

const LoanRequestSchema = new mongoose.Schema({
  fullName: String,
  loanAmount: Number,
  loanTenure: Number,
  employmentStatus: String,
  reasonForLoan: String,
  employmentAddress: String,
  showButton: Boolean,
  loanstatus: String,
});

export default mongoose.models.LoanRequest || mongoose.model('LoanRequest', LoanRequestSchema);