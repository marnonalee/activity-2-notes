import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'mylsmrlt@gmail.com' })
  email: string;

  @ApiProperty({ example: 'password123' })
  password: string;
}
