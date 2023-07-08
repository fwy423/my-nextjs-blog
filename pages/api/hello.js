// Tutorial: https://nextjs.org/learn/basics/api-routes/creating-api-routes
export default function handler(req, res) {
    const email = req.body.email;
    console.log(email);
    res.status(200).json({text : "Hello"});
}