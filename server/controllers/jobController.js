const axios = require('axios')

class JobController {
    static async findAllJob(req, res, next) {
        try {
            // kondisi default jika req query page tidak ada maka page akan bernilai 1
            let page = req.query.page ? req.query.page : '1' 
            let { data } = await axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json',
                {
                    // untuk memenuhi kebutuhan search dari ketentuan job yang diterima
                    params: {
                        full_time : req.query.full_time ,
                        description : req.query.description,
                        location : req.query.location,
                        page
                    }
                })
            // difilter agar tidak ada yang null
            data = data.filter(e => e !== null)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async findOneJob(req, res, next) {
        try {
            // id dikirimkan menggunakan req.params
            const{id} = req.params
            const { data } = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
            // jika data(job) tidak ditemukan maka akan menthrow error
            if(!data.id){
                throw({
                    type:"known",
                    code:404,
                    message:"Job not found"
                })
            }
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    JobController
}