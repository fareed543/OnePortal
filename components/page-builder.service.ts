@Injectable({ providedIn: 'root' })
export class PageBuilderService {
  constructor(private http: HttpClient) {}

  getPageConfig(pageId: string) {
    return this.http.get(`/api/pages/${pageId}`);
  }

  savePageConfig(pageId: string, config: any) {
    return this.http.post(`/api/pages/${pageId}`, config);
  }
}
