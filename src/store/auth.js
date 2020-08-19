
import firebase from 'firebase/app'



export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                console.log(e)
                throw e
            }
        },
        async register ({dispatch, commit}, {email,password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword( email, password)
            } catch (e) {
                console.log(e)
                throw e
            }

        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout() {
            await firebase.auth().signOut()
        }

    }
}