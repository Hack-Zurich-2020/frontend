export class UpdateUserHealthParamsRequest {

  // User ID
  ID: string;
  // Health Params Map between their id and the value
  HP: Map<number, number>;
}
