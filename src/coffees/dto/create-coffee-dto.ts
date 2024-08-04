import { IsString } from 'class-validator';


export class CreateCoffeeDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;
    
    @IsString({each: true}) // 每个元素必须是一个字符串
    readonly flavors: string[];
}
