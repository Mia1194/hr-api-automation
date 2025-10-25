import { ApiHelper } from "./ApiHelper";

export abstract class BaseEndpoint<T>{ 
    protected abstract basePath: string;
    protected abstract requiredFields: string[];

    constructor(protected apiHelper: ApiHelper){}

    async create(payload:Partial<T>, expectedStatus:number)
    :Promise<T>{
        const resp = await this.apiHelper.post(this.basePath,payload);
        console.log("Response Created: " + (await this.apiHelper.getJSON(resp)));
        await this.apiHelper.validateStatus(resp,expectedStatus);
        const body= (await this.apiHelper.getJSON(resp))['resource'];
        this.apiHelper.containsKey(body,this.requiredFields);
        return body as T;
    }

    async getResource(ID: number, expectedStatus: number): Promise<T> {
        const resp = await this.apiHelper.get(`${this.basePath}/${ID}`);
        await this.apiHelper.validateStatus(resp,expectedStatus);
        const body = (await this.apiHelper.getJSON(resp));
        this.apiHelper.containsKey(body,this.requiredFields);
        return body as T;
    }


    async update(
        ID:number, 
        payload:Partial<T>,
        fullUpdate: boolean,
        expectedStatus: number
    ): Promise<T>{
        const endpoint = `${this.basePath}/${ID}`;
        const resp = 
        fullUpdate ? 
        await this.apiHelper.put(endpoint,payload):
        await this.apiHelper.patch(endpoint,payload);
        await this.apiHelper.validateStatus(resp,expectedStatus);
        return await this.apiHelper.getJSON(resp) as T;
    }

        async deleteResource(ID: number, expectedStatus: number):Promise<any>{
        const resp = await this.apiHelper.delete(`${this.basePath}/${ID}`);
        await this.apiHelper.validateStatus(resp,expectedStatus);
        return await this.apiHelper.getJSON(resp);
    }






}
/*
### The **Problem**
When multiple test files do the same setup: 
    * Code duplication -> more lines to maintain
    * Longer test runtime -> each file creates new data even if same setup
    * Hard to debug -> Every file handles cleanup separately. 
    * More api call -> extra loads on the backedn. 
    * MOre prone to inconsistent setups. 
### The **Goal**
Centralize setup and clean up logic so that tests focus only on business logic 
not the setups. 

#### Method 1: Fixtures
What we want: 
    * Reusable, automatically provided test objects(`apiHelper`, `departments`, `employees`). 
    * One shared department created once per worker not per test. 
    * Automatic cleanup after all tests in that worker to finish. 
    * */