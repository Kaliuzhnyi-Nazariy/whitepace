export interface IPlan {
  type: string;
  price: number;
  message: string;
  advantages: string[];
}

export type Plans = IPlan[];

export interface IComment {
  image: string;
  name: string;
  job: string;
  place: string;
  comment: string;
}

export type Commments = IComment[];

export interface ITrusted {
  image: string;
  name: string;
  job: string;
  company: string;
  comment: string;
}

export type TrustedComments = ITrusted[];
