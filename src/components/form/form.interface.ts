export interface Row {
  name: string;
  value: number;
  link: string;
}

export interface FormData {
  name: string;
  email: string;
  list: Row[];
}
