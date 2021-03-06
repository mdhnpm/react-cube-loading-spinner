import React from "react";
import styles from "./styles.scss";

export const joinClassNames = (...classes: Array<string | boolean>): string =>
  classes.filter((element) => typeof element === "string").join(" ");

const Spinner3dFaceGroup: React.VFC = () => (
  <div className={styles.spinner3dFaceGroup}>
    <div
      className={joinClassNames(
        styles.spinner3dFace,
        styles.spinner3dFaceFront
      )}
    />
    <div
      className={joinClassNames(
        styles.spinner3dFace,
        styles.spinner3dFaceRight
      )}
    />
    <div
      className={joinClassNames(styles.spinner3dFace, styles.spinner3dFaceBack)}
    />
  </div>
);

export const CubeLoadingSpinner: React.VFC = () => (
  <div className={styles.spinner3dContainer}>
    <div className={styles.spinner3dTopOuter}>
      <Spinner3dFaceGroup />
    </div>
    <div>
      <Spinner3dFaceGroup />
    </div>
    <div className={styles.spinner3dBottomOuter}>
      <Spinner3dFaceGroup />
    </div>
  </div>
);
