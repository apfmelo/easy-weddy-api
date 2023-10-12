import { IGuest } from '../../models/guest/types'
import { guestRepository } from '../../repositories'

export async function findAllGuests(fianceId : string) {
    return guestRepository.findAllGuestsByFianceId(fianceId)   
}

export async function saveGuests(fianceId: string, guests: IGuest[]){
    return guestRepository.saveGuestsByFianceId(fianceId, guests)
}

export async function updateGuest(guestId: string, guest: IGuest){
    return guestRepository.updateGuest(guestId, guest)
}