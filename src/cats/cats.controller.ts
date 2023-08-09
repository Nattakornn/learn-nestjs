import { Controller, 
    Get, 
    Post, 
    Body, 
    Delete,
    Param
} from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return await this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catsService.findAll();
  }

  @Delete('/:id')
  async deleteCatsById(@Param("id") id:string){
    return await this.catsService.removeCatsById(id);
  }

}
