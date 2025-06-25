//타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
};
let user: User = {
  id: 1,
  name: "이정환",
  nickname: "hee",
};
let user2: User = {
  id: 2,
  name: "2정환",
  nickname: "2hee",
};

//인덱스 시그니처
type ContryCoeds = {
  [key: string]: string;
};
let contryCodes: ContryCoeds = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKindom: "uk",
};

type ContryNumberCodes = {
  [key: string]: number;
  Korea: number; //필수
};

let countryNumberCodes: ContryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
};
