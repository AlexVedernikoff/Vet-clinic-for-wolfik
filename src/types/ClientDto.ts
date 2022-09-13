export interface Procedure {
    date: string,
    medicineId: number,
    medicineBatchNumber: string,
    isPeriodical: boolean,
    periodDays: number
}

export interface ProcedureResponse {
    id: number,
    date: string,
    medicineId: number,
    medicineBatchNumber: string,
    isPeriodical: boolean,
    periodDays: number
}

export interface ProcedureExternal {
    id: number,
    date: string,
    type: string,
    medicineId: number,
    medicineBatchNumber: string,
    isPeriodical: boolean,
    periodDays: number
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
    petType: string
}

export interface CurrentClient {
    firstname: string,
    lastname: string,
    avatar: string,
    email: string,
    pets: Pet[]
}

export interface UploadAvatar {
    filename: string,
    url: string
}

export interface NewPet {
    name: string,
    petType: string,
    birthDay: string,
    gender: string,
    breed: string,
    color: string,
    size: string,
    weight: number,
    description: string,
    avatar: string,
    notificationCount: number
}

export interface NewPetPesponse {
    name: string,
    petType: string,
    birthDay: string,
    gender: string,
    breed: string,
    color: string,
    size: string,
    weight: number,
    description: string
}

export interface ClientReview {
    id: number,
    doctorId: number,
    review: {
        id: number,
        content: string,
        dateTime: string,
        likes: number,
        dislike: number,
        userInfoDto: {
            id: number,
            email: string,
            firstname: string,
            lastname: string
        }
    }
}

export interface News {
    id: number,
    title: string,
    type: string,
    content: string
}

export interface Reproduction {
    id: number,
    estrusStart: string,
    mating: string,
    dueDate: string,
    childCount: number
}

export interface UpdateReproduction {
    estrusStart: string,
    mating: string,
    dueDate: string,
    childCount: number
}

export interface PetFound {
    id: number,
    latitude: string,
    longitude: string,
    message: string,
    foundDate: string
}
