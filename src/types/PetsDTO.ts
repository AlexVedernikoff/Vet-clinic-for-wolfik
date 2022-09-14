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
  petType: 'CAT' | 'DOG'
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
  gender: 'MALE' | 'FEMALE',
  breed: string,
  color: string,
  size: 'SMALL' | 'BIG' | 'MEDIUM',
  weight: number,
  description: string,
  avatar: string,
  notificationCount: number
}

export interface NewPetPesponse {
  name: string,
  petType: 'CAT' | 'DOG',
  birthDay: string,
  gender: 'MALE' | 'FEMALE',
  breed: string,
  color: string,
  size: 'SMALL' | 'BIG' | 'MEDIUM',
  weight: number,
  description: string
}
