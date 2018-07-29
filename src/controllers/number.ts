import { Response, Request, Router } from "express";


/**
 *  GET /number/getAll
 */
export let getNumbers = (req: Request, res: Response) => {
    res.status(200).send("<h2>Another output </h2>" + functionToTest(2));
};

export let anotherFunc2 = () => {
    return 0;
};
export let functionToTest = (input: number) => {
    return input * input;
};

export let anotherFunc = () => {
    return 0;
};


let router = Router()

router.post('/two', function (req, res) {
    res.send('it worked')

})

export let routertest = router



