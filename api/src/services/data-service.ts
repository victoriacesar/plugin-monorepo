import { CollectDataDto } from '../dto/collect-data.dto';
import { FirebaseRepository } from '../repository/firebase-repository';
import { DataList } from '../types/list-data';

export class DataService {
  private repository = new FirebaseRepository();

  async saveData(token: string, data: CollectDataDto): Promise<void> {
    await this.repository.saveExtractions(token, data);
  }

  async listData(token: string): Promise<DataList> {
    return await this.repository.listExtractions(token);
  }
}
