import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty({ example: 'Reminder' })
  title: string;

  @ApiProperty({ example: 'Its okay to be not okay, but its not okay to be not okay.' })
  content: string;
}
