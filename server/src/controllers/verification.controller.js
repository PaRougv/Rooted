export const User = async (req , res) => {
    return res.json({ user: req.user });
}

export const DashboardUser = async (req , res) => {
    return res.json({
    message: "Secure dashboard data",
    user: req.user
  });
}