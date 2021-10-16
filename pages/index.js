import ArticleItem from '@/components/ArticleItem';
import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Seo from '@/components/Seo';

// config
import { API_URL } from '@/config/index';

export default function Home({ articles }) {
  console.log(articles);
  return (
    <>
      <Seo title="KJR Cianjur | Home" />
      <Hero
        imgSrc="/images/bg-image.jpg"
        imgAlt="Gambar: Anggota KJR Cianjur"
        heroTitle="We Are The Future"
        heroSubTitle="Selamat datang di website KJR Cianjur"
      />
      <Main>
        <section className="articles">
          <div className="my-5 flex justify-between items-center">
            <div className="flex-1">
              <h3 className="font-bold text-secondary-100">Artikel Terbaru</h3>
              <div className="bg-gray-300 h-1 w-1/3"></div>
            </div>
          </div>
          {articles.length === 0 && <h3>Belum ada artikel</h3>}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <ArticleItem key={article.id} article={article} />
            ))}
          </div>
        </section>
      </Main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
      revalidate: 1,
    },
  };
}
