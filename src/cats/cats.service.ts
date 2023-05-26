import { Injectable, NotAcceptableException } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { uuid } from 'uuidv4';

@Injectable()
export class CatsService {
    private cats: Cat[] = []

    create(cat: Cat) {
      cat.id =  uuid();
      this.cats.push(cat);
      return `Create cat completed! ${cat.name} id is ${cat.id}`
    }
  
    findAll(): Cat[] {
      return this.cats;
    }

    removeCatsById(id: string){
      const found = this.cats.find(item => item.id === id)
        if (!found){
          throw new NotAcceptableException(`Cat with ${id} not found`)
        }
        this.cats = this.cats.filter(item => {
          return  item.id !==id
        })
        return `Remove id ${id} completed.`
    }

}
