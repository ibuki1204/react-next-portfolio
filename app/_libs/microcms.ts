export type Category = {
    name: string;
  } & MicroCMSListContent;
  
  export type News = {
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage;
    category: Category;
  } & MicroCMSListContent;
  
  if (!process.env.MICROCMS_SERVICE_DOMAIN) {

    export const getMembersList = async (queries?: MicroCMSQueries) => {
        const listData = await client.getList<Member>({
          endpoint: 'members',
          queries,
        });
        return listData;
      };
      
      export const getNewsList = async (queries?: MicroCMSQueries) => {
        const listData = await client.getList<News>({
          endpoint: 'news',
          queries,
        });
        return listData;
      };