import Image from 'next/image';
import styles from './index.module.css';

const data = {
    contents: [
      {
        id: 1,
        name: '山田太郎',
        position: '代表取締役',
        profile:
          '株式会社SIMPLEの代表取締役。Web制作会社を経て、2020年に独立。趣味は読書とガーデニング。',
        image: {
          url: '/members/yamada.jpg',
          width: 100,
          height: 100,
        },
      },
      {
        id: 2,
        name: '佐藤花子',
        position: 'デザイナー',
        profile:
          '株式会社SIMPLEのデザイナー。大手広告代理店を経て、2021年に入社。趣味は映画鑑賞。',
        image: {
          url: '/members/sato.jpg',
          width: 100,
          height: 100,
        },
      },
      {
        id: 3,
        name: '鈴木次郎',
        position: 'エンジニア',
        profile:
          '株式会社SIMPLEのエンジニア。大手SIerを経て、2019年に入社。趣味はサイクリング。',
        image: {
          url: '/members/suzuki.jpg',
          width: 100,
          height: 100,
        },
      },
    ],
  };

export default function Page(){
    return(
        <div className={styles.container}>
        {data.contents.length === 0 ? (
          <p className={styles.empty}>メンバーが登録されていません。</p>
        ) : (
          <ul>
            {data.contents.map((member) => (
              <li key={member.id} className={styles.list}>
                <Image
                  src={member.image.url}
                  alt=""
                  width={member.image.width}
                  height={member.image.height}
                  className={styles.image}
                />
                <dl>
                  <dt className={styles.name}>{member.name}</dt>
                  <dd className={styles.position}>{member.position}</dd>
                  <dd className={styles.profile}>{member.profile}</dd>
                </dl>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }