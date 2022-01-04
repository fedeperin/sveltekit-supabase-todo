import { supabase } from './config'
import { writable } from 'svelte/store'
import { browser } from '$app/env'
import { insertToDb, searchData } from './database'

export const session = writable(undefined)

if (browser) {
    session.set(supabase.auth.session())
    
    supabase.auth.onAuthStateChange((event, sess) => {
        session.set(sess)
    })
}

export const signUpUser = async userData => {
    let userExists
    let whatToReturn = null

    await searchData('users', 'username', userData.username).then(data => {
        if(data[0] == null) {
            userExists = false
        }else {
            userExists = true

            whatToReturn = {
                status: 'User',
                message: 'A user with that username already exists. Please change it.',
                type: 'error'
            }
        }
    })
    
    if(userData.username.trim() == 'null') {
        userExists = true
    
        whatToReturn = {
            status: 'Invalid',
            message: 'That is an invalid username. Please change it.',
            type: 'error'
        }
    }
    
    if(userExists === false) {
        const { user, session: sess, error } = await supabase.auth.signUp({
            email: userData.email,
            password: userData.password
        })
        
        if(error) {
            whatToReturn = error
            whatToReturn.type = 'error'
        }else {
            const { user, error } = await supabase.auth.update({ 
                data: {
                    username: userData.username
                } 
            })

            await insertToDb('users', {
                username: userData.username,
                email: userData.email
            })

            session.set(sess)
            whatToReturn = sess
        }

    }
    return whatToReturn
}

export const logOut = async () => {
    const { error } = await supabase.auth.signOut()

    if(error) {
        console.log('Could Not Log Out')
    }
}

export const signInUser = async userData => {
    let whatToReturn = null

    const { user, session: sess, error } = await supabase.auth.signIn({
        email: userData.email,
        password: userData.password
    })

    if(error) {
        error.type = 'error'

        whatToReturn = error
    }else {
        console.log(user, sess)
        whatToReturn = sess

        session.set(sess)
    }

    return whatToReturn
}