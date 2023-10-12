import { Firestore }  from '@google-cloud/firestore';
import { IGuest } from '../../models/guest/types';

const firestore = new Firestore();
const collection = firestore.collection('guests')

export async function findAllGuestsByFianceId(fianceId: string) {
    const guestDocuments = await collection.where('fianceId', "==" ,fianceId).get();
    const allGuestData = guestDocuments.docs.map(d => d.data());
    return allGuestData   
}


export async function saveGuestsByFianceId(fianceId: string, guests: IGuest[]) {
    try {
        const createGuests = 
        guests.map(guest => {
                guest.fianceId = fianceId;                
                collection.doc(fianceId + '-' + guest.email).set(guest)});
        
       await Promise.all(createGuests)

        return { ok: true }
        
    } catch (error) {
        console.error("Error saving new guests", { fianceId })   
        throw error
    }
}

export async function updateGuest(guestId: string, guest: IGuest) {
    try {
        const resolve = await collection.doc(guestId).set(guest)        
        
        return resolve
        
    } catch (error) {
        console.error("Error updating guest", { guestId, guest })   
        throw error
    }
}
