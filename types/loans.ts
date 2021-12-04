export interface LoansId {
  id: Number
};

export interface Loans extends LoansId {
  userId: Number
  total: Number,
  paid: Number,
  outstanding: Number,
  apr: Number,
  term: Number
};