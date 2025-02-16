import { generateResult } from "../services/ai.service.js";


const checkPromt = (req, res) => {
    const { code } = req.body;
    
    if (!code) {
        return res.status(400).send("Code is required");
    }
    return code;
}

const gestResult = async (req, res) => {
    const prompt = checkPromt(req, res);
    const result = await generateResult(prompt);

    return res.status(200).send(result);
}


export { gestResult };