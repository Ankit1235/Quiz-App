export class AdditionProblems{
    constructor(){}
    n_stage_problem = (n : number) => {

        let arr : Array<number> = [];
        let ans : number = 0;
        let question : string = "";

        for(let i=0; i < n; i++)
        { 
            arr.push(Math.floor(Math.random() * 100));
            ans += arr[i];
            if(i == n - 1) { question += arr[i]}
            else { question += arr[i] + "+"; }
        }
        return [question, ans];
    }

    missing_stage_problem = (n : number) =>
    {
        let arr : any = [];
        let ans : number = 0;
        let question : string = "";
        let sum = 0;

        for(let i = 0; i < n; i++)
        {
            let random_num = Math.floor(Math.random() * 10);
            if(random_num == i)
            {
                question += " _ " + " + ";
                if(i == n - 1)
                {
                    arr[i] = Math.floor(Math.random() * 10) + sum;
                    ans = sum - arr[i];
                }
                arr[i] = Math.floor(Math.random() * 10);
                sum += arr[i];
            }
            else
            {
                arr[i] = Math.floor(Math.random() * 10);
                question +=  (arr[i]).toString() + " + ";
                sum += arr[i];
            }
        }

        return [question, ans];
    }
}

// let obj = new AdditionProblems();
// let prob = obj.n_stage_problem(5);
// console.log(prob)

