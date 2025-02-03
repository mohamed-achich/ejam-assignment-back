import { Injectable } from '@nestjs/common';
import { Superhero } from './interfaces/superhero.interface';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

// Optimizations in this service:
// 1. Maintaining a pre-sorted array for O(1) retrieval of sorted heroes
// 2. Using binary search for O(log n) insertion to keep array sorted

@Injectable()
export class SuperherosService {
  // Pre-sorted array for O(1) retrieval of sorted results
  private readonly superheroes: Superhero[] = [];
  private currentId = 1;

  // Time Complexity: O(log n) for insertion
  // Space Complexity: O(1) for additional memory
  create(createSuperheroDto: CreateSuperheroDto): Superhero {
    // Validate humility score (1-10)
    const humilityScore = Math.max(1, Math.min(10, createSuperheroDto.humilityScore));
    
    const superhero: Superhero = {
      id: this.currentId++,
      ...createSuperheroDto,
      humilityScore,
      createdAt: new Date(),
    };

    // O(log n) operation - Binary search and array insertion
    const insertIndex = this.findInsertIndex(superhero.humilityScore);
    this.superheroes.splice(insertIndex, 0, superhero);

    return superhero;
  }

  // Time Complexity: O(1) - constant time
  // Space Complexity: O(1) - no additional memory
  findAll(): Superhero[] {
    // Return pre-sorted array - already sorted by humility score
    return this.superheroes;
  }

  // Binary search for insertion point
  // Time Complexity: O(log n)
  private findInsertIndex(humilityScore: number): number {
    let left = 0;
    let right = this.superheroes.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.superheroes[mid].humilityScore > humilityScore) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }
}