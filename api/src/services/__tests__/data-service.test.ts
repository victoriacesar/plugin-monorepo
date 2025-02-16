import { CollectDataDto } from '../../dto/collect-data.dto';
import { FirebaseRepository } from '../../repository/firebase-repository';
import { DataService } from '../data-service';
import { DataList } from 'api/src/types/list-data';

jest.mock('../../repository/firebase-repository.ts', () => {
  return {
    FirebaseRepository: jest.fn().mockImplementation(() => ({
      saveExtractions: jest.fn(),
      listExtractions: jest.fn(),
    })),
  };
});

describe('DataService', () => {
  let dataService: DataService;
  let mockRepository: jest.Mocked<FirebaseRepository>;

  beforeEach(() => {
    mockRepository =
      new FirebaseRepository() as jest.Mocked<FirebaseRepository>;
    mockRepository.saveExtractions.mockResolvedValue(undefined);
    mockRepository.listExtractions.mockResolvedValue({});

    dataService = new DataService();
    (dataService as any).repository = mockRepository;
  });

  it('should save the data calling saveExtractions method', async () => {
    const token = 'mock-token';
    const data: CollectDataDto = {
      device: 'device-test',
      origin: 'origin-test',
      os: 'os-test',
      themeSwitchCount: 1,
    };

    mockRepository.saveExtractions.mockResolvedValueOnce();

    await dataService.saveData(token, data);

    expect(mockRepository.saveExtractions).toHaveBeenCalledWith(token, data);
    expect(mockRepository.saveExtractions).toHaveBeenCalledTimes(1);
  });

  it('should return list of extractions when listData is called', async () => {
    const token = 'mock-token';
    const mockDataList: DataList = {
      'key1': {
        data: {
          device: 'device-test',
          origin: 'origin-test',
          os: 'os-test',
          themeSwitchCount: 1,
        },
        timestamp: 1739665692274,
      },
      'key2': {
        data: {
          device: 'device-test',
          origin: 'origin-test',
          os: 'os-test',
          themeSwitchCount: 1,
        },
        timestamp: 1739665874053,
      },
    };

    mockRepository.listExtractions.mockResolvedValueOnce(mockDataList);

    const result = await dataService.listData(token);

    expect(mockRepository.listExtractions).toHaveBeenCalledTimes(1);
    expect(mockRepository.listExtractions).toHaveBeenCalledWith(token);
    expect(result).toBe(mockDataList);
  });
});
