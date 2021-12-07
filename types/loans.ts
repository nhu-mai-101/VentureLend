export interface LoansId {
  id: Number
};

export interface Loans extends LoansId {
  total: Number,
  paid: Number,
  outstanding: Number,
  apr: Number,
  term: Number,
  borrower: Number,
  investor: Number
};