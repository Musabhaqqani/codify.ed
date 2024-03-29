import axios from "axios";
import { LANGUAGE_VERSIONS } from "../constants";

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
})

export const executeCode = async (language, sourceCode) => {
    const response = await API.post("/execute",
        {
            "language": language,
            "version": LANGUAGE_VERSIONS[language],
            "files": [
                {
                    "content": sourceCode
                }
            ],
            "args": [[2], [1, 2, 4], [2, 3, 5]],
            "compile_timeout": 10000,
            "run_timeout": 3000,
            "compile_memory_limit": -1,
            "run_memory_limit": -1
        })
    return response.data
}