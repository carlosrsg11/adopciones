import { PartialType } from "@nestjs/mapped-types";
import CreateDogDto from "./create-dog.dto";

class UpdateDogDto extends PartialType(CreateDogDto){

}

export default UpdateDogDto;