import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Res, Patch, Delete, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee-dto';
import { UpdateCoffeeDto } from './dto/update-coffee-dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) {}
     // GET分页请求
    @Get()
    findAll(@Query() queryPagination) {
        return this.coffeesService.findAll();
    }

    // 使用原生的响应对象，不推荐
    @Get('/useNativeRespone')
    findTwo(@Res() res): string {
        return res.status(200).send('This action returns all coffees');
    }

    // 处理Get路由参数
    @Get(':id')
    findOne(@Param('id') id: number) {
       console.log(typeof id)
       return this.coffeesService.findOne('' + id);
    }

    // 获取Post的Body请求体 

    @Post()
    create(@Body() createCoffeeDtoTs: CreateCoffeeDto) {
        //  
        console.log(createCoffeeDtoTs instanceof CreateCoffeeDto);
        return this.coffeesService.create(createCoffeeDtoTs);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id);
    }
}
