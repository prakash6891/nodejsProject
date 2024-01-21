import fetch from 'node-fetch'
import userModal from "../modal/userModal.js"
import postModal from "../modal/postModal.js"


//jsonPlaceholder third party api set up
const user_controller = async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const userData = await response.json()

    if (Object.keys(userData).length > 0) {
        try {
            const result = await userModal.insertMany(userData)
            res.send(result)
        } catch (error) {
            res.send(error)
        }
    } else {
        res.send({ "response": "there is no data to insert" })
    }
}

// ===============================================================================================


// new userResistration
const user_register_controller = async (req, res) => {
    const id = req.body.id
    const email = req.body.email
    const result = await userModal.find({ $and: [{ id: id }, { email: email }] })
    try {
        if (result.length > 0) {
            res.send({ "response": "user already exit " })

        } else {
            const dataObj = new userModal({
                id: req.body.id,
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                address: req.body.address,
                geo: req.body.geo,
                phone: req.body.phone,
                website: req.body.website,
                company: req.body.company,
            })
            console.log(dataObj)
            const inserResult = await dataObj.save()
            res.send({ "response": "User resistration successfully" })
        }
    } catch (error) {
        res.send({ "response": error })
    }

}

// =============================================================================================

const getUser_controller = async (req, res) => {
    var userDetailData = {}
    try {
        const userId = req.body.userId
        const userDetailResult = await userModal.find({ id: userId })
        if (userDetailResult.length > 0) {
            const userPostResult = await postModal.find({ userId: userDetailResult[0].id })

            if (userPostResult.length > 0) {
                userDetailData = {
                    detail: userDetailResult,
                    post: userPostResult
                }

            } else {

                userDetailData = {
                    detail: userDetailResult,
                    post: userPostResult
                }
            }
            res.send({ "response": userDetailData })
        } else {
            res.send({ "response": "user id not exit" })
        }

    } catch (error) {
        res.send({ "response": error })
    }

}


export default {
    user_controller: user_controller,
    user_register_controller: user_register_controller,
    getUser_controller: getUser_controller
}
