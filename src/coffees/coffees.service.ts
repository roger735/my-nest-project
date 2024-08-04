import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffees.entities';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Cafe Latte',
            brand: 'Buddy Brew',
            flavors: ['chocolate','vanilla']
        },
    ]

    findAll(): Coffee[] {
        return this.coffees;
    }

    findOne(id: string): Coffee {
        // throw('a randome error')   
        const coffee = this.coffees.find(coffee => coffee.id === +id);
        if(!coffee){
            // throw new HttpException('Coffee not found', HttpStatus.NOT_FOUND);
            throw new NotFoundException('Coffee not found');
        }
        return coffee;
    }

    create(createCoffeeDto: any){
        this.coffees.push(createCoffeeDto);
        return this.coffees;
    }

    update(id: string, updateCoffeeDto: any){
        const existingCoffee = this.findOne(id);
        if(existingCoffee){

        }
    }

    remove(id: string){
        return this.coffees.filter(coffee => coffee.id !== +id);
    }

}
