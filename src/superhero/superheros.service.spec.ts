import { Test, TestingModule } from '@nestjs/testing';
import { SuperherosService } from './superheros.service';

describe('SuperherosService', () => {
  let service: SuperherosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperherosService],
    }).compile();

    service = module.get<SuperherosService>(SuperherosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a superhero with valid data', () => {
      const superheroData = {
        name: 'Test Hero',
        superpower: 'Testing',
        humilityScore: 5,
      };

      const result = service.create(superheroData);

      expect(result).toEqual({
        id: expect.any(Number),
        name: 'Test Hero',
        superpower: 'Testing',
        humilityScore: 5,
        createdAt: expect.any(Date),
      });
    });

  });

});
