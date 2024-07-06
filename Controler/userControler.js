import User from '../Modals/userModal.js'

export const create = async (req, res) => {
    try {
        const userData = new User(req.body)
        if (!userData) {
            return res.status(404).json({ msg: 'user data not found' })
        }
        const saveData = await userData.save()
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
export const getAll = async (req, res) => {
    try {
        const userData = await User.find()
        if (!userData || userData.length === 0) {
            return res.status(404).json({ msg: 'No user data found' });
        }
        res.status(200).json(userData)
    } catch {
        res.status(500).json({ error: error })
    }
}
export const getOne = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findById(id)
        if (!userExist) {
            return res.status(404).json({ msg: 'user not found' })
        }
        res.status(200).json(userExist)
    } catch {
        res.status(500).json({ error: error })
    }
}
export const update = async (req, res) => {
    try {

        const id = req.params.id
        const userExist = await User.findById(id)
        if (!userExist) {
            return res.status(404).json({ msg: 'user not found' })
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updatedData)
    } catch {
        res.status(500).json({ error: error })
    }
}
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findById(id)
        if (!userExist) {
            return res.status(404).json({ mag: 'user not found' })
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({ msg: 'data deleted successfully' })
    } catch {
        res.status(500).json({ error: error })
    }
}