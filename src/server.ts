import app from "./app"
import mongoose from "mongoose"


const port = 3001

mongoose.connect('mongodb+srv://laurakalmanova33:MsWxUrboDBCIHtka@cluster1.rcprvgi.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('mongodb est connecté')
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    })
    .catch(() => {
        console.log('mongodb nest pas connecté')
    })


