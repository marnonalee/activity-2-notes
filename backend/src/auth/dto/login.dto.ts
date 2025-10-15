import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'mylsmrlt@gmail.com' })
  email: string;

  @ApiProperty({ example: 'password123' })
  password: string;
}
