import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <main className={styles.loadingPage}>
      <div className={styles.loaderContent}>

        {/* Coffee Cup */}
        <div className={styles.cupWrapper}>
          <div className={styles.cup}>
            <div className={styles.coffee}></div>
          </div>

          <div className={styles.handle}></div>
        </div>

        {/* Steam */}
        <div className={styles.steam}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Brand */}
        <h1 className={styles.logo}>
          Coffee<span>House</span>
        </h1>

        <p className={styles.loadingText}>
          Preparing your coffee...
        </p>

        {/* Loading dots */}
        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </main>
  );
}