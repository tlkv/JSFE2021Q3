import AppLoader from './appLoader';
import { Callbacks, DataType, DataSource, DataNews } from './loader';
class AppController extends AppLoader {
  getSources(callback: Callbacks<DataSource>): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback as Callbacks<DataType>
    );
  }

  getNews(e: Event, callback: Callbacks<DataNews>): void {
    let target = e.target as HTMLTemplateElement;
    const newsContainer = e.currentTarget as HTMLTemplateElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback as Callbacks<DataType>
          );
        }
        return;
      }
      target = target.parentNode as HTMLTemplateElement;
    }
  }
}

export default AppController;
