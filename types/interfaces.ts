export interface IJob {
  id: number;
  title: string;
}

export interface ICompany {

}

export interface ISeminar {
  id: number;
  title: string;
  place: string;
  date: string;
  graduate: string;
  capacity: number;
}

export interface IUserVoice {
  imgUrl: string;
  name: string;
  company: string;
  title: string;
  description: string;
}
