import { Response, Request, Router } from "express";


export let api = (req: Request, res: Response) => {
    res.send('File One')
}