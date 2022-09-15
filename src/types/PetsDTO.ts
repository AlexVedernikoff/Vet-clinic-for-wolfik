enum Pets {
  CAT = "CAT",
  DOG = "DOG"
}

enum PetsGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

enum PetsSize {
  SMALL = 'SMALL',
  BIG = 'BIG',
  MEDIUM = 'MEDIUM',
}

export interface PetContact {
  ownerName: string,
  address: string,
  phone: number,
  description: string
}

export interface Pet {
  id: number,
  name: string,
  avatar: string,
  birthDay: string,
  notificationCount: number,
  petType: Pets
}

export interface CurrentClient {
  firstname: string,
  lastname: string,
  avatar: string,
  email: string,
  pets: Pet[]
}

export interface NewPet {
  name: string,
  petType: string,
  birthDay: string,
  gender: PetsGender,
  breed: string,
  color: string,
  size: PetsSize,
  weight: number,
  description: string,
  avatar: string,
  notificationCount: number
}

export interface NewPetPesponse {
  name: string,
  petType: Pets,
  birthDay: string,
  gender: PetsGender,
  breed: string,
  color: string,
  size: PetsSize,
  weight: number,
  description: string
}
