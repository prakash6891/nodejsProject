import fetch from 'node-fetch'
import postModal from "../modal/postModal.js"


//jsonPlaceholder posts third party api
const post_controller = async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postData = await response.json()
    
    if (Object.keys(postData).length > 0) {
        try {
            const result = await postModal.insertMany(postData)
            res.send(result)
        } catch (error) {
            res.send(error)
        }
    } else {
        res.send({ "response": "there is no data to insert" })
    }
}

//=====================================================================================

const new_post_controller = async (req, res) => {
    try {
        const postData = new postModal({
            userId: req.body.userId,
            id: req.body.id,
            title: req.body.title,
            body: req.body.body,
        })
        const inserResult = await postData.save()
        res.send({ response: "post inserted successfully" })

    } catch (error) {
        res.send({ "response": error })
    }

}


export default {
    post_controller: post_controller,
    new_post_controller: new_post_controller
}