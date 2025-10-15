import { Controller, Get, Post, Delete, Put, Body, UseGuards, Request, Param } from '@nestjs/common';
import { NotesService } from './notes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('notes')
@ApiBearerAuth()
@Controller('notes')
@UseGuards(JwtAuthGuard)
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getNotes(@Request() req) {
    return this.notesService.findAllByUserId(req.user.userId);
  }

  @Post()
  addNote(@Request() req, @Body() body: CreateNoteDto) {
    return this.notesService.createForUserId(req.user.userId, body.title, body.content);
  }

  @Put(':id')
  updateNote(@Request() req, @Param('id') id: number, @Body() body: UpdateNoteDto) {
    return this.notesService.updateByUserId(id, req.user.userId, body.title, body.content);
  }

  @Delete(':id')
  delete(@Request() req, @Param('id') id: number) {
    return this.notesService.deleteByUserId(id, req.user.userId);
  }
}
