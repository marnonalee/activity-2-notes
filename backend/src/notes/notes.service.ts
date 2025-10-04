import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private notesRepo: Repository<Note>,
  ) {}

  findAllByUserId(userId: number) {
    return this.notesRepo.find({ where: { user: { id: userId } } });
  }

  createForUserId(userId: number, title: string, content: string) {
    const note = this.notesRepo.create({ title, content, user: { id: userId } as any });
    return this.notesRepo.save(note);
  }

  async updateByUserId(noteId: number, userId: number, title?: string, content?: string) {
    const note = await this.notesRepo.findOne({ where: { id: noteId, user: { id: userId } } });
    if (!note) return { updated: false, message: 'Note not found or unauthorized' };
    if (title !== undefined) note.title = title;
    if (content !== undefined) note.content = content;
    await this.notesRepo.save(note);
    return { updated: true, note };
  }

  async deleteByUserId(noteId: number, userId: number) {
    const note = await this.notesRepo.findOne({ where: { id: noteId, user: { id: userId } } });
    if (!note) return { deleted: false };
    await this.notesRepo.remove(note);
    return { deleted: true };
  }
}
