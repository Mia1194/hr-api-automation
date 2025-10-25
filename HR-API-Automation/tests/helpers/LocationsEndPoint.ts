/* Create another test using available common methods and if needs to be created new
Create a location, create a department under the location, 
create an employee under the department.
validate that you cannot delete location without deleting the department,]
then delete the employee and delete the department and validate that you can delete the 
locations.
*/


import { BaseEndpoint } from "./BaseEndpoint";

export interface Location{
    location_id: number;
    street_address?: string | null;
    postal_code? : string | null;
    city: string;
    state_province?: string | null;
    country_id?: string | null;
}
export class LocationsEndpoint extends BaseEndpoint<Location>{
    protected basePath = "/api/locations";
    protected requiredFields = ['location_id', 'city'];
    
}