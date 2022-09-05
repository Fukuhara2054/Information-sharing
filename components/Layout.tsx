import { FC, memo, ReactNode, useState } from "react";
import Link from "next/link";
import styles from "../styles/Layout.module.scss";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import StarIcon from "@mui/icons-material/Star";
import { AppBar, Typography } from "@mui/material";
import Add from "../components/add";
import Search from "../components/search";
import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

//ReactNodeからReactElementに変えた
//もしかしたらここでエラー出るかも？
type Props = {
  children: React.ReactElement;
  window?: () => Window;
};

type Navigation = {
  pageName: string;
  path: string;
  icon: JSX.Element;
};

//スクロール時Appbarに影を作る
export const ElevationScroll: FC<Props> = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 5 : 0,
  });
};

//サイドバーのルーティング
const navigations: Navigation[] = [
  {
    pageName: "共有事項",
    path: "/",
    icon: <HomeIcon className={styles.icon} />,
  },
  {
    pageName: "質問箱",
    path: "/page2",
    icon: <InventoryIcon className={styles.icon} />,
  },
  {
    pageName: "お気に入り",
    path: "/page3",
    icon: <StarIcon className={styles.icon} />,
  },
  //   {
  //   pageName: "お気に入り",
  //   path: "/",
  //   icon: <HomeIcon className={styles.icon}/>
  // },
];

// FC = Function Component 関数コンポーネントを定義
//↓eslintを無効にしている
/* eslint-disable */
export const Layout: FC<Props> = memo((props) => {
  const { children } = props;

  //falseで初回レンダーでメニューを閉じた状態にできる
  const [menuOpen, setMenuOpen] = useState(true);

  const router = useRouter();

  const isPageActive = (pagePath: string): boolean => {
    return pagePath === String(router.route);
  };

  return (
    <div className={styles.root}>
      {/* サイドバーの記述 */}
      <aside
        className={styles.sidebar}
        style={{ width: menuOpen ? "200px" : "60px" }}
      >
        <div
          className={styles.hamburger}
          role="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[...Array(3)].map((_, index: number) => (
            <span
              className={
                menuOpen ? styles.menuCloseArrow : styles.menuOpenArrow
              }
              key={index}
            ></span>
          ))}
        </div>
        {navigations.map((navigation) => (
          <Link href={navigation.path} key={navigation.pageName}>
            <a
              className={styles.flexContainer}
              style={{
                background: isPageActive(navigation.path) ? "#969BBE" : "none",
              }}
            >
              {navigation.icon}
              {menuOpen && (
                <p className={styles.pageName}>{navigation.pageName}</p>
              )}
            </a>
          </Link>
        ))}
      </aside>
      {/* 右側コンテンツ部分の記述 */}
      <main className={styles.main}>
        {/* ヘッダー */}
        <div>
          <ElevationScroll {...props}>
            <AppBar
              position="sticky"
              sx={{
                backgroundColor: "white",
                color: "black",
              }}
              className={styles.header}
            >
              <Typography
                variant="h5"
                fontWeight={"bold"}
                padding="20px 20px 0px 20px"
              >
                共有事項
              </Typography>
              <div>
                <div className={styles.line}></div>
                <div className={styles.appbarbottom}>
                  <Add />
                  <Search />
                </div>
              </div>
            </AppBar>
          </ElevationScroll>

          <main className={styles.mainContent}>{children}</main>
          {/* <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main>
          <main className={styles.mainContent}>{children}</main> */}
        </div>
      </main>
    </div>
  );
});
/* eslint-enable */
