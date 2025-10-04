import { Controller, Get, Post, Delete, Put, Body, UseGuards, Request, Param } from '@nestjs/common';
import { NotesService } from './notes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('notes')
@UseGuards(JwtAuthGuard)
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getNotes(@Request() req) {
    return this.notesService.findAllByUserId(req.user.userId);
  }

  @Post()
  addNote(@Request() req, @Body() body: { title: string; content: string }) {
    return this.notesService.createForUserId(req.user.userId, body.title, body.content);
  }

  @Put(':id')
  updateNote(
    @Request() req,
    @Param('id') id: number,
    @Body() body: { title?: string; content?: string },
  ) {
    return this.notesService.updateByUserId(id, req.user.userId, body.title, body.content);
  }

  @Delete(':id')
  delete(@Request() req, @Param('id') id: number) {
    return this.notesService.deleteByUserId(id, req.user.userId);
  }
}
