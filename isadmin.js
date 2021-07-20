const isAdmin=(req,res,next)=>{
    if(!req.user.username === "admin"){
        req.flash('error','You need to Login first as an admin');
        res.redirect('/login');
    }
    next();
}

module.exports = {
    isAdmin
};