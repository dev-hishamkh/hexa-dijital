import Header from "@/components/layout/Header/Header";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import styles from "./Projects.module.css";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";
  const isTr = lang === "tr";

  return {
    title: isTr
      ? "Projelerimiz & Dijital Mühendislik Çalışmaları"
      : "Our Projects & Digital Engineering Works",
    description: isTr
      ? "Bursa sanayisine ve öncü markalarına geliştirdiğimiz yüksek hızlı web yazılımları, SEO dominasyon projeleri ve dijital altyapılar."
      : "High-speed web software, SEO dominance projects, and digital architectures engineered in Bursa.",
    alternates: {
      canonical: `https://hexadijital.com/${lang}/projeler`,
    },
  };
}

export default async function ProjectsPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "tr";

  return (
    <>
      <Header lang={lang} />
      <main className={styles.mainContainer}>
        <section className={`container ${styles.contentWrapper}`}>
          {/* Başlık Hiyerarşisi */}
          <div className={styles.headerArea}>
            <span className={styles.badge}>
              {lang === "tr"
                ? "Seçkin Mühendislik Portföyü"
                : "Engineered Works"}
            </span>
            <h1 className={styles.title}>
              {lang === "tr" ? (
                <>
                  Bursa ve Ötesi İçin Üretilen{" "}
                  <span className={styles.focusWord}>Siber Altyapılar</span>
                </>
              ) : (
                <>
                  Architectures Engineered for{" "}
                  <span className={styles.focusWord}>Market Dominance</span>
                </>
              )}
            </h1>
            <p className={styles.subtitle}>
              {lang === "tr"
                ? "Şablon siteler değil; işletmelere somut ciro, operasyonel hız ve Google yerel hakimiyeti kazandıran tescilli projeler."
                : "Zero templates. Handcrafted, sub-second web platforms engineered to generate tangible revenue and local dominance."}
            </p>
          </div>

          {/* Jilet 1px Kenarlıklı Proje Kartları Izgarası */}
          <div className={styles.grid}>
            {projectsData.map((project) => (
              <article key={project.slug} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.category}>{project.category}</span>
                  <div className={styles.scorePill}>
                    <span className={styles.scoreDot} />
                    <span>Lighthouse: {project.speedScore}</span>
                  </div>
                </div>

                <h2 className={styles.projectTitle}>
                  <Link href={`/${lang}/projeler/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.impactArea}>
                  <span className={styles.impactLabel}>
                    {lang === "tr" ? "Somut Çıktı:" : "Direct Impact:"}
                  </span>
                  <span className={styles.impactValue}>{project.impact}</span>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.stackGroup}>
                    {project.techStack.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className={styles.year}>{project.year}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
