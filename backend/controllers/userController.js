const loginUser = async (req, res) => {
    res.status(200).json({message: "login user"});
}

const signupUser = async (req, res) => {
    res.status(200).json({message: "signup user"});
}

module.exports = {
    loginUser,
    signupUser
}